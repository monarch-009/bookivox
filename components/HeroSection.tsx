import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section className="wrapper mb-10 md:mb-16 pt-32">
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 relative overflow-hidden flex items-center shadow-sm">
                <div className="flex flex-col md:flex-row items-center gap-12 w-full">
                    {/* Left Part */}
                    <div className="flex-1 flex flex-col gap-4 text-center md:text-left z-10">
                        <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tighter leading-tight">Your AI <br /> Library</h1>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                            The minimalist space where your books come to life. Discuss your favorite reads with AI.
                        </p>
                        <Link href="/books/new" className="mt-6 inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all w-fit shadow-xl group">
                            <span>Add new book</span>
                            <span className="text-2xl font-light group-hover:rotate-90 transition-transform">+</span>
                        </Link>
                    </div>

                    {/* Center Part */}
                    <div className="flex-1 max-w-[320px] hidden lg:flex items-center justify-center">
                        <Image
                            src="/assets/hero-illustration.png"
                            alt="Minimal illustration"
                            width={320}
                            height={320}
                            className="object-contain grayscale opacity-80"
                        />
                    </div>

                    {/* Right Part - Steps */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm min-w-[280px] z-10">
                        <ul className="space-y-8">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">1</div>
                                <div>
                                    <h3 className="font-bold text-black text-sm uppercase tracking-widest">Upload</h3>
                                    <p className="text-gray-400 text-xs">Drop your PDF anytime</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">2</div>
                                <div>
                                    <h3 className="font-bold text-black text-sm uppercase tracking-widest">Analyze</h3>
                                    <p className="text-gray-400 text-xs">Gemini maps the content</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">3</div>
                                <div>
                                    <h3 className="font-bold text-black text-sm uppercase tracking-widest">Chat</h3>
                                    <p className="text-gray-400 text-xs">Interactive voice session</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
