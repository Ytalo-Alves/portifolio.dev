/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#08080a',
          light: '#101014',
          lighter: '#18181c',
        },
        accent: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
          glow: '#818cf8',
          dim: 'rgba(99, 102, 241, 0.12)',
        },
        neon: {
          blue: '#22d3ee',
          purple: '#a855f7',
          green: '#34d399',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a1a1aa',
          tertiary: '#71717a',
        },
      },
      fontFamily: {
        'poppins': ['Inconsolata', 'monospace'], // Tech feel
        'title': ['Orbitron', 'Maven Pro', 'system-ui', 'sans-serif'],
        'body': ['Maven Pro', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'fadeDown': 'fadeDown 0.8s ease-out',
        'fadeUp': 'fadeUp 0.8s ease-out',
        'slideInLeft': 'slideInLeft 0.8s ease-out',
        'slideInRight': 'slideInRight 0.8s ease-out',
        'scaleIn': 'scaleIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeDown: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px rgba(99, 102, 241, 0.45), 0 0 24px rgba(34, 211, 238, 0.2)' },
          'to': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.55), 0 0 40px rgba(34, 211, 238, 0.25)' },
        },
      },
      boxShadow: {
        'glow': '0 0 24px rgba(99, 102, 241, 0.35), 0 0 48px rgba(34, 211, 238, 0.12)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.45), 0 0 80px rgba(6, 182, 212, 0.15)',
        'neon': '0 0 5px theme("colors.accent.DEFAULT"), 0 0 22px rgba(34, 211, 238, 0.35)',
        'header-float': '0 4px 48px rgba(99, 102, 241, 0.18), 0 0 0 1px rgba(255,255,255,0.04)',
        'bento': '0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}

