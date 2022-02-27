import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'
const t0 = require('../../static/theme/t0.jpg')
const t1 = require('../../static/theme/t1.jpg')
const t2 = require('../../static/theme/t2.jpg')
const t4 = require('../../static/theme/t4.jpg')
const t3 = require('../../static/theme/t3.jpg')
const t5 = require('../../static/theme/t5.jpg')
const t6 = require('../../static/theme/t6.jpg')
const t7 = require('../../static/theme/t7.jpg')

interface IProps {
  sm: boolean
  option: number
}

export const LandingCardSquareBig: React.FC<IProps> = ({ sm, option }) => {
  const images = [t0, t1, t2, t3, t4, t5, t6, t7]

  const titles = [
    [`Aenean eleifend`, `Habitant morbi tristique  et malesuada fames `],
    [`  Placerat Nulla Quis `, `   Morbi interdum at diam sodales feugiat `],
    [` Gravida suscipit  `, `  Maecenas rhoncus velit ut justo semper `],
    [
      `  Proin nulla magna `,
      `  Eleifend urna id lacus elementum sollicitudin `,
    ],
    [`  Praesent non `, ` Leo tincidunt, imperdiet sem non, vulputate  `],
    [`malesuada fames ac turpis`, `In fringilla sit amet nunc`],
    [`justo massa `, ` Vitae placerat eros`],
    [`dapibus vehicula vel `, ` Vehicula orci velit in purus`],
    [` Aliquam aliquet dapibus`, ` Varius sit amet orci et lacinia`],
  ]
  const { isDarkMode } = useDarkMode()
  return (
    <div className={`full h-full cursor-pointer select-none`}>
      <div className={`relative w-full overflow-hidden rounded-[6px] bg-black`}>
        <img
          src={images[option]}
          className={`aspect-[1] rounded-[6px] object-cover transition-all duration-200 ease-in hover:scale-[1.02] hover:opacity-70`}
        />
      </div>
      <div className={`font-UI `}>
        <div>
          <span
            className={` text-[15px] font-[400] capitalize
          ${isDarkMode ? `text-white/[.92]` : `text-black/[.86]`}
          `}
          >
            {titles[option][0]}
          </span>
        </div>
        <div className={`translate-y-[-8px]`}>
          <span
            className={` space-y-0 text-[12px] font-[400] leading-[1.25]
          ${isDarkMode ? `text-white/[.64]` : `text-black/[.56]`}`}
          >
            {titles[option][1]}
          </span>
        </div>
      </div>
    </div>
  )
}
