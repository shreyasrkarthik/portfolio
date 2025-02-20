/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'soft-glow': 'softGlow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        softGlow: {
          '0%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 0px #eef0ff)' },
          '100%': { transform: 'scale(1.1)', filter: 'drop-shadow(0 0 8px #eef0ff)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  corePlugins: {
    aspectRatio: false,
  },

};
