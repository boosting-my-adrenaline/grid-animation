import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Breakpoints } from '../../App'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import useElementSize from '../../utils/hooks/useElementSize'
import { CardsCard } from './Cards.card'
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
  colors: [string, string, string, boolean, string][]
  params: { x: number; y: number }
  setParams: (params: { x: number; y: number }) => void
  multiple: number
  setMultiple: (multiple: number) => void
  isResizing: boolean
  breakpoint: Breakpoints
}

export const CardsContainer: React.FC<IProps> = ({
  open,
  setOpen,
  height,
  width,
  colors,
  params,
  setParams,
  multiple,
  setMultiple,
  isResizing,
  breakpoint,
}) => {
  // const { width: windowWidth } = useWindowSize()

  // let sm = windowWidth < -768
  // let md = windowWidth < 1200 && windowWidth > 768
  // let lg = windowWidth > 1200

  // const columns = lg ? 3 : md ? 2 : 1
  // // const columns = 1
  // const rows = lg ? 3 : md ? 2 : 5

  // const items = Array.from({ length: lg ? 9 : 8 }, (_, i) => colors[i])

  let sm = breakpoint === `sm`
  let md = breakpoint === `md`
  let lg = breakpoint === `lg`
  const columns = lg ? 3 : md ? 2 : 1
  const rows = lg ? 3 : md ? 2 : 4

  const items = Array.from(
    { length: columns === 3 ? 9 : 8 },
    (_, i) => colors[i]
  )

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
  const elements = items.map((el, i) => (
    <CardsCard
      el={el}
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
    />
  ))

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
        lg ? `h-[105vh]` : md ? `h-[205vh] ` : `h-[205vh]`
      } ${
        isDarkMode && 'bg-[ #333333]'
      }  flex justify-center items-start ${margin}`}
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
        transition={{ duration: isResizing ? 0 : 0.8 }}
        className={`absolute  flex flex-wrap flex-row justify-between items-center`}
      >
        {elements}
      </motion.div>
    </div>
  )
}

// import { motion } from 'framer-motion'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router'
// import { Breakpoints } from '../../App'
// import useDarkMode from '../../utils/hooks/useDarkMode'
// import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
// import { useWindowSize } from '../../utils/hooks/useDimensions'
// import useElementSize from '../../utils/hooks/useElementSize'
// import { CardsCard } from './Cards.card'
// import { handleClickMultiple2, handleClickMultiple3 } from './cards.functions'

// interface IProps {
//   open: null | number
//   setOpen: (open: null | number) => void
//   width: number
//   height: number
//   colors: [string, string, string, boolean, string][]
//   params: { x: number; y: number }
//   setParams: (params: { x: number; y: number }) => void
//   multiple: number
//   setMultiple: (multiple: number) => void
//   isResizing: boolean
//   // breakpoint: Breakpoints
// }

// export const CardsContainer: React.FC<IProps> = ({
//   open,
//   setOpen,
//   height,
//   width,
//   colors,
//   params,
//   setParams,
//   multiple,
//   setMultiple,
//   isResizing,
//   // breakpoint,
// }) => {
//   const { width: windowWidth } = useWindowSize()

//   let sm = windowWidth < -768
//   let md = windowWidth < 1200 && windowWidth > 768
//   let lg = windowWidth > 1200

//   const columns = lg ? 3 : md ? 2 : 1
//   // const columns = 1
//   const rows = sm ? 6 : 3

//   const items = Array.from({ length: lg ? 9 : 8 }, (_, i) => colors[i])

//   let { isDarkMode } = useDarkMode()

//   const [block, setBlock] = useState(false)

//   const navigate = useNavigate()

//   const handleClick = (i: number) => {
//     if (columns === 3) {
//       handleClickMultiple3(
//         i,
//         block,
//         width,
//         height,
//         setBlock,
//         navigate,
//         setMultiple,
//         setOpen,
//         setParams,
//         open
//       )
//     } else {
//       handleClickMultiple2(
//         i,
//         block,
//         width,
//         height,
//         setBlock,
//         navigate,
//         setMultiple,
//         setOpen,
//         setParams,
//         open
//       )
//     }
//   }
//   const elements = items.map((el, i) => (
//     <CardsCard
//       el={el}
//       i={i}
//       height={height}
//       width={width}
//       open={open}
//       columns={columns}
//       rows={rows}
//       lg={lg}
//       md={md}
//       sm={sm}
//       handleClick={handleClick}
//       isResizing={isResizing}
//     />
//   ))

//   const [margin, setMargin] = useState('px-[0vh]')

//   useDidMountEffect(() => {
//     if (!open) {
//       setMargin(`px-[10vh]`)
//     } else {
//       setMargin(`px-[0vh]`)
//     }
//   }, [open])

//   return (
//     <div
//       // style={{ width: width }} ////////?!!!
//       className={`w-[100%] relative  ${
//         lg ? `h-[105vh]` : md ? `h-[205vh] ` : `h-[270vh]`
//       } ${
//         isDarkMode && 'bg-[ #333333]'
//       }  flex justify-center items-start ${margin}`}
//       // ref={squareRef}
//     >
//       <motion.div
//         initial={{
//           scale: multiple,
//           x: params.x,
//           y: params.y,
//           width: width,
//           height: height,
//         }}
//         animate={{
//           scale: multiple,
//           x: params.x,
//           y: params.y,
//           width: width,
//           height: height,
//         }}
//         transition={{ duration: isResizing ? 0 : 0.8 }}
//         className={`absolute  flex flex-wrap flex-row justify-between items-center`}
//       >
//         {elements}
//       </motion.div>
//     </div>
//   )
// }
