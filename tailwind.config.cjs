module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f2ff',
          blue: '#0ea5e9',
          purple: '#a855f7',
          pink: '#ec4899',
        },
        dark: {
          bg: '#0a0a0f',
          card: '#12121a',
          surface: '#1a1a24',
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 5px rgba(0,242,255,0.5), 0 0 20px rgba(0,242,255,0.3), 0 0 60px rgba(0,242,255,0.1)',
        'neon-cyan-sm': '0 0 5px rgba(0,242,255,0.4), 0 0 15px rgba(0,242,255,0.2)',
        'neon-cyan-lg': '0 0 10px rgba(0,242,255,0.6), 0 0 40px rgba(0,242,255,0.3), 0 0 80px rgba(0,242,255,0.15)',
        'neon-purple': '0 0 5px rgba(168,85,247,0.5), 0 0 20px rgba(168,85,247,0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'border-rotate': 'border-rotate 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'border-rotate': {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
