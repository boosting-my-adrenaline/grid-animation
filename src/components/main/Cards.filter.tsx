import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Breakpoints, Sort } from '../../App'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import useLocalStorage from '../../utils/hooks/useLocalStorage'
import useOnClickOutside from '../../utils/hooks/useOnClickOutside'
import { CardsFilterInside } from './Cards.filter.inside'

interface IProps {
  open: null | number
  loadingCards: boolean
  setLoadingCards: (loading: boolean) => void
  handleShuffle: () => void
  breakpoint: Breakpoints
  sort: Sort
  setSort: (sort: Sort) => void
  windowWidth: number
}

export const CardsFilter: React.FC<IProps> = ({
  open,
  loadingCards,
  setLoadingCards,
  handleShuffle,
  breakpoint,
  sort,
  setSort,
  windowWidth,
}) => {
  let sm = breakpoint === `sm`
  let md = breakpoint === `md`
  let lg = breakpoint === `lg`
  const { isDarkMode } = useDarkMode()

  const sorts: Sort[] = ['recommended', 'most popular', 'newest', 'oldest']

  const elements = sorts.map((el, i) => (
    <motion.div
      key={i}
      animate={{
        border: '1px solid',
        borderColor:
          el === sort
            ? isDarkMode
              ? 'rgb(3 105 161)'
              : '#0081CF'
            : isDarkMode
            ? 'rgb(12 74 110)'
            : 'rgb(186 230 253)',
        backgroundColor:
          el === sort
            ? isDarkMode
              ? 'rgb(186 230 253)'
              : '#0081CF'
            : isDarkMode
            ? 'rgba(12 74 110, 0.3)'
            : 'rgb(224 242 254)',
        color:
          el === sort
            ? isDarkMode
              ? 'rgb(7 89 133)'
              : 'rgb(255 255 255)'
            : isDarkMode
            ? 'rgb(186 230 253)'
            : 'rgb(12 74 110)',
      }}
      whileHover={{ y: 2 }}
      whileTap={{ scale: 0.9 }}
      className={`px-3 py-1 cursor-pointer rounded-md `}
      onMouseDown={() => {
        setSort(el)
        setIsSortOpened(false)
      }}
    >
      {el}
    </motion.div>
  ))

  const [isSortOpened, setIsSortOpened] = useState(false)
  const [isFilterOpened, setIsFilterOpened] = useState(false)
  const [filterActives, setFilterActives] = useLocalStorage('filters', 0)

  const [filterChanges, setFilterChanges] = useState(0)

  const handleChangeFilter = () => setFilterChanges((prev) => prev + 1)

  useDidMountEffect(() => {
    let delay = Math.floor(Math.random() * 300) + 300
    setLoadingCards(true)
    handleShuffle()

    let id = setTimeout(() => {
      setLoadingCards(false)
    }, delay)

    return () => {
      clearTimeout(id)
      setLoadingCards(false)
    }
  }, [sort, filterChanges])

  useDidMountEffect(() => {
    setIsSortOpened(false)
    setIsFilterOpened(false)
  }, [breakpoint])

  const handleOnClickOutsideSort = () => {
    setIsSortOpened(false)
  }
  const handleOnClickOutsideFilter = () => {
    setIsFilterOpened(false)
  }

  const refSort = useRef(null)
  const refFilter = useRef(null)

  useOnClickOutside(refSort, handleOnClickOutsideSort)
  useOnClickOutside(refFilter, handleOnClickOutsideFilter)

  const [show, setShow] = useLocalStorage('filterShow', false)

  useEffect(() => {
    let it = setTimeout(
      () => {
        if (open === null) {
          setShow(true)
        } else {
          setShow(false)
        }
      },
      open ? 250 : 300
    )

    // return () => clearTimeout(it)
  }, [open])

  return (
    <motion.div
      animate={
        show
          ? { height: 'min-content', y: 0, marginTop: !sm ? '1rem' : '0rem' }
          : { height: '0vh', y: -200, marginTop: '0rem' }
      }
      // transition={{ delay: 0.25 }}
      className={` w-full flex flex-col items-center justify-center  ${
        !sm ? `text-React-h3 px-4 ` : `text-React-h1 px-3 `
      } `}
    >
      <div className={`w-full flex items-center justify-between`}>
        {!sm ? (
          <>
            <div className={`py-4 flex items-center jusity-center gap-6`}>
              {elements}
            </div>
          </>
        ) : (
          <div className={`mt-3 flex w-full items-center justify-between `}>
            <div
              className={`px-3 py-1.5 my-3 ${
                isDarkMode
                  ? 'bg-sky-200 text-sky-800'
                  : 'bg-[#0081CF] text-white'
              }  cursor-pointer rounded-md flex items-center justify-between gap-2`}
              onMouseDown={() => {
                !isSortOpened
                  ? setTimeout(() => setIsSortOpened(true))
                  : setIsSortOpened(false)
              }}
            >
              {sort}
              <svg
                className={`w-[0.75rem] text-gray-100 ${
                  isSortOpened && `rotate-180`
                }  transition duration-400 ease`}
                viewBox="0 0 33.5 19.992"
              >
                <path
                  d="M33.5 0v5.223L16.63 18.492 0 5.343V.12l16.63 12.908z"
                  fill={isDarkMode ? 'rgb(7 89 133)' : 'white'}
                ></path>
              </svg>
            </div>
            {isSortOpened && (
              <div
                ref={refSort}
                className={`mt-1 absolute translate-y-[60%] z-10 flex gap-2 py-2 flex-col ${
                  isDarkMode ? '' : 'bg- sky-300'
                } opacity-95`}
              >
                {elements}
              </div>
            )}
          </div>
        )}
        <motion.div
          animate={{
            border: '1px solid',
            borderColor: isDarkMode ? 'rgb(3 105 161)' : '#0081CF',

            backgroundColor: isDarkMode ? 'rgb(186 230 253)' : '#0081CF',
            color: isDarkMode ? 'rgb(7 89 133)' : 'rgb(255 255 255)',
          }}
          whileHover={{ y: 2 }}
          whileTap={{ scale: 0.9 }}
          className={`px-3 ${
            lg
              ? `py-[0.15rem]`
              : md
              ? 'py-[0.225rem] -mt-[0.01rem]'
              : 'py-[0.3rem] mt-[0.7rem]'
          } cursor-pointer rounded-md flex justify-center items-center gap-2`}
        >
          <div
            onMouseDown={() => {
              !isFilterOpened
                ? setTimeout(() => setIsFilterOpened(true))
                : setIsFilterOpened(false)
            }}
            className={`flex items-center justify-center `}
          >
            {windowWidth > 1000 && `filters `}(
            <span className={`font-Pitch mt-0.5`}> {filterActives} </span>)
            {'\u00a0'}
            <svg viewBox="0 0 32 32" xmlSpace="preserve" width="1.5rem">
              <path
                d="M3.241 7.646 13 19v9l6-4v-5l9.759-11.354c.556-.65.089-1.646-.773-1.646H4.014c-.862 0-1.329.996-.773 1.646z"
                fill="transparent"
                stroke={isDarkMode ? 'rgb(7 89 133)' : 'white'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={2}
              />
            </svg>
          </div>
        </motion.div>
      </div>
      {isFilterOpened && (
        <div
          ref={refFilter}
          className={`mt-1 w-full  z-10 flex gap-2 py-2 flex-col opacity-95`}
        >
          <CardsFilterInside
            setFilterActives={setFilterActives}
            sm={sm}
            handleChangeFilter={handleChangeFilter}
          />
        </div>
      )}
    </motion.div>
  )
}
