/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bricolage-grotesque": ['"Bricolage Grotesque"', "sans-serif"],
        'raleway': ['"Raleway"', "sans-serif"],
      },
      dropShadow: {
        'bottom-lg': '0 0 8px rgba(0, 0, 0, 0.4)',
      },
      boxShadow: {
        'custom': '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
        'custom-yellow': '0 0 8px 4px rgba(255, 217, 0, 0.6)',
        'custom-black': '0 1px 4px rgba(0, 0, 0, 0.4)',
        'custom-black-2':  '0 2px 8px rgba(0, 0, 0, 0.26)',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(18rem, 1fr))',
      }
    },
  },
  plugins: [],
});
