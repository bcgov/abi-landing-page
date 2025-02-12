import type { Config } from 'tailwindcss'

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                bcgov: {
                    blue: '#013366',
                    link: '#1A5A96',
                    gold: '#FCBA19',
                    background: '#F7F9FC',
                    primaryText: '#2D2D2D',
                    secondaryText: '#474543',
                    border: '#053662',
                },
            },
            fontFamily: {
                BCSans: ['BCSans', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config
