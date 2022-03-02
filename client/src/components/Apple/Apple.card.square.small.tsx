import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'

const w0 = require('../../static/winter/w0.jpg')
const w1 = require('../../static/winter/w1.jpg')
const w2 = require('../../static/winter/w2.jpg')
const w3 = require('../../static/winter/w3.jpg')
const w4 = require('../../static/winter/w4.jpg')
const w5 = require('../../static/winter/w5.jpg')
const w6 = require('../../static/winter/w6.jpg')
const w7 = require('../../static/winter/w7.jpg')
const w8 = require('../../static/winter/w8.jpg')
const w9 = require('../../static/winter/w9.jpg')
const w10 = require('../../static/winter/w10.jpg')
const w11 = require('../../static/winter/w11.jpg')
const w12 = require('../../static/winter/w12.jpg')
const w13 = require('../../static/winter/w13.jpg')

interface IProps {
  sm: boolean
  opinion: number
}

export const LandingCardSquareSmall: React.FC<IProps> = ({ sm, opinion }) => {
  const images = [w0, w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13]

  const titles = [
    [`  eros est tincidunt `, ` Suspendisse eget sem `],
    [` commodo orci  `, `  Ut dui odio`],
    [`  suscipit augue `, ` fermentum eros `],
    [`Vivamus lobortis nulla`, `  Nunc eleifend `],
    [` aliquam dignissim  `, ` Curabitur a dolor dui `],
    [`  Nullam suscipit `, ` sit amet vestibulum `],
    [` posuere tempor erat  `, ` Aenean et tincidunt leo `],
    [` Donec vehicula  `, `  metus  venenatis`],
    [`  arcu magna mollis sem `, ` consectetur adipiscing `],
    [`  auctor nisl lobortis `, ` congue leo augue sed `],
    [`  Curabitur volutpat  `, `  purus ac facilisis  `],
    [`  ultricies arcu sem `, ` Aliquam erat volutpat `],
    [`   odio eget elementum `, ` consectetur urna `],
    [` amet  vehicula velit.  `, ` Vestibulum euismod `],
  ]

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
            className={` text-[12px] font-[400] leading-[1.25]
          ${isDarkMode ? `text-white/[.92]` : `text-black/[.86]`}
          `}
          >
            {titles[opinion][0]}
          </span>
        </div>
        <div className={`translate-y-[-8px]`}>
          <span
            className={` space-y-0  text-[12px] font-[400] leading-[1.25]
          ${isDarkMode ? `text-white/[.64]` : `text-black/[.56]`}`}
          >
            {titles[opinion][1]}
          </span>
        </div>
      </div>
    </div>
  )
}
