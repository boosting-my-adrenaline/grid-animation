import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import { useWindowSize } from '../../utils/hooks/useDimensions'

interface IProps {
  scroll: (offset: number) => void
  activeSlide: number
}

export const TeslaSide: React.FC<IProps> = ({ scroll, activeSlide }) => {
  const elements = [
    `praesent`,
    `awards`,
    'regardo',
    'mauris',
    'aliquam',
    'licinia',
    'reverso',
    `muerte`,
  ]

  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    let id = setTimeout(() => setShow(false), 900)

    return () => {
      clearTimeout(id)
      setShow(false)
    }
  }, [activeSlide])

  return (
    <div>
      <ul className={`flex flex-col gap-[4px]`}>
        {elements.map((el, i) => (
          <TeslaSideElement
            show={show}
            dark={[4, 5, 6, 8].includes(activeSlide)}
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
  show: boolean
}

const TeslaSideElement: React.FC<IProps2> = ({
  i,
  el,
  scroll,
  slides,
  active,
  dark,
  show,
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
      <div className={`mr-[8px] flex h-[24px] w-[4px] justify-center`}>
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
          hover || (active && show)
            ? `${dark ? `bg-white/[.2]` : `bg-black/[.1]`}`
            : `text-transparent`
        } ease transition duration-200 ${
          hover || (active && show)
            ? dark
              ? `text-white/[.9]`
              : `text-black/[.9]`
            : ``
        } uppercase`}
      >
        {el}
      </span>
    </div>
  )
}
