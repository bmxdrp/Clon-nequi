/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			background: {
				
			},
			colors: {
				primary_uva: '#200020',
				midnight: "#210049",
				eugenia: "#da0081",
			},
			animation: {
				"spin-slow": "spin-slow 30s linear infinite",
				"spin-fast": "spin-slow 1s linear infinite",
			},
			keyframes: {
				"spin-slow": {
					"0%": {		"clip-path": "polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)"
							},	
					"25%": {	"clip-path": "polygon(50% 50%,0 0,100% 0,100% 0   ,100% 0   ,100% 0)"
						},
					"50%": {	"clip-path": "polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)"
					},
					"75%": {	"clip-path": "polygon(50% 50%,0 0,100% 0,100% 100%,0    100%,0    100%)"
					},
					"100%": {   "clip-path": "polygon(50% 50%,0 0,100% 0,100% 100%,0    100%,0    0)" },
				},
			},
		},
	},
	plugins: [],
}
