'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <section className="min-h-screen px-6 md:px-20 py-16 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    About the Pet Age Calculator
                </h1>

                <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                        Pets age differently than humans, and understanding this can help
                        you give your furry friends the best care at every stage of their
                        lives.
                    </p>

                    <p>
                        This tool provides a simple way to estimate your pet’s age in human
                        years based on species and age. Whether you&apos;re checking in on your
                        puppy, kitten, senior dog, or wise old cat—this calculator gives
                        you meaningful insights into their life stage.
                    </p>

                    <p>
                        Behind the scenes, it uses veterinary guidelines and common lifespan
                        equivalences to generate accurate age conversions. We aim to make
                        this tool fun, educational, and useful for all pet lovers.
                    </p>

                    <p>
                        Got feedback or suggestions?{' '}
                        <Link
                            href="/contact"
                            className="inline-block mt-2 px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition"
                        >
                            Contact us here
                        </Link>
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
