const v0 = require('../../static/v0.jpg')
const v1 = require('../../static/v1.jpg')
const v2 = require('../../static/v2.jpg')
const v3 = require('../../static/v3.jpg')
const v4 = require('../../static/v4.jpg')
const v5 = require('../../static/v5.jpg')
const v6 = require('../../static/v6.jpg')
const v7 = require('../../static/v7.jpg')
const v8 = require('../../static/v8.jpg')
const v9 = require('../../static/v9.jpg')
const v11 = require('../../static/v11.jpg')
const v13 = require('../../static/v13.jpg')
const v14 = require('../../static/v14.jpg')
const v15 = require('../../static/v15.jpg')
const v16 = require('../../static/v16.jpg')
const v17 = require('../../static/v17.jpg')
const v19 = require('../../static/v19.jpg')
const v20 = require('../../static/v20.jpg')
const v21 = require('../../static/v21.jpg')
const v23 = require('../../static/v23.jpg')
const v24 = require('../../static/v24.jpg')
const v25 = require('../../static/v25.jpg')

const g0 = require('../../static/g0.jpg')
const g1 = require('../../static/g1.jpg')
const g2 = require('../../static/g2.jpg')
const g3 = require('../../static/g3.jpg')
const g4 = require('../../static/g4.jpg')
const g5 = require('../../static/g5.jpg')
const g6 = require('../../static/g6.jpg')
const g7 = require('../../static/g7.jpg')
const g8 = require('../../static/g8.jpg')
const g9 = require('../../static/g9.jpg')
const g10 = require('../../static/g10.jpg')
const g11 = require('../../static/g11.jpg')
const g12 = require('../../static/g12.jpg')
const g13 = require('../../static/g13.jpg')

export interface CardColors {
  mainColor: string
  contrastForMain: string
  forLightBackground: string
  isLight: boolean
  forDarkBackground: string
}

export interface Card {
  title: string
  text: string
  // info: string
  colors: CardColors
  popular: boolean
  views: number
  image: {
    main: any
    vertical: any
    gorizontal: any
  }
}

const colors: CardColors[] = [
  {
    mainColor: '#D65DB1',
    contrastForMain: '#EDEDED',
    forLightBackground: '#D65DB1',
    isLight: true,
    forDarkBackground: '#D65DB1',
  },
  // {
  //   mainColor: '#845EC2',
  //   contrastForMain: '#EDEDED',
  //   forLightBackground: '#845EC2',
  //   isLight: true,
  //   forDarkBackground: '#845EC2',
  // },
  {
    mainColor: '#FF6F91',
    contrastForMain: '#EDEDED',
    forLightBackground: '#FF6F91',
    isLight: true,
    forDarkBackground: '#FF6F91',
  },
  {
    mainColor: '#F9F871',
    contrastForMain: '#0A0AFF',
    forLightBackground: '#0A0AFF',
    isLight: false,
    forDarkBackground: '#F9F871',
  },
  {
    mainColor: '#FF9671',
    contrastForMain: '#FDFDFD',
    forLightBackground: '#FF9671',
    isLight: true,
    forDarkBackground: '#FF9671',
  },
  {
    mainColor: '#FFC75F',
    contrastForMain: '#2424FF',
    forLightBackground: '#2424FF',
    isLight: false,
    forDarkBackground: '#FFC75F',
  },

  {
    mainColor: '#4FFBDF',
    contrastForMain: '#8F7200',
    forLightBackground: '#8F7200',
    isLight: false,
    forDarkBackground: '#4FFBDF',
  },
  {
    mainColor: '#C4FCEF',
    contrastForMain: '#468847',
    forLightBackground: '#468847',
    isLight: false,
    forDarkBackground: '#468847',
  },
  {
    mainColor: '#B0A8B9',
    contrastForMain: '#FDFDFD',
    forLightBackground: '#B0A8B9',
    isLight: true,
    forDarkBackground: '#F9F871',
  },
]

const titles: string[] = [
  `tenetur, sapiente, ea exturi`,
  `libero er eros tristique arcu `,
  'nulla ullamcorper quis labos',
  'morbi finibus dolor, eget var',
  'condimentum urna turpis',
  'nunc ac massa efficitur',
  'vestibulum sceleriqsuq de eu',
  'nascetur ridiculus mus',
  'convallis purus pretium',
  'malesuada dapibus sollici',
  'quis condimentum urna',
  'etiam tincidunt nulla ornare',
  'sagittis rutrum mi gravida',
  'antesuada eget nisi ac',
  'vivamus fermentum placerat ',
  'maximus magna sem at purus',
  'odio non, ullamcorper eros ',
  'vitae posuere dui erat sed',
  'purus a fermentum pharetra',
]

