/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      rotate: {
        circle90: '-90deg'
      }
    },
    spacing: {
      2: '2px',
      5: '5px',
      8: '8px',
      10: '10px',
      20: '20px',
      30: '30px',
      40: '40px',
      50: '50px',
      p50: '50%'
    },
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "20": '20px',
      "30": '30px',
      "40": '40px',
      "50": '50px',
      "100": '100px',
      full: "100%",
      screen: "100vw",
    }),
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
      "2px": '2px'
    }),

  },
  plugins: [],
}
