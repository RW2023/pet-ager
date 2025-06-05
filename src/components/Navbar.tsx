'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Calculator', href: '/calculator' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav
            className="navbar sticky top-0 z-50 backdrop-blur bg-base-100/80 shadow-md"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto flex-1 flex items-center justify-between px-4 h-20">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Pet Age Logo"
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                    />
                    <span className="font-bold text-xl">Pet Age</span>
                </Link>

                {/* Desktop nav (hidden on mobile) */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className="font-medium hover:underline">
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile menu toggle button */}
                <button
                    type="button"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className="lg:hidden p-2"
                    aria-label="Toggle menu"
                    aria-controls={mobileOpen ? 'mobile-menu' : undefined}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="absolute top-full left-0 w-full lg:hidden border-t bg-base-100/90 backdrop-blur"
                        role="menu"
                        aria-label="Mobile navigation"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-lg font-medium hover:underline"
                                    role="menuitem"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <ThemeToggle />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
