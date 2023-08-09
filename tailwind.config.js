/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{html,js,tsx}'],
   theme: {
      extend: {}
   },
   plugins: [require('daisyui')],
   daisyui: {
      themes: ['emerald', 'cupcake'] // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
   }
}
