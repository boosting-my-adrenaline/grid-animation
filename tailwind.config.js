module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ['Bebas Neue'],
        Bebas: ['Bebas'],
      },
      fontSize: {
        'React-h1': 'calc(10px + 2vmin)',
        'React-h1*3': 'calc(30px + 6vmin)',
        'React-h2': 'calc(8px + 1.5vmin)',
        'React-h3': 'calc(6px + 1.2vmin)',
        'React-p': 'calc(2px + 1.5vmin)',
        'React-p*3': 'calc(6px + 4.5vmin)',
      },
      height: {
        custom1: 'calc(-60px + 100vh)',
      },
    },
  },
  plugins: [],
}
