import React, { useEffect, useRef } from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { LandingArrow } from './Landing.arrow'
import { LandingCardRectBig } from './Landing.card.rect.big'
import './card.css'
import useElementSize from '../../utils/hooks/useElementSize'
import useOnScreen from '../../utils/hooks/useOnScreen'
import useDarkMode from '../../utils/hooks/useDarkMode'

interface IProps {
  sm: boolean
  handleNavigate: () => void
}

export const LandingCARDS1: React.FC<IProps> = ({ sm, handleNavigate }) => {
  const { width: windowWidth } = useWindowSize()
  const ref: any = useRef<HTMLElement>(null)
  const { isDarkMode } = useDarkMode()

  let width = windowWidth > 1680 ? 1680 : windowWidth
  let columnWidth =
    width >= 1400
      ? (width - 40 - 80) / 3
      : width > 1000
      ? (width - 20 - 80) / 2
      : !sm
      ? 442
      : width - 40

  let snap =
    width >= 1500
      ? `snap-center`
      : width > 1000
      ? `snap-start`
      : !sm
      ? `snap-none`
      : `snap-center`

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
    windowWidth > 2700
      ? '-600px'
      : windowWidth > 2200
      ? '-560px'
      : windowWidth > 1800
      ? '-300px'
      : width > 1200
      ? '-260px'
      : '-100px'
  )
  const endOnScreen: boolean = useOnScreen<HTMLDivElement>(
    endRef,

    windowWidth > 2700
      ? '-600px'
      : windowWidth > 2200
      ? '-500px'
      : windowWidth > 1800
      ? '-300px'
      : width > 1200
      ? '-260px'
      : '-100px'
  )

  useEffect(() => {
    scroll(-width * 3)
  }, [sm])

  return (
    <>
      <div
        className={`box-content flex w-full items-stretch justify-between align-top`}
        ref={ref2}
      >
        {width > 1000 && (
          <LandingArrow
            onClick={handleLeftArrow}
            disabled={startOnScreen}
            height={divHeight}
            pt={22}
          />
        )}
        <ul
          className={`no-scrollbar grid h-full w-full snap-x snap-mandatory ${
            width > 1000
              ? `scroll-pl-[40px] scroll-pr-[40px] pl-[40px]`
              : `scroll-pl-[20px] scroll-pr-[20px] pl-[20px]`
          } overflow-x-scroll scroll-smooth pt-[20px] pb-[30px]   ${
            width < 1000
          } ${
            width > 1000 ? `pr-[40px]` : ` pr-[150px]`
          } transition duration-300 ease-in`}
          style={{
            gridTemplateRows: `repeat(1, max-content)`,
            gap: !sm ? 20 : 10,
            gridTemplateColumns: `repeat(11, ${columnWidth}px) `,
          }}
          ref={ref}
          onMouseDown={handleNavigate}
        >
          <li className={`h-full ${snap} `} ref={startRef}>
            <LandingCardRectBig sm={false} option={0} />
          </li>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
            <li key={el} className={`h-full ${snap} `}>
              <LandingCardRectBig sm={false} option={el} />
            </li>
          ))}

          <li className={`h-full ${snap} `} ref={endRef}>
            <LandingCardRectBig sm={false} option={10} />
          </li>
        </ul>
        {width > 1000 && (
          <LandingArrow
            onClick={handleRightArrow}
            right
            first
            disabled={endOnScreen}
            height={divHeight}
            pt={22}
          />
        )}
      </div>
      <div
        className={`mx-[40px] h-[0.5px]  
        ${isDarkMode ? `bg-white/[.16]` : `bg-black/[.18]`}`}
        style={{ width: windowWidth > 1000 ? width - 80 : width - 40 }}
      />
    </>
  )
}
