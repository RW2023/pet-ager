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
                toast.success('Message sent successfully!')
                formRef.current.reset()
            } else {
                toast.error(data?.message || 'Something went wrong.')
            }
        } catch {
            toast.error('Failed to send. Please try again later.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-base-100 p-6 rounded-box shadow-md"
            noValidate
        >
            {!formspreeAction && (
                <p className="text-error font-semibold">
                    ⚠️ Formspree ID missing. Check <code>.env.local</code>
                </p>
            )}

            {/* Name */}
            <div className="form-control">
                <label className="label font-semibold" htmlFor="name">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className={`input input-bordered ${errors.name ? 'input-error' : ''}`}
                    title="Enter your full name"
                />
                {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="form-control">
                <label className="label font-semibold" htmlFor="email">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                    title="Enter a valid email address"
                />
                {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="form-control">
                <label className="label font-semibold" htmlFor="message">
                    <span className="label-text">Message</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    className={`textarea textarea-bordered min-h-[150px] ${errors.message ? 'textarea-error' : ''
                        }`}
                    title="Write your message"
                />
                {errors.message && <p className="text-error text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Honeypot */}
            <input title='gotim' type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Submit */}
            <button
                type="submit"
                disabled={!formspreeAction || isSubmitting}
                className="btn btn-primary btn-block gap-2 text-lg"
            >
                <SendHorizonal className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    )
}
