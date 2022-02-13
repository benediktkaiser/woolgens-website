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
                    DEFAULT: '#F05454',
                    '50': '#FFFDFD',
                    '100': '#FDEAEA',
                    '200': '#FAC5C5',
                    '300': '#F79F9F',
                    '400': '#F37A7A',
                    '500': '#F05454',
                    '600': '#EB2020',
                    '700': '#C31111',
                    '800': '#8F0D0D',
                    '900': '#5C0808'
                },
            },
            scale: {
                '101': '1.01',
            },
            keyframes: {
                grow: {
                    '0%, 100%': { transform: 'scale(93%)' },
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
