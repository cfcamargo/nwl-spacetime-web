/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['Roboto', 'sans-serif'],
        alt : ['Bai-Jamjuree', 'sans-serif']
      },
      blur: {
        full : '200px'
      },
      backgroundImage: {
        stripes : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1), 12.5%, transparent 12.5%, transparent)',
      },

      backgroundSize : {
        stripes : '100% 8px'
      }
    },
  },
  plugins: [],
}

