/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#b605cd',
          50: '#faf0fb',
          100: '#f4e1f7',
          200: '#e9c3ef',
          300: '#dea5e7',
          400: '#d387df',
          500: '#c869d7',
          600: '#bd4bcf',
          700: '#b605cd',
          800: '#9204a4',
          900: '#6e037b',
        },
        dark: {
          DEFAULT: '#0a0a0f',
          50: '#18181f',
          100: '#1f1f28',
          200: '#2a2a35',
          300: '#353542',
          400: '#41414f',
        },
        neon: {
          purple: '#b605cd',
          pink: '#ff0099',
          blue: '#00ffff',
          green: '#00ff99',
        },
      },
      backgroundImage: {
        'tech-grid': 'linear-gradient(to right, rgba(182, 5, 205, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(182, 5, 205, 0.1) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-glow': 'linear-gradient(to right, rgba(182, 5, 205, 0.2), rgba(0, 255, 255, 0.2))',
      },
      backgroundSize: {
        'grid-lg': '4rem 4rem',
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.purple.500"), 0 0 20px theme("colors.purple.500")',
        'neon-strong': '0 0 10px theme("colors.purple.500"), 0 0 40px theme("colors.purple.500")',
      },
    },
  },
  plugins: [],
};