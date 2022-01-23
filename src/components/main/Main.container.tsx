import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Breakpoints } from '../../App'
import useDarkMode from '../../utils/hooks/useDarkMode'
import useElementSize from '../../utils/hooks/useElementSize'
import { handleClickMultiple2, handleClickMultiple3 } from './main.functions'

interface IProps {
  open: null | number
  setOpen: (open: null | number) => void
  width: number
  height: number
  colors: [string, string, string, boolean, string][]
  params: { x: number; y: number }
  setParams: (params: { x: number; y: number }) => void
  multiple: number
  setMultiple: (multiple: number) => void
  breakpoint: Breakpoints
}

export const MainContainer: React.FC<IProps> = ({
  open,
  setOpen,
  height,
  width,
  colors,
  params,
  setParams,
  multiple,
  setMultiple,
  breakpoint,
}) => {
  let sm = breakpoint === `sm`
  let md = breakpoint === `md`
  let lg = breakpoint === `lg`
  const columns = breakpoint === 'lg' ? 3 : 2
  const rows = columns === 3 ? 3 : 2

  const items = Array.from(
    { length: columns === 3 ? 9 : 8 },
    (_, i) => colors[i]
  )

  let { isDarkMode } = useDarkMode()

  const [block, setBlock] = useState(false)

  const navigate = useNavigate()

  const handleClick = (i: number) => {
    if (columns === 3) {
      handleClickMultiple3(
        i,
        block,
        width,
        height,
        setBlock,
        navigate,
        setMultiple,
        setOpen,
        setParams,
        open
      )
    } else {
      handleClickMultiple2(
        i,
        block,
        width,
        height,
        setBlock,
        navigate,
        setMultiple,
        setOpen,
        setParams,
        open
      )
    }
  }

  const elements = items.map((el, i) => (
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
        scale: open === i ? 1 : 0.96,
        borderRadius: open === i ? 0 : height * 0.01,
      }}
      transition={{
        borderRadius: { delay: open ? 0.45 : 0.25, duration: 0.5 },
      }}
      className={`overflow-hidden flex flex-col justify-center items-center  bg-transparent ${
        lg ? `p-[1%]` : `p-[1.35%]`
      } cursor-pointer shado -[2px_2px_10px_5px_rgba(50,50,50,0.1)] shadow-cyan-800/50`}
      onMouseDown={() => handleClick(i)}
    >
      <motion.div
        initial={{
          position: `absolute`,
          backgroundColor: `whitesmoke`,
          opacity: 0.92,
        }}
        animate={
          open === i
            ? {
                width: width / columns - width / columns,
                height: height / rows - height / columns,
                borderRadius: 0,
              }
            : {
                width: width / columns - height * 0.005,
                height: height / rows - height * 0.005,
                borderRadius: height * 0.008,
              }
        }
        transition={{ duration: 0.5 }}
      />
      <div
        className={`z-10 flex flex-col items-start justify-start w-[100%] h-[100%] `}
      >
        <h1
          className={`font-BebasNeue ${
            lg ? `text-React-h1` : `text-React-h1*1.5`
          } `}
        >
          Tenetur, sapiente, ea excepturi
        </h1>
        <p
          className={`font-Bebas ${
            lg ? `text-React-p4` : `text-React-p4*.1.5`
          } `}
        >
          Error dicta molestias{' '}
          <span className={`text-neutral-500`}> nesciunt accusantium </span>in
          doloremque quisquam assumenda id, tenetur amet debitis. Debitis sequi
          eligendi<span className={`text-neutral-500`}> ex </span>voluptatum.
          Repellendus{' '}
          <span className={`text-neutral-500`}>architecto minus </span>
          exercitationem. Velit nihil odio
          <span className={`text-neutral-500`}> nostrum </span>dolorem eos,
          repellat ullam et deserunt pariatur, itaque
          <span className={`text-neutral-500`}> enim vero</span> quibusdam nulla
          quia.
        </p>
      </div>
    </motion.div>
  ))

  return (
    <div
      // style={{ width: width }} ////////?!!!
      className={`w-[100%] h-[100%] ${
        isDarkMode && 'b g-gray-900'
      }  flex justify-center items-start ${
        `` // !block ? `overflow-hidden` : 'overflow-hidden'
      }`}
      // ref={squareRef}
    >
      <motion.div
        initial={{
          scale: multiple,
          x: params.x,
          y: params.y,
          width: width,
          height: height,
        }}
        animate={{
          scale: multiple,
          x: params.x,
          y: params.y,
          width: width,
          height: height,
        }}
        transition={{ duration: 0.8 }}
        className={`absolute  flex flex-wrap flex-row justify-between items-center`}
      >
        {elements}
      </motion.div>
    </div>
  )
}
