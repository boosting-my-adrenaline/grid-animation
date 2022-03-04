import { motion } from 'framer-motion'
import React, { useState } from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { AppleAnimation } from './Apple.animation'

const image = require('../../static/1x/1x/PNG.png')

interface IProps {
  handleNavigate: (link: string) => void
}

export const AppleNavbar: React.FC<IProps> = ({ handleNavigate }) => {
  const { width, height } = useWindowSize()
  const { isDarkMode, toggle } = useDarkMode()

  const [open, setOpen] = useState(false)

  const sm = width < 830

  return (
    <nav
      className={`fixed top-0 z-20 flex w-screen justify-center ${`bg-[#323232]`} font-UI`}
    >
      {sm && (
        <motion.div
          style={{
            height: open ? height : 44,
            transition: `height .56s cubic-bezier(.52,.16,.24,1)`,
          }}
          className={` ease-apple w-full overflow-hidden transition duration-[560]`}
        >
          <div
            className={`h-[44px] `}
            // onMouseDown={() => setOpen((prev) => !prev)}
          >
            <ul
              className={`flex h-full items-center justify-between px-[25px]`}
            >
              <li onMouseDown={() => setOpen((prev) => !prev)}>
                <AppleAnimation open={open} />
              </li>

              <li className={`flex items-center`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  width={`24px`}
                >
                  <path
                    style={{
                      fill: !0
                        ? 'rgba(255, 255, 255, 0.92)'
                        : 'rgb(252 211 77)',
                    }}
                    className={`ease-custom-1 transition-all duration-200`}
                    d="m61.6 28.1 30.7 24.1-.6-1.4L71.2 8.2z"
                  />
                  <path
                    style={{
                      fill: !0
                        ? 'rgba(255, 255, 255, 0.92)'
                        : 'rgb(252 211 77)',
                    }}
                    className={`ease-custom-1 transition-all duration-200`}
                    d="m34.4 66.6 20.2-1.8 6.3-13L67 63.7l18-1.705-3.1-6.4-30.7-24.1z"
                  />
                  <path
                    style={{
                      fill: !0
                        ? 'rgba(255, 255, 255, 0.92)'
                        : 'rgb(252 211 77)',
                    }}
                    className={`ease-custom-1 transition-all duration-200`}
                    d="m61.6 73.6-7.2 14.8h27L74 72.5l18-1.7 16.7 35H26.8l14.6-30.4z"
                  />
                </svg>
                <a className={`text-[20px] text-white/[.92]`}> Blast </a>
              </li>

              <li>
                <a className={`cursor-pointer text-[13px] text-[#fa586a]`}>
                  Sign In
                </a>
              </li>
            </ul>
          </div>
          <div className={` p-[9px_25px_7px]`}>
            <ul className={`flex flex-col gap-[2px]`}>
              {[1, 2, 3].map((el) => (
                <li
                  className={`flex h-[42px] cursor-pointer items-center justify-center p-[3px_4px] ${
                    el === 1 && `font-[700]`
                  }`}
                >
                  <a
                    className={`text-start m-[-3px] box-content flex h-full w-full items-center rounded-[6px] p-[3px_4px] text-[17px] ${
                      el === 1 && `bg-[#464647]`
                    } text-white/[.92]`}
                    onMouseDown={() => handleNavigate(`/slide` + el)}
                  >
                    {el === 1 && (
                      <svg
                        width="32px"
                        height="32px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          className={`fill-[#fa586a]`}
                          d="M12 20c4.376 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C7.624 4 4 7.624 4 12c0 4.369 3.631 8 8 8zm0-1.333A6.634 6.634 0 015.341 12a6.628 6.628 0 016.651-6.667A6.653 6.653 0 0118.667 12 6.636 6.636 0 0112 18.667zm-1.467-3.6l4.463-2.636a.483.483 0 000-.839L10.533 8.95c-.337-.204-.784-.047-.784.33v5.458c0 .377.416.55.784.33z"
                          fill-rule="nonzero"
                        ></path>
                      </svg>
                    )}
                    {el !== 1 && (
                      <svg
                        width="32px"
                        height="32px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          className={`fill-[#fa586a]`}
                          d="M9.92 11.354c.966 0 1.453-.487 1.453-1.49v-3.4c0-1.004-.487-1.483-1.453-1.483H6.452C5.487 4.981 5 5.46 5 6.464v3.4c0 1.003.487 1.49 1.452 1.49H9.92zm7.628 0c.965 0 1.452-.487 1.452-1.49v-3.4c0-1.004-.487-1.483-1.452-1.483h-3.46c-.974 0-1.46.479-1.46 1.483v3.4c0 1.003.486 1.49 1.46 1.49h3.46zm-7.65-1.073h-3.43c-.266 0-.396-.137-.396-.418v-3.4c0-.273.13-.41.396-.41h3.43c.265 0 .402.137.402.41v3.4c0 .281-.137.418-.403.418zm7.634 0h-3.43c-.273 0-.402-.137-.402-.418v-3.4c0-.273.129-.41.403-.41h3.43c.265 0 .395.137.395.41v3.4c0 .281-.13.418-.396.418zm-7.612 8.7c.966 0 1.453-.48 1.453-1.483v-3.407c0-.996-.487-1.483-1.453-1.483H6.452c-.965 0-1.452.487-1.452 1.483v3.407c0 1.004.487 1.483 1.452 1.483H9.92zm7.628 0c.965 0 1.452-.48 1.452-1.483v-3.407c0-.996-.487-1.483-1.452-1.483h-3.46c-.974 0-1.46.487-1.46 1.483v3.407c0 1.004.486 1.483 1.46 1.483h3.46zm-7.65-1.072h-3.43c-.266 0-.396-.137-.396-.41v-3.4c0-.282.13-.418.396-.418h3.43c.265 0 .402.136.402.418v3.4c0 .273-.137.41-.403.41zm7.634 0h-3.43c-.273 0-.402-.137-.402-.41v-3.4c0-.282.129-.418.403-.418h3.43c.265 0 .395.136.395.418v3.4c0 .273-.13.41-.396.41z"
                          fill-rule="nonzero"
                        ></path>
                      </svg>
                    )}
                    <span className={`mt-[3px] ml-[6px]`}>
                      {' '}
                      {`Slide ` + el}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={`h-[0.5px] w-full bg-white/[.16]`}></div>

          <div className={`flex w-full flex-col items-center py-[20px]`}>
            <div
              className={` flex h-[150px] w-[150px] items-center justify-center`}
            >
              <img src={image} className={`scale-[1.5]`} />
            </div>
          </div>
          <div className={` h-[0.5px] w-full bg-white/[.16]`}></div>
          <div className={`flex justify-center pt-[40px]`}>
            <div
              onMouseDown={() => toggle()}
              className={`flex h-[34px] items-center justify-center rounded-[6px] px-[10px] ${
                isDarkMode
                  ? `bg-white/[0.82] text-[#fa586a]`
                  : `bg-white/[0.66]`
              }`}
            >
              <span>darkmode: {isDarkMode ? `on` : `off`}</span>
            </div>
          </div>
        </motion.div>
      )}

      {!sm && (
        <div
          className={`relative z-[3] flex h-[44px] max-w-[1680px] items-center ${
            sm && `flex-col-reverse`
          } w-full justify-between  text-[13px]  ${
            width > 1000 ? `px-[40px]` : 'px-[20px]'
          }`}
        >
          <ul className={` flex  w-full items-center justify-between`}>
            <li className={` flex cursor-pointer items-center justify-center`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                xmlSpace="preserve"
                width={`30px`}
                // className={`absolute`}
              >
                <path
                  style={{
                    fill: !0 ? 'rgba(255, 255, 255, 0.92)' : 'rgb(252 211 77)',
                  }}
                  className={`ease-custom-1 transition-all duration-200`}
                  d="m61.6 28.1 30.7 24.1-.6-1.4L71.2 8.2z"
                />
                <path
                  style={{
                    fill: !0 ? 'rgba(255, 255, 255, 0.92)' : 'rgb(252 211 77)',
                  }}
                  className={`ease-custom-1 transition-all duration-200`}
                  d="m34.4 66.6 20.2-1.8 6.3-13L67 63.7l18-1.705-3.1-6.4-30.7-24.1z"
                />
                <path
                  style={{
                    fill: !0 ? 'rgba(255, 255, 255, 0.92)' : 'rgb(252 211 77)',
                  }}
                  className={`ease-custom-1 transition-all duration-200`}
                  d="m61.6 73.6-7.2 14.8h27L74 72.5l18-1.7 16.7 35H26.8l14.6-30.4z"
                />
              </svg>
            </li>

            {[1, 2, 3].map((el, i) => (
              <li
                key={el}
                className={` flex h-[28px] items-center justify-center rounded-md ${
                  i === 0 ? `bg-[#d60017]` : `bg-[#464647] hover:bg-[#666668]`
                } px-[12px] text-white/[.16]`}
                onMouseDown={() => handleNavigate(`/slide` + el)}
              >
                <a
                  className={`font-UI   cursor-pointer text-[14px] ${`text-white/[.92]`}  hover:text-white`}
                >
                  {`Slide ` + el}
                </a>
              </li>
            ))}

            {[
              `Deesse`,
              `Quantium`,
              'Cherie',
              'Eunoia',
              'Redamancy',
              'Rever',
            ].map((el, i) => (
              <li
                key={el}
                className={` flex items-center justify-center  text-white/[.16]`}
              >
                <a
                  className={`font-UI   cursor-pointer text-[14px] ${`text-white/[.74]`}  hover:text-white`}
                >
                  {el}
                </a>
              </li>
            ))}

            <li
              onMouseDown={() => toggle()}
              className={`flex cursor-pointer items-center justify-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                width="24px"
                xmlSpace="preserve"
              >
                <path
                  d="M69.6 50.6c0-11.8 4.7-22.5 12.2-30.4 2.3-2.4 1-6.5-2.3-7.1-5.2-.9-10.7-.9-16.3-.1-23 3.5-40.9 22.3-43.3 45.5-3.2 30.9 21 57 51.3 57 13.9 0 26.6-5.5 35.9-14.5 2.5-2.4 1.3-6.7-2.2-7.4-20.1-4-35.3-21.7-35.3-43z"
                  style={{
                    fill: !isDarkMode
                      ? 'rgba(255, 255, 255, 0.92)'
                      : 'rgb(252 211 77)',
                    strokeMiterlimit: 10,
                  }}
                />
              </svg>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
