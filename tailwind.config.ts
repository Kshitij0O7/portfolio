/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Ensure all app files are scanned
    './components/**/*.{js,ts,jsx,tsx}', // Include components directory
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