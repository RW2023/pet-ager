'use client'

import { useRef, useState } from 'react'
import { SendHorizonal } from 'lucide-react'
import toast from 'react-hot-toast'

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
const formspreeAction = formspreeId
    ? `https://formspree.io/f/${formspreeId}`
    : undefined

type FieldErrors = {
    name?: string
    email?: string
    message?: string
}

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<FieldErrors>({})

    const validate = (formData: FormData): FieldErrors => {
        const errs: FieldErrors = {}

        const name = formData.get('name')?.toString().trim()
        const email = formData.get('email')?.toString().trim()
        const message = formData.get('message')?.toString().trim()

        if (!name) errs.name = 'Name is required.'
        if (!email) {
            errs.email = 'Email is required.'
        } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) {
            errs.email = 'Enter a valid email address.'
        }
        if (!message) errs.message = 'Message is required.'

        return errs
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formRef.current || !formspreeAction) return

        const formData = new FormData(formRef.current)
        const validationErrors = validate(formData)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setErrors({})
        setIsSubmitting(true)

        try {
            const res = await fetch(formspreeAction, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            })

            const data = await res.json()

            if (res.ok) {
                toast.success('Message sent successfully!', {
                    style: { background: 'var(--color-old-rose)', color: '#fff' },
                })
                formRef.current.reset()
            } else {
                toast.error(data?.message || 'Something went wrong.', {
                    style: { background: 'var(--color-mountbatten-pink)', color: '#fff' },
                })
            }
        } catch {
            toast.error('Failed to send. Please try again later.', {
                style: { background: 'var(--color-mountbatten-pink)', color: '#fff' },
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="card bg-base-100 shadow-md p-6 space-y-6"
        >
            {!formspreeAction && (
                <p style={{ color: 'red', fontWeight: '600' }}>
                    ⚠️ Formspree ID missing. Check <code>.env.local</code>
                </p>
            )}

            {/* Name */}
            <div className="form-control">
                <label htmlFor="name" className="font-semibold block mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    style={{ borderColor: errors.name ? 'red' : undefined }}
                    title="Enter your full name"
                />
                {errors.name && <p className="text-sm mt-1" style={{ color: 'red' }}>{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="form-control">
                <label htmlFor="email" className="font-semibold block mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="input input-bordered w-full"
                    style={{ borderColor: errors.email ? 'red' : undefined }}
                    title="Enter a valid email address"
                />
                {errors.email && <p className="text-sm mt-1" style={{ color: 'red' }}>{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="form-control">
                <label htmlFor="message" className="font-semibold block mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    className="textarea textarea-bordered w-full min-h-[150px]"
                    style={{ borderColor: errors.message ? 'red' : undefined }}
                    title="Write your message"
                />
                {errors.message && (
                    <p className="text-sm mt-1" style={{ color: 'red' }}>{errors.message}</p>
                )}
            </div>

            {/* Honeypot */}
            <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                title="gotim"
            />

            {/* Submit */}
            <button
                type="submit"
                disabled={!formspreeAction || isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center gap-2"
                style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.6 : 1 }}
            >
                <SendHorizonal className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    )
}
