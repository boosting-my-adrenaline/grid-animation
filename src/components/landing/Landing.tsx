import React from 'react'
import { useNavigate } from 'react-router'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { LandingCARDS1 } from './Landing.CARDS1'
import { LandingCARDS2 } from './Landing.CARDS2'
import { LandingCARDS3 } from './Landing.CARDS3'
import { LandingCARDS4 } from './Landing.CARDS4'
import { LandingCARDS5 } from './Landing.CARDS5'
import { LandingCARDS6 } from './Landing.CARDS6'
import { LandingCARDS7 } from './Landing.CARDS7'
import { LandingCARDS8 } from './Landing.CARDS8'
import { LandingMore } from './Landing.more'

// const l1 = require('../../static/landing/l1.jpg')
// const l2 = require('../../static/landing/l2.jpg')
// const l3 = require('../../static/landing/l3.jpg')
// const l4 = require('../../static/landing/l4.jpg')
// const l5 = require('../../static/landing/l5.jpg')
// const l6 = require('../../static/landing/l6.jpg')
// const l7 = require('../../static/landing/l7.jpg')
// const l8 = require('../../static/landing/l8.jpg')
// const l9 = require('../../static/landing/l9.jpg')
// const l10 = require('../../static/landing/l10.jpg')

// const b1 = require('../../static/bags/1.jpeg')
// const b2 = require('../../static/bags/2.jpeg')
// const b3 = require('../../static/bags/3.jpeg')
// const b4 = require('../../static/bags/4.jpeg')
// const b5 = require('../../static/bags/5.jpeg')
// const b6 = require('../../static/bags/6.jpeg')
// const b7 = require('../../static/bags/7.jpeg')
// const b8 = require('../../static/bags/8.jpeg')

interface IProps {
  loadingBlast: null | string
  setOpening: (opening: boolean) => void
  setLoadingBlast: (tag: string) => void
}

export const Landing: React.FC<IProps> = ({
  setOpening,
  setLoadingBlast,
  loadingBlast,
}) => {
  const { width } = useWindowSize()
  const { isDarkMode } = useDarkMode()

  const sm = width <= 500

  const navigate = useNavigate()

  const handleNavigate = () => {
    let link = [
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
    ][Math.floor(Math.random() * 10)]

    if (loadingBlast) {
      return
    }

    setOpening(false)
    setTimeout(() => {
      setLoadingBlast(link)
    }, 0)
    setTimeout(() => {
      if (link === 'blast') {
        navigate('/')
      } else {
        navigate('/cards/' + link)
      }
    }, 800)
  }

  return (
    <div
      className={`font-UI m-[2rem] ${
        !sm ? `mt-[5rem]` : `mt-[2rem]`
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
      <LandingCARDS1 sm={sm} handleNavigate={handleNavigate} />

      <LandingCARDS2 handleNavigate={handleNavigate} sm={sm} />
      <LandingCARDS3 handleNavigate={handleNavigate} sm={sm} />
      <LandingCARDS4 handleNavigate={handleNavigate} sm={sm} />
      <LandingCARDS5 handleNavigate={handleNavigate} sm={sm} />
      <LandingCARDS6 handleNavigate={handleNavigate} sm={sm} />
      <LandingCARDS7 handleNavigate={handleNavigate} sm={sm} />
      <LandingCARDS8 handleNavigate={handleNavigate} sm={sm} />
      <LandingMore handleNavigate={handleNavigate} sm={sm} />

      {/* <LandingCardBig sm={sm} /> */}

      {/* <div className={`w-full resize-x bg-red-300`}>
        <LandingCardSmall sm={sm} />
      </div> */}
    </div>
  )
}
