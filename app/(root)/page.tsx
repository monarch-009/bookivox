import React from 'react'
import { currentUser } from "@clerk/nextjs/server";
import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import {getAllBooks} from "@/lib/actions/book.actions";
import Search from "@/components/Search";
import LandingPage from "@/components/LandingPage";

const Page = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
    const user = await currentUser();
    const { query } = await searchParams;

    if (!user) {
        return <LandingPage />
    }

    const bookResults = await getAllBooks(query)
    const books = bookResults.success ? bookResults.data ?? [] : []

    return (
        <main className="wrapper container">
            <HeroSection />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
                <h2 className="text-3xl font-serif font-bold text-[#212a3b]">Recent Books</h2>
                <Search />
            </div>

            <div className="library-books-grid">
                {books.map((book) => (
                    <BookCard key={book._id} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug} />
                ))}
            </div>
        </main>
    )
}

export default Page
