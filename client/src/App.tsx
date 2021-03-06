import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { AppleContainer } from './components/Apple/Apple.Container'
import { LoadingPage } from './components/loading/LoadingPage'
import { CardsContainer } from './components/main/Cards.container'
import { CardsFilter } from './components/main/Cards.filter'
import { assembleCards } from './components/main/cards.former'
import { CardsPagination } from './components/main/Cards.pagination'
import { NavbarBlast } from './components/navbar-blast/NavbarBlast'
import { Page } from './components/pages/Page'
import { TeslaContainer } from './components/tesla/Tesla.container'
import useDarkMode from './utils/hooks/useDarkMode'
import { useDidMountEffect } from './utils/hooks/useDidMountEffect'
import { useWindowSize } from './utils/hooks/useDimensions'
import useElementSize from './utils/hooks/useElementSize'
import useLocalStorage from './utils/hooks/useLocalStorage'

export type Breakpoints = 'sm' | 'md' | 'lg'

export type Sort = 'most popular' | 'recommended' | 'newest' | 'oldest'

export const App: React.FC = () => {
  const [parentRef, { width, height }] = useElementSize()
  const [sort, setSort] = useLocalStorage<Sort>('sort', 'recommended')

  const [cards, setCards] = useLocalStorage(
    'cards',
    assembleCards(9, sort === `most popular` ? true : false)
  )

  const [shuffle, setShuffle] = useState(0)

  useDidMountEffect(() => {
    setCards(assembleCards(9, sort === `most popular` ? true : false))
  }, [shuffle, sort])

  const handleShuffle = () => {
    setShuffle((prev) => prev + 1)
  }

  const [loadingBlast, setLoadingBlast] = useState<null | string>('BLAST')
  const [allHidden, setAllHidden] = useState(true)

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    } catch (error) {
      window.scrollTo(0, 0)
    }

    setTimeout(() => setAllHidden(false), 500)
  }, [])

  const handleLoadingBlast = (tag: string) => {
    setTimeout(() => setLoadingCards(true), 200)
    setTimeout(() => setShuffle((prev) => prev + 1), 600)
    setTimeout(() => setLoadingCards(false), 900)

    if (loadingBlast === null) {
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      } catch (error) {
        window.scrollTo(0, 0)
      }
      setLoadingBlast(tag)
    }
  }

  const [open, setOpen] = useLocalStorage<null | number>('isOpen', null)
  const [multiple, setMultiple] = useLocalStorage('main-multiple', 1)
  const [params, setParams] = useLocalStorage('main-params', { x: 0, y: 0 })

  useEffect(() => {
    if (open === null) {
      setMultiple(1)
      setParams({ x: 0, y: 0 })
    }
  }, [open])

  const [isCards, setIsCards] = useState(true)

  useEffect(() => {
    if (isCards) {
      setTimeout(() => setOpen(null), 100)
    }
  }, [isCards])

  const { isDarkMode } = useDarkMode()

  const { width: windowWidth, height: windowHeight } = useWindowSize()
  const [breakpoint, setBreakpoint] = useState<Breakpoints>(
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

  const [opening, setOpening] = useState(false)

  useEffect(() => setOpening(open !== null), [open])

  const [isResizing, setIsResizing] = useState(false)
  useEffect(() => {
    setIsResizing(true)
    let id = setTimeout(() => setIsResizing(false), 300)
    return () => clearTimeout(id)
  }, [windowHeight, windowHeight])

  const [loadingCards, setLoadingCards] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoadingCards(false), 0)
  }, [])

  return (
    <div
      className={`h-[100%] w-full overflow-y-hidden transition duration-150  ${
        isDarkMode
        // ? `bg-[#101010] shadow-gray-200/60`
        // : `bg-[#FFFBFF] shadow-gray-500/60`
      }`}
    >
      <BrowserRouter>
        {loadingBlast && (
          <LoadingPage setLoadingBlast={setLoadingBlast} tag={loadingBlast} />
        )}
        <div
          // style={{ paddingTop: `${navbarHeight}px` }}
          className={`-z-10 flex flex-col items-center justify-center   ${
            breakpoint === `lg`
              ? windowWidth >= 1800
                ? `mx-[200px] `
                : `mx-[150px]  `
              : breakpoint === `md`
              ? windowWidth > 1000
                ? `mx-[100px]`
                : ` mx-[25px]`
              : windowWidth >= 300
              ? ` mx-[10px]`
              : 'mx-[2px]'
          }  ${allHidden && `opacity-0`}`}
        >
          <motion.div
            className={`flex w-[100%] flex-col items-center`}
            ref={parentRef}
          >
            <Routes>
              <Route
                path="*"
                element={
                  <div className={`flex w-[100vw] justify-center `}>
                    <AppleContainer
                      loadingBlast={loadingBlast}
                      setLoadingBlast={handleLoadingBlast}
                    />
                  </div>
                }
              />
              <Route
                path="/slide2"
                element={
                  <div
                    className={`relative top-0 w-[100vw] shrink-0 justify-center`}
                  >
                    <TeslaContainer
                      loadingBlast={loadingBlast}
                      setLoadingBlast={handleLoadingBlast}
                    />
                  </div>
                }
              />

              <Route
                path="/slide3"
                element={
                  <>
                    <NavbarBlast
                      breakpoint={breakpoint}
                      setOpening={setOpening}
                      loadingBlast={loadingBlast}
                      setIsCards={setIsCards}
                      windowWidth={windowWidth}
                      setLoadingBlast={handleLoadingBlast}
                    />
                    <div
                      className={`text-React-h1 ${
                        breakpoint === `lg`
                          ? windowWidth >= 1500
                            ? `py-[0.160rem]`
                            : `py-[0.4rem]`
                          : breakpoint === `md`
                          ? `py-2.5`
                          : `py-3.5`
                      } font-Cooper uppercase`}
                    >{`\u00a0`}</div>
                    <CardsFilter
                      open={open}
                      loadingCards={loadingCards}
                      setLoadingCards={setLoadingCards}
                      handleShuffle={handleShuffle}
                      breakpoint={breakpoint}
                      sort={sort}
                      setSort={setSort}
                      windowWidth={windowWidth}
                    />
                    <CardsContainer
                      open={open}
                      setOpen={setOpen}
                      width={width}
                      windowWidth={windowWidth}
                      height={windowHeight}
                      // colors={colors}
                      params={params}
                      setParams={setParams}
                      multiple={multiple}
                      setMultiple={setMultiple}
                      breakpoint={breakpoint}
                      isResizing={isResizing}
                      loading={loadingCards}
                      cards={cards}
                    />
                    <CardsPagination
                      open={open}
                      loadingCards={loadingCards}
                      setLoadingCards={setLoadingCards}
                      handleShuffle={handleShuffle}
                      breakpoint={breakpoint}
                      windowWidth={windowWidth}
                    />
                    <div className={`w-screen`}>
                      <Footer />
                    </div>
                  </>
                }
              />
              <Route
                path="/slide3/page/*"
                element={
                  <>
                    <NavbarBlast
                      breakpoint={breakpoint}
                      setOpening={setOpening}
                      loadingBlast={loadingBlast}
                      setIsCards={setIsCards}
                      windowWidth={windowWidth}
                      setLoadingBlast={handleLoadingBlast}
                    />
                    <div
                      className={`text-React-h1 ${
                        breakpoint === `lg`
                          ? windowWidth >= 1500
                            ? `py-[0.160rem]`
                            : `py-[0.4rem]`
                          : breakpoint === `md`
                          ? `py-2.5`
                          : `py-3.5`
                      } font-Cooper uppercase`}
                    >{`\u00a0`}</div>
                    <Page
                      card={cards[open || 0]}
                      width={windowWidth}
                      height={height}
                      setOpen={setOpen}
                      opening={opening}
                      windowWidth={windowWidth}
                      isMain={isCards}
                      setIsMain={setIsCards}
                    />

                    <div className={`w-screen`}>
                      <Footer />
                    </div>
                  </>
                }
              />
            </Routes>
          </motion.div>
        </div>
      </BrowserRouter>
    </div>
  )
}
