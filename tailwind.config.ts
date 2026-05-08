import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        olive: { 50: '#f4f6f0', 100: '#e5eade', 200: '#cbd5b8', 300: '#a4b486', 400: '#7d9159', 500: '#5B6B3C', 600: '#4A5630', 700: '#3C4528', 800: '#333A23', 900: '#2B3120' },
        sand: { 50: '#FDFBF5', 100: '#F9F5EC', 200: '#F3EDDD', 300: '#EBE1C8', 400: '#E0D1AD', 500: '#D4C08E' },
        gold: { 50: '#FEFCE8', 100: '#FDF8D8', 200: '#FBF0B0', 300: '#F5E47A', 400: '#E5C44D', 500: '#D4B03A', 600: '#B8962A' },
        ink: { 900: '#1A1A1A', 800: '#2D2D2D', 700: '#3F3F3F', 600: '#555555', 500: '#777777', 400: '#999999', 300: '#B5B5B5', 200: '#D4D4D2' },
      },
      animation: { 'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', float: 'float 6s ease-in-out infinite', shimmer: 'shimmer 2s linear infinite' },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
};

export default config;
