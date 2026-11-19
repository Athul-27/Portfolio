/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F1EA',
        surface: '#FFFFFF',
        ink: '#15151A',
        muted: '#5B5B63',
        comic: {
          red: '#E23A3A',
          blue: '#2F5BEA',
          yellow: '#F5C518',
          green: '#3FA14D',
          pink: '#FF4FA3',
        },
      },
      fontFamily: {
        display: ['Bangers', 'cursive'],
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        comic: '5px 5px 0 0 #15151A',
        'comic-sm': '3px 3px 0 0 #15151A',
        'comic-lg': '8px 8px 0 0 #15151A',
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
}
