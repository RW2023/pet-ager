# 🖥️ Pet Age Calculator

This project is a utility that converts pet years to human years while demonstrating responsive design, animations, and a working contact form.

## 🌟 Features
- Interactive pet age calculator for dogs and cats
- Responsive light and dark themes via `next-themes`
- Animated components using Framer Motion
- Accessible UI styled with Tailwind CSS and DaisyUI
- Contact form powered by Formspree
- Type-safe code with TypeScript

## 🛠 Tech Stack
| Tech | Purpose |
|------|---------|
| [Next.js 15](https://nextjs.org/) | React framework |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | Component styling and theming |
| [Lucide React](https://lucide.dev/) | Icons |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Next Themes](https://github.com/pacocoursey/next-themes) | Theme switching |
| [React Hot Toast](https://react-hot-toast.com/) | Notifications |
| [Formspree](https://formspree.io/) | Form submissions |

## 📸 Screenshots
![Portfolio Screenshot](public/Screenshot.png)

## 🚀 Getting Started
Clone the repo and start the development server:

```bash
git clone https://github.com/RW2023/pet-age-calculator.git
cd pet-age-calculator
npm install
npm run dev
```

Create a `.env.local` file with your Formspree ID:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

## 📂 Project Structure
```
src/
  app/
    about/
      page.tsx               # About page
    calculator/
      page.tsx               # Calculator page
    contact/
      page.tsx               # Contact page
    layout.tsx               # Root layout
    page.tsx                 # Home page
    globals.css              # Tailwind/DaisyUI styles
  components/
    calculator/
      CalculatorForm.tsx     # Input form component
      CalculatorResult.tsx   # Result display component
    ContactForm.tsx
    Hero.tsx
    Navbar.tsx
    ThemeToggle.tsx
  lib/
    calculateAge.ts          # Age conversion utilities
```

## ✉️ Contact
For questions or feedback, feel free to open an issue or reach out through the contact form on the site.
