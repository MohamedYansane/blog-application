/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/*.{js,jsx,ts,tsx}',
        './components/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,jsx,ts,tsx}',
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['ui-sans-serif', 'system-ui'],
                'serif': ['ui-serif', 'Georgia'],
                'mono': ['ui-monospace', 'SFMono-Regular'],
                'display': ['Oswald'],
                'jetbrain': ['JetBrains Mono'],
                'nunito': ['Nunito', 'sans-serif'],
                'opensans': ['Open Sans', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],

                'corben': ['Corben'],
                'red-hat': ['Red Hat Display', 'sans-serif'],
            },
            colors: {
                "doctor-blue": '#5073fb',
                "primary": '#1565D8',
                "dark": {
                    "hard": '#0D2436',
                    "soft": '#183B56'
                },
                hero: {
                    "gray": '#5A7184',
                    "search-input": "#959EAD",
                    "primary": '#1565D8'
                }

            },
            screens: {
                'my': { 'min': '309px', 'max': '450px' },
                'lgmy': { 'min': '1204px', 'max': '1500px' },
                'ipad': { 'min': '768px', 'max': '912px' },
                'fold': '280px',
                'surfaceduo': '540px',
                // => @media (min-width: 640px) { ... }

                'laptop': '1024px',
                // => @media (min-width: 1024px) { ... }

                'desktop': '1280px',
                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    plugins: [],
}