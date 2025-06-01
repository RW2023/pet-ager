'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Calculator', href: '/calculator' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <nav className="bg-base-100 text-base-content sticky top-0 z-50 border-b border-base-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
                {/* Logo */}
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

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-primary font-medium transition"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className="md:hidden p-2"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Slide-Out */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="md:hidden bg-base-100 border-t border-base-300"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-lg font-medium hover:text-primary transition"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
