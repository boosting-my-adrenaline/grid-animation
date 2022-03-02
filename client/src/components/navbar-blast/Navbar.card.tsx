import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import useDarkMode from '../../utils/hooks/useDarkMode'
// import { text } from 'stream/consumers'
// import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
// import { NavCard } from './Navbar.suggested'

// const whiteImage = require('../../static/white.png')

// interface IProps {
//   card: NavCard
//   i: number
//   height: number
//   width: number
//   columns: number
//   rows: number
//   open: null | number
//   lg: boolean
//   md: boolean
//   sm: boolean
//   handleClick: (num: number) => void
//   isResizing: boolean
// }

// export const NavbarCard: React.FC<IProps> = ({
//   card,
//   i,
//   height,
//   width,
//   open,
//   columns,
//   rows,
//   lg,
//   md,
//   sm,
//   handleClick,
//   isResizing,
// }) => {
//   const { isDarkMode } = useDarkMode()

//   const [timer, setTimer] = useState(false)

//   useEffect(() => {
//     let id = setInterval(() => setTimer((prev) => !prev), 5000)
//     return () => clearInterval(id)
//   }, [])

//   const [hover, setHover] = useState(false)

//   // let highlight = {
//   //   color: !hover && open !== i ? '' : card.colors.contrastForMain,
//   //   transition: `0.2s ease-in-out`,
//   // }

//   return (
//     <motion.div
//       initial={{
//         width: width,
//         height: height,
//         scale: 0.98,
//         borderRadius: open === i ? 0 : height * 0.04,
//         backgroundColor: 'white',
//         backgroundPosition: `center`,
//         backgroundSize: `cover`,
//       }}
//       animate={{
//         width: width,
//         height: height,
//         scale: open === i ? 1 : 0.93,
//         borderRadius: open === i ? 0 : height * 0.015,
//         // paddingTop: open === null ? (!sm ? '0.1%' : '0.5%') : ``,
//         boxShadow: hover
//           ? isDarkMode
//             ? `6px 8px 19px 4px rgba(173,119,172, 0.7)`
//             : `6px 8px 20px 4px rgba(75, 85, 99, 0.7)`
//           : isDarkMode
//           ? `6px 8px 16px 0px rgba(173,119,172, 1)`
//           : `6px 8px 16px 0px rgba(75, 85, 99, 1)`,
//         border:
//           open !== i
//             ? isDarkMode
//               ? '1px solid rgb(229 231 235)'
//               : '1px solid rgb(75 85 99)'
//             : 'none',

//         // backgroundImage:
//         //   hover || open === i
//         //     ? `linear-gradient(${card.colors.mainColor}, ${card.colors.mainColor})`
//         //     : isDarkMode
//         //     ? `linear-gradient(to bottom, rgba(255,106,253,0.5), rgba(0,3,90,0.6))`
//         //     : timer
//         //     ? `linear-gradient(to left bottom, rgba(255,106,253,0.3), rgba(0,3,90,0.2))`
//         //     : `linear-gradient(to left bottom, rgba(0,3,90,0.2), rgba(255,106,253,0.3))`,
//         backgroundImage: `url(${card.image.main})`,
//       }}
//       whileHover={{
//         scale: open === i ? 1 : 0.98,
//         // boxShadow: isDarkMode
//         //   ? `6px 8px 12px 4px rgba(75, 85, 99, 0.7)`
//         //   : `6px 8px 12px 4px rgba(22, 22, 22, 0.7)`,
//       }}
//       transition={{
//         borderRadius: {
//           defualt: {
//             delay: isResizing ? 0 : open ? 0.45 : 0.25,
//             duration: isResizing ? 0 : 0.5,
//           },
//         },
//       }}
//       className={`overflow-hidden snap-center shrink-0 flex flex-col justify-center items-center bg-transparent cursor-pointer`}
//       onMouseDown={() => handleClick(i)}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <motion.div
//         animate={{
//           flexGrow: 1,
//           // backgroundColor: card.colors.mainColor,
//           // color: isDarkMode && !hover && open !== i ? 'white' : 'black',
//         }}
//         transition={{ delay: 0.15, duration: 0.3 }}
//       />

//       <motion.div
//         // initial={{ padding: '3%', paddingTop: open === null ? '0%' : '3%' }}
//         animate={{
//           // paddingTop: open === null ? '0%' : !sm ? '3%' : '3%',
//           // paddingTop: open === null && !hover ? '0' : '0.25%',
//           // scale: open === null && !hover ? 1 : 1.1,
//           // x: open === null && !hover ? '-5%' : '0%',
//           // y: open === null && !hover ? '5%' : '3%',
//           // marginBottom: !hover ? '0.25vh' : '1vh',
//           backgroundColor: card.colors.mainColor,
//         }}
//         transition={
//           {
//             // paddingTop: { delay: 0, duration: 0.4 },
//             // default: { duration: 1.5 },
//             // scale: { duration: 0.3 },
//             // x: { duration: 0.3 },
//             // y: { duration: 0.3 },
//           }
//         }
//         className={`z-10 mb-2 bg-red-20 flex flex-col items-start justify-start w-[100%]  border-t border-b border-gray-700 ${
//           '' // isDarkMode && open !== i ? `text-gray-200` : ``
//         } `}
//       >
//         <motion.div
//           animate={{
//             flexGrow: open === i ? 0 : 1,
//             // backgroundColor: card.colors.mainColor,
//             // color: isDarkMode && !hover && open !== i ? 'white' : 'black',
//           }}
//           transition={{ delay: 0.15, duration: 0.3 }}
//         />
//         <motion.h1
//           animate={{
//             // flexGrow: open === i ? 0 : 1,
//             // backgroundColor: card.colors.mainColor,
//             // color: isDarkMode && !hover && open !== i ? 'white' : 'black',
//             scale: open === null && !hover ? 0.9 : 1,
//             y: open === null && !hover ? '5%' : '3%',
//           }}
//           transition={{ duration: 0.3 }}
//           className={`font-BebasNeue first-letter:uppercase w-full flex justify-center items-center   ${
//             lg ? `text-React-h1` : `text-React-h1*1.5`
//           } `}
//         >
//           {card.title}
//         </motion.h1>
//         {/* {1 || (
//           <p
//             className={`font-Bebas first-letter:uppercase ${
//               lg ? `text-React-p4` : `text-React-p4*.1.5`
//             } ${
//               isDarkMode && !hover && open !== i
//                 ? 'text-gray-200'
//                 : hover || open === i
//                 ? 'text-black'
//                 : 'text-gray-700'
//             }`}
//           >
//             {card.text.split(' ').map((el, i) => {
//               if (el === el.toUpperCase()) {
//                 return (
//                   <span
//                     style={{
//                       ...highlight,
//                     }}
//                     className={`lowercase`}
//                   >
//                     {el}{' '}
//                   </span>
//                 )
//               } else {
//                 return <span>{el} </span>
//               }
//             })}
//           </p>
//         )} */}
//       </motion.div>
//     </motion.div>
//   )
// }
