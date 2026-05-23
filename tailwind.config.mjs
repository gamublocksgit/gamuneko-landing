/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fff8ef',
          100: '#fff3e0',
          200: '#f8ebdc',
        },
        ink: {
          900: '#34251d',
          700: '#5a3e33',
          500: '#7a675c',
        },
        accent: {
          dark: '#8d512f',
          warm: '#654235',
        },
        peach: '#eba194',
        sage: '#b5c4a1',
        danger: '#9c4639',
      },
      fontFamily: {
        display: ['Fredoka', 'Quicksand', 'system-ui', 'sans-serif'],
        body: ['Quicksand', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        xl2: '28px',
        md2: '14px',
      },
    },
  },
  plugins: [],
};
