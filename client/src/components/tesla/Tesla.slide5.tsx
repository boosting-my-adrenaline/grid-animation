import React, { useEffect, useRef } from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import useElementSize from '../../utils/hooks/useElementSize'
import useOnScreen from '../../utils/hooks/useOnScreen'
import { TeslaNavbar } from './Tesla.navbar'
import { TeslaSlideDown } from './Tesla.slidedown'
const batImage = require('../../static/slides/bat.jpeg')

interface IProps {
  show: boolean
  scroll: (offset: number) => void
  handleNavigate: (link: string) => void
}

export const TeslaSlide5: React.FC<IProps> = ({
  show,
  scroll,
  handleNavigate,
}) => {
  const { height, width } = useWindowSize()

  const lg = width >= 1200
  const md = width < 1200 && width >= 900
  const sm = width < 900 && width >= 600
  const mobile = width < 600

  const col1 = [
    [`Wattage`, `400 W`],
    [`Operating Temperature`, `-40°F up to +185°F`],
    [
      `Dimensions`,
      `74.4" x 41.2" x 1.57"
    (including frame)`,
    ],
    [
      `Design`,
      `Black anodized aluminum alloy frame
    Black solar cells and backsheet`,
    ],
    [`Warranty`, ` 25-year performance guarantee`],
  ]

  const col2: [string | JSX.Element, string | JSX.Element][] = [
    [
      `Certifications`,
      `IEC / UL 61730,
    CEC Listed,
    IEC 61215`,
    ],
    [
      `Inverter Power`,
      <>
        <span className={`underline`}>3.8kW / 7.6kW</span>
        {` `}97.5% efficiency
      </>,
    ],
    [`Inverter Dimensions`, `26" x 16" x 6"`],
    [`Inverter Warranty`, `12.5 years `],
  ]

  const [parentRef, { width: parentWidth, height: parentHeight }] =
    useElementSize()

  const [parentRef2, { width: parentWidth2, height: parentHeight2 }] =
    useElementSize()

  return (
    <>
      {mobile && <img alt="" src={batImage} />}

      <div
        className={`w-f bg font-Gotham flex ${
          mobile && `flex-col`
        }  h-full items-center justify-start `}
      >
        {/* /////////// */}
        {
          <div
            className={`absolute left-0 flex overflow-hidden bg-black`}
            style={{
              width: !show ? '100vw' : mobile ? `0vw` : '50vw',
              transition: `2s ease`,
              height: parentHeight2,
            }}
          >
            {mobile || (
              <div
                className={` flex h-screen w-[50vw]  shrink-0 items-center justify-center ${
                  width >= 1200 ? `pr-[100px]` : width >= 900 ? `pr-[50px]` : ``
                }`}
              >
                {/* <div
                className={`bg-bat bg!-[length:100%] h-auto w-full border border-white bg-cover bg-no-repeat`}
              /> */}
                <img alt="" src={batImage} />
              </div>
            )}
            {/* Vvvvvvvvvv */}
            <div
              className={`flex h-full shrink-0 ${
                mobile ? `w-[100vw]` : `w-[50vw]`
              } ${
                width >= 1200 ? `pl-[100px]` : `items-center`
              } flex-col  justify-center  p-[24px] text-white/90`}
            >
              <div
                className={`pb-[24px]`}
                style={{
                  width: parentWidth,
                }}
              >
                <span className={`text-[28px]`}>
                  <span className={`font-[500]`}> Aliquam Posuere </span>
                  Interdum
                </span>
              </div>
              <section className={`flex `}>
                <div className={`flex gap-[24px] py-[24px]`} ref={parentRef}>
                  <ul
                    className={`${
                      width >= 1200
                        ? `w-[223px]`
                        : width >= 900
                        ? `w-[171px]`
                        : width >= 750
                        ? `w-[150px]`
                        : `w-full`
                    } text-[15px]`}
                  >
                    {col1.map((el, i) => (
                      <li key={i} className={`mb-[24px]`}>
                        <div
                          className={`mb-[12px] h-[1px] w-[33px] bg-white/90`}
                        />
                        <strong className={`font-[500]`}>{el[0]}</strong>
                        <div className={`font-[400]`}>{el[1]}</div>
                      </li>
                    ))}
                  </ul>

                  <ul
                    className={`${
                      width >= 1200
                        ? `w-[223px]`
                        : width >= 900
                        ? `w-[171px]`
                        : width >= 750
                        ? `w-[150px]`
                        : `w-full`
                    } text-[15px]`}
                  >
                    {col2.map((el, i) => (
                      <li key={i} className={`mb-[24px]`}>
                        <div
                          className={`mb-[12px] h-[1px] w-[33px] bg-white/90`}
                        />
                        <strong className={`font-[500]`}>{el[0]}</strong>
                        <div className={`font-[400]`}>{el[1]}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              <div className={` pb-[16px]`} style={{ width: parentWidth }}>
                <span className={`text-[15px]`}>
                  *Modules shown may be different than those included in final
                  design.{' '}
                </span>
              </div>
            </div>
          </div>
        }

        {/* /////////// */}

        {/* {mobile && (
        <div
          className={`absolute left-0  w-[100vw] bg-gray-300`}
          style={{ height: parentHeight2, width: '90vw' }}
        >
          
        </div>
      )} */}

        {/* 2 */}

        {mobile || (
          <div
            className={`h-full ${mobile ? `w-full` : `w-[50%]`} bg-blue-200`}
          ></div>
        )}

        <div
          className={`flex  h-full ${mobile ? `w-full` : `w-[50%]`} ${
            width >= 1200 ? `pl-[100px]` : `items-center`
          } flex-col  justify-center  p-[24px] text-black/90`}
          ref={parentRef2}
        >
          <div
            className={`pb-[24px]`}
            style={{
              width: parentWidth,
            }}
          >
            <span className={`text-[28px] `}>
              <span className={`font-[500]`}> Aliquam Posuere </span>Interdum
            </span>
          </div>
          <section className={`flex `}>
            <div className={`flex gap-[24px] py-[24px]`} ref={parentRef}>
              <ul
                className={`${
                  width >= 1200
                    ? `w-[223px]`
                    : width >= 900
                    ? `w-[171px]`
                    : width >= 750
                    ? `w-[150px]`
                    : `w-full`
                } text-[15px]`}
              >
                {col1.map((el, i) => (
                  <li key={i} className={`mb-[24px]`}>
                    <div className={`mb-[12px] h-[1px] w-[33px] bg-black`} />
                    <strong className={`font-[500]`}>{el[0]}</strong>
                    <div className={`font-[400]`}>{el[1]}</div>
                  </li>
                ))}
              </ul>

              <ul
                className={`${
                  width >= 1200
                    ? `w-[223px]`
                    : width >= 900
                    ? `w-[171px]`
                    : width >= 750
                    ? `w-[150px]`
                    : `w-full`
                } text-[15px]`}
              >
                {col2.map((el, i) => (
                  <li key={i} className={`mb-[24px]`}>
                    <div className={`mb-[12px] h-[1px] w-[33px] bg-black`} />
                    <strong className={`font-[500]`}>{el[0]}</strong>
                    <div className={`font-[400]`}>{el[1]}</div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div className={` pb-[16px]`} style={{ width: parentWidth }}>
            <span className={`text-[15px]`}>
              *Modules shown may be different than those included in final
              design.{' '}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
