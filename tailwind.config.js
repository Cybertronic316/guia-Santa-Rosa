/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"], // Revisa todos tus HTML y JS
  theme: {
    extend: {
      colors: {
        'azul-guia': '#0d2043',
        'naranja-guia': '#e67e22',
        'rojo-guia': '#e74c3c',
      },
    },
  },
  plugins: [],
}