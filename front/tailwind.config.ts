import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        sidebar: {
          bg: '#E5E095',
          button: '#96995A',
          buttonHover: '#7A7C49',
          darkBg: '#1E1F19',
          darkButton: '#4E4F41',
          darkButtonHover: '#696C4F',
        },
        post: {
          bg: '#CBCCB7',
          darkBg: '#262721',
        },
        rightbar: {
          bg: 'white',
          section: '#E5B48A',
          button: '#9E1315',
          buttonHover: '#7D0F10',
          darkBg: '#131415',
          darkSection: '#7D4E38',
          darkButton: '#7D1011',
          darkButtonHover: '#5A0A0B',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
