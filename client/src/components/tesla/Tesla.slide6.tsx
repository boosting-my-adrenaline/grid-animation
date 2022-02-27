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

export const TeslaSlide6: React.FC<IProps> = ({
  show,
  scroll,
  handleNavigate,
}) => {
  return (
    <div
      className={`w-f bg-slide2  font-Gotham flex h-full flex-col items-center bg-cover object-cover`}
    >
      <div
        className={`w-f  flex h-full flex-col items-center justify-between bg-cover object-cover pt-[16vh] pb-[12vh]`}
      >
        <div className={`text-center`}>
          <h1
            className={`px-[24px] text-[40px] font-[500] capitalize text-[#393c41]`}
          >
            Praesent aliquet purus
          </h1>
          <h3 className={`px-[24px] text-[17px] font-[400] text-[#171a20]`}>
            Suspendisse finibus et massa suscipit lacinia aliquet dolor
          </h3>
        </div>
        <section>
          <ul className={`text-white`}>
            <li>1</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
