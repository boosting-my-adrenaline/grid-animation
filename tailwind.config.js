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
        Cooper: ['Cooper'],
        Nuvo: ['Nuvo'],
        Pitch: ['Pitch'],
      },
      fontSize: {
        'React-h1': 'calc(10px + 2vmin)',
        'React-h1*1.5': 'calc(15px + 3vmin)',
        'React-h1*1.2': 'calc(12px + 2.4vmin)',
        'React-h1*2': 'calc(20px + 4vmin)',
        'React-h1*3': 'calc(30px + 6vmin)',
        'React-h2': 'calc(8px + 1.5vmin)',
        'React-h3': 'calc(6px + 1.2vmin)',
        'React-p': 'calc(2px + 1.5vmin)',
        'React-p2': 'calc(4px + 1.7vmin)',
        'React-p3': 'calc(4px + 1.9vmin)',
        'React-p4': 'calc(2.2vmin)',
        'React-p4*.1.5': 'calc(3.3vmin)',

        'React-p*3': 'calc(6px + 4.5vmin)',

        'xl-1': 'calc(20px + 5.2vmin)',
        'xl-1-sm': 'calc(16px + 3.3vmin)',
        'xl-1-xs': 'calc(8px + 3vmin)',

        'xl-2': 'calc(20px + 6.95vmin)',
        'xl-2-sm': 'calc(12px + 6.2vmin)',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'custom-1': ' cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
    },
  },
}

// text-React-h1*1.5
// text-React-p4*.1.5
