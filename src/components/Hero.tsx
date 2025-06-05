'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PawPrint } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section
            className="min-h-[90vh] flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-16 gap-10 transition-colors duration-300 text-base-content"
        >
            <motion.div
                className="w-full flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Image
                    src="/images/pets.jpg"
                    alt="Dog and cat illustration"
                    width={500}
                    height={400}
                    className="w-auto h-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] rounded-2xl shadow-lg"
                    priority
                />
            </motion.div>

            <motion.div
                className="text-center max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <div className="flex justify-center mb-4">
                    <PawPrint style={{ color: 'var(--color-old-rose)' }} className="h-10 w-10" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Understand Your Pet’s True Age
                </h1>
                <p className="text-base sm:text-lg mb-6" style={{ opacity: 0.85 }}>
                    This simple tool helps you convert human years into pet years for your dog or cat.
                    Get a better understanding of your furry friend&apos;s life stage!
                </p>
                <Link href="/calculator">
                    <button className="btn btn-primary">Start Calculating</button>
                </Link>
            </motion.div>
        </section>
    );
}