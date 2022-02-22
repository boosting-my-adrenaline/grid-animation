import React, { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { LandingArrow } from './Landing.arrow'
import './card.css'
import useElementSize from '../../utils/hooks/useElementSize'
import useOnScreen from '../../utils/hooks/useOnScreen'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { LandingCardRectSmall } from './Landing.card.rect.small'

interface IProps {
  sm: boolean
  handleNavigate: () => void
}
export const LandingCARDS5: React.FC<IProps> = ({ sm, handleNavigate }) => {
  const { width: windowWidth, height } = useWindowSize()
  const ref: any = useRef<HTMLElement>(null)

  let width = windowWidth > 1680 ? 1680 : windowWidth

  let columnWidth =
    width >= 1400
      ? (width - 80 - 80) / 5
      : width > 1160
      ? (width - 60 - 80) / 4
      : width > 1000
      ? (width - 40 - 80) / 3
      : !sm
      ? 260
      : (width - 50) / 2

  let snap =
    width >= 1400
      ? `snap-center`
      : width > 1160
      ? `snap-start`
      : width > 1000
      ? `snap-center`
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
      -0.8 *
      (width >= 1400
        ? (width - 80 - 80) / 5
        : width > 1160
        ? (width - 60 - 80) / 4
        : width > 1000
        ? (width - 40 - 80) / 3
        : !sm
        ? 260
        : (width - 50) / 2)
    }px`
  )
  const endOnScreen: boolean = useOnScreen<HTMLDivElement>(
    endRef,
    `${
      -0.8 *
      (width >= 1400
        ? (width - 80 - 80) / 5
        : width > 1160
        ? (width - 60 - 80) / 4
        : width > 1000
        ? (width - 40 - 80) / 3
        : !sm
        ? 260
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
          Hotels
        </h1>
        <button
          onMouseDown={handleNavigate}
          className={`text-[15px] text-[#fa586a] decoration-2 outline-none hover:underline`}
        >
          See All
        </button>
      </header>

      <div
        className={`box-content flex w-full translate-y-[-8px] items-stretch justify-between  align-top`}
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
            pt={-10}
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
            gap: !sm ? 20 : 10,
            gridTemplateColumns: `repeat(7, ${columnWidth}px) `,
            // columnGap: 20,
            // gridAutoColumns: `calc((100% - 2 * var(--grid-column-gap))/ 3)`,
            // gridAutoColumns: 2,
          }}
          ref={ref}
          onMouseDown={handleNavigate}
        >
          <li className={`h-full ${snap} `} ref={startRef}>
            <LandingCardRectSmall sm={false} option={0} />
          </li>

          {[1, 2, 3, 4, 5].map((el) => (
            <li key={el} className={`h-full ${snap} `}>
              <LandingCardRectSmall sm={false} option={el} />
            </li>
          ))}

          <li className={`h-full ${snap} `} ref={endRef}>
            <LandingCardRectSmall sm={false} option={6} />
          </li>
        </ul>
        {width > 1000 && (
          <LandingArrow
            onClick={handleRightArrow}
            right
            disabled={endOnScreen || !hover}
            height={divHeight}
            pt={-10}
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
