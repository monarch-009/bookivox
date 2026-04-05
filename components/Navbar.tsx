'use client';

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import {cn} from "@/lib/utils";

const navItems = [
    { label: "My Books", href: "/", protected: true },
    { label: "Add New", href: "/books/new", protected: true },
]

const Navbar = () => {
    const pathName = usePathname();
    const { user, isLoaded } = useUser();

    return (
        <header className="w-full fixed top-0 z-50 bg-(--bg-primary)/40 backdrop-blur-xl border-b border-black/5">
            <div className="wrapper h-[64px] flex justify-between items-center px-6">
                <Link href="/" className="flex gap-1.5 items-center">
                    <Image src="/assets/logo.png" alt="Bookivox" width={28} height={18} />
                    <span className="text-lg font-bold tracking-tight text-black">Bookivox</span>
                </Link>

                <div className="flex gap-4 sm:gap-8 items-center">
                    <nav className="hidden md:flex gap-8 items-center">
                        {navItems.map(({ label, href, protected: isProtected }) => {
                            if (isProtected && !user) return null;
                            
                            const isActive = pathName === href || (href !== '/' && pathName.startsWith(href));

                            return (
                                <Link href={href} key={label} className={cn('nav-link-base text-sm font-semibold tracking-tight', isActive ? 'text-black border-b-2 border-black pb-0.5' : 'text-gray-500 hover:text-black')}>
                                    {label}
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="flex gap-4 items-center pl-4">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="cursor-pointer text-sm font-bold text-black border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all">
                                    Login
                                </button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button className="cursor-pointer text-sm font-bold text-white bg-black px-6 py-2 rounded-full hover:bg-gray-800 transition-all hidden sm:block">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <div className="nav-user-link">
                                <UserButton />
                                {user?.firstName && (
                                    <span className="nav-user-name text-sm font-bold">
                                        {user.firstName}
                                    </span>
                                )}
                            </div>
                        </SignedIn>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
