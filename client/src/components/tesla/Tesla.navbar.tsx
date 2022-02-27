import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'

interface IProps {
  show: boolean
  openMenu: () => void
  handleNavigate: (link: string) => void
}

export const TeslaNavbar: React.FC<IProps> = ({
  show,
  openMenu,
  handleNavigate,
}) => {
  const { width } = useWindowSize()

  const lg = width >= 1200
  const md = width < 1200 && width >= 900
  const sm = width < 900 && width >= 600
  const mobile = width < 600

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      className={`${
        !mobile ? `grid-cols-custom1` : `grid grid-cols-3`
      } fixed top-0 z-[50] grid h-[56px] w-full text-[14px] font-[500] text-[#171a20]`}
    >
      <div
        className={`flex h-full  flex-grow-0 items-center justify-start  ${
          lg ? `pl-[50px]` : !mobile ? `pl-[38px]` : `pl-[24px]`
        }`}
      >
        <h1
          className={` font-Tesla cursor-pointer text-[18px] tracking-[10px]`}
        >
          BLAST
        </h1>
      </div>
      <div className={` flex h-full items-center`}>
        <ul className={`flex h-full px-[7px]`}>
          {(lg
            ? [
                `Slide 1`,
                `Slide 2`,
                `Slide 3`,
                `Desse`,
                `Quantium`,
                `Nouveau`,
                // `show? ${show ? `y` : `n`}`,
              ]
            : []
          ).map((el) => (
            <li
              key={el}
              className={`h-full py-[11px]`}
              onMouseDown={() => {
                if (el === `Slide 1`) {
                  handleNavigate(`/slide1`)
                } else if (el === `Slide 2`) {
                  handleNavigate(`/slide2`)
                } else if (el === `Slide 3`) {
                  handleNavigate(`/slide3`)
                }
              }}
            >
              <a
                className={`font-Gotham flex h-full cursor-pointer items-center justify-center rounded-[14px] px-[16px] hover:bg-black/[0.06]`}
              >
                <span>{el}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`item flex h-full items-center justify-end ${
          lg ? `pr-[25px]` : !mobile ? `pr-[14px]` : `pr-[2px]`
        }`}
      >
        <ul className={`flex h-full px-[6px]`}>
          {(lg ? [`Shop`, `Account`, `Menu`] : [`Menu`]).map((el) => (
            <li
              key={el}
              className={`h-full py-[11px]`}
              onMouseDown={() => {
                if (el === 'Menu') {
                  openMenu()
                }
              }}
            >
              <a
                className={`flex h-full cursor-pointer items-center justify-center rounded-[14px] px-[17px] hover:bg-black/[0.06] ${
                  !lg && `bg-black/[0.06]`
                }`}
              >
                <span>{el}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
