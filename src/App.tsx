import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { CardsContainer } from './components/main/Cards.container'
import { Cardsfilter } from './components/main/Cards.filter'
import { Navbar } from './components/navbar/Navbar'
import { Page } from './components/pages/Page'
import useDarkMode from './utils/hooks/useDarkMode'
import { useDidMountEffect } from './utils/hooks/useDidMountEffect'
import { useWindowSize } from './utils/hooks/useDimensions'
import useElementSize from './utils/hooks/useElementSize'
import useLocalStorage from './utils/hooks/useLocalStorage'

export type Breakpoints = 'sm' | 'md' | 'lg'

export const App: React.FC = () => {
  const [parentRef, { width, height }] = useElementSize()

  const [open, setOpen] = useLocalStorage<null | number>('isOpen', null)
  const [multiple, setMultiple] = useLocalStorage('main-multiple', 1)
  const [params, setParams] = useLocalStorage('main-params', { x: 0, y: 0 })

  useEffect(() => {
    if (open === null) {
      setMultiple(1)
      setParams({ x: 0, y: 0 })
    }
  }, [open])

  const colors: [string, string, string, boolean, string][] = [
    ['#D65DB1', '#EDEDED', '#D65DB1', true, '#D65DB1'],
    ['#845EC2', '#EDEDED', '#845EC2', true, '#845EC2'],
    ['#FF6F91', '#EDEDED', '#FF6F91', true, '#FF6F91'],

    ['#F9F871', '#0A0AFF', '#0A0AFF', false, '#F9F871'],
    ['#FF9671', '#FDFDFD', '#FF9671', true, '#FF9671'],
    ['#FFC75F', '#2424FF', '#2424FF', false, '#FFC75F'],

    ['#4FFBDF', '#8F7200', '#8F7200', false, '#4FFBDF'],
    ['#C4FCEF', '#468847', '#468847', false, '#468847'],
    ['#B0A8B9', '#FDFDFD', '#B0A8B9', true, '#F9F871'],

    ['#D65DB1', '#EDEDED', '#D65DB1', true, '#D65DB1'],
  ]
  // const [squareRef, { width, height }] = useElementSize()

  const { isDarkMode } = useDarkMode()

  const { width: windowWidth, height: windowHeight } = useWindowSize()
  const [breakpoint, setBreakpoint] = useState<Breakpoints>(
    windowWidth > 1200
      ? `lg`
      : windowWidth < 1200 && windowWidth >= 768
      ? 'md'
      : 'sm'
  )

  useEffect(() => {
    windowWidth > 1200
      ? setBreakpoint(`lg`)
      : windowWidth < 1200 && windowWidth >= 768
      ? setBreakpoint('md')
      : setBreakpoint(`sm`)
  }, [windowWidth])

  const [opening, setOpening] = useState(false)

  useEffect(() => setOpening(open !== null), [open])

  const [isResizing, setIsResizing] = useState(false)
  useEffect(() => {
    setIsResizing(true)
    let id = setTimeout(() => setIsResizing(false), 300)
    return () => clearTimeout(id)
  }, [windowHeight, windowHeight])

  // const [filterHeight, setFilterHeight] = useState(open ? `5vh + 6px` : `0vh`)

  // useDidMountEffect(() => {
  //   let id = setTimeout(
  //     () => {
  //       open === null
  //         ? setFilterHeight(`calc(5vh + 6px)`)
  //         : setFilterHeight(`calc(0vh + 0px)`)
  //     },
  //     open === null ? 300 : 250
  //   )
  // }, [open])

  return (
    <div
      className={`w-full h-[100%] ${
        isDarkMode
          ? // ? `bg-[#333333] shadow-gray-200/60`
            `bg-[#101010] shadow-gray-200/60`
          : `bg-white shadow-gray-500/60`
      }`}
    >
      <BrowserRouter>
        <Navbar opening={opening} setOpening={setOpening} />
        <div
          className={` flex flex-col items-center justify-center pt-[5vh] max-w-[2000] ${
            `` // width >= 1200
            //   ? `mx-[200px]`
            //   : width < 1200 && width >= 800
            //   ? `mx-[50px] `
            //   : ` mx-[10]px`
          }  `}
        >
          <motion.div
            className={`w-[100%] flex flex-col items-center pt-[]`}
            ref={parentRef}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* <Cardsfilter open={open} /> */}
                    <CardsContainer
                      open={open}
                      setOpen={setOpen}
                      width={width}
                      height={windowHeight}
                      // height={height}
                      colors={colors}
                      params={params}
                      setParams={setParams}
                      multiple={multiple}
                      setMultiple={setMultiple}
                      breakpoint={breakpoint}
                      isResizing={isResizing}
                    />
                  </>
                }
              />
              <Route
                path="/page/*"
                element={
                  <Page
                    bg={colors[open || 9]}
                    width={width}
                    height={height}
                    setOpen={setOpen}
                    opening={opening}
                    windowWidth={windowWidth}
                  />
                }
              />
            </Routes>
          </motion.div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
