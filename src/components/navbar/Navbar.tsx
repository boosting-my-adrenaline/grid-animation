import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { Breakpoints } from '../../App'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { NavbarBLAST } from './Navbar.BLAST'
import { motion } from 'framer-motion'
import { NavbarChapter } from './Navbar.chapter'
import { NavbarSuggested } from './Navbar.suggested'
import { Card } from '../main/cards.former'

interface IProps {
  opening: boolean
  setOpening: (opening: boolean) => void
  breakpoint: Breakpoints
  isCards: boolean
  setIsCards: (isCards: boolean) => void
  loadingBlast: null | string
  setLoadingBlast: (tag: string) => void

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

export const Navbar: React.FC<IProps> = ({
  opening,
  setOpening,
  breakpoint,
  isCards,
  loadingBlast,
  setIsCards,
  setLoadingBlast,
  open,
  setOpen,
  parentWidth,
  height,
  params,
  setParams,
  multiple,
  setMultiple,
  isResizing,
  loading,
  windowWidth,
  cards,
}) => {
  let sm = breakpoint === `sm`
  let md = breakpoint === `md`
  let lg = breakpoint === `lg`

  const { toggle, isDarkMode } = useDarkMode()

  const [test, setTest] = useState(0)
  const location = useLocation()

  const { pathname } = location

  useDidMountEffect(() => {
    if (pathname.slice(0, 6) === '/cards') {
      setIsCards(true)
    }
    setTest((prev) => prev + 1)
  }, [pathname])

  const navigate = useNavigate()

  const handleNavigate = (link: string) => {
    if (loadingBlast) {
      return
    }

    setOpening(false)
    setTimeout(() => {
      setLoadingBlast(link)
    }, 0)
    setShownSuggestion(null)
    setTimeout(() => {
      if (link === 'blast') {
        navigate('/')
      } else {
        navigate('/cards/' + link)
      }
    }, 800)
  }

  const navChapters = [
    'Elisium',
    'Nouveau',
    'Deesse',
    'Cherie',
    'Eunoia',
    'Redamancy',
    'Rever',
    'Sciamachy',
    'Querencia',
    'Caim',
    'Noir et Blanc',
  ]

  const [shownSuggestion, setShownSuggestion] = useState<number | null>(1)

  const chapters = navChapters.map((el, i) => (
    <NavbarChapter
      chapter={el}
      i={i}
      setShownSuggestion={setShownSuggestion}
      onClick={handleNavigate}
    />
  ))

  const renders = useRef(0)

  useEffect(() => {
    renders.current++
  })

  return (
    <nav
      className={`z-[50] fixed top-0 right-0 left-0 flex flex-col w-full  items-end justify-end  opacity-[0.995]`}
    >
      <motion.div
        className={`absolute w-full h-[8px] z-20 top-0 `}
        onMouseEnter={() => setShownSuggestion(null)}
        onMouseLeave={() => setShownSuggestion(null)}
      />

      <motion.div
        initial={{ y: '-100%' }}
        animate={{
          y:
            loadingBlast !== null || shownSuggestion === null
              ? '-100%'
              : '100%',
        }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.45 }}
        className={`absolute z-10 w-full `}
      >
        <NavbarSuggested
          shownSuggestion={shownSuggestion}
          setShownSuggestion={setShownSuggestion}
          open={open}
          setOpen={setOpen}
          parentWidth={parentWidth}
          height={height}
          params={params}
          setParams={setParams}
          multiple={multiple}
          setMultiple={setMultiple}
          isResizing={isResizing}
          loading={loading}
          windowWidth={windowWidth}
          cards={cards}
        />
      </motion.div>
      <div
        className={`z-10  px-[1%] w-full flex items-center justify-center ${
          isDarkMode
            ? `bg-gray-900 shadow-[#ff6afd]/80`
            : `bg-[rgb(231,224,237)] shadow-[#00035a]/40`
        } shadow-[2px_0_5px_2px_rgba(0,0,0,0.1)]`}
      >
        <div className={`${sm || 'invisible'} cursor-pointer`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            xmlSpace="preserve"
            width={!sm ? '2.5rem' : '2rem'}
            height={!sm ? '2.5rem' : '2rem'}
          >
            <ellipse
              cx={64}
              cy={64}
              rx={52.4}
              ry={51.5}
              style={{
                // fill: isDarkMode ? 'rgb(12 74 110)' : 'rgb(224 242 254)',
                fill: 'transparent',
                stroke: isDarkMode ? 'rgb(224 242 254)' : 'rgb(12 74 110)',
                strokeWidth: 6,
                strokeMiterlimit: 10,
              }}
            />
            <path
              style={{
                fill: !isDarkMode ? 'rgb(12 74 110)' : 'rgb(224 242 254)',
                stroke: isDarkMode ? 'rgb(224 242 254)' : 'rgb(12 74 110)',
              }}
              d="M35.7 68.1c-1.2 0-2.2-1.3-2.2-2.8v-2.5c0-1.5 1-2.8 2.2-2.8h56.6c1.2 0 2.2 1.3 2.2 2.8v2.5c0 1.5-1 2.8-2.2 2.8H35.7z"
            />
            <path
              style={{
                fill: !isDarkMode ? 'rgb(12 74 110)' : 'rgb(224 242 254)',
                stroke: isDarkMode ? 'rgb(224 242 254)' : 'rgb(12 74 110)',
              }}
              d="M92.3 60.4c1 0 1.8 1 1.8 2.3v2.5c0 1.3-.8 2.3-1.8 2.3H35.7c-1 0-1.8-1-1.8-2.3v-2.5c0-1.3.8-2.3 1.8-2.3h56.6m0-1H35.7c-1.4 0-2.6 1.5-2.6 3.3v2.5c0 1.8 1.2 3.3 2.6 3.3h56.6c1.4 0 2.6-1.5 2.6-3.3v-2.5c-.1-1.8-1.2-3.3-2.6-3.3zM35.7 46.5c-1.2 0-2.2-1.3-2.2-2.8v-2.5c0-1.5 1-2.8 2.2-2.8h56.6c1.2 0 2.2 1.3 2.2 2.8v2.5c0 1.5-1 2.8-2.2 2.8H35.7z"
            />
            <path
              style={{
                fill: !isDarkMode ? 'rgb(12 74 110)' : 'rgb(224 242 254)',
                stroke: isDarkMode ? 'rgb(224 242 254)' : 'rgb(12 74 110)',
              }}
              d="M92.3 38.8c1 0 1.8 1 1.8 2.3v2.5c0 1.3-.8 2.3-1.8 2.3H35.7c-1 0-1.8-1-1.8-2.3v-2.5c0-1.3.8-2.3 1.8-2.3h56.6m0-1H35.7c-1.4 0-2.6 1.5-2.6 3.3v2.5c0 1.8 1.2 3.3 2.6 3.3h56.6c1.4 0 2.6-1.5 2.6-3.3v-2.5c-.1-1.8-1.2-3.3-2.6-3.3zM35.7 89.7c-1.2 0-2.2-1.3-2.2-2.8v-2.5c0-1.5 1-2.8 2.2-2.8h56.6c1.2 0 2.2 1.3 2.2 2.8v2.5c0 1.5-1 2.8-2.2 2.8H35.7z"
            />
            <path
              style={{
                fill: !isDarkMode ? 'rgb(12 74 110)' : 'rgb(224 242 254)',
                stroke: isDarkMode ? 'rgb(224 242 254)' : 'rgb(12 74 110)',
              }}
              d="M92.3 82c1 0 1.8 1 1.8 2.3v2.5c0 1.3-.8 2.3-1.8 2.3H35.7c-1 0-1.8-1-1.8-2.3v-2.5c0-1.3.8-2.3 1.8-2.3h56.6m0-1H35.7c-1.4 0-2.6 1.5-2.6 3.3v2.5c0 1.8 1.2 3.3 2.6 3.3h56.6c1.4 0 2.6-1.5 2.6-3.3v-2.5c-.1-1.8-1.2-3.3-2.6-3.3z"
            />
          </svg>
        </div>

        {/* <div className={`absolute l-10`}>{isCards ? 1 : 0} </div> */}
        <div
          className={`bg-sky-20 w-full flex items-center overflow-hidden  ${
            sm ? 'justify-center' : `justify-between`
          } flex-grow! text-React-h1*0.75 py-1 font-Cooper ${
            breakpoint === `lg`
              ? `mx-[100px]`
              : breakpoint === `md`
              ? `mx-[25px]`
              : `mx-[10px]`
          } `}
        >
          {/* {renders.current} */}
          {/* {open === null ? 'NULL' : open}----- {multiple}X----- x: {params.x} - y:{' '}
        {params.y} */}
          <div
            className={` w-full relative flex   items-center ${
              sm ? 'justify-center' : 'justify-start'
            } gap-[2%] overflow `}
          >
            {/* {isCards ? 1 : 0} */}
            <a
              onMouseDown={() => handleNavigate('blast')}
              // onMouseDown={() => {
              //   setOpening(true)
              //   setTimeout(() => setOpening(false))
              // }}
            >
              <NavbarBLAST sm={sm} />
            </a>

            {!sm && (
              <div className={`flex items-center justify-between w-full `}>
                <div
                  className={`flex items-center justify-center`}
                  onMouseEnter={() => setShownSuggestion(null)}
                >
                  <div className={` absolute w-[30px] h-full `} />
                </div>

                <motion.div
                  className={` flex items-start justify-between gap- 6 w-full overflow-hidden flex-wrap h-custom1*0.75  bg-red-30`}
                >
                  {chapters}
                </motion.div>
                <div
                  className={`flex items-center justify-center`}
                  onMouseEnter={() => setShownSuggestion(null)}
                >
                  <div className={` absolute w-[30px] h-full `} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={`cursor-pointer z-10`} onMouseDown={() => toggle()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width={!sm ? '2.5rem' : '2rem'}
            height={!sm ? '2.5rem' : '2rem'}
            xmlSpace="preserve"
          >
            <path
              d="M69.6 50.6c0-11.8 4.7-22.5 12.2-30.4 2.3-2.4 1-6.5-2.3-7.1-5.2-.9-10.7-.9-16.3-.1-23 3.5-40.9 22.3-43.3 45.5-3.2 30.9 21 57 51.3 57 13.9 0 26.6-5.5 35.9-14.5 2.5-2.4 1.3-6.7-2.2-7.4-20.1-4-35.3-21.7-35.3-43z"
              style={{
                fill: !isDarkMode ? '#000' : 'rgb(252 211 77)',
                stroke: '#000',
                strokeMiterlimit: 10,
              }}
            />
          </svg>
        </div>
      </div>
    </nav>
  )
}
