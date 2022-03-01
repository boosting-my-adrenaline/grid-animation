import React from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'

const teslaImage = require('../../static/slides/teslaImage.jpeg')

interface IProps {
  show: boolean
  scroll: (offset: number) => void
  handleNavigate: (link: string) => void
}

export const TeslaSlide6: React.FC<IProps> = ({
  show,
  scroll,
  handleNavigate,
}) => {
  const { height, width } = useWindowSize()

  const lg = width >= 1200
  const md = width < 1200 && width >= 900
  const sm = width < 900 && width >= 600
  const mobile = width < 600

  return (
    <div
      className={`w-f font-Gotham flex h-full flex-row-reverse  ${
        width >= 1200 || `flex-col-reverse `
      }  items-center bg-cover object-cover `}
    >
      <div
        className={` w-full  ${
          width >= 1200
            ? `h-full min-w-[416px] max-w-[416px] p-[32px_40px_32px_48px]`
            : width >= 900
            ? `w-full p-[24px_40px] px-[10%]`
            : !mobile
            ? `w-full p-[24px_36px_40px]`
            : `w-full p-[24px_24px_40px]`
        }`}
      >
        <ul
          className={`flex ${
            width >= 1200
              ? `h-full flex-col`
              : width >= 900
              ? `gap-[24px]`
              : ` flex-col`
          } `}
        >
          <li className={`${md && `min-w-[35%] `}`}>
            <div className={`flex flex-col pt-[16px] pb-[8px] `}>
              <span
                className={`text-[17px] font-[400] leading-[14px] text-[#171a20]`}
              >
                Expirience
              </span>
              <span className={`text-[28px] font-[500] text-[#171a20]`}>
                24/7 Monitoring
              </span>
            </div>

            {md && (
              <div className={`my-[16px] flex w-full items-center `}>
                <a
                  className={` flex h-[40px] cursor-pointer items-center justify-center rounded-full border-[3px] border-[#393c41] p-[4px_30px] text-[12px] uppercase text-[#171a20] hover:bg-[#393c41] hover:text-white/90`}
                >
                  <span className={` font-[700]`}>order</span>
                </a>
              </div>
            )}
          </li>

          <li>
            {' '}
            <div className={` py-[16px] text-justify text-[#393c41]`}>
              <span className={`text-[14px]`}>
                Manage your solar system from anywhere in the world with 24/7
                mobile monitoring. Watch your energy in real time or set your
                preferences to optimize for energy independence.
              </span>
            </div>
          </li>

          {lg && (
            <div className={`flex h-full w-full flex-grow items-end `}>
              <li className={`w-full`}>
                <div className={`my-[16px] flex w-full  items-center`}>
                  <a
                    className={`flex h-[40px] w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full border-[3px] border-[#393c41] p-[4px_40px] text-[12px] uppercase text-[#171a20] hover:bg-[#393c41] hover:text-white/90`}
                  >
                    <span className={` font-[700] `}>order</span>
                  </a>
                </div>
              </li>
            </div>
          )}

          {(sm || mobile) && (
            <li>
              <div className={`my-[16px] flex w-full items-center `}>
                <a
                  className={`${
                    mobile && `flex-grow`
                  } flex h-[40px] cursor-pointer items-center justify-center rounded-full border-[3px] border-[#393c41] p-[4px_24px] text-[12px] uppercase text-[#171a20] hover:bg-[#393c41] hover:text-white/90`}
                >
                  <span className={` font-[700] `}>order</span>
                </a>
              </div>
            </li>
          )}
        </ul>
      </div>

      <div
        className={`box-border flex h-full max-h-[100vh] w-full flex-grow items-center overflow-hidden `}
      >
        <img src={teslaImage} alt="" className={`h-full w-full object-cover`} />
      </div>
    </div>
  )
}
