import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'

const n0 = require('../../static/nature/n0.jpg')
const n1 = require('../../static/nature/n1.jpg')
const n2 = require('../../static/nature/n2.jpg')
const n3 = require('../../static/nature/n3.jpg')
const n4 = require('../../static/nature/n4.jpg')
const n5 = require('../../static/nature/n5.jpg')
const n6 = require('../../static/nature/n6.jpg')
const n7 = require('../../static/nature/n7.jpg')
const n8 = require('../../static/nature/n8.jpg')
const n9 = require('../../static/nature/n9.jpg')
const n10 = require('../../static/nature/n10.jpg')
const n11 = require('../../static/nature/n11.jpg')
const n12 = require('../../static/nature/n12.jpg')
const n13 = require('../../static/nature/n13.jpg')

interface IProps {
  sm: boolean
  opinion: number
}

export const LandingCardSquareSmall2: React.FC<IProps> = ({ sm, opinion }) => {
  const images = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13]

  const titles = [
    [`  eros est tincidunt `, ` Suspendisse eget sem euismod`],
    [` commodo orci  `, `  Ut dui odio`],
    [`  suscipit augue `, ` fermentum eros `],
    [`    Vivamus lobortis nulla`, `  Nunc eleifend `],
    [` aliquam dignissim  `, ` Curabitur a dolor dui `],
    [`  Nullam suscipit `, ` sit amet vestibulum `],
    [` posuere tempor erat  `, ` Aenean et tincidunt leo `],
    [` Donec vehicula  `, `  metus  venenatis`],
    [`  arcu magna mollis sem `, ` consectetur adipiscing `],
    [`  auctor nisl lobortis `, ` congue leo augue sed metus `],
    [`  Curabitur volutpat  `, `  purus ac facilisis  `],
    [`  ultricies arcu sem `, ` Aliquam erat volutpat `],
    [`   odio eget elementum `, ` consectetur urna `],
    [` amet  vehicula velit.  `, ` Vestibulum euismod pretium `],
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
        <div className={`translate-y-[-8px]`}>
          <span
            className={` space-y-0 text-[12px] font-[400] leading-[1.25]
          ${isDarkMode ? `text-white/[.64]` : `text-black/[.56]`}`}
          >
            {titles[opinion][1]}
          </span>
        </div>
      </div>
    </div>
  )
}
