'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export default function HeroSection() {
    return (
        <section
            className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 transition-colors duration-300"
            style={{
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
            }}
        >
            {/* Text Content */}
            <div className="text-center md:text-left max-w-xl">
                <div className="flex justify-center md:justify-start mb-4">
                    <PawPrint style={{ color: 'var(--color-old-rose)' }} className="h-10 w-10" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Understand Your Pet’s True Age
                </h1>
                <p className="text-lg mb-6" style={{ opacity: 0.85 }}>
                    This simple tool helps you convert human years into pet years for your dog or cat.
                    Get a better understanding of your furry friend&apos;s life stage!
                </p>
                <Link href="/calculator">
                    <button
                        className="px-6 py-2 rounded-md shadow transition hover:brightness-110"
                        style={{
                            backgroundColor: 'var(--color-old-rose)',
                            color: 'var(--pc)',
                        }}
                    >
                        Start Calculating
                    </button>
                </Link>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-[50%] flex justify-center">
                <Image
                    src="/images/pets.jpg"
                    alt="Dog and cat illustration"
                    width={500}
                    height={400}
                    className="w-auto h-auto max-w-[90%] md:max-w-full rounded-2xl shadow-lg"
                    priority
                />
            </div>
        </section>
    );
}
