/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily :{
        Barlow: ['Barlow Semi Condensed', 'sans-serif']
      },
      backgroundImage: {
       Pattern: "url('/assets/images/bg-pattern-quotation.svg')",
      },
    },
  },
  plugins: [],
}
