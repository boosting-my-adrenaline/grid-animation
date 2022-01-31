const more1 = require('../../static/more/more1.jpeg')
const more2 = require('../../static/more/more2.jpg')
const more3 = require('../../static/more/more3.jpg')
const more4 = require('../../static/more/more4.jpg')
const more5 = require('../../static/more/more5.jpg')
const more6 = require('../../static/more/more6.jpg')

export interface ReadMore {
  title: string
  text: string
  image: any
}

const titles = [
  'Quisque efficitur purus id purus vestibulum bibendum.',
  'Tortor sed suscipit condimentum, ante purus suscipit.',
  'Consequat purus quam quis ligula. Mauris mi ligula.',
  'Suscipit at, pretium sit amet dolor. Nullam at.',
  'Duis placerat pharetra molestie. Aenean bibendum.',
  'Integer at turpis lacinia, ullamcorper metus nec.',
  'In sit amet tortor pharetra, eleifend urna lorem.',
  'Metus sit amet cursus feugiat, lorem erat rhoncus.',
  'Vitae leo. Etiam odio massa, malesuada nec purus eget.',
]

const texts = [
  'Maecenas dictum pretium mi nec molestie. Morbi eget convallis nisl, a semper lacus.',
  'Nulla congue, elit eu dapibus feugiat, nibh tellus efficitur massa, ac suscipit.',
  'In hac habitasse platea dictumst. Donec vitae tortor fermentum, maximus nisi vitae.',
  'Vestibulum posuere ullamcorper odio, eu eleifend nibh eleifend vel. Suspendisse.',
  'Tellus, in consectetur odio tristique vel. Aenean gravida neque vel convallis pretium.',
]

const images = [more1, more2, more3, more4, more5, more6]

export const rmAssembleCards = (
  num: number,
  previous: ReadMore[]
): ReadMore[] => {
  let usedTitles: string[] = []
  let usedTexts: string[] = []
  let usedImages: any[] = []

  previous.forEach((card) => {
    usedTitles.push(card.title)
    usedTexts.push(card.text)
    usedImages.push(card.image)
  })

  const assembleCard = (): ReadMore => {
    function getRandom<Type>(arr: Type[]): Type {
      return arr[Math.floor(Math.random() * arr.length)]
    }

    let title = getRandom(titles.filter((el) => !usedTitles.includes(el)))
    let text = getRandom(texts.filter((el) => !usedTexts.includes(el)))
    let image = getRandom(images.filter((el) => !usedImages.includes(el)))

    usedTitles.push(title)
    usedTexts.push(text)
    usedImages.push(image)

    return {
      title: title,
      text: text,
      image: image,
    }
  }

  let res = []
  for (let i = 0; i < num; i++) {
    res.push(assembleCard())
  }
  return res
}
