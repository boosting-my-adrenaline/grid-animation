import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Breakpoints } from '../../App'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import { CardsAnimation } from './Cards.animation'
import { CardsCard } from './Cards.card'
import { Card } from './cards.former'
import {
  handleClickMultiple1,
  handleClickMultiple2,
  handleClickMultiple3,
} from './cards.functions'

interface IProps {
  open: null | number
  setOpen: (open: null | number) => void
  width: number
  height: number
  params: { x: number; y: number }
  setParams: (params: { x: number; y: number }) => void
  multiple: number
  setMultiple: (multiple: number) => void
  isResizing: boolean
  breakpoint: Breakpoints
  loading: boolean
  windowWidth: number
  cards: Card[]
}

export const CardsContainer: React.FC<IProps> = ({
  open,
  setOpen,
  height,
  width,
  params,
  setParams,
  multiple,
  setMultiple,
  isResizing,
  breakpoint,
  loading,
  windowWidth,
  cards,
}) => {
  let sm = breakpoint === `sm`
  let md = breakpoint === `md`
  let lg = breakpoint === `lg`
  const columns = lg ? 3 : md ? 2 : 1
  const rows = lg ? 3 : md ? 2 : 4

  // const items = Array.from(
  //   { length: columns === 3 ? 9 : 8 },
  //   (_, i) => colors[i]
  // )
  // const items = () => {
  //   if (lg) {
  //     return cards
  //   } else return cards.splice(0, 8)
  // }
  // .splice(0, 8)

  const items = cards

  let { isDarkMode } = useDarkMode()

  const [block, setBlock] = useState(false)

  const navigate = useNavigate()

  const handleClick = (i: number) => {
    if (lg) {
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
    } else if (md) {
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
    } else {
      handleClickMultiple1(
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
  const elements = items.map((el, i) => {
    if (!lg && i === 8) {
      return
    }
    return (
      <CardsCard
        card={el}
        i={i}
        height={height}
        width={width}
        open={open}
        columns={columns}
        rows={rows}
        lg={lg}
        md={md}
        sm={sm}
        handleClick={handleClick}
        isResizing={isResizing}
        loading={loading}
      />
    )
  })

  const [margin, setMargin] = useState('px-[0vh]')

  useDidMountEffect(() => {
    if (!open) {
      setMargin(`px-[10vh]`)
    } else {
      setMargin(`px-[0vh]`)
    }
  }, [open])

  return (
    <div
      // style={{ width: width }} ////////?!!!
      className={`w-[100%] relative  ${
        lg ? `h-[102vh]` : md ? `h-[202vh] ` : `h-[203vh]`
      }   flex justify-center items-start ${margin}  `}
      // ref={squareRef}
    >
      {loading && (
        <div
          style={{ width: windowWidth }}
          className={`absolute z-10  h-full`}
        ></div>
      )}
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
        transition={{ duration: isResizing ? 0 : 0.8 }}
        className={`absolute  flex flex-wrap flex-row justify-between items-center`}
      >
        {elements}
      </motion.div>
    </div>
  )
}
