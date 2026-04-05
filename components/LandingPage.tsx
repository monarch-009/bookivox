'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Mic, BookOpen, BrainCircuit, Sparkles, ArrowRight, Zap, Globe, MessageSquareQuote, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const LandingPage = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Free",
            description: "Get started with basic features and explore the platform.",
            price: "$0",
            period: "Always free",
            features: [
                "Access to limited books",
                "10 voice sessions per month",
                "10-minute session limit",
                "Standard support"
            ],
            buttonText: "Subscribe",
            popular: false
        },
        {
            name: "Standard",
            description: "Perfect for regular learners who want more access and longer sessions.",
            price: "$8",
            period: "/month",
            features: [
                "Access up to 10 books",
                "100 voice sessions per month",
                "15-minute session duration",
                "Faster response time"
            ],
            buttonText: "Subscribe",
            popular: false,
            billingToggle: true
        },
        {
            name: "Pro",
            description: "Best for power users who want unlimited access and priority experience.",
            price: "$15",
            period: "/month",
            features: [
                "Access up to 100 books",
                "Unlimited voice sessions",
                "60-minute session duration",
                "Priority Support"
            ],
            buttonText: "Subscribe",
            popular: false,
            billingToggle: true
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white mt-[74px]">
            {/* Hero Section - Balanced Sizing */}
            <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
                <div className="wrapper relative z-10 px-6">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                         <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full">
                            <Sparkles className="w-3.5 h-3.5 text-black" />
                            <span className="text-[10px] md:text-[11px] font-bold text-black uppercase tracking-[0.15em]">Next-Generation Reading</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-black leading-[1.1] mb-6 tracking-tight">
                            Transform Books Into <br className="hidden md:block" /> <span className="text-gray-400">Digital Conversations.</span>
                        </h1>
                        
                        <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto">
                            The minimalist AI reading companion. Upload PDFs and engage in meaningful dialogues with your entire library.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                            <SignUpButton mode="modal">
                                <button className="w-full sm:w-auto px-8 py-3.5 bg-black text-white rounded-full font-bold text-base hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group shadow-lg">
                                    Get Started
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </SignUpButton>
                            
                            <SignInButton mode="modal">
                                <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black border border-black rounded-full font-bold text-base hover:bg-gray-50 transition-all flex items-center justify-center">
                                    Sign In
                                </button>
                            </SignInButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Teaser - Fills the empty space with style */}
            <section className="wrapper px-6 mb-24">
                <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl p-2 bg-gray-50/50 backdrop-blur-sm">
                    <div className="relative aspect-21/9 w-full overflow-hidden rounded-[2rem]">
                        <Image 
                            src="/assets/hero-teaser.png" 
                            alt="AI Reading Experience" 
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-white/10 to-transparent" />
                    </div>
                </div>
            </section>

            {/* Features Section - Standard Card Sizing */}
            <section className="py-24 bg-[#fafafa]">
                <div className="wrapper px-6">
                    <div className="text-center max-w-xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">Focus on knowledge.</h2>
                        <p className="text-gray-500 text-base">Minimalist tools designed for deep, undistracted synthesis of information.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Feature Cards same as before */}
                        <div className="group relative p-8 bg-white border border-gray-100 rounded-[2rem] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                <Mic className="w-24 h-24 text-black" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                                    <Mic className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">Voice Dialogues</h3>
                                <p className="text-gray-500 leading-relaxed text-sm text-[11px] md:text-sm">
                                    Natural, bidirectional conversations with your library. Ask and listen instantly.
                                </p>
                            </div>
                        </div>

                        <div className="group relative p-8 bg-white border border-gray-100 rounded-[2rem] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                <BrainCircuit className="w-24 h-24 text-black" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                                    <BrainCircuit className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">AI Insights</h3>
                                <p className="text-gray-500 leading-relaxed text-sm text-[11px] md:text-sm">
                                    Gemini-powered character, theme, and summary extraction at scale.
                                </p>
                            </div>
                        </div>

                        <div className="group relative p-8 bg-white border border-gray-100 rounded-[2rem] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                <BookOpen className="w-24 h-24 text-black" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">Smart Library</h3>
                                <p className="text-gray-500 leading-relaxed text-sm text-[11px] md:text-sm">
                                    Your personal knowledge bank. Searchable and accessible 24/7.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New section to fill the 'empty' feeling further down */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="wrapper px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 leading-tight tracking-tight">Your knowledge, <br /> beautifully <span className="text-gray-400">organized.</span></h2>
                            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                                Experience a library that thinks for itself. Bookivox uses state-of-the-art AI to index your collection, allowing you to ask questions across your entire library simultaneously.
                            </p>
                            <div className="flex items-center gap-4 py-4 px-6 bg-gray-50 rounded-2xl border border-gray-100 w-fit">
                                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                                <span className="text-sm font-bold text-black uppercase tracking-widest">Library Pulse Connected</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                                <Image 
                                    src="/assets/library-aesthetic.png" 
                                    alt="Digital Library" 
                                    width={800} 
                                    height={600} 
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-50 rounded-full z-0 opacity-50 blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscriptions - Balanced Size */}
            <section className="py-24 bg-[#fafafa]">
                <div className="wrapper px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan, index) => (
                            <div key={index} className={cn(
                                "flex flex-col rounded-[2rem] overflow-hidden bg-[#fafafa] border border-gray-100 transition-all hover:shadow-lg h-full",
                                plan.name === "Free" && "border-black/5 ring-1 ring-black/5"
                            )}>
                                <div className="p-8 space-y-3">
                                    <h3 className="text-xl font-bold text-black">{plan.name} Plan</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                                        {plan.description}
                                    </p>
                                    
                                    <div className="pt-3 flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-black">{plan.price}</span>
                                        <span className="text-gray-400 text-xs">{plan.period}</span>
                                    </div>

                                    {plan.billingToggle ? (
                                        <div className="flex items-center gap-2 pt-2">
                                            <div 
                                                onClick={() => setIsAnnual(!isAnnual)}
                                                className={cn(
                                                    "w-8 h-4 rounded-full p-0.5 cursor-pointer transition-colors",
                                                    isAnnual ? "bg-black" : "bg-gray-200"
                                                )}
                                            >
                                                <div className={cn(
                                                    "w-3 h-3 bg-white rounded-full transition-transform",
                                                    isAnnual ? "translate-x-4" : "translate-x-0"
                                                )} />
                                            </div>
                                            <span className="text-[10px] font-medium text-gray-400">Billed annually</span>
                                        </div>
                                    ) : (
                                        <div className="text-[10px] font-medium text-gray-400 pt-2 uppercase tracking-wide">
                                            Free forever
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-gray-100 p-8 space-y-6 flex-1 flex flex-col justify-between">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-2.5 text-xs font-semibold text-gray-600">
                                                <Check className="w-3.5 h-3.5 text-black" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-6">
                                        <button className="w-full py-3 bg-black text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all">
                                            {plan.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer - Minimalist Standalone */}
            <footer className="py-10 bg-white border-t border-gray-100">
                <div className="wrapper px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2.5">
                        <Image src="/assets/logo.png" alt="Bookivox" width={28} height={18} />
                        <span className="text-lg font-bold text-black tracking-tight">Bookivox</span>
                    </div>
                    <p className="text-gray-400 text-xs font-medium">© {new Date().getFullYear()} Bookivox AI. Crafted for readers.</p>
                    <div className="flex gap-6 text-[10px] font-bold text-black uppercase tracking-widest">
                        <Link href="#" className="hover:opacity-50 transition-opacity">Privacy</Link>
                        <Link href="#" className="hover:opacity-50 transition-opacity">Terms</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
