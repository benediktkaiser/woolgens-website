module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layout/**/*.{js,ts,jsx,tsx}',
        './containers/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '0.5rem',
                lg: '1rem',
                xl: '5rem',
            },
        },
        extend: {
            colors: {
                'dark': {
                    'DEFAULT': '#191c23',
                    'light': '#24262d',
                    'dark': '#121317',
                },
                'shark': {
                    DEFAULT: '#24262D',
                    '50': '#777D92',
                    '100': '#6D7388',
                    '200': '#5A5F71',
                    '300': '#484C5A',
                    '400': '#363944',
                    '500': '#24262D',
                    '600': '#1D1F25',
                    '700': '#16181C',
                    '800': '#101013',
                    '900': '#09090B'
                },
                'accent': {
                    DEFAULT: '#CB3737',
                    '50': '#F1C9C9',
                    '100': '#EDB9B9',
                    '200': '#E49898',
                    '300': '#DC7878',
                    '400': '#D35757',
                    '500': '#CB3737',
                    '600': '#A02A2A',
                    '700': '#741E1E',
                    '800': '#471313',
                    '900': '#1B0707'
                },
            },
            scale: {
                '101': '1.01',
            },
            keyframes: {
                grow: {
                    '0%, 100%': { transform: 'scale(95%)' },
                    '50%': { transform: 'scale(100%)' },
                }
            },
            animation: {
                'grow': 'grow 4s ease-in-out infinite',
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}
