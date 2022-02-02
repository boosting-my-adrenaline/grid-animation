import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import useDarkMode from '../../utils/hooks/useDarkMode'
import useLocalStorage from '../../utils/hooks/useLocalStorage'

interface IProps {
  chapter: string
  i: number
  setShownSuggestion: (sug: null | number) => void
}

export const NavbarChapter: React.FC<IProps> = ({
  chapter,
  i,
  setShownSuggestion,
}) => {
  const degree = Math.floor((Math.pow(++i, 1.5) * 245 - 135) % 360)

  const navigate = useNavigate()
  const { isDarkMode } = useDarkMode()

  return (
    <motion.div
      key={chapter}
      className={` flex justify-center  flex-grow mb-5`}
      // onMouseLeave={() => setShownSuggestion(null)}
    >
      {/* <div
        className={`min-w-[0.3rem] flex-grow bg-red-500`}
        onMouseEnter={() => setShownSuggestion(null)}
      /> */}

      <motion.div
        onMouseEnter={() => setTimeout(() => setShownSuggestion(i))}
        onMouseDown={() => navigate(`/${chapter.toLowerCase()}`)}
        animate={{
          backgroundImage: isDarkMode
            ? `linear-gradient(${degree}deg, rgba(255, 106, 253, 0.8), rgba(224, 242, 254, 1)), linear-gradient(${degree}deg, rgba(255, 106, 253, 0.8), rgba(224, 242, 254, 1))`
            : `linear-gradient(${degree}deg, rgba(170,72,199, 0.7), rgba(0, 3, 90, 0.9)), linear-gradient(${degree}deg, rgba(170,72,199, 0.7), rgba(0, 3, 90, 0.9))`,
        }}
        whileTap={{
          backgroundImage: isDarkMode
            ? 'linear-gradient(to bottom right, #0081CF, #0081CF)'
            : 'linear-gradient(to bottom right, #0081CF, #0081CF)',
          y: 4,
        }}
        whileHover={{
          backgroundImage: isDarkMode
            ? `linear-gradient(${
                (degree + 94) % 360
              }deg, rgba(255, 228, 230, 1), rgba(224, 242, 254, 1)), linear-gradient(${
                (degree + 94) % 360
              }deg, rgba(255, 228, 230, 1), rgba(224, 242, 254, 1)), linear-gradient(${
                (degree + 94) % 360
              }deg, rgba(255, 228, 230, 1), rgba(224, 242, 254, 1))`
            : `linear-gradient(${
                (degree + 94) % 360
              }deg, rgba(85,37,144, 0.9), rgba(0, 3, 90, 0.9)), linear-gradient(${
                (degree + 94) % 360
              }deg, rgba(255, 106, 253, 0.8), rgba(0, 3, 90, 0.89))`,
          y: 2,
          backgroundColor: 'yellow',
        }}
        className={`flex-grow px-[0.5rem] text-center whitespace-nowrap text-transparent bg-clip-text cursor-pointer`}
      >
        <a>{chapter}</a>
      </motion.div>
      {/* <div
        className={`min-w-[0.3rem] flex-grow bg-red-500`}
        onMouseEnter={() => setShownSuggestion(null)}
      /> */}
    </motion.div>
  )
}
