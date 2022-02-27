import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useWindowSize } from '../../utils/hooks/useDimensions'

interface IProps {
  sm: boolean
}

export const AppleFooter: React.FC<IProps> = ({ sm }) => {
  const { width } = useWindowSize()
  const { isDarkMode } = useDarkMode()
  return (
    <footer
      className={`flex w-screen justify-center ${`bg-[#323232]`} font-UI`}
    >
      <div
        className={`relative z-[3] flex max-w-[1680px] ${
          sm && `flex-col-reverse`
        } w-full justify-between pt-[19px] pb-[89px] text-[13px]  ${
          width > 1000 ? `px-[40px]` : 'px-[20px]'
        }`}
      >
        <div className={``}>
          <p className={`${1 ? `text-white/[.64]` : `text-black/[.86]`}`}>
            Copyright © 2022{' '}
            <a
              className={`text-white/[.92] hover:text-[#fa586a] hover:underline`}
            >
              Blast Inc.
            </a>{' '}
            All rights reserved.
          </p>
          <ul className={`mt-[6px] flex flex-wrap`}>
            {[
              `Internet Service Terms`,
              `Blast Music & Privacy`,
              `Cookie Warning`,
              `Support`,
              `Feedback`,
            ].map((el, i) => (
              <li key={el} className={`mr-[10px] text-white/[.16]`}>
                <a
                  className={`mr-[10px] cursor-pointer text-white/[.92] hover:text-[#fa586a] hover:underline`}
                >
                  {el}
                </a>
                {i !== 4 && `|`}
              </li>
            ))}
          </ul>
        </div>
        <div className={`mb-[20px]`}>
          <a className={` cursor-pointer text-white/[.64]  hover:underline`}>
            United States
          </a>
        </div>
      </div>
    </footer>
  )
}
