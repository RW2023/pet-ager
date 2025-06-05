// tailwind.config.js
module.exports = {
  darkMode: 'class', // 👈 Required for manual dark mode toggling
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        app: {
          primary: 'var(--p)',
          'primary-content': 'var(--pc)',
          secondary: 'var(--s)',
          'secondary-content': 'var(--sc)',
          accent: 'var(--a)',
          'accent-content': 'var(--ac)',
          neutral: 'var(--b2)',
          'neutral-content': 'var(--bc)',
          'base-100': 'var(--b1)',
          'base-200': 'var(--b2)',
          'base-300': 'var(--b3)',
          info: 'var(--info)',
        },
      },
    ],
    darkTheme: 'app',
  },
};
  