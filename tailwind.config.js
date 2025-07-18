/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66abf9',
          400: '#338ff7',
          500: '#0073f5', // Electric blue
          600: '#005cc4',
          700: '#004593',
          800: '#002e62',
          900: '#001731',
        },
        secondary: {
          50: '#f3e6fe',
          100: '#e7ccfd',
          200: '#cf99fb',
          300: '#b766f9',
          400: '#9f33f7',
          500: '#8700f5', // Neon purple
          600: '#6c00c4',
          700: '#510093',
          800: '#360062',
          900: '#1b0031',
        },
        accent: {
          50: '#e6fefa',
          100: '#ccfdf5',
          200: '#99fbeb',
          300: '#66f9e1',
          400: '#33f7d7',
          500: '#00f5cd',
          600: '#00c4a4',
          700: '#00937b',
          800: '#006252',
          900: '#003129',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'neuro-flat': '6px 6px 12px #0000001a, -6px -6px 12px #ffffff1a',
        'neuro-pressed': 'inset 6px 6px 12px #0000001a, inset -6px -6px 12px #ffffff1a',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'type': 'type 3.5s steps(40, end)',
        'type-reverse': 'type 3.5s steps(40, end) reverse',
        'cursor-blink': 'cursor .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        type: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        cursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};