// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layout/**/*.{js,ts,jsx,tsx}'
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
                gray: colors.gray,
                coolGray: colors.coolGray,
            },
            scale: {
                '101': '1.01',
            },
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}
