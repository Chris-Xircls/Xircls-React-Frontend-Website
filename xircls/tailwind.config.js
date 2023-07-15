/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'hero-pattern': "url('/src/assets/bbblurry.svg')",
      'section-pattern' : "url('/src/assets/bg.svg')",
    },
    boxShadow: {
      blue: '0 2px 4px rgba(0, 0, 255, 0.55)',
    },
    
    

  },
},
  plugins: [require("daisyui")],


}

