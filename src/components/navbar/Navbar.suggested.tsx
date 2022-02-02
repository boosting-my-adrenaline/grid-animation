import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import useElementSize from '../../utils/hooks/useElementSize'
import { CardsCard } from '../main/Cards.card'
import { CardsContainer } from '../main/Cards.container'
import { assembleCards, Card, CardColors } from '../main/cards.former'
import { NavbarCard } from './Navbar.card'

const test = require('../../static/g2.jpg')

interface IProps {
  shownSuggestion: null | number
  setShownSuggestion: (show: null) => void

  open: null | number
  setOpen: (open: null | number) => void
  parentWidth: number
  height: number
  params: { x: number; y: number }
  setParams: (params: { x: number; y: number }) => void
  multiple: number
  setMultiple: (multiple: number) => void
  isResizing: boolean
  loading: boolean
  windowWidth: number
  cards: Card[]
}

export type BreakpointsNavbar = `lg` | `md` | `sm`

export interface NavCard {
  title: string
  text: string
  colors: CardColors
  image: {
    main: any
    vertical: any
    gorizontal: any
  }
}

export const NavbarSuggested: React.FC<IProps> = ({
  shownSuggestion,
  setShownSuggestion,
  open,
  setOpen,
  height,
  parentWidth,
  params,
  setParams,
  multiple,
  setMultiple,
  isResizing,
  loading,
  windowWidth,
}) => {
  const [cards, setCards] = useState(assembleCards(9, false))

  const [shuffle, setShuffle] = useState(0)

  useDidMountEffect(() => {
    setCards(assembleCards(9, false))
  }, [shuffle])

  const [breakpoint, setBreakpoint] = useState<BreakpointsNavbar>(
    windowWidth > 1200
      ? `lg`
      : windowWidth < 1200 && windowWidth >= 800
      ? 'md'
      : 'sm'
  )

  useEffect(() => {
    windowWidth > 1200
      ? setBreakpoint(`lg`)
      : windowWidth < 1200 && windowWidth > 800
      ? setBreakpoint(`md`)
      : setBreakpoint(`sm`)
  }, [windowWidth])

  const [suggestedRef, { width: suggestedWidth, height: suggestedHeight }] =
    useElementSize()

  const { isDarkMode } = useDarkMode()

  return (
    <motion.div
      className={`h-[35vh]  flex items-center justify-center cursor-pointer border-b border-[#333] `}
      ref={suggestedRef}
      // onMouseLeave={() => setShownSuggestion(null)}
      style={{
        // backgroundImage: `url(${test})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className={`absolute w-full h-full  text-[10rem] flex justify-center items-center`}
        style={{
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 20px 30px rgba(0, 0, 0, 0.55)',
        }}
      ></div>

      <div className={`z-10 flex items-center justify-start `}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
          <NavbarCard
            card={cards[el]}
            i={el}
            height={suggestedHeight * 0.66}
            width={parentWidth / 1.5}
            columns={3}
            rows={1}
            open={open}
            lg={true}
            md={false}
            sm={false}
            handleClick={() => {}}
            isResizing={false}
          />
        ))}
      </div>
    </motion.div>
  )
}

// {<div
//     // style={{ width: width }} ////////?!!!
//     className={`w-[100%] relative  ${
//       lg ? `h-[102vh]` : md ? `h-[202vh] ` : `h-[203vh]`
//     }   flex justify-center items-start ${margin}  `}
//     // ref={squareRef}
//   >
//     {loading && (
//       <div
//         style={{ width: windowWidth }}
//         className={`absolute z-10  h-full`}
//       ></div>
//     )}
//     <motion.div
//       initial={{
//         scale: multiple,
//         x: params.x,
//         y: params.y,
//         width: width,
//         height: height,
//       }}
//       animate={{
//         scale: multiple,
//         x: params.x,
//         y: params.y,
//         width: width,
//         height: height,
//       }}
//       transition={{ duration: isResizing ? 0 : 0.8 }}
//       className={`absolute  flex flex-wrap flex-row justify-between items-center`}
//     >
//       {elements}
//     </motion.div>
//   </div>}