const texts: string[] = [
  `error dicta molestias NESCIUNT ACCUSANTIUM in dolore assumenda id, TENETUR AMET debitis. Debitis SEQUI ELIGENDI ex dome.`,
  `cras nulla ex, dictum AT LIBERO IN, posuere volutpat neque MAURIS  ex, fermentum sit amet sagittis quis, vestibulum vitae felis.`,
  `praesent vel tortor dui PRAESENT BIBENDUM tortor nulla. Nam scelerisque JUSTO tellus suscipit fringilla. Fusce EGET MAXIMUS nisi.`,
  `QUIS CONVALIS eros. Sed hendrerit placerat ligula, vitae suscipit dolor ultrices vitae. Vestibulum at  SOLLICITUDIN LECTUS.`,
  `lacus an PELLENTESQUE diam. Pellentesque eu eros finibus, VEHICULA leo ac, sodales neque. Semper et dictum turpis praesent.`,
  `nullam EROS NIBH, egestas fringilla mauri, hendrerit FRINGILLA. Phasellus inter, ex commodo PHARETRA CONDIMENTUM, nunc orci.`,
  `laculis nunc, eu DIGNISSIM LIBERO odio sed est. Etiam elementum dui erat, in CURSUS LACUS feugiat. Aenean MAXIMUS CONSECTETUR ex.`,
  `vestibulum semper INTERDUM lectus malesuada. Donec QUIS NUNC IPSUM. Nam eget urna rhoncus, LACINIA AUGUE ac, eleifend neque.`,
  `morbi TINCIDUNT, tellus sed IMPERDIET HENDRERIT, arcu nisl mattis nibh, vitae facilisis est EROS UT NISI. Aliquam congue ac purus.`,
  `ornare lacinia NULLAM interdum PORTTITOR orci, luctus consectetur ORCI CONGUE in. Proin volutpat, sem ultrices convallis, LIGULA.`,
  `sapien feugiat VELIT, VITAE BLANDIT neque magna bibendum ante. Fusce TINCIDUNT tincidunt ligula vitae feugiat. Vestibulum libero.`,
  `tellus, TEMPUS VEL NISL nec, scelerisque SCELERISQUE odio. Curabitur HENDRERIT egestas nunc et posuere. Fusce nec neque dignissim.`,
  `tincidunt vivamus FEUGIAT est quis lacus rutrum porttitor. Donec AUCTOR MAGNA in volu, ut rhoncus NULLA dapibus. Nam et NISI nunc.`,
  `nullam quam elit, EUISMOD EGET LIGULA, dictum sollici ALIQUAM eget LAOREET ante. Consectetur ADIPISCING elit. Sed volutpat orci.`,
  `vel NEQUE AUCTOR TEMPUS. Curabitur viverra, non MAXIMUS LIBERO pretium. Praesent lacinia ex magna, quis ELEIFEND velit aliquam.`,
]

const imagesV = [
  v0,
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  v7,
  v8,
  v9,
  v11,
  v13,
  v14,
  v15,
  v16,
  v17,
  v19,
  v20,
  v21,
  v23,
  v24,
  v25,
]
const imagesG = [g0, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13]

export const assembleCards = (num: number, allPopular: boolean): Card[] => {
  let usedTitles: string[] = []
  let usedTexts: string[] = []
  let usedImages: any[] = []

  const assembleCard = (): Card => {
    function getRandom<Type>(arr: Type[]): Type {
      return arr[Math.floor(Math.random() * arr.length)]
    }

    let isPopular = allPopular ? true : Math.floor(Math.random() * 10) > 5
    let title = getRandom(titles.filter((el) => !usedTitles.includes(el)))
    let text = getRandom(texts.filter((el) => !usedTexts.includes(el)))
    let mainImage = getRandom(imagesV.filter((el) => !usedImages.includes(el)))
    usedImages.push(mainImage)
    let verticalImage = getRandom(
      imagesV.filter((el) => !usedImages.includes(el))
    )

    usedTitles.push(title)
    usedTexts.push(text)

    return {
      colors: getRandom(colors),
      title: title,
      text: text,
      image: {
        main: mainImage,
        vertical: verticalImage,
        gorizontal: getRandom(imagesG),
      },
      popular: isPopular,
      views: isPopular
        ? Math.floor(Math.random() * 2000) + 1000
        : Math.floor(Math.random() * 500) + 50,
    }
  }

  let res = []
  for (let i = 0; i < num; i++) {
    res.push(assembleCard())
  }
  return res
}
