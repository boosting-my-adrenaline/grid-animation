import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import useOnScreen from '../../utils/hooks/useOnScreen'
import { TeslaNavbar } from './Tesla.navbar'
import { TeslaSlideDown } from './Tesla.slidedown'

interface IProps {
  show: boolean
  scroll: (offset: number) => void
  handleNavigate: (link: string) => void
}

export const TeslaSlide8: React.FC<IProps> = ({
  show,
  scroll,
  handleNavigate,
}) => {
  // `d0d1d2`12
  //   Power Your Home
  // Order now or talk to a Tesla Advisor if you have any questions

  // ORDER NOW
  // CHAT WITH ENERGY ADVISOR

  const { height, width } = useWindowSize()
  const lg = width >= 1200
  const md = width < 1200 && width >= 900
  const sm = width < 900 && width >= 600
  const mobile = width < 600

  // show = mobile ? true : show

  const elements = mobile
    ? [`Blast © 2022`, `Privacy & Legal`, `Careers`, `News`]
    : [
        `Blast © 2022`,
        `Privacy & Legal`,
        `Contact`,
        `Careers`,
        `News`,
        `Engage`,
        `Locations`,
      ]

  return (
    <>
      <div
        className={`w-f font-Gotham  flex ${
          width >= 1200 ? `h-screen` : `h-screen`
        } items-center justify-center  bg-black bg-cover object-cover`}
      >
        <div
          className={`flex ${
            width >= 900
              ? `w-[30%] max-w-[420px]`
              : !mobile
              ? `w-[50%]`
              : `w-full`
          }  flex-col items-center px-[40px]`}
        >
          <span className={`pb-[16px] text-center text-[28px] text-white`}>
            Power Your Home
          </span>
          <span className={`pb-[16px] text-center text-[14px] text-white/90`}>
            Order now or talk to a Blast Advisor if you have any questions
          </span>
          <a
            className={`mb-[16px] flex w-full cursor-pointer items-center justify-center rounded-[20px] border-[3px] border-white/90 p-[4px_24px] text-[12px] uppercase text-white/90 hover:bg-white/90 hover:text-black`}
          >
            <span className={` text-center font-[700]`}>order now</span>
          </a>
          <a
            className={`mb-[16px] flex w-full cursor-pointer items-center  justify-center rounded-[20px] border-[3px] border-white/90 p-[4px_24px] text-[12px] uppercase text-white/90 hover:bg-white/90 hover:text-black`}
          >
            <span className={` text-center font-[700] `}>
              chat with blast Advisor
            </span>
          </a>
        </div>

        {show && (
          <footer
            className={`fixed bottom-0 w-full   ${mobile || `h-[70px]`} ${
              show || `opacity-0`
            }  flex justify-center px-[20px] transition duration-300 ease-in`}
          >
            <ul className={`flex h-full items-center  ${mobile && `flex-col`}`}>
              {elements.map((el, i) => (
                <li key={i} className={`mr-[12px]  cursor-pointer py-[8px]`}>
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: show ? 1 : 0 }}
                    className={`font-Gotham text-[12px]
                  text-[#d0d1d2]
                   transition duration-300 ease-in`}
                  >
                    {el}
                  </motion.a>
                </li>
              ))}
            </ul>
          </footer>
        )}
      </div>
      {}
    </>
  )
}
