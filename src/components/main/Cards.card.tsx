import React from 'react'
import { motion } from 'framer-motion'
import useDarkMode from '../../utils/hooks/useDarkMode'

interface IProps {
  el: [string, string, string, boolean, string]
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
}

export const CardsCard: React.FC<IProps> = ({
  el,
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
}) => {
  const { isDarkMode } = useDarkMode()

  let highlight = {
    color: isDarkMode && open === null ? el[4] : `rgb(115 115 115)`,
  }

  return (
    <motion.div
      initial={{
        width: width / columns,
        height: height / rows,
        scale: open === i ? 1 : 0.98,
        borderRadius: open === i ? 0 : height * 0.02,
        backgroundColor: el[0],
      }}
      animate={{
        width: width / columns,
        height: height / rows,
        scale: open === i ? 1 : 0.93,
        borderRadius: open === i ? 0 : height * 0.0075,
      }}
      transition={{
        borderRadius: {
          delay: isResizing ? 0 : open ? 0.45 : 0.25,
          duration: isResizing ? 0 : 0.5,
        },
      }}
      className={`overflow-hidden flex flex-col justify-center items-center  bg-transparent ${
        lg ? `p-[1%]` : `p-[1.35%]`
      } cursor-pointer shado -[2px_2px_10px_5px_rgba(50,50,50,0.1)] shadow-cyan-800/50`}
      onMouseDown={() => handleClick(i)}
    >
      <motion.div
        initial={{
          position: `absolute`,
          // backgroundColor: `whitesmoke`,
          backgroundColor: isDarkMode ? `#505050` : 'whitesmoke',

          opacity: 0.9,
        }}
        animate={
          open === i
            ? {
                width: width / columns - width / columns,
                height: height / rows - height / columns,
                borderRadius: 0,
                backgroundColor: isDarkMode ? `#505050` : 'whitesmoke',
              }
            : {
                width: width / columns - height * 0.005,
                height: height / rows - height * 0.005,
                borderRadius: height * 0.006,
                backgroundColor: isDarkMode ? `#505050` : 'whitesmoke',
              }
        }
        transition={{ duration: isResizing ? 0 : 0.5 }}
      />
      <div
        className={`z-10 flex flex-col items-start justify-start w-[100%] h-[100%] ${
          isDarkMode && open !== i ? `text-gray-200` : ``
        } `}
      >
        <h1
          className={`font-BebasNeue  ${
            lg ? `text-React-h1` : `text-React-h1*1.5`
          } `}
        >
          Tenetur, sapiente, ea excepturi
        </h1>
        <p
          className={`font-Bebas  ${
            lg ? `text-React-p4` : `text-React-p4*.1.5`
          } `}
        >
          Error dicta molestias{' '}
          <span style={highlight}> nesciunt accusantium </span>in doloremque
          quisquam assumenda id, tenetur amet debitis. Debitis sequi eligendi
          <span style={highlight}> ex </span>voluptatum. Repellendus{' '}
          <span style={highlight}>architecto minus </span>
          exercitationem. Velit nihil odio
          <span style={highlight}> nostrum </span>dolorem eos, repellat ullam et
          deserunt pariatur, itaque
          <span style={highlight}> enim vero</span> quibusdam nulla quia.
        </p>
      </div>
    </motion.div>
  )
}
