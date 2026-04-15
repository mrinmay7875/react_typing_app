/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f0f1e',
        'dark-text': '#ffffff',
        'dark-secondary': '#a8a8b8',
        'dark-border': '#2a2a3e',
        'vibrant-blue': '#00d4ff',
        'vibrant-purple': '#d946ef',
        'vibrant-pink': '#ff006e',
        'vibrant-cyan': '#00f5ff',
        'vibrant-green': '#00ff88',
        'vibrant-orange': '#ff6b35',
        'vibrant-yellow': '#ffd60a',
        'accent-red': '#ff3d5a',
      },
      backgroundImage: {
        'gradient-vibrant': 'linear-gradient(135deg, #00d4ff, #d946ef, #ff006e)',
        'gradient-cyan-purple': 'linear-gradient(135deg, #00f5ff, #d946ef)',
        'gradient-green-cyan': 'linear-gradient(135deg, #00ff88, #00f5ff)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
