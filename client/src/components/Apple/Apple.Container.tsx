import React from 'react'
import { useNavigate } from 'react-router'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { AppleCardMusic } from './Apple.card.song'
import { LandingCARDS1 } from './Apple.CARDS1'
import { LandingCARDS2 } from './Apple.CARDS2'
import { LandingCARDS3 } from './Apple.CARDS3'
import { LandingCARDS4 } from './Apple.CARDS4'
import { LandingCARDS5 } from './Apple.CARDS5'
import { LandingCARDS6 } from './Apple.CARDS6'
import { LandingCARDS7 } from './Apple.CARDS7'
import { LandingCARDS8 } from './Apple.CARDS8'
import { LandingMusic } from './Apple.CARDSMusic'
import { LandingMusic2 } from './Apple.CARDSMusic2'
import { AppleFooter } from './Apple.footer'
import { LandingMore } from './Apple.more'
import { AppleNavbar } from './Apple.navbar'

interface IProps {
  loadingBlast: null | string
  setLoadingBlast: (tag: string) => void
}

export const AppleContainer: React.FC<IProps> = ({
  setLoadingBlast,
  loadingBlast,
}) => {
  const { width } = useWindowSize()
  const { isDarkMode } = useDarkMode()

  const sm = width <= 500

  const navigate = useNavigate()

  const handleNavigate = (link: string) => {
    if (loadingBlast) {
      return
    }
    setTimeout(() => {
      setLoadingBlast(link)
    }, 0)
    setTimeout(() => {
      navigate(link)
    }, 800)
  }

  return (
    <div
      className={`flex w-screen select-none flex-col items-center ${
        isDarkMode ? `bg-[#202020]` : `bg-[#FFFBFF]`
      }`}
    >
      <AppleNavbar handleNavigate={handleNavigate} />

      <div
        className={`font-UI m-[2rem]! z-1 ${
          !sm ? `mt-[5rem]` : `mt-[5rem]`
        } flex w-[100%] max-w-[1680px] flex-col items-center justify-start`}
      >
        <header
          className={`w-full select-none  ${
            width > 1000 ? `px-[40px]` : !sm ? 'px-[20px]' : `px-[10px]`
          }`}
        >
          <h1
            className={`border-b-[0.5px] 
          ${isDarkMode ? `border-white/[.16]` : `border-black/[.18]`}

           text-[34px] font-[700] ${
             isDarkMode ? `text-white/[.92]` : `text-black/[.88]`
           }`}
          >
            Blast
          </h1>
        </header>
        <LandingCARDS1 sm={sm} />

        <LandingCARDS2 sm={sm} />
        <LandingCARDS3 sm={sm} />
        <LandingCARDS4 sm={sm} />
        <LandingMusic2 sm={sm} />

        <LandingCARDS5 sm={sm} />
        <LandingCARDS6 sm={sm} />
        <LandingCARDS7 sm={sm} />
        <LandingMusic sm={sm} />
        <LandingCARDS8 sm={sm} />
        <LandingCARDS3 sm={sm} reverse />

        <LandingMore sm={sm} />

        {/* <LandingCardBig sm={sm} /> */}

        {/* <div className={`w-full resize-x bg-red-300`}>
        <LandingCardSmall sm={sm} />
      </div> */}
      </div>
      <AppleFooter sm={sm} />
    </div>
  )
}
