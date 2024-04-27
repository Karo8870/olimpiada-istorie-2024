import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    screens: {
      lg: { max: '1440px' },
      nav: { max: '1220px' },
      md: { max: '1100px' },
      sm: { max: '576px' },

      'sm-h': { raw: '(max-height: 324px)' },
      'md-h': { raw: '(max-height: 540px)' },
      'lg-h': { raw: '(max-height: 800px)' }
    },
    extend: {
      colors: {
        border: '#000',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#fff',
        foreground: '#000',
        primary: '#FFE6C0',
        secondary: '#FFE6C0',
        danger: '#FFE6C0',
        light: '#FFF5E5',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#FFF1C0',
            secondary: '#FFDDBD',
            foreground: '#000',
            default: '#000'
          }
        }
      }
    })
  ]
} satisfies Config;

export default config;
