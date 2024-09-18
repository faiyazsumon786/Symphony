// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include relevant files
  ],
  theme: {
    extend: {
      colors: {
        redial: '#FF0000', // Example redial color
      },
      container: {
        center: true,
        padding: '2rem', // Adjust padding as needed
        screens: {
          'lg': '1320px', // 1320px container width for large screens
        },
      },
      keyframes: {
        slide50: {
          '0%': { width: '0%' },
          '100%': { width: '50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slide70: {
          '0%': { width: '0%' },
          '100%': { width: '70%' },
        },
        slide60: {
          '0%': { width: '0%' },
          '100%': { width: '60%' },
        },
        slide90: {
          '0%': { width: '0%' },
          '100%': { width: '90%' },
        },
      },
      animation: {
        slide50: 'slide50 2s ease-in-out forwards',
        slide70: 'slide70 2.5s ease-in-out forwards',
        slide60: 'slide60 2.7s ease-in-out forwards',
        slide90: 'slide90 3s ease-in-out forwards',
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInLeft: 'fadeInLeft 1s ease-in-out',
        fadeInRight: 'fadeInRight 1s ease-in-out',
      },
      fadeInLeft: {
        '0%': { opacity: '0', transform: 'translateX(-20px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      fadeInRight: {
        '0%': { opacity: '0', transform: 'translateX(20px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
    },
  },
  plugins: [],
};
