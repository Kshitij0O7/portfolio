/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    // if you keep helpers or other dirs, include them:
    './**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-bg': 'var(--cyber-bg)',
        'cyber-neon': 'var(--cyber-neon)',
        'cyber-accent': 'var(--cyber-accent)',
        'cyber-secondary': 'var(--cyber-secondary)',
      },
    },
  },
  plugins: [],
};
