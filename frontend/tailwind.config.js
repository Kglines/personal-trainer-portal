/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: 'rgba(0,122,184,1)',
      primaryLight: 'rgba(0, 122, 184, 0.8)',
      secondary: 'rgba(79,0,69,1)',
      secondaryLight: 'rgba(79,0,69,0.8)',
      warn: 'rgba(255, 10, 10, 0.8)',
      black: 'rgb(0, 0, 0)',
      dark: 'rgba(35, 35, 35, 0.9)',
      white: 'rgba(255, 255, 255)',
      offWhite: 'rgb(255, 255, 240)',
      grey: 'rgb(155, 155, 155)',
      light: 'rgba(255, 255, 255, 0.8)',
      red: 'rgba(255, 0, 0, 0.9)',
      green: 'rgb(0, 255, 0)',
    },
    extend: {},
  },
  plugins: [],
};

