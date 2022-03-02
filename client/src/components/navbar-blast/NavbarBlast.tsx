import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { Breakpoints } from '../../App'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { NavbarBLAST } from './Navbar.BLAST'
import { motion } from 'framer-motion'
import { NavbarChapter } from './Navbar.chapter'
import { Card } from '../main/cards.former'
import { NavbarBackground } from './Navbar.Background'
import { useScroll } from '../../utils/hooks/useScroll'

interface IProps {
  setOpening: (opening: boolean) => void
  breakpoint: Breakpoints
  setIsCards: (isCards: boolean) => void
  loadingBlast: null | string
  setLoadingBlast: (tag: string) => void
  windowWidth: number
}

export const NavbarBlast: React.FC<IProps> = ({
  setOpening,
  breakpoint,
  loadingBlast,
  setIsCards,
  setLoadingBlast,
  windowWidth,
}) => {
  let sm = breakpoint === `sm`
  let md = breakpoint === `md`
  let lg = breakpoint === `lg`

  const { toggle, isDarkMode } = useDarkMode()

  const location = useLocation()

  const { pathname } = location

  useDidMountEffect(() => {
    if (pathname.slice(0, 6) === '/cards') {
      setIsCards(true)
    }
  }, [pathname])

  const navigate = useNavigate()

  const handleNavigate = (link: string) => {
    if (!loadingBlast && [`Slide 1`, `Slide 2`, `Slide 3`].includes(link)) {
      setOpening(false)

      setTimeout(() => {
        setLoadingBlast(`f`)
      }, 0)

      setTimeout(() => {
        if (link === 'Slide 1') {
          navigate('/slide1')
        } else if (link === 'Slide 2') {
          navigate('/slide2')
        } else if (link === 'Slide 3') {
          navigate('/slide3')
        }
      }, 800)
    }
  }

  const navChapters = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Hotels',
    'Elisium',
    // 'Nouveau',
    'Deesse',
    'Cherie',

    'Eunoia',
    // 'Redamancy',
    // 'Rever',
    // 'Sciamachy',
    // 'Querencia',
    // 'Caim',
    // 'Noir et Blanc',
  ]

  const [shownSuggestion, setShownSuggestion] = useState<number | null>(null)

  const chapters = navChapters.map((el, i) => (
    <NavbarChapter
      chapter={el}
      i={i}
      setShownSuggestion={setShownSuggestion}
      onClick={handleNavigate}
      shownSuggestion={shownSuggestion}
      test={false}
    />
  ))

  // const renders = useRef(0)

  // useEffect(() => {
  //   renders.current++
  // })

  // const { isScrollingTop } = useScroll()
  const { isScrollingTop } = { isScrollingTop: true }

  const [menuOpen, setMenuOpen] = useState(false)

  const [showMenu, setShowMenu] = useState(false)

  // useDidMountEffect(() => {
  //  if(menuOpen) {
  //    return setShowMenu(true)
  //  }

  //  let id = setTimeout(() => setShowMenu(false), 500)

  //  return () => setTimeout
  // }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
    setShowMenu(false)
  }, [sm, md, lg])

  let [degree, hover] = [10, false]

  return (
    <>
      <div className={`fixed inset-0  z-[-10]`}>
        <NavbarBackground />
      </div>
      <motion.nav
        animate={{ y: !isScrollingTop ? '-110%' : 0 }}
        className={`fixed top-0 right-0 left-0 z-[30]  flex w-full flex-col items-end justify-end opacity-[0.995] `}
      >
        <motion.div
          className={`absolute top-0 z-20 h-[8px] w-full `}
          onMouseEnter={() => setShownSuggestion(null)}
          onMouseLeave={() => setShownSuggestion(null)}
        />

        {/* <motion.div
        initial={{ y: '-100%' }}
        animate={{
          y:
            loadingBlast !== null || shownSuggestion === null
              ? '-100%'
              : '100%',
        }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.45 }}
        className={`absolute z-10 flex w-full justify-start gap-[5vw] `}
      >
        <NavbarScontainer
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
      </motion.div> */}
        <div
          className={`z-10 flex w-full  items-center justify-center   ${
            sm ? `px-[30px]` : `px-[1%]`
          } ${
            isDarkMode
              ? `bg-gray-900 shadow-[2px_0_5px_2px_rgba(0,0,0,0.1)] shadow-[#ff6afd]/80`
              : `bg-[rgb(231,224,237)] shadow-[2px_0_5px_2px_rgba(0,0,0,0.1)] shadow-[#00035a]/40`
          } `}
        >
          <div
            className={`${sm || 'invisible'} cursor-pointer`}
            onMouseDown={() => setMenuOpen((prev) => !prev)}
          >
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

          {/* <div className={`absolute left-2`}>{windowWidth} </div> */}
          <div
            className={`max-w-[1700px]! flex w-full items-center overflow-hidden ${
              sm ? 'justify-center' : `justify-between`
            } flex-grow! text-React-h1*0.75 font-Cooper py-1 ${
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
              className={` relative flex w-full items-center ${
                sm ? 'justify-center' : 'justify-start'
              } overflow gap-[2%] `}
            >
              {/* {isCards ? 1 : 0} */}
              <a
                onMouseDown={() => handleNavigate('blast')}
                // onMouseDown={() => {
                //   setOpening(true)
                //   setTimeout(() => setOpening(false))
                // }}
              >
                <NavbarBLAST sm={sm} test={false} />
              </a>

              {!sm && (
                <div className={`flex w-full items-center justify-between `}>
                  <div
                    className={`flex items-center justify-center`}
                    onMouseEnter={() => setShownSuggestion(null)}
                  >
                    <div className={` absolute h-full w-[30px] `} />
                  </div>

                  <motion.div
                    className={` gap- 6 h-custom1*0.75 bg-red-30 flex w-full flex-wrap items-start justify-between  overflow-hidden`}
                  >
                    {chapters}
                  </motion.div>
                  <div
                    className={`flex items-center justify-center`}
                    onMouseEnter={() => setShownSuggestion(null)}
                  >
                    <div className={` absolute h-full w-[30px] `} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <motion.div
            whileHover={{ y: 4 }}
            whileTap={{ scale: 0.2, y: 0 }}
            className={`z-10 flex cursor-pointer `}
          >
            <div className={`flex-grow`} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width={!sm ? '2.5rem' : '2rem'}
              height={!sm ? '2.5rem' : '2rem'}
              xmlSpace="preserve"
              onMouseDown={() => toggle()}
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
          </motion.div>
        </div>

        {sm && menuOpen && (
          <motion.div
            initial={{
              // rotate: `180deg`,
              // x: `-50%`,
              y: `-120%`,
            }}
            animate={{
              // rotate: menuOpen ? `0deg` : `180deg`,
              // x: menuOpen ? `0` : `-50%`,
              y: menuOpen ? `0` : `-160%`,
            }}
            transition={{ type: 'just' }}
            className={` w-full origin-top bg-red-100 ${
              isDarkMode
                ? `   bg-gray-900/[.97]  shadow-[12px_2px_25px_80px_rgba(0,0,0,0.7)] `
                : `bg-[rgb(231,224,237)]/[.97]   shadow-[12px_2px_25px_80px_rgba(0,0,0,0.7)]`
            }`}
          >
            <div
              className={`flex  w-full flex-col items-center ${
                isDarkMode
                  ? ` shadow-[2px_0_5px_2px_rgba(0,0,0,0.1)] shadow-[#ff6afd]/70`
                  : ` shadow-[2px_0_5px_2px_rgba(0,0,0,0.1)] shadow-[#00035a]/30`
              }`}
            >
              <ul className={`flex  flex-wrap justify-between p-[30px_20px] `}>
                {navChapters.map((el) => (
                  <li
                    key={el}
                    className={` ${
                      windowWidth >= 700
                        ? `flex-[25%]`
                        : windowWidth >= 600
                        ? `flex-[33%]`
                        : windowWidth >= 400
                        ? `flex-[50%]`
                        : `flex-[100%]`
                    } flex justify-center p-[10px_30px]`}
                    onMouseDown={() => {
                      setMenuOpen(false)
                      handleNavigate(el)
                    }}
                  >
                    <a
                      className={`font-Cooper cursor-pointer rounded-[6px] ${
                        isDarkMode ? `bg-white/80` : `bg-black/20`
                      } p-[7px_15px] text-[20px] tracking-[0.75px]`}
                    >
                      <motion.span
                        animate={{
                          backgroundImage: hover
                            ? isDarkMode
                              ? `linear-gradient(${
                                  (degree + 94) % 360
                                }deg, rgba(255, 228, 230, 1), rgba(224, 242, 254, 1)), linear-gradient(${
                                  (degree + 94) % 360
                                }deg, rgba(255, 228, 230, 1), rgba(224, 242, 254, 1)), linear-gradient(${
                                  (degree + 94) % 360
                                }deg, rgba(255, 228, 230, 1), rgba(224, 242, 254, 1))`
                              : `linear-gradient(${
                                  (degree + 94) % 360
                                }deg, rgba(0,0,0, 0.9), rgba(0, 3, 90, 0.9)), linear-gradient(${
                                  (degree + 94) % 360
                                }deg, rgba(0,0,0, 0.8), rgba(0, 3, 90, 0.89))`
                            : isDarkMode
                            ? `linear-gradient(${degree}deg, rgba(255, 106, 253, 0.8), rgba(224, 242, 254, 1)), linear-gradient(${degree}deg, rgba(255, 106, 253, 0.8), rgba(224, 242, 254, 1))`
                            : `linear-gradient(${degree}deg, rgba(170,72,199, 0.7), rgba(0, 3, 90, 0.9)), linear-gradient(${degree}deg, rgba(170,72,199, 0.7), rgba(0, 3, 90, 0.9))`,
                        }}
                        className={`bg-clip-text`}
                      >
                        {el}
                      </motion.span>
                    </a>
                  </li>
                ))}
              </ul>
              <div
                className={`  mb-[40px] h-[1px] w-[90%] rounded-full bg-gradient-to-r from-transparent  via-gray-500/[90] to-transparent `}
              />
              <motion.div
                animate={{ rotate: 90, scale: [1.1, 1, 1.1] }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 1.3,
                }}
                className={`mb-[40px] flex h-[50px] w-[50px]  cursor-pointer items-center justify-center rounded-full border-black/90 bg-gray-400`}
                onMouseDown={() => setMenuOpen(false)}
              >
                <div
                  className={`absolute h-[4px] w-[36px] rotate-45 rounded-full bg-red-500`}
                />
                <div
                  className={`absolute h-[4px] w-[36px] rotate-[135deg] rounded-full bg-red-500`}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  )
}
