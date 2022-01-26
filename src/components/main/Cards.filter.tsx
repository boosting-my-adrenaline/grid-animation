import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'

interface IProps {
  open: boolean
}

export const Cardsfilter: React.FC<IProps> = ({ open }) => {
  const [filterHeight, setFilterHeight] = useState(open ? `5vh + 6px` : `0vh`)

  useDidMountEffect(() => {
    let id = setTimeout(
      () => {
        open === null
          ? setFilterHeight(`calc(5vh + 6px)`)
          : setFilterHeight(`calc(0vh + 0px)`)
      },
      open === null ? 300 : 250
    )
  }, [open])
  return (
    <motion.div
      animate={{ height: filterHeight }}
      className={` w-full bg-red-300`}
    >
      FILTER
    </motion.div>
  )
}
