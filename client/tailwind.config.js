module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '640px',
      sm: '800px',
      md: '1200px',
      lg: '1800px',
    },
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
        UI: [`SF UI Text`],
        Gotham: [`Gotham`],
        Tesla: [`Tesla`],
        Geogrotesque: [`Geogrotesque`],
      },
      fontSize: {
        'React-h1': 'calc(10px + 2vmin)',
        'React-h1*0.75': 'calc(6px + 1.5vmin)',
        'React-h1*1.5': 'calc(15px + 3vmin)',
        'React-h1*1.2': 'calc(12px + 2.4vmin)',
        'React-h1*2': 'calc(20px + 4vmin)',
        'React-h1*3': 'calc(30px + 6vmin)',
        'React-h2': 'calc(8px + 1.5vmin)',
        'React-h2*0.75': 'calc(6px + 1.3vmin)',
        'React-h2*1.5': 'calc(12px + 2.25vmin)',
        'React-h3': 'calc(6px + 1.2vmin)',
        'React-h4': 'calc(3px + 0.8vmin)',
        'React-p': 'calc(2px + 1.5vmin)',
        'React-p2': 'calc(4px + 1.7vmin)',
        'React-p3': 'calc(4px + 1.9vmin)',
        'React-p4': 'calc(2.2vmin)',
        'React-p4*.1.5': 'calc(3.3vmin)',

        'React-p*3': 'calc(6px + 4.5vmin)',
        'React-Page': 'calc(6px + 1.8vmin)',
        Blast: 'calc(70px + 14vmin)',

        'xl-1': 'calc(18px + 2.7vmin)',
        'xl-1*0.75': 'calc(15px + 3.6vmin)',
        'xl-1*0.66': 'calc(12px + 2vmin)',
        'xl-1-sm': 'calc(8px + 2.8vmin)',
        'xl-1-xs': 'calc(8px + 3vmin)',

        'xl-2': 'calc(14px + 4.5vmin)',
        'xl-2*0.75': 'calc(12px + 5vmin)',
        'xl-2*0.66': 'calc(10px + 3.2vmin)',
        'xl-2-sm': 'calc(6px + 4.2vmin)',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'custom-1': ' cubic-bezier(0.165, 0.84, 0.44, 1)',
        apple: 'cubic-bezier(.52,.16,.24,1)',
      },
      aspectRatio: {
        album: '10/16',
        book: '16/10',
        custom1: '3/2',
        custom2: `1.743421052631579`,
      },
      backgroundImage: {
        slide1: `url('./static/slides/slide1.jpg')`,
        slide2: `url('./static/slides/slide2.jpg')`,
        slide3: `url('./static/slides/slide3.jpeg')`,
        slide4: `url('./static/slides/slide4.jpg')`,
        slide5: `url('./static/slides/slide5.jpg')`,
        slide5: `url('./static/slides/slide5.jpg')`,
        moon: `url('./static/slides/moon3.png')`,
        bat: `url('./static/slides/bat.jpeg')`,
        teslaImage: `url('./static/slides/teslaImage.jpeg')`,
      },

      gridTemplateColumns: {
        custom1: `1fr max-content 1fr`,
      },

      height: {
        custom1: 'calc(14px + 3vmin)',
        'custom1*0.75': 'calc(9px + 2.3vmin)',
        // custom1: 'calc(16px + 3.4vmin)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

// text-React-h1*1.5
// text-React-p4*.1.5
