/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-to-lr': 'linear-gradient(to left, #60935D, #FF579F)',
      },
      gridTemplateColumns:{
        "grid-card" : "repeat(auto-fit, minmax(20rem, 1fr))",
        "footer-card" : "repeat(auto-fit, minmax(15rem, 1fr))",
        "technology-icon" : "repeat(auto-fit, minmax(5rem, 1fr))"
      },
      borderRadius:{
        "cus_radius" : "2rem",
        "cus_radius-big" : "3rem"
      },
      colors:{
        "color-1":"#14342B",
        "color-2":"#60935D",
        "color-3":"#BAB700",
        "color-4":"#BBDFC5",
        "color-5":"#FF579F",
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