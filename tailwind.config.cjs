/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			opasca: {
  				primary: '#0a0a0a',      // Deep black for maximum contrast
  				secondary: '#1a1a1a',    // Slightly lighter black
  				accent: '#1bbbe9',       // Signature cyan blue
  				'accent-dark': '#0ea5e9', // Darker accent
  				'accent-light': '#38bdf8', // Lighter accent
  				'light-gray': '#f8fafc',  // Ultra light background
  				'text-dark': '#0a0a0a',   // Deep black text
  				'text-light': '#ffffff',  // Pure white text
  				'text-muted': '#64748b',  // Muted text
  				'gradient-from': '#1bbbe9',
  				'gradient-to': '#0284c7',
  				'neon': '#00ffff',        // Neon accent
  				'electric': '#ff00ff',    // Electric accent
  			},
  			primary: {
  				'50': '#f0f9ff',
  				'100': '#e0f2fe',
  				'200': '#bae6fd',
  				'300': '#7dd3fc',
  				'400': '#38bdf8',
  				'500': '#0ea5e9',
  				'600': '#0284c7',
  				'700': '#0369a1',
  				'800': '#075985',
  				'900': '#0c4a6e',
  				'950': '#082f49',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#f8fafc',
  				'100': '#f1f5f9',
  				'200': '#e2e8f0',
  				'300': '#cbd5e1',
  				'400': '#94a3b8',
  				'500': '#64748b',
  				'600': '#475569',
  				'700': '#334155',
  				'800': '#1e293b',
  				'900': '#0f172a',
  				'950': '#020617',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
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
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			sans: ['Inter', 'ui-sans-serif', 'system-ui'],
  			heading: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
  			mono: ['JetBrains Mono', 'ui-monospace', 'Monaco']
  		},
  		fontSize: {
  			'xs': ['0.75rem', { lineHeight: '1rem' }],
  			'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  			'base': ['1rem', { lineHeight: '1.5rem' }],
  			'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  			'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  			'2xl': ['1.5rem', { lineHeight: '2rem' }],
  			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  			'5xl': ['3rem', { lineHeight: '1' }],
  			'6xl': ['3.75rem', { lineHeight: '1' }],
  			'7xl': ['4.5rem', { lineHeight: '1' }],
  			'8xl': ['6rem', { lineHeight: '1' }],
  			'9xl': ['8rem', { lineHeight: '1' }],
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-out',
  			'fade-in-up': 'fadeInUp 0.5s ease-out',
  			'fade-in-down': 'fadeInDown 0.5s ease-out',
  			'fade-in-left': 'fadeInLeft 0.5s ease-out',
  			'fade-in-right': 'fadeInRight 0.5s ease-out',
  			'slide-up': 'slideUp 0.5s ease-out',
  			'slide-down': 'slideDown 0.5s ease-out',
  			'scale-up': 'scaleUp 0.3s ease-out',
  			'scale-down': 'scaleDown 0.3s ease-out',
  			'bounce-in': 'bounceIn 0.6s ease-out',
  			'rotate-in': 'rotateIn 0.6s ease-out',
  			'accordion-down': 'accordionDown 0.2s ease-out',
  			'accordion-up': 'accordionUp 0.2s ease-out',
  			'marquee': 'marquee 25s linear infinite',
  			'marquee-reverse': 'marqueeReverse 25s linear infinite',
  			'scroll-slow': 'scrollSlow 15s linear infinite',
  			'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'float': 'float 6s ease-in-out infinite',
  			'glow': 'glow 2s ease-in-out infinite alternate',
  			'shimmer': 'shimmer 2s linear infinite',
  			'gradient-x': 'gradientX 15s ease infinite',
  			'gradient-y': 'gradientY 15s ease infinite',
  			'gradient-xy': 'gradientXY 15s ease infinite',
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' }
  			},
  			fadeInUp: {
  				'0%': { opacity: '0', transform: 'translateY(10px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			fadeInDown: {
  				'0%': { opacity: '0', transform: 'translateY(-10px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			fadeInLeft: {
  				'0%': { opacity: '0', transform: 'translateX(-10px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			fadeInRight: {
  				'0%': { opacity: '0', transform: 'translateX(10px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			slideUp: {
  				'0%': { transform: 'translateY(100%)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' }
  			},
  			slideDown: {
  				'0%': { transform: 'translateY(-100%)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' }
  			},
  			scaleUp: {
  				'0%': { transform: 'scale(0.9)', opacity: '0' },
  				'100%': { transform: 'scale(1)', opacity: '1' }
  			},
  			scaleDown: {
  				'0%': { transform: 'scale(1.1)', opacity: '0' },
  				'100%': { transform: 'scale(1)', opacity: '1' }
  			},
  			bounceIn: {
  				'0%': { transform: 'scale(0.3)', opacity: '0' },
  				'50%': { transform: 'scale(1.05)', opacity: '0.8' },
  				'70%': { transform: 'scale(0.9)', opacity: '0.9' },
  				'100%': { transform: 'scale(1)', opacity: '1' }
  			},
  			rotateIn: {
  				'0%': { transform: 'rotate(-200deg)', opacity: '0' },
  				'100%': { transform: 'rotate(0deg)', opacity: '1' }
  			},
  			accordionDown: {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			accordionUp: {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			marquee: {
  				'0%': { transform: 'translateX(0%)' },
  				'100%': { transform: 'translateX(-100%)' }
  			},
  			marqueeReverse: {
  				'0%': { transform: 'translateX(-100%)' },
  				'100%': { transform: 'translateX(0%)' }
  			},
  			scrollSlow: {
  				'0%': { transform: 'translateX(0%)' },
  				'100%': { transform: 'translateX(-100%)' }
  			},
  			pulseSlow: {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '.8' }
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-20px)' }
  			},
  			glow: {
  				'0%': { boxShadow: '0 0 20px rgba(27, 187, 233, 0.5)' },
  				'100%': { boxShadow: '0 0 30px rgba(27, 187, 233, 0.8)' }
  			},
  			shimmer: {
  				'0%': { backgroundPosition: '-1000px 0' },
  				'100%': { backgroundPosition: '1000px 0' }
  			},
  			gradientX: {
  				'0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
  				'50%': { 'background-size': '200% 200%', 'background-position': 'right center' }
  			},
  			gradientY: {
  				'0%, 100%': { 'background-size': '200% 200%', 'background-position': 'center top' },
  				'50%': { 'background-size': '200% 200%', 'background-position': 'center bottom' }
  			},
  			gradientXY: {
  				'0%, 100%': { 'background-size': '400% 400%', 'background-position': 'left center' },
  				'50%': { 'background-size': '400% 400%', 'background-position': 'right center' }
  			}
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'gradient-primary': 'linear-gradient(135deg, #1bbbe9 0%, #0ea5e9 50%, #0284c7 100%)',
  			'gradient-secondary': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)',
  			'gradient-neon': 'linear-gradient(135deg, #1bbbe9 0%, #00ffff 50%, #ff00ff 100%)',
  		},
  		borderRadius: {
  			'4xl': '2rem',
  			'5xl': '2.5rem',
  			'6xl': '3rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem',
  			'144': '36rem'
  		},
  		maxWidth: {
  			'8xl': '88rem',
  			'9xl': '96rem'
  		},
  		backdropBlur: {
  			'4xl': '72px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}