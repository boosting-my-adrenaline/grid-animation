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
      className={`h-[30vh] w-[100vw]  flex items-center justify-start cursor-pointer border-b border-[#333] ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }  shadow-[12px_2px_25px_80px_rgba(0,0,0,0.7)] `}
      ref={suggestedRef}
      onMouseLeave={() => setShownSuggestion(null)}
      style={{
        // backgroundImage: `url(${test})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className={`absolute w-full h-full ${
          isDarkMode
            ? 'bg-purple-100/30 shadow-[#ff6afd]/60'
            : 'bg-purple-300/50 shadow-purple-300/80'
        } shadow-[0px_0px_19px_4px_rgba(0,0,0,0.2)] `}
        // style={{
        //   background: 'rgba(0,0,0,0.9)',
        // }}
      />
      <div
        className={`absolute z-[11] left-0 w-[1vw] h-full bg-gradient-to-r ${
          isDarkMode
            ? `from-black via-purple-800/20`
            : `from-gray-500 via-purple-100`
        } to-transparent`}
      />
      <motion.div
        className={`relative z-10 flex items-center justify-start  w-full h-full overflow-x-scroll `}
        // drag={'x'}
        // dragConstraints={{ left: 200, right: 0 }}
        // dragElastic={0.2}
        // dragMomentum={false}
        // dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
          <NavbarCard
            card={cards[el]}
            i={el}
            height={suggestedHeight / 1.2}
            width={suggestedHeight * 1.6}
            columns={10}
            rows={1}
            open={open}
            lg={true}
            md={false}
            sm={false}
            handleClick={() => {}}
            isResizing={false}
          />
        ))}
      </motion.div>
      <div
        className={`absolute z-[11] right-0 w-[1vw] h-full bg-gradient-to-l ${
          isDarkMode
            ? `from-black via-purple-800/20`
            : `from-gray-500 via-purple-100`
        } to-transparent`}
      />
    </motion.div>
  )
}

/* <diva className={`mt-32 relative`}>
<h1 className={`text-5xl font-extrabold tracking-tight text-center`}>
  Get away this winter
</h1>
<ul
  className={`mt-10 pb-8 px-[50vh] w-full flex overflow-x-auto gap-8`}
>
  {[
    { image: l1, titile: 'Miami' },
    { image: l2, titile: 'Miami' },
    { image: l3, titile: 'Miami' },
    { image: l4, titile: 'Miami' },
  ].map((el, i) => (
    <li key={i}>
      <div
        className={`relative flex-shrink-0 max-w-[95vw] owerflow-hidden rounded-3xl`}
      >
        <img
          src={el.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover object-bottom`}
        />
        <div
          className={`z-10 absolute inset-0 h-full w-full bg-gradient-to-br from-black/25`}
        />
        <div
          className={`ralative h-96 w-[768px] p-12 flex flex-col justify-between items-start`}
        >
          <p className={`font-medium text-white`}>Destinations</p>
          <h2
            className={`mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white`}
          >
            {el.titile}
          </h2>
        </div>
        <a
          className={`px-4 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium`}
        >
          Browse destination
        </a>
      </div>
    </li>
  ))}
</ul>
</diva> */

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
