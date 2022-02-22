import React, { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { LandingArrow } from './Landing.arrow'
import './card.css'
import useElementSize from '../../utils/hooks/useElementSize'
import useOnScreen from '../../utils/hooks/useOnScreen'

import useDarkMode from '../../utils/hooks/useDarkMode'
import { LandingCardSquareSmall3 } from './Landing.card.square.small3'

interface IProps {
  sm: boolean
  handleNavigate: () => void
}
export const LandingCARDS6: React.FC<IProps> = ({ sm, handleNavigate }) => {
  const { width: windowWidth, height } = useWindowSize()
  const ref: any = useRef<HTMLElement>(null)

  let width = windowWidth > 1680 ? 1680 : windowWidth

  let columnWidth =
    width >= 1400
      ? (width - 100 - 80) / 6
      : width > 1160
      ? (width - 80 - 80) / 5
      : width > 1000
      ? (width - 60 - 80) / 4
      : !sm
      ? 211
      : (width - 50) / 2

  let snap =
    width >= 1400
      ? `snap-start`
      : width > 1160
      ? `snap-center`
      : width > 1000
      ? `snap-start`
      : !sm
      ? `snap-none`
      : `snap-start`

  const scroll = (offset: number) => {
    ref.current.scrollLeft += offset
  }

  const handleLeftArrow = () => {
    scroll(-width)
  }

  const handleRightArrow = () => {
    scroll(width)
  }

  const [ref2, { height: divHeight }] = useElementSize()
  const startRef: any = useRef()
  const endRef: any = useRef()

  const startOnScreen: boolean = useOnScreen<HTMLDivElement>(
    startRef,
    `${
      -0.7 *
      (width >= 1400
        ? (width - 100 - 80) / 6
        : width > 1160
        ? (width - 80 - 80) / 5
        : width > 1000
        ? (width - 60 - 80) / 4
        : !sm
        ? 211
        : (width - 50) / 2)
    }px`
  )
  const endOnScreen: boolean = useOnScreen<HTMLDivElement>(
    endRef,
    `${
      -0.8 *
      (width >= 1400
        ? (width - 100 - 80) / 6
        : width > 1160
        ? (width - 80 - 80) / 5
        : width > 1000
        ? (width - 60 - 80) / 4
        : !sm
        ? 211
        : (width - 50) / 2)
    }px`
  )

  const [hover, setHover] = useState(false)
  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    scroll(-width * 3)
  }, [sm])

  return (
    <>
      <header
        className={`flex w-full select-none items-center justify-between pt-[10px] ${
          width > 1000 ? `px-[40px]` : 'px-[20px]'
        }`}
        onMouseEnter={() => {
          // setTimeout(() =>
          setHover(true)
          // )
        }}
        onMouseLeave={() => setHover(false)}
      >
        <h1
          className={` text-[17px] font-[700]
          ${isDarkMode ? `text-white/[.92]` : `text-black/[.86]`}
          `}
        >
          Deesse
        </h1>
        <button
          onMouseDown={handleNavigate}
          className={`text-[15px] text-[#fa586a] decoration-2 outline-none hover:underline`}
        >
          See All
        </button>
      </header>

      <div
        className={`box-content flex w-full translate-y-[-8px] items-stretch justify-between align-top`}
        ref={ref2}
        onMouseEnter={() => {
          // setTimeout(() =>
          setHover(true)
          // )
        }}
        onMouseLeave={() => setHover(false)}
      >
        {/* <div className={`absolute left-10`}> scr: {scr ? 1 : 0}</div> */}
        {width > 1000 && (
          <LandingArrow
            onClick={handleLeftArrow}
            disabled={startOnScreen || !hover}
            height={divHeight}
          />
        )}
        <ul
          className={`no-scrollbar grid h-full w-full snap-x snap-mandatory ${
            width > 1000
              ? `scroll-pl-[40px] scroll-pr-[40px] pl-[40px] `
              : `scroll-pl-[20px] scroll-pr-[20px] pl-[20px]`
          } overflow-x-scroll scroll-smooth pt-[20px] pb-[10px]    ${
            width < 1000
          } ${
            width > 1000 ? `pr-[40px]` : ` pr-[150px]`
          } transition duration-300 ease-in`}
          style={{
            gridTemplateRows: `repeat(1, max-content)`,
            columnGap: !sm ? 20 : 10,
            rowGap: -10,
            gridTemplateColumns: `repeat(10, ${columnWidth}px) `,
            // columnGap: 20,
            // gridAutoColumns: `calc((100% - 2 * var(--grid-column-gap))/ 3)`,
            // gridAutoColumns: 2,
          }}
          ref={ref}
          onMouseDown={handleNavigate}
        >
          <li className={`h-full ${snap} `} ref={startRef}>
            <LandingCardSquareSmall3 sm={false} opinion={0} />
          </li>

          {[1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
            (el) => (
              <li key={el} className={`h-full ${snap} `}>
                <LandingCardSquareSmall3 sm={false} opinion={el} />
              </li>
            )
          )}

          <li className={`h-full ${snap} `} ref={endRef}>
            <LandingCardSquareSmall3 sm={false} opinion={19} />
          </li>
        </ul>
        {width > 1000 && (
          <LandingArrow
            onClick={handleRightArrow}
            right
            disabled={endOnScreen || !hover}
            height={divHeight}
          />
        )}
      </div>
      <div
        className={` h-[0.5px]  
         ${isDarkMode ? `bg-white/[.16]` : `bg-black/[.18]`}
         `}
        style={{ width: windowWidth > 1000 ? width - 80 : width - 40 }}
      />
    </>
  )
}
