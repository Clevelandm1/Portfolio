import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			gabRegular: ['Gab'],
		},

  		screens: {
  			"med": '1050px',
  			'smed': '608px',
  			'smll': '350px'
  		},
  		keyframes: {
  			rightOpen: {
  				'0%': {
  					transform: 'translateX(200%)',
  					opacity: 0
  				},
  				'40%': {
  					opacity: 0.4
  				},
  				'100%': {
  					transform: 'translateX(100%)',
  					opacity: 1
  				}
  			},
  			rightClose: {
  				'0%': {
  					transform: 'translateX(100%)',
  					opacity: 1
  				},
  				'40%': {
  					opacity: 0.4
  				},
  				'100%': {
  					transform: 'translateX(200%)',
  					opacity: 0
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			fadeOut: {
  				'0%': {
  					opacity: 1
  				},
  				'100%': {
  					opacity: 0
  				}
  			}
  		},
  		animation: {
  			'from-right': 'rightOpen .5s ease',
  			'from-right-close': 'rightClose .5s ease',
  			'fade-in': 'fadeIn .3s linear',
  			'fade-out': 'fadeOut .3s linear'
  		},
      boxShadow: {
        'drawer': '-2px 0px 15px 1px',
        'navbar': '0px 1px 20px 10px',
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

