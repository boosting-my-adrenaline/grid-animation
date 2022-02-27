import React, { useState } from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'

interface IProps {
  scroll: (offset: number) => void
  activeSlide: number
}

export const TeslaSide: React.FC<IProps> = ({ scroll, activeSlide }) => {
  const elements = [
    `first`,
    `second`,
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    `eighth`,
  ]

  return (
    <div>
      <ul className={`flex flex-col  gap-[4px]`}>
        {elements.map((el, i) => (
          <TeslaSideElement
            dark={activeSlide === 4}
            i={i}
            el={el}
            scroll={scroll}
            slides={elements.length}
            active={i + 1 === activeSlide}
          />
        ))}
      </ul>
    </div>
  )
}

interface IProps2 {
  i: number
  el: string
  scroll: (scroll: number) => void
  slides: number
  active: boolean
  dark: boolean
}

const TeslaSideElement: React.FC<IProps2> = ({
  i,
  el,
  scroll,
  slides,
  active,
  dark,
}) => {
  const [hover, setHover] = useState(false)
  const { height } = useWindowSize()

  const handleClick = () => {
    let offset = height * i - 100
    scroll(offset)
  }
  return (
    <div
      key={el}
      className={`z-20 flex h-[24px] cursor-pointer items-center pl-[14px]`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      // onMouseDown={() => onClick((i + 1) * (height / slides) - 200)}
      onMouseDown={handleClick}
    >
      <div className={`mr-[8px] flex  h-[24px] w-[4px] justify-center `}>
        <div
          className={`${
            active
              ? `w-[3.5px] ${dark ? `bg-white/[.9]` : `bg-black/[.9]`}`
              : `w-[1px] ${dark ? `bg-white/[.3]` : `bg-black/[.3]`}`
          }`}
        />
      </div>
      <span
        className={`font-Gotham w-full rounded-[6px] p-[4px]  text-center text-[10px] ${
          hover
            ? `${dark ? `bg-white/[.2]` : `bg-black/[.1]`}`
            : `text-transparent`
        } ease transition duration-200 ${
          dark ? `hover:text-white/[.9]` : `hover:text-black/[.9]`
        }`}
      >
        {' '}
        {el}
      </span>
    </div>
  )
}
