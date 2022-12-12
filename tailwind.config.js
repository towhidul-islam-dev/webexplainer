/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-to-lr': 'linear-gradient(to left, #60935D, #FF579F)',
      },
      gridTemplateColumns:{
        "grid-card" : "repeat(auto-fit, minmax(20rem, 1fr))"
      }
    },
  },
  plugins: [],
}
/* 
#14342B
#60935D
#BAB700
#BBDFC5
#FF579F
*/