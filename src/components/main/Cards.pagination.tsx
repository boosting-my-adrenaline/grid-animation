import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Breakpoints } from '../../App'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import useLocalStorage from '../../utils/hooks/useLocalStorage'

interface IProps {
  open: null | number
  loadingCards: boolean
  setLoadingCards: (loading: boolean) => void
  handleShuffle: () => void
  breakpoint: Breakpoints
  windowWidth: number
}

type Button = '-' | '+' | 'de' | number

export const CardsPagination: React.FC<IProps> = ({
  open,
  loadingCards,
  setLoadingCards,
  handleShuffle,
  breakpoint,
  windowWidth,
}) => {
  const [currentPage, setCurrentPage] = useLocalStorage(`pagination page`, 1)
  const pages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ]

  const handleButtons = (): (number | 'de')[] => {
    if (currentPage < 5) {
      return [1, 2, 3, 4, 5, 'de', pages.length]
    } else if (currentPage > pages.length - 4) {
      return [
        1,
        'de',
        pages.length - 4,
        pages.length - 3,
        pages.length - 2,
        pages.length - 1,
        pages.length,
      ]
    } else {
      return [
        1,
        'de',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        'de',
        pages.length,
      ]
    }
  }
  const [buttons, setButtons] = useState<(number | 'de')[]>(handleButtons())

  useDidMountEffect(() => {
    setButtons(handleButtons())
  }, [currentPage])

  const buttonElements: Array<Button> = ['-', ...buttons, '+']
  // const buttons = [ '-', '', '+']

  const { isDarkMode } = useDarkMode()

  const handleDecrease = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handleIncrease = () => {
    if (currentPage < pages.length) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handleClick = (el: Button) => {
    if (loadingCards) return
    if (el === 'de') {
      return
    } else if (el === '+') {
      handleIncrease()
    } else if (el === '-') {
      handleDecrease()
    } else {
      setCurrentPage(el)
    }
  }

  let xl = windowWidth >= 2400

  useDidMountEffect(() => {
    let delay = Math.floor(Math.random() * 400) + 300
    setLoadingCards(true)
    handleShuffle()

    let id = setTimeout(() => {
      setLoadingCards(false)
    }, delay)

    return () => {
      clearTimeout(id)
      setLoadingCards(false)
    }
  }, [currentPage])

  const elements = buttonElements.map((el, i) => (
    <motion.div
      key={i}
      initial={{
        width: !xl ? '2.5rem' : '3.5rem',
        height: !xl ? '2.5rem' : '3.5rem',
        border: !xl ? '2px solid' : '3px solid',
        borderRadius: 5,
      }}
      animate={{
        width: !xl ? '2.5rem' : '3.5rem',
        height: !xl ? '2.5rem' : '3.5rem',
        border: !xl ? '2px solid' : '3px solid',
        borderColor:
          el === 'de' ? 'transparent' : currentPage === el ? '#009EFA' : '#ccc',
        opacity: loadingCards ? 0.5 : 1,
      }}
      whileHover={{ scale: el === 'de' || loadingCards ? 1 : 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`flex justify-center items-center cursor-pointer text-React-h2 font-Marriweather ${
        el === 'de'
          ? ''
          : el === '-' || el === '+'
          ? isDarkMode
            ? 'bg-gray-700'
            : 'bg-gray-200'
          : currentPage === el
          ? !isDarkMode
            ? 'bg-sky-200'
            : 'bg-sky-900 text-white'
          : isDarkMode
          ? 'text-white'
          : ''
      } `}
      onMouseDown={() => handleClick(el)}
    >
      {el !== '-' && el !== '+' && el !== 'de' ? (
        el
      ) : el === 'de' ? (
        <div
          className={`${
            xl
              ? `w-[1.3rem] h-[1.3rem] border-[3px] rounded-[5px]`
              : `w-[1rem] h-[1rem] border-2 rounded-sm`
          } border-[#ccc] ${
            `` // !isDarkMode ? 'bg-sky-200' : 'bg-sky-900 text-white'
          }`}
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-10 0 128 128"
          width={'1.2rem'}
          height={'1.2rem'}
          // style={{
          //   enableBackground: 'new 0 0 128 128',
          // }}
          className={`${el === '+' && `rotate-180`}`}
          xmlSpace="preserve"
        >
          <path
            style={{
              fill: isDarkMode ? 'rgb(55 65 81)' : 'rgb(229 231 235)',
              stroke: isDarkMode ? '#fff' : '#000',
              strokeWidth: 12,
              strokeMiterlimit: 10,
            }}
            d="M68 111.3 22.7 66 68 20.7"
          />
        </svg>
      )}
    </motion.div>
  ))

  return (
    <motion.div
      animate={{ height: open === null ? '5vh' : '0vh' }}
      transition={{ delay: 0.25 }}
      className={` w-full  flex items-center justify-center ${
        breakpoint !== `sm` ? `gap-[15px] ` : `gap-[3px] px-[2vh]`
      } my-[3vh]`}
    >
      {elements}
    </motion.div>
  )
}
