/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#A78BFA',
        accent: '#C4B5FD',
        bg: '#FAFAFC',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        ink: '#111827',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(124, 58, 237, 0.08)',
        card: '0 4px 24px rgba(17, 24, 39, 0.06)',
        lift: '0 20px 40px rgba(124, 58, 237, 0.18)',
        glow: '0 0 0 1px rgba(124,58,237,0.08), 0 8px 30px rgba(124,58,237,0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: 0.7 },
          '70%': { transform: 'scale(1.15)', opacity: 0 },
          '100%': { transform: 'scale(1.15)', opacity: 0 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        pulseRing: 'pulseRing 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
