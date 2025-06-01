'use client'

import { Mail } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
    return (
        <section className="min-h-screen px-6 md:px-20 py-16 bg-base-200 text-base-content">
            <div className="max-w-2xl mx-auto space-y-10">
                <div className="text-center">
                    <Mail className="mx-auto h-10 w-10 text-primary mb-2" />
                    <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                    <p className="text-lg text-base-content/70 mt-2">
                        We&apos;d love to hear from you! Fill out the form and we’ll get back to you soon.
                    </p>
                </div>

                <ContactForm />
            </div>
        </section>
    )
}
