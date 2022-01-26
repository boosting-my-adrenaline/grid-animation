import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'

interface IProps {
  open: null | number
}

export const Cardsfilter: React.FC<IProps> = ({ open }) => {
  const [height, setHeight] = useState(open !== null ? '0vh' : '5vh')

  useDidMountEffect(() => {
    let id = setTimeout(
      () => {
        open === null ? setHeight(`5vh`) : setHeight(`0vh`)
      },
      open === null ? 300 : 250
      // open === null ? 100 : 50
    )
  }, [open])

  return (
    <motion.div
      animate={{ height: height }}
      // animate={{ height: '0vh' }}
      className={` w-full bg-red-300 flex items-center justify-center`}
    >
      {/* {open === null && ( */}
      <motion.div>
        open? {open !== null ? 1 : 0}
        <button onClick={() => setHeight(`0vh`)}>test</button>
      </motion.div>
      {/* )} */}
    </motion.div>
  )
}
