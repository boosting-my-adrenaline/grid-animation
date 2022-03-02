import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'

const l0 = require('../../static/liquid/l0.jpg')
const l1 = require('../../static/liquid/l1.jpg')
const l2 = require('../../static/liquid/l2.jpg')
const l3 = require('../../static/liquid/l3.jpg')
const l5 = require('../../static/liquid/l4.jpg')
const l6 = require('../../static/liquid/l5.jpg')
const l10 = require('../../static/liquid/l6.jpg')
const l7 = require('../../static/liquid/l7.jpg')
const l8 = require('../../static/liquid/l8.jpg')
const l9 = require('../../static/liquid/l9.jpg')
const l4 = require('../../static/liquid/l10.jpg')
const l11 = require('../../static/liquid/l11.jpg')
const l12 = require('../../static/liquid/l12.jpg')
const l13 = require('../../static/liquid/l13.jpg')
const l14 = require('../../static/liquid/l14.jpg')
const l15 = require('../../static/liquid/l15.jpg')
const l16 = require('../../static/liquid/l16.jpg')
const l17 = require('../../static/liquid/l17.jpg')
const l18 = require('../../static/liquid/l18.jpg')
const l19 = require('../../static/liquid/l19.jpg')

interface IProps {
  sm: boolean
  opinion: number
}

export const LandingCardSquareSmall3: React.FC<IProps> = ({ sm, opinion }) => {
  const images = [
    l0,
    l1,
    l2,
    l3,
    l4,
    l5,
    l6,
    l7,
    l8,
    l9,
    l10,
    l11,
    l12,
    l13,
    l14,
    l15,
    l16,
    l17,
    l18,
    l19,
  ]

  const titles = [
    [`  eros est tincidunt `, ` Suspendisse eget sem `],
    [` commodo orci  `, `  Ut dui odio`],
    [`  suscipit augue `, ` fermentum eros `],
    [`    Vivamus lobortis nulla`, `  Nunc eleifend `],
    [` aliquam dignissim  `, ` Curabitur a dolor dui `],
    [`  Nullam suscipit `, ` sit amet vestibulum `],
    [` posuere tempor erat  `, ` Aenean et tincidunt leo `],
    [` Donec vehicula  `, `  metus  venenatis`],
    [`  arcu magna mollis sem `, ` consectetur adipiscing `],
    [`  auctor nisl lobortis `, ` congue leo augue sed  `],
    [`  Curabitur volutpat  `, `  purus ac facilisis  `],
    [`  ultricies arcu sem `, ` Aliquam erat volutpat `],
    [`   odio eget elementum `, ` consectetur urna `],
    [` amet  vehicula velit.  `, ` Vestibulum euismod `],
    [` posuere tempor erat  `, ` Aenean et tincidunt leo `],
    [` Donec vehicula  `, `  metus  venenatis`],
    [`  arcu magna mollis sem `, ` consectetur adipiscing `],
    [`  auctor nisl lobortis `, ` congue leo augue sed metus `],
    [`  Curabitur volutpat  `, `  purus ac facilisis  `],
    [`  ultricies arcu sem `, ` Aliquam erat volutpat `],
  ].reverse()

  const { isDarkMode } = useDarkMode()
  return (
    <div className={`full h-full cursor-pointer select-none`}>
      <div className={`relative w-full overflow-hidden rounded-[6px] bg-black`}>
        <img
          src={images[opinion]}
          className={`aspect-[1] rounded-[6px] object-cover transition-all duration-200 ease-in hover:scale-[1.02] hover:opacity-70`}
        />
      </div>
      <div className={`font-UI capitalize`}>
        <div>
          <span
            className={` text-[12px] font-[400]
          ${isDarkMode ? `text-white/[.92]` : `text-black/[.86]`}
          `}
          >
            {titles[opinion][0]}
          </span>
        </div>
        <div className={`translate-y-[-4px]`}>
          <p
            className={` space-y-0 text-[12px] font-[400] leading-[-4]
          ${isDarkMode ? `text-white/[.64]` : `text-black/[.56]`}`}
          >
            {titles[opinion][1]}
          </p>
        </div>
      </div>
    </div>
  )
}
