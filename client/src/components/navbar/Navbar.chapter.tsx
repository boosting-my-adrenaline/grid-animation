import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import useDarkMode from '../../utils/hooks/useDarkMode'

interface IProps {
  chapter: string
  i: number
  setShownSuggestion: (sug: null | number) => void
  onClick: (link: string) => void
  shownSuggestion: null | number
  test: boolean
}

export const NavbarChapter: React.FC<IProps> = ({
  chapter,
  i,
  setShownSuggestion,
  onClick,
  shownSuggestion,
  test,
}) => {
  const degree = Math.floor((Math.pow(++i, 1.5) * 245 - 135) % 360)

  const [hover, setHover] = useState(false)

  const { isDarkMode } = useDarkMode()

  return (
    <motion.div
      key={chapter}
      className={` mb-5 flex flex-grow justify-center`}
      onMouseDown={() => onClick(chapter.toLowerCase())}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      // onMouseLeave={() => setShownSuggestion(null)}
    >
      {/* <div
        className={`min-w-[0.3rem] flex-grow bg-red-500`}
        onMouseEnter={() => setShownSuggestion(null)}
      /> */}

      <motion.div
        // onMouseEnter={() => setShownSuggestion(i)}
        // onMouseDown={() => navigate(`/${chapter.toLowerCase()}`)}
        animate={{
          y: hover ? 4 : 0,
          backgroundImage: hover
            ? isDarkMode && !test
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
            : isDarkMode && !test
            ? `linear-gradient(${degree}deg, rgba(255, 106, 253, 0.8), rgba(224, 242, 254, 1)), linear-gradient(${degree}deg, rgba(255, 106, 253, 0.8), rgba(224, 242, 254, 1))`
            : `linear-gradient(${degree}deg, rgba(170,72,199, 0.7), rgba(0, 3, 90, 0.9)), linear-gradient(${degree}deg, rgba(170,72,199, 0.7), rgba(0, 3, 90, 0.9))`,
        }}
        whileTap={{
          backgroundImage: isDarkMode
            ? 'linear-gradient(to bottom right, #0081CF, #0081CF)'
            : 'linear-gradient(to bottom right, #0081CF, #0081CF)',
          // y: 4,
          scale: 0.9,
        }}
        // transition={{ type: `spring`, bounce: 0.6 }}
        className={`flex-grow cursor-pointer whitespace-nowrap bg-clip-text px-[0.5rem] text-center text-transparent`}
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
