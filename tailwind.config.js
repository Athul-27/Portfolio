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
        },
      },
      fontFamily: {
        display: ['"Press Start 2P"', 'monospace'],
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        comic: '4px 4px 0 0 #15151A',
        'comic-sm': '3px 3px 0 0 #15151A',
        'comic-lg': '6px 6px 0 0 #15151A',
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
}
