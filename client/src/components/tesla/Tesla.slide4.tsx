import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import useElementSize from '../../utils/hooks/useElementSize'

interface IProps {
  show: boolean
  scroll: (offset: number) => void
  handleNavigate: (link: string) => void
}

export const TeslaSlide4: React.FC<IProps> = ({
  show,
  scroll,
  handleNavigate,
}) => {
  const { width } = useWindowSize()

  const lg = width >= 1200
  const md = width < 1200 && width >= 900
  const sm = width < 900 && width >= 600
  const mobile = width < 600

  // show = mobile ? true : show

  const testing = 1700

  const [turn, setTurn] = useState(0)

  useDidMountEffect(() => {
    let delays = [100, 900, 1500]

    let id0 = setTimeout(() => setTurn(1), delays[0])
    let id1 = setTimeout(() => setTurn(2), delays[1])
    let id2 = setTimeout(() => setTurn(3), delays[2])
    return () => {
      clearTimeout(id0)
      clearTimeout(id1)
      clearTimeout(id2)
      setTurn(0)
    }
  }, [show])

  const [parentRef, { width: parentWidth, height: parentHeight }] =
    useElementSize()

  return (
    <div
      className={`w-f font-Gotham flex overflow-hidden bg-black ${
        mobile && `flex-col`
      } ${!mobile && `h-screen`}  items-center bg-cover object-cover `}
    >
      <div
        className={`z-10 flex h-full flex-[50%] flex-shrink-0 flex-col`}
        ref={parentRef}
      >
        <div
          className={`flex h-[50%] flex-col justify-between  ${
            width >= testing
              ? `items-start p-[80px_0_40px_100px]`
              : width >= 900
              ? `items-start p-[30px_0_20px_50px]`
              : !mobile
              ? `items-start p-[60px_0_25px_60px]`
              : `w-full px-[20px] pt-[50px]`
          } `}
        >
          <motion.h1
            animate={{ opacity: show ? 1 : 0.3, y: show ? `0` : `-50%` }}
            transition={{ delay: 0.2 }}
            className={` ${
              width >= testing
                ? `text-[70px] leading-[60px]`
                : `text-[50px] leading-[40px]`
            } uppercase  text-red-500`}
          >
            Carpe Diem
          </motion.h1>

          <motion.h1
            animate={{ opacity: show ? 1 : 0.3, x: show ? `0` : `-150%` }}
            transition={{
              delay: 0.2,
              default: { type: `just` },
            }}
            className={`${
              width >= testing
                ? `text-[40.85px] leading-[-15px]`
                : `text-[29.2px] leading-[-15px]`
            } uppercase text-red-500`}
          >
            Audere est Facere
          </motion.h1>

          <div
            className={`w-full  ${
              width >= 1400
                ? `p-[70px_ 0_40px_0!] w-[200px] py-[20px]`
                : `p-[50px_ 0_30px_0!] w-[150px] py-[15px]`
            }`}
          >
            <div
              className={`h-[10px] ${
                !show ? `w-[0.2%] ` : `w-[100%]`
              }  transition duration-1000 ease-linear ${
                turn > 2 ? `bg-white/90` : `bg-black`
              } `}
            />
          </div>

          <motion.h1
            animate={{
              opacity: show ? 1 : 0,
              rotateY: show ? `0` : `90deg`,
            }}
            transition={{ delay: 0.3 }}
            className={`pr-[40px]  ${
              width >= 1400
                ? `leading-[60px]! text-[20px]`
                : `leading-[40px]! text-[16px]`
            }  py-[10px]  `}
          >
            <span
              className={`${
                turn > 2 ? `text-white/90` : `text-black`
              } transition duration-500 ease-linear `}
            >
              Quisque faucibus <span className={`font-[700] `}>felis</span>{' '}
              lectus
            </span>
          </motion.h1>

          <motion.h1
            animate={{
              opacity: show ? 1 : 0.3,
              x: show ? `0` : `-150%`,
            }}
            transition={{ delay: 0.2, type: `just` }}
            className={` ${
              width >= 1400
                ? `leading-[60px]! pr-[40px] text-[20px]`
                : !mobile
                ? `leading-[40px]! pr-[40px] text-[16px]`
                : ` text-justify text-[16px]`
            }   `}
          >
            <span
              className={`${
                turn > 2 ? `text-white/90` : `text-black`
              }  transition delay-[250] duration-500 ease-linear `}
            >
              Curabitur quis lectus ac urna
              <span className={`font-[700] `}> ullamcorper dignissim</span> non
              eu est. Nunc pulvinar
              <span className={`font-[700] `}> dolor arcu</span>, in lobortis
              quam consequat nec. Ut placerat
              <span className={`font-[700] `}> eleifend arcu vitae</span>{' '}
              facilisis.
            </span>
          </motion.h1>
        </div>

        <div
          className={`flex h-[50%] flex-col justify-between  ${
            width >= testing
              ? `items-start p-[80px_0_40px_100px]`
              : width >= 900
              ? `items-start p-[30px_0_20px_50px]`
              : !mobile
              ? `items-start p-[60px_0_25px_60px]`
              : `w-full  px-[20px] pt-[50px]`
          } `}
        >
          <motion.h1
            animate={{ opacity: show ? 1 : 0, x: show ? `0` : `-50%` }}
            transition={{ delay: 0.4 }}
            className={` ${
              width >= testing
                ? `text-[70px] leading-[60px]`
                : `text-[50px] leading-[40px]`
            } uppercase text-red-500`}
          >
            Quisque Plate
          </motion.h1>

          <motion.h1
            animate={{ opacity: show ? 1 : 0.3, x: show ? `0` : `-150%` }}
            transition={{ delay: 0.5, type: `just` }}
            className={`${
              width >= testing
                ? `text-[40.85px] leading-[-15px]`
                : `text-[29.2px] leading-[-15px]`
            } uppercase text-red-500`}
          >
            Sed pretium Mauris
          </motion.h1>

          <div
            className={`w-full  ${
              width >= testing
                ? `p-[70px_ 0_40px_0!] w-[200px] py-[20px]`
                : `p-[50px_ 0_30px_0!] w-[150px] py-[15px]`
            }`}
          >
            <div
              className={`h-[10px] ${
                !show ? `w-[0.2%] ` : `w-[100%]`
              } bg-black transition duration-1000 ease-linear ${
                turn > 2 ? `bg-white/90` : `bg-black`
              }`}
            />
          </div>

          <motion.h1
            animate={{ opacity: show ? 1 : 0.3, y: show ? `0` : `-50%` }}
            transition={{ delay: 0.6 }}
            className={`pr-[40px]  ${
              width >= testing
                ? `leading-[60px]! text-[20px]`
                : `leading-[40px]! text-[16px]`
            }  py-[10px]`}
          >
            <span
              className={`${
                turn > 2 ? `text-white/90` : `text-black`
              } transition delay-[500] duration-500 ease-linear`}
            >
              Neque non <span className={`font-[700] `}>sodales</span> interdum
            </span>
          </motion.h1>

          <motion.h1
            animate={{ opacity: show ? 1 : 0.3, x: show ? `0` : `-150%` }}
            transition={{ delay: 0.6, type: `just` }}
            className={` ${
              width >= testing
                ? `leading-[60px]! text-[20px]`
                : `leading-[40px]! text-[16px]`
            } py-[20px] text-justify`}
          >
            <span
              className={`${
                turn > 2 ? `text-white/90` : `text-black`
              } text-justify transition delay-[750] duration-500 ease-linear `}
            >
              Lobortis fringilla elit
              <span className={`font-[700] `}> posuere </span>blandit. Mauris
              <span className={`font-[700] `}> auctor purus </span>eu ex
              porttitor, id rutrum. Metus laoreet sit amet. Maecenas{' '}
              <span className={`font-[700] `}> laoreet</span> vulputate nulla
            </span>
          </motion.h1>
        </div>

        <div
          style={{ height: parentHeight }}
          className={`absolute -z-10 flex w-[50vw] justify-end bg-white`}
        >
          <div
            style={{
              width: turn > 1 ? width / 2 : 0,
              transition: `1.2s ease-in-out`,
            }}
            className={`h-full  bg-black `}
          />
        </div>
      </div>

      {!mobile && (
        <motion.div
          animate={{ x: `10%` }}
          style={{ height: parentHeight }}
          transition={{ duration: 1.2 }}
          className={` bg-moon  flex-[50%] bg-cover`}
        ></motion.div>
      )}
    </div>
  )
}
