'use client'

import { PawPrint } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-12 bg-base-200">
            <div className="max-w-2xl">
                <div className="flex justify-center mb-4">
                    <PawPrint className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Know Your Pet Better
                </h1>
                <p className="text-lg md:text-xl text-base-content/70 mb-8">
                    Ever wondered how old your furry friend really is in pet years? This app helps you convert human years into dog and cat years with scientific precision.
                </p>
                <Link href="/calculator">
                    <button className="btn btn-primary text-lg px-6">
                        Start Calculating
                    </button>
                </Link>
            </div>
        </section>
    )
}
