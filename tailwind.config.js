/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta AS Burger
        'primary': '#FFCA40',
        'primary-hover': '#E6B639',
        'secondary': '#C8161D',
        'secondary-hover': '#A51218',
        'gray-custom': '#808080',
        'gray-light': '#F8F8F7',
        'border': '#E5E5E5',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        'custom': '12px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        asburger: {
          "primary": "#FFCA40",
          "primary-content": "#000000",
          "secondary": "#C8161D",
          "secondary-content": "#FFFFFF",
          "accent": "#FFCA40",
          "neutral": "#808080",
          "base-100": "#FFFFFF",
          "base-200": "#F8F8F7",
          "base-300": "#E5E5E5",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#C8161D",
        },
      },
      "light",
    ],
    darkTheme: false,
  },
}