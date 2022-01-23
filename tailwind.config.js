module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ['Bebas Neue'],
        Bebas: ['Bebas'],
        ArchitectsDaughter: ['Architects Daughter'],
        Staatliches: ['Staatliches'],
        Merriweather: ['Merriweather'],
      },
      fontSize: {
        'React-h1': 'calc(10px + 2vmin)',
        'React-h1*1.2': 'calc(12px + 2.4vmin)',
        'React-h1*2': 'calc(20px + 4vmin)',
        'React-h1*3': 'calc(30px + 6vmin)',
        'React-h2': 'calc(8px + 1.5vmin)',
        'React-h3': 'calc(6px + 1.2vmin)',
        'React-p': 'calc(2px + 1.5vmin)',
        'React-p2': 'calc(4px + 1.7vmin)',
        'React-p3': 'calc(4px + 1.9vmin)',
        'React-p4': 'calc(2.2vmin)',

        'React-p*3': 'calc(6px + 4.5vmin)',
        'xl-1': 'calc(16px + 5.7vmin)',
        'xl-2': 'calc(20px + 7.5vmin)',
      },
      height: {
        custom1: 'calc(30px + 280vh)',
      },
    },
  },
  plugins: [],
}
