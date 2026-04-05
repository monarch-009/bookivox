'use server';

import { connectToDatabase } from "@/database/mongoose";
import Book from "@/database/models/book.model";
import BookSegment from "@/database/models/book-segment.model";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const generateBookSummary = async (bookId: string) => {
    try {
        await connectToDatabase();

        const book = await Book.findById(bookId);
        if (!book) return { success: false, error: 'Book not found' };

        if (book.summary) {
            return { success: true, summary: book.summary };
        }

        // Fetch first 15 segments of the book for context
        const segments = await BookSegment.find({ bookId }).sort({ segmentIndex: 1 }).limit(15);
        const textContent = segments.map(s => s.content).join('\n\n');

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const prompt = `Based on the following excerpts from the beginning of the book "${book.title}" by ${book.author}, generate a highly engaging summary, a list of 3 key takeaways, and the main themes. Please format it beautifully in Markdown.\n\nExcerpts:\n${textContent}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        book.summary = text;
        await book.save();

        return { success: true, summary: text };
    } catch (error) {
        console.error('Error generating summary:', error);
        return { success: false, error: 'Failed to generate summary' };
    }
}
