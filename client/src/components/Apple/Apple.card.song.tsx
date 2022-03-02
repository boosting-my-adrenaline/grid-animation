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
  titles: [string, string, string, string]
  titles2: [string, string, string, string]
  images: [any, any, any, any]
}

export const AppleCardMusic: React.FC<IProps> = ({
  titles,
  titles2,
  images,
}) => {
  return (
    <div>
      <AppleSong image={images[0]} title={titles[0]} title2={titles2[0]} />
      <AppleSong image={images[1]} title={titles[1]} title2={titles2[1]} />
      <AppleSong image={images[2]} title={titles[2]} title2={titles2[2]} />
      <AppleSong image={images[3]} title={titles[3]} title2={titles2[3]} />
    </div>
  )
}

interface IProps2 {
  title: string
  title2: string
  image: any
}

export const AppleSong: React.FC<IProps2> = ({ title, title2, image }) => {
  const { isDarkMode } = useDarkMode()

  const images = [h0, h1, h2, h3, h4, h5, h6]

  return (
    <div className={`   `}>
      <div
        className={`mb-[7.5px] h-[0.5px] w-full   ${
          isDarkMode ? `bg-white/[.16]` : `bg-black/[.18]`
        }`}
      />

      <div
        className={`full relative flex h-full cursor-pointer select-none items-center overflow-hidden p-[0_19px_7.5px_5px]`}
      >
        <div
          className={`relative mr-[12px] h-[40px] w-[40px] shrink-0 overflow-hidden rounded`}
        >
          <img
            className={`aspect-[1] h-[40px] w-[40px] object-cover`}
            src={image}
            alt=""
          />
        </div>
        <ul className={`mr-[10px] flex-shrink-[10] flex-grow `}>
          <li
            className={`  text-[13px] capitalize leading-[1.385] ${
              isDarkMode ? `text-white/[.92]` : ` text-black/[.86]`
            }`}
          >
            {title}
          </li>
          <li
            className={` flex-shrink  text-[12px] leading-[1.25] first-letter:uppercase  ${
              isDarkMode ? `text-white/[.64]` : `text-black/[.56]`
            }`}
            style={{ textOverflow: `ellipsis` }}
          >
            {title2}
          </li>
        </ul>

        <div
          className={`flex h-[25px] w-[25px] shrink-0 items-center justify-center gap-[3px]`}
        >
          <svg viewBox="0 0 16 16" xmlSpace="preserve" width={14}>
            <circle cx={2} cy={8} r={1.75} fill="#fa586a" />
            <circle cx={8} cy={8} r={1.75} fill="#fa586a" />
            <circle cx={14} cy={8} r={1.75} fill="#fa586a" />
          </svg>
        </div>
      </div>
    </div>
  )
}
