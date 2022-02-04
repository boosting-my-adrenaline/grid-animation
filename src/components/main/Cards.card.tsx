import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { Card } from './cards.former'
import { text } from 'stream/consumers'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'

const whiteImage = require('../../static/white.png')

interface IProps {
  card: Card
  i: number
  height: number
  width: number
  columns: number
  rows: number
  open: null | number
  lg: boolean
  md: boolean
  sm: boolean
  handleClick: (num: number) => void
  isResizing: boolean
  loading: boolean
  noText?: boolean
}

export const CardsCard: React.FC<IProps> = ({
  card,
  i,
  height,
  width,
  open,
  columns,
  rows,
  lg,
  md,
  sm,
  handleClick,
  isResizing,
  loading,
  noText = false,
}) => {
  const { isDarkMode } = useDarkMode()

  const [hover, setHover] = useState(false)

  let highlight = {
    color: !hover && open !== i ? '' : card.colors.contrastForMain,
    transition: `0.2s ease-in-out`,
  }

  const skeletonStyle = isDarkMode
    ? `bg-slate-200 animate-pulse`
    : `bg-slate-700 animate-pulse`

  return (
    <motion.div
      initial={{
        width: width / columns,
        height: height / rows,
        scale: open === i ? 1 : 0.98,
        borderRadius: open === i ? 0 : height * 0.02,
        // backgroundColor: 'white',
      }}
      animate={{
        width: width / columns,
        height: !sm || open !== i ? height / rows : height,
        scale: open === i ? 1 : 0.93,
        borderRadius: open === i ? 0 : height * 0.0075,
        paddingTop: open === null ? (!sm ? '0.1%' : '0.5%') : ``,
        boxShadow: isDarkMode
          ? `3px 4px 12px -2px rgba(173,119,172, 0.8)`
          : `3px 4px 12px -2px rgba(22, 22, 22, 0.7)`,
        border: open !== i ? '1px solid #bbb' : 'none',
        backgroundImage:
          hover || open === i
            ? `linear-gradient(${card.colors.mainColor}, ${card.colors.mainColor}, ${card.colors.mainColor})`
            : isDarkMode
            ? `linear-gradient(25deg, rgba(21,25,181, 0.25), rgba(255,106,253,0.15), rgba(21,25,181, 0.15))`
            : `linear-gradient(5deg, rgba(255,106,253,0.3), rgba(0,3,90,0.2), rgba(255,106,253,0.3))`,
      }}
      whileHover={{
        scale: open === i ? 1 : 0.98,
        boxShadow: isDarkMode
          ? `3px 4px 12px 4px rgba(173,119,172, 0.5)`
          : `3px 4px 12px 4px rgba(22, 22, 22, 0.4)`,
      }}
      transition={{
        borderRadius: {
          defualt: {
            delay: isResizing ? 0 : open ? 0.45 : 0.25,
            duration: isResizing ? 0 : 0.5,
          },
        },
      }}
      className={`overflow-hidden flex flex-col justify-center items-center cursor-pointer `}
      onMouseDown={() => handleClick(i)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        ////////////SKELETON
        className={`${loading || `opacity-0`} absolute z-20 w-full h-full ${
          isDarkMode ? `bg-slate-800` : `bg-slate-100`
        } flex flex-col ${!sm ? `pt-[0.55%]` : `pt-[0.5%]`} ${
          !sm ? 'translate-y-[-0.35%]' : 'translate-y-[-0.5%]'
        } justify-center items-center `}
      >
        <motion.div
          initial={{
            width: width,
          }}
          animate={{
            width: width / columns - height * 0.005,
            height: '80vh',
            borderRadius: height * 0.006,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          className={`${skeletonStyle} flex justify-end items-end`}
        />

        <motion.div
          className={`z-10 bg-red-20 flex flex-col items-start justify-start translate-x-[-5%] translate-y-[5%] scale-90 p-[3%]  w-[100%] h-[100%] ${
            isDarkMode && open !== i ? `text-gray-200` : ``
          } `}
        >
          <div className={`flex-grow`} />

          <div
            className={`font-BebasNeue  flex items-center justify-start ${
              lg ? `text-React-h1` : `text-React-h1*1.5`
            } `}
            style={{ color: ' black' }}
          >
            {'\u00a0'}
            <div
              className={`w-[65%] absolute ${skeletonStyle} h-4  rounded-full translate-y-[-0.22rem]`}
            />
          </div>

          <p
            className={`font-Bebas  ${
              lg ? `text-React-p4` : `text-React-p4*.1.5`
            } `}
          >
            <p className={`flex justify-start items-center`}>
              {' '}
              {'\u00a0'}
              <div
                className={`w-full absolute flex items-center justify-start gap-2 translate-y-[0.1rem]`}
              >
                <div className={`${skeletonStyle} h-2 w-[15%] rounded-full`} />
                <div className={`${skeletonStyle} h-2 w-[46%] rounded-full`} />
                <div className={`${skeletonStyle} h-2 w-[25%] rounded-full`} />
              </div>
            </p>
            <p className={`flex justify-start items-center`}>
              {'\u00a0'}
              <div
                className={`w-full absolute flex items-center justify-start gap-2 translate-y-[0.1rem]`}
              >
                <div className={`${skeletonStyle} h-2 w-[26%] rounded-full`} />
                <div className={`${skeletonStyle} h-2 w-[15%] rounded-full`} />
                <div className={`${skeletonStyle} h-2 w-[35%] rounded-full`} />
              </div>
            </p>
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundImage: `url(${whiteImage})`,
          width: width,
        }}
        animate={
          open === i
            ? {
                width: width / columns - height * 0.005,
                borderRadius: 0,
                height: '0vh',
                backgroundColor: isDarkMode ? `#505050` : '#f5f5f5',
                backgroundImage: `url(${card.image.main})`,
                opacity: isDarkMode ? 0.85 : 1,
              }
            : {
                width: width / columns - height * 0.005,
                height: '80vh',
                borderRadius: height * 0.006,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                backgroundColor: isDarkMode ? `#505050` : '#f5f5f5',
                backgroundImage: `url(${card.image.main})`,
                opacity: isDarkMode ? 0.85 : 1,
              }
        }
        whileHover={{ opacity: 1 }}
        transition={{ duration: isResizing ? 0 : 0.5 }}
        className={`flex justify-end items-end`}
      >
        {card.popular ? (
          <motion.div
            initial={{ x: '100%', y: '50%' }}
            animate={{
              y: open !== i ? '50%' : 0,
              x: open !== i ? 0 : '100%',
              opacity: open === i ? 0 : 1,
            }}
            transition={{ default: { delay: 0.3 }, opacity: { delay: 0.1 } }}
            className={`absolute bg-[#0081CF] text-gray-100  px-[1rem]  rounded-l-full  ${
              !sm ? `text-[1.6vmin]` : `text-[2vmin]`
            } `}
          >
            most popular
          </motion.div>
        ) : null}
      </motion.div>

      <motion.div
        initial={{ padding: '3%', paddingTop: open === null ? '0%' : '3%' }}
        animate={{
          padding: '3%',
          paddingTop: open === null ? '0%' : !sm ? '3%' : '3%',
          scale: open === null && !hover && !loading ? 0.9 : 1,
          x: open === null && !hover && !loading ? '-5%' : '0%',
          y:
            open === i
              ? '0%'
              : open === null && !hover && !loading
              ? '5%'
              : '3%',
        }}
        transition={{
          default: { delay: 0.2, duration: 0.4 },
          scale: { duration: 0.3 },
          x: { duration: 0.3 },
          y: { duration: 0.3 },
        }}
        className={`z-10 bg-red-20 flex flex-col items-start justify-start w-[100%] h-[100%] ${
          isDarkMode && open !== i ? `text-gray-200` : ``
        } `}
      >
        <motion.div
          animate={{
            flexGrow: open === i ? 0 : 1,
          }}
          transition={{ delay: 0.15, duration: 0.3 }}
        />
        <h1
          className={`font-BebasNeue first-letter:uppercase   ${
            lg ? `text-React-h1` : `text-React-h1*1.5`
          } transition duration-200 ease-out`}
          style={{
            color:
              isDarkMode && !hover && open !== i
                ? 'rgb(209 213 219'
                : 'rgb(17 24 39 ',
          }}
        >
          {card.title}
        </h1>
        {noText || (
          <p
            className={`font-Bebas first-letter:uppercase ${
              lg ? `text-React-p4` : `text-React-p4*.1.5`
            } ${
              isDarkMode && !hover && open !== i
                ? 'text-gray-400'
                : hover || open === i
                ? 'text-gray-900'
                : 'text-gray-700'
            } transition duration-200 ease-out`}
          >
            {card.text.split(' ').map((el, i) => {
              if (el === el.toUpperCase()) {
                return (
                  <span
                    style={{
                      ...highlight,
                    }}
                    className={`lowercase`}
                  >
                    {el}{' '}
                  </span>
                )
              } else {
                return <span>{el} </span>
              }
            })}
          </p>
        )}
      </motion.div>
    </motion.div>
  )
}
