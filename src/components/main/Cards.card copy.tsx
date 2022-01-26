import React from 'react'
import { motion } from 'framer-motion'
import useDarkMode from '../../utils/hooks/useDarkMode'
const MiamiBeach = require('../../static/miami-beach.jpg')

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
    color: (isDarkMode && open === null) || 1 ? el[1] : `rgb(115 115 115)`,
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
          // backgroundColor: isDarkMode ? `#505050` : 'whitesmoke',
          backgroundImage: `url(${MiamiBeach})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          opacity: 0.3,
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
        style={{}}
      />
      <motion.div
        animate={open === null ? { scale: 0.8, x: '-10%', y: '10%' } : {}}
        transition={{ delay: 0.2, duration: 0.4 }}
        className={`z-10 flex flex-col items-start justify-start w-[100%] h-[100%] ${
          isDarkMode && open !== i ? `text-gray-200` : ``
        } `}
      >
        <motion.div
          animate={{ flexGrow: open === i ? 0 : 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        />
        <h1
          className={`font-BebasNeue   ${
            lg ? `text-React-h1` : `text-React-h1*1.5`
          } `}
          style={{ color: ' black' }}
        >
          Tenetur, sapiente, ea excepturi
        </h1>
        <p
          className={`font-Bebas  ${
            lg ? `text-React-p4` : `text-React-p4*.1.5`
          } `}
          style={{ color: 'black' }}
        >
          Error dicta molestias{' '}
          <span style={highlight}> nesciunt accusantium </span>in doloremque
          quisquam assumenda id, tenetur amet debitis. Debitis sequi eligendi
          <span style={highlight}> ex </span>voluptatum.
          {/* Repellendus{' '}
          <span style={highlight}>architecto minus </span>
          exercitationem. Velit nihil odio
          <span style={highlight}> nostrum </span>dolorem eos, repellat ullam et
          deserunt pariatur, itaque
          <span style={highlight}> enim vero</span> quibusdam nulla quia. */}
        </p>
      </motion.div>
    </motion.div>
  )
}
