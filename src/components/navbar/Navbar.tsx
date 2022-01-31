import React from 'react'
import { useNavigate } from 'react-router'
import { Breakpoints } from '../../App'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { NavbarBLAST } from './Navbar.BLAST'

const BLAST = require('../../static/BLAST.svg')

interface IProps {
  opening: boolean
  setOpening: (opening: boolean) => void
  breakpoint: Breakpoints
  isMain: boolean
  setLoadingBlast: (tag: string) => void
}

export const Navbar: React.FC<IProps> = ({
  opening,
  setOpening,
  breakpoint,
  isMain,
  setLoadingBlast,
}) => {
  let sm = breakpoint === `sm`
  let md = breakpoint === `md`
  let lg = breakpoint === `lg`

  const { toggle, isDarkMode } = useDarkMode()

  const { width, height } = useWindowSize()

  const lorems = ['dignissim', 'consectetur', 'purus']

  return (
    <nav
      className={`z-50 fixed top-0 right-0 left-0 flex items-center opacity-[0.985]  justify-center shadow-[2px_0_5px_2px_rgba(0,0,0,0.1)] ${
        isDarkMode
          ? `bg-gray-900 shadow-gray-200/60`
          : `bg-gray-200 shadow-gray-500/60`
      }`}
    >
      {width}
      {/* -{breakpoint} */}
      {/* <div
        className={`mx-6 cursor-pointer  font-Bebas text-React-p3 ${
          isDarkMode ? `text-gray-100` : `text-gray-900`
        }`}
        onMouseDown={() => setOpening(false)}
      >
        BACK
      </div> */}
      <div
        className={`max-w-200 w-full flex items-center justify-between text-React-h1 py-1 font-Cooper ${
          breakpoint === `lg`
            ? `mx-[200px]`
            : breakpoint === `md`
            ? `mx-[25px]`
            : `mx-[10px]`
        } `}
      >
        {/* {sm ? (
          <a className={`cursor-pointer`} onMouseDown={() => setOpening(false)}>
            Eros + {isMain ? `main` : 'not'}
          </a>
        ) : ( */}
        <a
          // href={`/`}
          // bg-[#ff6afd]/70
          // bg-[#00035a]/70
          onMouseDown={() => {
            setOpening(true)
            setOpening(false)
          }}
        >
          <NavbarBLAST sm={sm} />
        </a>
        {/* )} */}
      </div>

      <span
        className={`cursor-pointer  font-Bebas text-React-p3 mr-[2%] ${
          isDarkMode ? `text-gray-100` : `text-gray-900`
        }`}
        onMouseDown={() => toggle()}
      >
        {isDarkMode ? `DAYMODE` : `DARKMODE`}
      </span>
    </nav>
  )
}
