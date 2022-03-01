import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import useElementSize from '../../utils/hooks/useElementSize'

interface IProps {
  show?: boolean
  scroll: (offset: number) => void
  handleNavigate: (link: string) => void
}

export const TeslaSlide2: React.FC<IProps> = ({
  show,
  scroll,
  handleNavigate,
}) => {
  const { height, width } = useWindowSize()
  //////////////////////////////////////////////////////////////////////////////

  show = width < 600 ? true : show

  //////////////////////////////////////////////////////////////////////////////

  const lg = width >= 1200
  const md = width < 1200 && width >= 900
  const sm = width < 900 && width >= 600
  const mobile = width < 600

  const testing = width >= 900
  const [turn, setTurn] = useState(mobile ? 4 : 0)

  useDidMountEffect(() => {
    if (sm) {
      setTurn(4)
    }
  }, [sm])

  useDidMountEffect(() => {
    if (mobile) {
      return
    }
    if (!show) {
      return setTurn(0)
    }
    let delays = [150, 250, 800, 1000]
    let id0 = setTimeout(() => setTurn(1), delays[0])

    let id1 = setTimeout(() => setTurn(2), delays[1])

    let id2 = setTimeout(() => setTurn(3), delays[2])
    let id3 = setTimeout(() => setTurn(4), delays[3])

    return () => {
      clearTimeout(id0)
      clearTimeout(id1)
      clearTimeout(id2)
      clearTimeout(id3)
      setTurn(0)
    }
  }, [show])

  const [parentRef, { width: parentWidth, height: parentHeight }] =
    useElementSize()

  let svgsize = testing ? `154px` : !mobile ? `100px` : `64px`
  let imgsize = testing ? `w-[80px]` : !mobile ? `w-[52px]` : `w-[33px]`

  let numbersize = testing
    ? `text-[63px] leading-[50px]`
    : !mobile
    ? `text-[41px] leading-[35px]`
    : `text-[24px] leading-[24px]`

  const descsize = testing
    ? `text-[15px] leading-[15px]`
    : !mobile
    ? `text-[10px] leading-[10px]`
    : `text-[6px] leading-[6px]`

  const titlesize = testing
    ? `text-[24px]`
    : !mobile
    ? `text-[20px]`
    : width >= 300
    ? `text-[20px]`
    : `text-[15px]`

  const title2size = testing
    ? `text-[16px]`
    : !mobile
    ? `text-[13px]`
    : width >= 300
    ? `text-[13px]`
    : `text-[10px]`

  const elements: [string, string, any, number][] = [
    [
      `J.D. Power quality award`,

      `      Awarded to the brand who had the fewest problems reported by
      100 car owners during the first 90 days of ownership.`,
      <svg
        width={svgsize}
        height={svgsize}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 164 164"
        className={`absolute`}
      >
        <circle
          cx={82}
          cy={82}
          r={75}
          style={{
            fill: '#fff',
            stroke: '#ebebeb',
            strokeWidth: 14,
          }}
        />
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1={74.5}
          y1={85.514}
          x2={75.5}
          y2={86.514}
          gradientTransform="matrix(150 0 0 -150 -11168 12984)"
        >
          <stop
            offset={0}
            style={{
              stopColor: '#28ce96',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#2ede81',
            }}
          />
        </linearGradient>
        <path
          d="M82 7c41.4 0 75 33.6 75 75s-33.6 75-75 75S7 123.4 7 82c0-13.1 4.9-47.6 39.6-66.1"
          style={{
            fill: 'none',
            stroke: 'url(#a)',
            strokeWidth: 14,
          }}
        />
      </svg>,
      94,
    ],
    [
      `J.D. Power perfomance award`,

      `      Awarded to the brand who had the fewest problems reported by
      100 car owners during the first 90 days of ownership.`,
      <svg
        width={svgsize}
        height={svgsize}
        className={`absolute`}
        viewBox="0 0 164 164"
      >
        <circle
          cx={82}
          cy={82}
          r={75}
          style={{
            fill: '#fff',
            stroke: '#ebebeb',
            strokeWidth: 14,
          }}
        />
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1={74.499}
          y1={85.513}
          x2={75.499}
          y2={86.513}
          gradientTransform="matrix(150 0 0 -150 -11168 12984)"
        >
          <stop
            offset={0}
            style={{
              stopColor: '#2BD58D',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#32E479',
            }}
          />
        </linearGradient>
        <path
          d="M82 7c41.4 0 75 33.6 75 75s-33.6 75-75 75c-42.9 0-75-34.4-75-75 0-22.3 12.1-57.3 49.5-70.5"
          style={{
            fill: 'none',
            stroke: 'url(#a)',
            strokeWidth: 14,
          }}
        />
      </svg>,
      95,
    ],
    [
      `J.D. Power dependability award`,

      `      Awarded to the brand who had the fewest problems reported by
      100 car owners during the first 90 days of ownership.`,

      <svg
        width={svgsize}
        height={svgsize}
        className={`absolute`}
        viewBox="0 0 164 164"
      >
        <circle
          cx={82}
          cy={82}
          r={75}
          style={{
            fill: '#fff',
            stroke: '#ebebeb',
            strokeWidth: 14,
          }}
        />
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1={74.499}
          y1={85.513}
          x2={75.499}
          y2={86.513}
          gradientTransform="matrix(150 0 0 -150 -11168 12984)"
        >
          <stop
            offset={0}
            style={{
              stopColor: '#2BD392',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#31E57A',
            }}
          />
        </linearGradient>
        <path
          d="M82 7c41.4 0 75 33.6 75 75s-33.6 75-75 75c-42.9 0-75-34.4-75-75 0-22.3 12.1-57.3 49.5-70.5"
          style={{
            fill: 'none',
            stroke: 'url(#a)',
            strokeWidth: 14,
          }}
        />
      </svg>,
      96,
    ],
    [
      `J.D. Power reliability award`,

      `      Awarded to the brand who had the fewest problems reported by
      100 car owners during the first 90 days of ownership.`,
      <svg
        width={svgsize}
        height={svgsize}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 164 164"
        className={`absolute`}
      >
        <circle
          cx={82}
          cy={82}
          r={75}
          style={{
            fill: '#fff',
            stroke: '#ebebeb',
            strokeWidth: 14,
          }}
        />
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1={74.5}
          y1={85.514}
          x2={75.5}
          y2={86.514}
          gradientTransform="matrix(150 0 0 -150 -11168 12984)"
        >
          <stop
            offset={0}
            style={{
              stopColor: '#28ce96',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#2ede81',
            }}
          />
        </linearGradient>
        <path
          d="M82 7c41.4 0 75 33.6 75 75s-33.6 75-75 75S7 123.4 7 82c0-13.1 4.9-47.6 39.6-66.1"
          style={{
            fill: 'none',
            stroke: 'url(#a)',
            strokeWidth: 14,
          }}
        />
      </svg>,
      94,
    ],
  ]

  return (
    <div
      className={`${
        width >= 900 ? `h-screen` : !mobile ? `h-screen` : `h-[100vh]`
      } w-f bg-slide1  font-Gotham relative flex h-full flex-col items-center justify-center overflow-hidden bg-cover object-cover `}
    >
      {/* <ul className={`h-full w-full bg-red-300/[.3]`}>
        {elements.map((el, i) => (
          <motion.li key={i}>

          </motion.li>
        ))}
      </ul> */}
      <motion.div
        initial={{
          y: `-75%`,
          skewY: width >= 900 ? `-23.5deg` : `-21.3deg`,
          x: '25%',
        }}
        animate={{
          y: turn > 0 ? `0` : `75%`,
          x: turn > 1 ? `0` : `25%`,
          skewY: turn > 1 ? `0deg` : width >= 900 ? `-23.25deg` : `-21.3deg`,
          rotate: turn > 2 ? `90deg` : `0deg`,
        }}
        transition={{ y: { duration: 0.4 }, x: { duration: 0.4 } }}
        className={`ease-apple flex h-[100vw] w-[100vh] items-center justify-evenly  ${
          mobile ? `gap-[10px]` : `gap-[30px]`
        }   ${
          width >= 900 ? `p-[50px]` : !mobile ? `p-[20px]` : `p-[5px_10px]`
        }`}
      >
        {elements.map((el, i) => (
          <motion.div
            animate={{
              y:
                width >= 1100
                  ? turn > 3
                    ? i % 2
                      ? width >= height
                        ? (width - height) / 2 - 50
                        : (height - width) / 2 - 150
                      : width >= height
                      ? -1 * ((width - height) / 2 - 50)
                      : -1 * ((height - width) / 2 - 150)
                    : 0
                  : 0,
            }}
            transition={{ delay: i * 0.1 }}
            className={`flex ${
              mobile ? `h-[97%]` : `h-[90%]`
            } w-[300px] flex-grow-0 items-center justify-center `}
            ref={parentRef}
          >
            <div
              style={{
                transform: `rotate(-90deg)`,
                width: parentHeight > 1000 ? 1000 : parentHeight,
                height: parentWidth,
                background: `repeating-linear-gradient(45deg,#e7e7e7,#e7e7e7 1px,#f3f3f3 2px,#f3f3f3 5.5px)`,
              }}
              className={` absolute flex ${
                i % 2 && width >= 1200 && `flex-row-reverse`
              } rounded-[0px] border-2 border-black/[.1] shadow-[0_20px_25px_-5px_rgb(0,0,0,0.1)] shadow-gray-800`}
            >
              {!mobile && (
                <div
                  className={`center flex h-full items-center justify-center  p-[8px]`}
                  // style={{ width: parentWidth }}
                >
                  {el[2]}

                  <svg
                    width={svgsize}
                    height={svgsize}
                    className={``}
                    viewBox={`0 0 154 154`}
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stop-color="#23c0a8"></stop>
                        <stop offset="100%" stop-color="#33e776"></stop>
                      </linearGradient>
                    </defs>
                    <g>
                      <circle
                        cx="77"
                        cy="77"
                        r="70"
                        stroke="#ebebeb"
                        fill="#fff"
                        stroke-width="14"
                      ></circle>
                      <path
                        fill="none"
                        stroke="url(#gradient)"
                        d="M 70,0 A 70,70 0 1,1 16.064073005694773,25.380320717591687"
                        stroke-width="14"
                        stroke-linecap="butt"
                        transform="translate(7, 7)"
                      ></path>
                    </g>
                  </svg>
                  <div
                    className={`absolute z-10 flex flex-col items-center justify-center  p-[20px]`}
                  >
                    <img
                      className={imgsize}
                      src="https://cdn.jdpower.com/redesign/ymm_images/jdp-logo.svg"
                      alt="J.D. Power #2"
                    />
                    <span className={`font-Geogrotesque ${numbersize}`}>
                      {el[3]}
                    </span>
                    <span className={`font-[Roboto] ${descsize}`}>
                      Out of 100
                    </span>
                  </div>
                </div>
              )}
              <div
                className={`flex flex-col items-center justify-evenly p-[10px_10px_2px_10px] text-center`}
              >
                <div
                  className={` flex ${
                    mobile ? `w-full` : `w-[90%]`
                  } items-center `}
                >
                  {mobile && (
                    <div
                      className={`center flex h-full flex-shrink items-center  justify-center p-[8px_12px]`}
                      // style={{ width: parentWidth }}
                    >
                      {el[2]}

                      <svg
                        width={svgsize}
                        height={svgsize}
                        className={``}
                        viewBox={`0 0 154 154`}
                      >
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="100%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stop-color="#23c0a8"></stop>
                            <stop offset="100%" stop-color="#33e776"></stop>
                          </linearGradient>
                        </defs>
                        <g>
                          <circle
                            cx="77"
                            cy="77"
                            r="70"
                            stroke="#ebebeb"
                            fill="#fff"
                            stroke-width="14"
                          ></circle>
                          <path
                            fill="none"
                            stroke="url(#gradient)"
                            d="M 70,0 A 70,70 0 1,1 16.064073005694773,25.380320717591687"
                            stroke-width="14"
                            stroke-linecap="butt"
                            transform="translate(7, 7)"
                          ></path>
                        </g>
                      </svg>
                      <div
                        className={`absolute z-10 flex flex-col items-center justify-center p-[20px] `}
                      >
                        <img
                          className={imgsize}
                          src="https://cdn.jdpower.com/redesign/ymm_images/jdp-logo.svg"
                          alt="J.D. Power #2"
                        />
                        <span className={`font-Geogrotesque ${numbersize}`}>
                          {el[3]}
                        </span>
                        <span className={`font-[Roboto] ${descsize}`}>
                          Out of 100
                        </span>
                      </div>
                    </div>
                  )}
                  <p
                    className={`font-Geogrotesque mb-[10px]! text-center ${titlesize} flex-grow font-[700]`}
                  >
                    {el[0]}
                  </p>
                </div>
                <p className={`mb-[10px]! font-[Roboto] ${title2size}`}>
                  {el[1]}
                </p>
                <p
                  className={`font-Geogrotesque mb-[10px] cursor-pointer ${title2size} font-[700] text-[#0071eb]`}
                >
                  Read about this study
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
