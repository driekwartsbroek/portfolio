import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0066cc',
          dark: '#004c99',
        },
        secondary: {
          light: '#ff9999',
          DEFAULT: '#ff6666',
          dark: '#ff3333',
        },
        background: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#1a1a1a',
        },
        text: {
          primary: {
            light: '#333333', // Clean dark grey for light mode
            DEFAULT: '#333333',
            dark: '#e0e0e0', // Light grey for dark mode
          },
          secondary: {
            light: '#666666', // Lighter grey for light mode
            DEFAULT: '#666666',
            dark: '#a0a0a0', // Medium grey for dark mode
          },
        },
        stroke: {
          light: '#e9ecef',
          DEFAULT: '#dee2e6',
          dark: '#ced4da',
        },
        'stroke-circle-yellow': '#E6DAA6',
        'stroke-circle-red': '#CF0134',
        'stroke-circle-orange': '#FD3C07',
      },
    },
  },
  plugins: [],
};

export default config;
