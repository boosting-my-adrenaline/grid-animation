import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'

interface IProps {
  closeMenu: () => void
  handleNavigate: (link: string) => void
}

export const TeslaMenu: React.FC<IProps> = ({ handleNavigate, closeMenu }) => {
  // cubic-bezier(0.5,0,0,0.75

  const [show, setShow] = useState(true)
  // useEffect(() => {
  //   setShow(true)
  // }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => closeMenu(), 500)

    return () => {
      clearTimeout(id)
      closeMenu()
    }
  }, [show])

  return (
    <motion.div
      initial={{ backdropFilter: `blur(0px)` }}
      animate={{ backdropFilter: show ? `blur(4px)` : `blur(0px)` }}
      transition={{ type: `just` }}
      className={`z-[40] flex h-screen w-screen justify-end`}
    >
      <motion.div
        className={`h-screen flex-grow `}
        onMouseDown={() => setShow(false)}
      />
      <motion.div
        initial={{ opacity: 0.75, x: `70%` }}
        animate={{ opacity: show ? 1 : 0, x: show ? `0%` : `50%` }}
        transition={{
          default: { ease: [0.5, 0, 0, 0.75] },
          x: { duration: 0.4 },
        }}
        // style={{ transition: `.52s cubic-bezier(0.5,0,0,0.75` }}
        className={`z-[70] h-screen w-[311px] max-w-[311px] flex-grow bg-white  shadow-[0_-8px_16px_0_rgba(0,0,0,0.16)]`}
      >
        <div className={`flex h-[80px] items-center justify-end  p-[20px]`}>
          <div
            className={`flex h-[40px] w-[40px] items-center justify-center rounded-full hover:bg-black/[.1]`}
            onMouseDown={() => setShow(false)}
          >
            <svg
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section
          className={`h-full w-full p-[8px_32px_48px]`}

          // onMouseDown={() => setShow(false)}
        >
          <ol>
            {[
              'Slide 1',
              'Slide 2',
              'Slide 3',
              'Elisium',
              'Nouveau',
              'Deesse',
              'Cherie',
              'Eunoia',
              'Redamancy',
              'Rever',
              'Sciamachy',
              'Querencia',
              'Caim',
              'Noir et Blanc',
            ].map((el) => (
              <li
                key={el}
                className={`my-[7px] h-[32px] w-full cursor-pointer rounded-[14px] p-[4px_8px] hover:bg-black/[0.05]`}
                onMouseDown={() => {
                  setShow(false)
                  if (el === `Slide 1`) {
                    handleNavigate(`/slide1`)
                  } else if (el === `Slide 2`) {
                    handleNavigate(`/slide2`)
                  } else if (el === `Slide 3`) {
                    handleNavigate(`/slide3`)
                  }
                }}
              >
                <a className={`h-full rounded-[8px] px-[6px] `}>
                  <span className={`text-[15px] font-[500] text-[#171a20] `}>
                    {el}
                  </span>
                </a>
              </li>
            ))}
            <li
              className={`my-[7px] h-[58px] w-full cursor-pointer rounded-[14px] p-[4px_8px] hover:bg-black/[0.05]`}
            >
              <a className={`flex h-full gap-[4px] rounded-[8px] px-[6px]`}>
                <div className={`mt-[4px]`}>
                  {' '}
                  <svg
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`fill-[#171a20]`}
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 5.477a9.475 9.475 0 0 1-3.032-.66c.732-1.763 1.816-2.99 3.032-3.258v3.918zm0 1V11.5H7.514c.044-1.349.262-2.622.613-3.742 1.068.424 2.206.664 3.373.719zm0 4.023v3.023a10.475 10.475 0 0 0-3.373.719 14.132 14.132 0 0 1-.613-3.742H11.5zm0 4.023v3.918c-1.216-.268-2.3-1.495-3.032-3.258a9.475 9.475 0 0 1 3.032-.66zm1 0a9.475 9.475 0 0 1 3.032.66c-.732 1.763-1.816 2.99-3.032 3.258v-3.918zm0-1V12.5h3.986a14.132 14.132 0 0 1-.613 3.742 10.475 10.475 0 0 0-3.373-.719zm0-4.023V8.476a10.47 10.47 0 0 0 3.374-.714c.35 1.119.568 2.39.612 3.738H12.5zm0-4.024V3.56c1.217.268 2.301 1.497 3.034 3.262-.96.384-1.983.6-3.034.655zm2.582-3.389a8.5 8.5 0 0 1 2.544 1.558 9.47 9.47 0 0 1-1.168.74c-.377-.9-.84-1.681-1.376-2.298zM7.544 6.382a9.47 9.47 0 0 1-1.172-.734 8.499 8.499 0 0 1 2.546-1.561c-.535.616-.998 1.397-1.374 2.295zm-.353.948c-.396 1.237-.633 2.651-.677 4.17H3.525a8.453 8.453 0 0 1 2.129-5.135c.485.369 1.001.688 1.537.965zm-.677 5.17c.044 1.519.28 2.933.677 4.17-.536.277-1.052.596-1.537.965A8.453 8.453 0 0 1 3.525 12.5h2.99zm1.03 5.118c.376.898.839 1.679 1.374 2.295a8.5 8.5 0 0 1-2.546-1.56 9.465 9.465 0 0 1 1.172-.735zm8.912 0a9.38 9.38 0 0 1 1.172.734 8.5 8.5 0 0 1-2.546 1.561c.535-.616.998-1.397 1.374-2.295zm.353-.948c.396-1.237.633-2.651.677-4.17h2.989a8.453 8.453 0 0 1-2.129 5.135 10.468 10.468 0 0 0-1.537-.965zm.677-5.17c-.044-1.516-.28-2.93-.676-4.164a10.475 10.475 0 0 0 1.533-.975 8.452 8.452 0 0 1 2.132 5.139h-2.99z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className={`flex flex-col justify-evenly`}>
                  <span className={`text-[15px] font-[500] text-[#171a20] `}>
                    United States
                  </span>
                  <span
                    className={`text-[12px] font-[500] text-[#171a20]/[.9] `}
                  >
                    English
                  </span>
                </div>
              </a>
            </li>
          </ol>
        </section>
      </motion.div>
    </motion.div>
  )
}
