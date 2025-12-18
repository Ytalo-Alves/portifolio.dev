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
          DEFAULT: '#050505', // Darker black
          light: '#121212',
          lighter: '#1E1E1E',
        },
        accent: {
          DEFAULT: '#8B5CF6', // Violet 500
          hover: '#7C3AED', // Violet 600
          glow: '#A78BFA', // Violet 400
        },
        neon: {
          blue: '#8B5CF6', // Changed from blue to violet
          purple: '#BC13FE',
          green: '#0AFF60',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A3A3A3',
          tertiary: '#666666',
        },
      },
      fontFamily: {
        'poppins': ['Inconsolata', 'monospace'], // Tech feel
        'title': ['Orbitron', 'sans-serif'], // Sci-fi feel
        'body': ['Maven Pro', 'sans-serif'],
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
          'from': { boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6' },
          'to': { boxShadow: '0 0 20px #8B5CF6, 0 0 30px #8B5CF6' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(139, 92, 246, 0.6)',
        'neon': '0 0 5px theme("colors.accent.DEFAULT"), 0 0 20px theme("colors.accent.DEFAULT")',
        'header-float': '0 4px 60px rgba(139, 92, 246, 0.2)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}

