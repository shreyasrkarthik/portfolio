/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0C0A08',
        'bg-surface': '#1A1714',
        'bg-elevated': '#242018',
        'accent-orange': '#D97706',
        'accent-amber': '#F59E0B',
        'text-primary': '#FAF9F7',
        'text-secondary': '#C4BFB8',
        'text-muted': '#78716C',
        'border-subtle': '#2A2520',
        'border-default': '#3D3830',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'Menlo'],
        display: ['var(--font-space)', 'ui-sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'achievement-in': 'achievementIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'achievement-out': 'achievementOut 0.3s ease-in forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'xp-grow': 'xpGrow 1s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'scan': 'scan 4s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(217,119,6,0.2), 0 0 20px rgba(217,119,6,0.05)' },
          '50%': { boxShadow: '0 0 20px rgba(217,119,6,0.4), 0 0 40px rgba(217,119,6,0.15)' },
        },
        achievementIn: {
          '0%': { opacity: '0', transform: 'translateX(120%) scale(0.85)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        achievementOut: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(110%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        xpGrow: {
          from: { width: '0%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scan: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  corePlugins: { aspectRatio: false },
};
