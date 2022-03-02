import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'

const h0 = require('../../static/hotels/h0.jpg')
const h1 = require('../../static/hotels/h1.jpg')
const h2 = require('../../static/hotels/h2.jpg')
const h3 = require('../../static/hotels/h3.jpg')
const h4 = require('../../static/hotels/h4.jpg')
const h5 = require('../../static/hotels/h5.jpg')
const h6 = require('../../static/hotels/h6.jpg')

interface IProps {
  sm: boolean
  option: number
}

export const LandingCardRectSmall: React.FC<IProps> = ({ sm, option }) => {
  const { isDarkMode } = useDarkMode()

  const images = [h0, h1, h2, h3, h4, h5, h6]

  const titles = [
    `Curabitur quis`,
    `pulvinar magna`,
    `tempus dignissim`,
    `consequat turpis`,
    `sodales tortor `,
    `pellentesque ut`,
    `sed mattis`,
  ]

  return (
    <div className={`full h-full cursor-pointer select-none`}>
      <div className={`relative w-full overflow-hidden rounded-[6px] bg-black`}>
        <img
          src={images[option]}
          className={`aspect-[1.78]
          rounded-[6px]  object-cover
          transition-all duration-200 ease-in hover:scale-[1.02] hover:opacity-70`}
        />
      </div>
      <div className={`font-UI `}>
        <div>
          <span
            className={` text-[12px] font-[400]
          ${isDarkMode ? `text-white/[.92]` : `capitalize text-black/[.86]`}
          `}
          >
            {titles[option]}
          </span>
        </div>
      </div>
    </div>
  )
}
