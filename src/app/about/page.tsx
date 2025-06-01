'use client';

import Link from 'next/link';

export default function AboutPage() {
    return (
        <section className="min-h-screen px-6 md:px-20 py-16 bg-base-200 text-base-content">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About the Pet Age Calculator</h1>

                <p className="text-lg mb-4">
                    Pets age differently than humans, and understanding this can help you give your furry friends the best care at every stage of their lives.
                </p>

                <p className="text-lg mb-4">
                    This tool provides a simple way to estimate your pet’s age in human years based on species and age. Whether you&apos;re checking in on your puppy, kitten, senior dog, or wise old cat—this calculator gives you meaningful insights into their life stage.
                </p>

                <p className="text-lg mb-4">
                    Behind the scenes, it uses veterinary guidelines and common lifespan equivalences to generate accurate age conversions. We aim to make this tool fun, educational, and useful for all pet lovers.
                </p>

                <p className="text-lg mb-4">
                    Got feedback or suggestions? Reach out via our{' '}
                    <Link href="/contact" className="link link-primary">
                        Contact page
                    </Link>
                    we’d love to hear from you!
                </p>
            </div>
        </section>
    );
}
