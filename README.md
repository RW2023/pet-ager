# 🐾 Pet Age Calculator

A responsive, theme-aware web app that converts pet years to human years—and vice versa—for dogs and cats. This projects pupose is to continue my passion for front-end development. This is an excuse to practice form handling, dark mode theming, and clean UI/UX with Tailwind CSS and DaisyUI. It is also a handy utility 😊

## 🌟 Features

- 🔢 **Bidirectional Age Conversion**  
  Convert from pet age to human age or the other way around, for both dogs and cats.

- 🎨 **Light/Dark Theme Support**  
  Fully responsive and theme-aware with smooth light/dark mode transitions using `next-themes` and CSS variables.

- ✅ **Client-side Validation**  
  Simple but effective validation with inline error handling.

- 🖥️ **Accessible UI**  
  Built with accessibility and responsiveness in mind. Uses Tailwind CSS and DaisyUI for consistent styling.

- 💌 **Contact Form**  
  Integrated with [Formspree](https://formspree.io) for real-world form submission functionality.

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| [Next.js 15](https://nextjs.org/) | React framework for building the app |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS styling |
| [DaisyUI](https://daisyui.com/) | Component styling and theming |
| [Lucide React](https://lucide.dev/) | Icon set for clean UI |
| [Formspree](https://formspree.io/) | Handles contact form submissions |
| [TypeScript](https://www.typescriptlang.org/) | Type safety across the app |

## 📸 Preview

![Pet Age Calculator Screenshot](/public//Screenshot.png)

_Theme-aware, mobile-friendly design with interactive UI components._

Make sure to add your Formspree project ID in .env.local:


NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here

## 📂 Project Structure
```
src/
├── app/
│   ├── about/
│   │   └── page.tsx               # About page
│   ├── calculator/
│   │   └── page.tsx               # Calculator page
│   ├── contact/
│   │   └── page.tsx               # Contact page
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css                # Tailwind/DaisyUI styles
│
├── components/
│   ├── calculator/
│   │   ├── CalculatorForm.tsx     # Input form component
│   │   └── CalculatorResult.tsx   # Result display component
│   ├── ContactForm.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── ThemeToggle.tsx
│
├── lib/
│   └── calculateAge.ts            # Core age logic
```


## 🎯 Purpose of This Project

My family recently welcomed a new kitten, and naturally, the question came up: *"How old is she in human years?"* After doing some research, I realized that the common idea of just multiplying by 7 or adding 14 per year doesn’t reflect the actual biology of pet aging. The real conversion varies by species and age.

As a developer and a parent, I decided to let JavaScript do the math. This app was built so I could give my kids accurate answers anytime they asked about our pet’s age. At the same time, it became a great opportunity to demonstrate my front-end development skills, design sense, and ability to turn a real-world question into a polished, responsive tool.


## 🚀 Getting Started

To run this project locally:

```bash
git clone https://github.com/RW2023/pet-age-calculator.git
cd pet-age-calculator
npm install
npm run dev



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
