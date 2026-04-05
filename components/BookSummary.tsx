'use client';

import { useState } from 'react';
import { generateBookSummary } from '@/lib/actions/gemini.actions';
import { Sparkles, Loader2 } from 'lucide-react';
import { Button } from './ui/button';

export default function BookSummary({ bookId, initialSummary }: { bookId: string, initialSummary?: string }) {
    const [summary, setSummary] = useState(initialSummary);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        setIsLoading(true);
        setError('');
        
        const result = await generateBookSummary(bookId);
        
        if (result.success && result.summary) {
            setSummary(result.summary);
        } else {
            setError(result.error || 'Failed to generate insight.');
        }
        
        setIsLoading(false);
    };

    if (!summary && !isLoading && !error) {
        return (
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(33,42,59,0.05)] border border-[rgba(33,42,59,0.05)] flex flex-col items-center justify-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#212a3b]">AI Key Insights</h3>
                    <p className="text-[#3d485e] mt-1">Generate an engaging summary and key takeaways for this book using Gemini AI.</p>
                </div>
                <Button onClick={handleGenerate} className="bg-[#212a3b] hover:bg-[#3d485e] text-white">
                    Generate Insights
                </Button>
            </div>
        );
    }

    return (
        <div className="mt-8 p-8 bg-white rounded-2xl shadow-[0_4px_20px_rgba(33,42,59,0.05)] border border-[rgba(33,42,59,0.05)]">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#212a3b]">Gemini AI Insights</h3>
            </div>
            
            {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4 text-[#3d485e]">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                    <p>Analyzing book contents and generating insights...</p>
                </div>
            ) : error ? (
                <div className="text-red-500 text-center py-8">
                    {error}
                    <Button onClick={handleGenerate} variant="outline" className="mt-4 mx-auto block text-black">Try Again</Button>
                </div>
            ) : (
                <div className="text-[#3d485e]">
                    {summary?.split('\n').map((line, i) => {
                        if (!line.trim()) return <br key={i} />;
                        if (line.startsWith('### ')) return <h4 key={i} className="text-lg text-[#212a3b] font-bold mt-4 mb-2">{line.replace('### ', '')}</h4>;
                        if (line.startsWith('## ')) return <h3 key={i} className="text-xl text-[#212a3b] font-bold mt-6 mb-3">{line.replace('## ', '')}</h3>;
                        if (line.startsWith('# ')) return <h2 key={i} className="text-2xl text-[#212a3b] font-bold mt-6 mb-3">{line.replace('# ', '')}</h2>;
                        if (line.startsWith('* ') || line.startsWith('- ')) {
                            const listContent = line.substring(2);
                            const parts = listContent.split(/(\*\*.*?\*\*)/g);
                            return (
                                <li key={i} className="ml-4 mb-1">
                                    {parts.map((part, index) => {
                                        if (part.startsWith('**') && part.endsWith('**')) {
                                            return <strong key={index} className="text-[#212a3b]">{part.slice(2, -2)}</strong>;
                                        }
                                        return <span key={index}>{part}</span>;
                                    })}
                                </li>
                            );
                        }
                        
                        const parts = line.split(/(\*\*.*?\*\*)/g);
                        return (
                            <p key={i} className="mb-2 leading-relaxed">
                                {parts.map((part, index) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={index} className="text-[#212a3b]">{part.slice(2, -2)}</strong>;
                                    }
                                    return <span key={index}>{part}</span>;
                                })}
                            </p>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
