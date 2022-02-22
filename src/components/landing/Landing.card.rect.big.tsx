import React, { useState } from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'

const g6 = require('../../static/g6.jpg')
const g7 = require('../../static/g7.jpg')
const g8 = require('../../static/g8.jpg')
const g9 = require('../../static/g9.jpg')
const g10 = require('../../static/g10.jpg')
const g11 = require('../../static/g11.jpg')
const g12 = require('../../static/g12.jpg')
const g13 = require('../../static/g13.jpg')
const g14 = require('../../static/g14.jpg')
const g15 = require('../../static/g15.jpg')
const g16 = require('../../static/g16.jpg')

interface IProps {
  sm: boolean
  option: number
}

export const LandingCardRectBig: React.FC<IProps> = ({ sm, option }) => {
  const { isDarkMode } = useDarkMode()

  const [hover, setHover] = useState(false)

  const images = [g16, g15, g14, g13, g12, g11, g10, g9, g8, g7, g6]

  const titles = [
    [`imperdiet`, `Curabitur aliquet enim posuere `, `facilisis ex`],
    [
      `Maecenas vitae magna fringilla`,
      `morbi tristique`,
      `asenectus et netus et`,
    ],
    [
      `rhoncus tempus dictum`,
      `ed egestas imperdiet luctus pellente `,
      `non odio ornare imperdiet`,
    ],
    [
      `Pellentesque habitant`,
      `Nullam id libero fermentum,`,
      `senectus et netus`,
    ],
    [`sollicitudin `, `Cras quis est`, `egestas`],
    [`ssagittis`, `digital roses don't die`, `erat dapibus`],
    [`posuere nec`, ` Vestibulum a lacus pretium mi blandit`, `condimentum`],
    [`ullamcorper`, `gravida porta`, `apple music hits`],
    [`molestie eu vitae nibh`, `egestas diam`, `Etiam nec tincidunt metus`],
    [
      `eu metus dolor`,
      `fringilla vitae dignissim in`,
      `Morbi vel turpis lacus`,
    ],
    [`tempor vel vulputate`, `Nullam lobortis `, `tincidunt ut tortor ut`],
  ]

  const title = [
    `Fusce ut elit quis nibh consectetur volutpat. Pellentesque quis venenatis libero. Nullam sed gravida mi.`,
    `Pellentesque et ligula nec justo egestas feugiat id a eros. Mauris sodales feugiat libero. Nam ac vehicula purus.`,
    `Mauris diam turpis,  id, auctor et velit. magna iaculis, non laoreet lacus pellentesque.`,
    `Aliquam mattis justo eu justo ullamcorper, molestie auctor nunc placerat. Donec imperdiet sapien ante, eget rutrum sem ultrices ut.`,
    `Phasellus odio justo, consequat ut ultrices sit amet, placerat eu nisi.`,
    `Duis nunc risus, ullamcorper quis quam ac, elementum scelerisque nulla. Phasellus ante metus, sagittis sit amet diam et.`,
    `Maecenas ultrices sem arcu, id vulputate nisl egestas et. In nec tellus pellentesque, auctor quam at, pellentesque mauris.`,
    `Etiam non nisl cursus, dignissim felis nec, condimentum urna. Duis pretium urna eleifend, sollicitudin justo vel, ultricies nibh.`,
    `Pellentesque facilisis felis purus, nec luctus lorem iaculis eu. Suspendisse sodales lectus sem.`,
    `Vivamus rutrum neque justo, quis rutrum ligula congue a. Sed faucibus, quam sed finibus cursus, ipsum velit fringilla nibh.`,
    `Nulla lacinia ipsum sit amet ante blandit lacinia. Aliquam ornare leo et condimentum iaculis.`,
  ]

  return (
    <div
      className={`font-UI  h-[100%] w-[100%] cursor-pointer px-[15p]`}
      //maxw-250
      //minw -190px
    >
      <div className={`pb-[4px]`}>
        <p
          className={`select-none text-[11px] font-[600] uppercase leading-[1.27] 
          ${isDarkMode ? `text-white/[.64]` : `text-black/[.56]`}`}
        >
          {titles[option][0]}
        </p>
        <div
          className={`select-none text-[17px] font-[400] capitalize leading-[1.29] 
          ${isDarkMode ? `text-white/[.92]` : `text-black/[.88]`}`}
        >
          {titles[option][1]}
        </div>
        <div
          className={`select-none text-[17px] font-[400] capitalize leading-[1.29] 
          ${isDarkMode ? `text-white/[.64]` : `text-black/[.56]`} `}
        >
          {titles[option][2]}
        </div>
      </div>

      <div
        className={` relative z-[1] flex w-full items-end overflow-hidden rounded-[6px] bg-black  transition-[background] duration-1000 ease-in`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          alt=""
          src={images[option]}
          className={`aspect-[1.743421052631579] h-auto w-full rounded-[6px] object-cover transition duration-200 ease-in ${
            hover && `scale-[1.02] rounded-[10px] opacity-70`
          } `}
        />

        <div
          className={`absolute flex h-[100px] w-full items-end whitespace-normal p-[24px_16px_16px]`}
          style={{
            background: `linear-gradient(transparent 0,rgba(0,0,0,.5))`,
          }}
        >
          <div className={`max-w-[85%] text-[12px] text-white`}>
            <span>{title[option]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
