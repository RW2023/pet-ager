'use client'

import { Mail } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
    return (
        <section
            className="min-h-screen px-6 md:px-20 py-16 transition-colors duration-300"
            style={{
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
            }}
        >
            <div className="max-w-2xl mx-auto space-y-10">
                <div className="text-center">
                    <Mail
                        className="mx-auto h-10 w-10 mb-2"
                        style={{ color: 'var(--color-old-rose)' }}
                    />
                    <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                    <p className="text-lg mt-2" style={{ opacity: 0.7 }}>
                        We&apos;d love to hear from you! Fill out the form and we’ll get back to you soon.
                    </p>
                </div>

                <ContactForm />
            </div>
        </section>
    )
}
