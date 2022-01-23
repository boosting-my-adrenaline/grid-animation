import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import useDarkMode from '../../utils/hooks/useDarkMode'
import useElementSize from '../../utils/hooks/useElementSize'
import { handleClickMultiple3 } from './main.functions'

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
  columns: 3 | 2 | 1
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
  columns,
}) => {
  const items = Array.from(
    { length: columns === 3 ? 9 : 8 },
    (_, i) => colors[i]
  )
  let { isDarkMode } = useDarkMode()

  const [block, setBlock] = useState(false)

  const navigate = useNavigate()

  const handleClick = (i: number) => {
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
    // num: ,
    // block: boolean,
    // width: number,
    // height: number,
    // setBlock: (block: boolean) => void,
    // navigate: (link: string) => void,
    // setMultiple: (multiple: 1 | 3) => void,
    // setOpen: (open: number | null) => void,
    // setParams: ({}) => void
  }

  const elements = items.map((el, i) => (
    <motion.div
      initial={{
        width: width / 3,
        height: height / 3,
        scale: open === i ? 1 : 0.98,
        borderRadius: open === i ? 0 : height * 0.02,
        backgroundColor: el[0],
      }}
      animate={{
        width: width / 3,
        height: height / 3,
        scale: open === i ? 1 : 0.98,
        borderRadius: open === i ? 0 : height * 0.02,
      }}
      transition={{
        borderColor: { delay: open ? 0.45 : 0.25, duration: 0.1 },
        borderRadius: { delay: open ? 0.45 : 0.25, duration: 0.7 },
      }}
      className={`overflow-hidden flex flex-col justify-center items-center  bg-transparent p-[1%] cursor-pointer shado -[2px_2px_10px_5px_rgba(50,50,50,0.1)] shadow-cyan-800/50`}
      onMouseDown={() => handleClick(i)}
    >
      <motion.div
        initial={{
          position: `absolute`,
          backgroundColor: `whitesmoke`,
          opacity: 0.8,
        }}
        animate={
          open === i
            ? {
                width: width / 3 - width / 3,
                height: height / 3 - height / 3,
                borderRadius: 0,
              }
            : {
                width: width / 3 - height * 0.01,
                height: height / 3 - height * 0.01,
                borderRadius: height * 0.016,
              }
        }
        transition={{ duration: 0.6 }}
      />
      <div
        className={`z-10 flex flex-col items-start justify-start w-[100%] h-[100%] `}
      >
        <h1 className={`font-BebasNeue text-React-h1 `}>
          Tenetur, sapiente, ea excepturi
        </h1>
        <p className={`font-Bebas text-React-p4 `}>
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
        transition={{ duration: 1 }}
        className={`absolute  flex flex-wrap flex-row justify-between items-center`}
      >
        {elements}
      </motion.div>
    </div>
  )
}
