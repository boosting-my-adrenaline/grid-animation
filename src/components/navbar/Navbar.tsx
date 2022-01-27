import React from 'react'
import { useNavigate } from 'react-router'
import { Breakpoints } from '../../App'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useWindowSize } from '../../utils/hooks/useDimensions'

interface IProps {
  opening: boolean
  setOpening: (opening: boolean) => void
  breakpoint: Breakpoints
  ref: any
}

export const Navbar: React.FC<IProps> = ({
  opening,
  setOpening,
  breakpoint,
  ref,
}) => {
  let sm = breakpoint === `sm`
  let md = breakpoint === `md`
  let lg = breakpoint === `lg`

  const { toggle, isDarkMode } = useDarkMode()

  // const { width, height } = useWindowSize()

  const lorems = ['dignissim', 'consectetur', 'purus']

  return (
    <nav
      className={`z-50    fixed top-0 right-0 left-0 flex items-center  justify-center shadow-[2px_0_5px_2px_rgba(0,0,0,0.1)] ${
        isDarkMode
          ? // ? `bg-[#131313] shadow-[#f9557b]/60`
            `bg-[#333333] shadow-gray-200/60`
          : `bg-gray-200 shadow-gray-500/60`
      }`}
      ref={ref}
    >
      {/* {width} - {breakpoint} */}
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
        {/* {!sm ? (
          <a href={`#`} onMouseDown={() => setOpening(false)}>
            Eros
          </a>
        ) : ( */}
        <a
          href={`#`}
          className={`flex flex-row-reverse`}
          onMouseDown={() => setOpening(false)}
        >
          {!sm && `Eros`}
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="4vh"
            height="4vh"
          >
            <path d="M23.027,37.975C25.896,34.223,27,33.122,27,31.022c0-2.87-2.318-4.194-4.194-5.518s-4.967-2.428-3.973-4.304 c-0.773-0.552-0.773-0.552-0.773-0.552l-2.318,2.87c0,0-1.747,1.878-1.656,4.084c0.11,2.649,1.225,3.516,3.532,5.077 c3.753,2.538,5.518,3.532,4.525,4.635C23.027,37.975,22.475,37.534,23.027,37.975z" />
            <path d="M32.124,30l4.875-6.283c0,0,1.692-1.805,1.692-5.189s-2.707-5.415-4.174-6.43S27.635,7.36,27.635,7.36 s-1.918-1.015-1.918-2.482c0-1.128,0.309-1.314,0.309-1.314L25.35,3l-4.258,5.713c0,0-1.692,1.805-1.692,4.512 s1.241,4.851,2.595,5.866c1.354,1.015,7.446,5.189,7.446,5.189s2,1.485,2.256,3.272c0.179,1.247,0.089,1.432-0.249,1.996 C32.124,30,32.124,30,32.124,30z" />
            <polygon points="29.781,47 20.219,47 19.219,43 12,43 13,41 20.781,41 29.219,41 37,41 38,43 30.781,43" />
          </svg>
        </a>
        {/* )} */}
      </div>
      {/* <span
        className={`cursor-pointer  font-Bebas text-React-p3 mr-[2%] ${
          isDarkMode ? `text-gray-100` : `text-gray-900`
        }`}
        onMouseDown={() => toggle()}
      >
        {isDarkMode ? `DAYMODE` : `DARKMODE`}
      </span> */}
    </nav>
  )
}
