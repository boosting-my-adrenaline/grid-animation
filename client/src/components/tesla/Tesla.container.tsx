import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import useOnScreen from '../../utils/hooks/useOnScreen'
import '../Apple/noscrollbar.css'
import { TeslaMenu } from './Tesla.menu'
import { TeslaSide } from './Tesla.side'
import { TeslaSlide1 } from './Tesla.slide1'
import { TeslaSlide2 } from './Tesla.slide2'
import { TeslaSlide3 } from './Tesla.slide3'
import { TeslaSlide4 } from './Tesla.slide4'
import { TeslaSlide5 } from './Tesla.slide5'
import { TeslaSlide6 } from './Tesla.slide6'
import { TeslaSlide7 } from './Tesla.slide7'
import { TeslaSlide8 } from './Tesla.slide8'
import { TeslaSlideUp } from './Tesla.slideup'

interface IProps {
  loadingBlast: null | string
  setLoadingBlast: (tag: string) => void
}

export const TeslaContainer: React.FC<IProps> = ({
  setLoadingBlast,
  loadingBlast,
}) => {
  const navigate = useNavigate()

  const { width } = useWindowSize()

  const lg = width >= 1200
  const md = width < 1200 && width >= 900
  const sm = width < 900 && width >= 600
  const mobile = width < 600

  const [activeSlide, setActiveSlide] = useState(1)

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

  const [menuOpen, setMenuOpen] = useState(false)

  const ref: any = useRef<HTMLElement>()

  const scroll = (offset: number) => {
    ref.current.scrollTop = offset
  }

  const ref1: any = useRef<HTMLElement>(null)
  const ref2: any = useRef<HTMLElement>(null)
  const ref3: any = useRef<HTMLElement>(null)
  const ref4: any = useRef<HTMLElement>(null)
  const ref5: any = useRef<HTMLElement>(null)
  const ref6: any = useRef<HTMLElement>(null)
  const ref7: any = useRef<HTMLElement>(null)
  const ref8: any = useRef<HTMLElement>(null)

  const onScreen1: boolean = useOnScreen<HTMLDivElement>(ref1, `0px`)
  const onScreen2: boolean = useOnScreen<HTMLDivElement>(ref2, `0px`)
  const onScreen3: boolean = useOnScreen<HTMLDivElement>(ref3, `0px`)
  const onScreen4: boolean = useOnScreen<HTMLDivElement>(ref4, `0px`)
  const onScreen5: boolean = useOnScreen<HTMLDivElement>(ref5, `0px`)
  const onScreen6: boolean = useOnScreen<HTMLDivElement>(ref6, `0px`)
  const onScreen7: boolean = useOnScreen<HTMLDivElement>(ref7, `0px`)
  const onScreen8: boolean = useOnScreen<HTMLDivElement>(ref8, `0px`)

  useDidMountEffect(() => {
    if (onScreen1) {
      setActiveSlide(1)
    }
  }, [onScreen1])

  useDidMountEffect(() => {
    if (onScreen2) {
      setActiveSlide(2)
    }
  }, [onScreen2])

  useDidMountEffect(() => {
    if (onScreen3) {
      setActiveSlide(3)
    }
  }, [onScreen3])

  useDidMountEffect(() => {
    if (onScreen4) {
      setActiveSlide(4)
    }
  }, [onScreen4])

  useDidMountEffect(() => {
    if (onScreen5) {
      setActiveSlide(5)
    }
  }, [onScreen5])

  useDidMountEffect(() => {
    if (onScreen6) {
      setActiveSlide(6)
    }
  }, [onScreen6])

  useDidMountEffect(() => {
    if (onScreen7) {
      setActiveSlide(7)
    }
  }, [onScreen7])

  useDidMountEffect(() => {
    if (onScreen8) {
      setActiveSlide(8)
    }
  }, [onScreen8])

  const li = (slide: JSX.Element) => (
    <li className={`${width >= 900 && `snap-center `}`}>
      <div className={`${width >= 900 && `h-screen`}`}>{slide}</div>
    </li>
  )

  return (
    <div className={`font-Gotham relative w-full overflow-visible`}>
      {width >= 900 && (
        <div className={`fixed left-0 z-[50] flex h-screen items-center`}>
          <TeslaSide scroll={scroll} activeSlide={activeSlide} />
        </div>
      )}

      {activeSlide === 1 || width < 900 || (
        <div className={`absolute top-[20px] right-[25px] z-40 `}>
          <TeslaSlideUp onClick={() => scroll(10)} dark={activeSlide !== 4} />{' '}
        </div>
      )}
      {menuOpen && (
        <div className={`fixed inset-0 z-[60] h-screen `}>
          <TeslaMenu
            handleNavigate={handleNavigate}
            closeMenu={() => setMenuOpen(false)}
          />
        </div>
      )}

      <ul
        className={`no-scrollbar  relative h-screen ${
          width >= 900 && `snap-y snap-mandatory`
        } overflow-y-scroll scroll-smooth`}
        ref={ref}
      >
        {li(
          <TeslaSlide1
            scroll={scroll}
            openMenu={() => setMenuOpen(true)}
            handleNavigate={handleNavigate}
            showNav={onScreen1}
          />
        )}
        {li(
          <TeslaSlide2
            show={onScreen2}
            scroll={scroll}
            handleNavigate={handleNavigate}
          />
        )}
        {li(
          <TeslaSlide3
            show={onScreen3}
            scroll={scroll}
            handleNavigate={handleNavigate}
          />
        )}
        {li(
          <TeslaSlide4
            show={onScreen4}
            scroll={scroll}
            handleNavigate={handleNavigate}
          />
        )}
        {li(
          <TeslaSlide5
            show={onScreen5}
            scroll={scroll}
            handleNavigate={handleNavigate}
          />
        )}
        {li(
          <TeslaSlide6
            show={onScreen6}
            scroll={scroll}
            handleNavigate={handleNavigate}
          />
        )}
        {li(
          <TeslaSlide7
            show={onScreen7}
            scroll={scroll}
            handleNavigate={handleNavigate}
          />
        )}
        {li(
          <TeslaSlide8
            show={onScreen8}
            scroll={scroll}
            handleNavigate={handleNavigate}
          />
        )}

        <div
          className={`absolute ${
            width >= 900 ? `top-[50vh]` : `top-[60vh]`
          } z-40h-[0.1px] w-[0.1px] `}
          ref={ref1}
        />
        <div
          className={`absolute top-[150vh] z-40 h-[100px] w-[10px] bg-red-200`}
          ref={ref2}
        />
        <div
          className={`absolute ${
            width >= 900 ? `top-[250vh]` : `top-[220vh]`
          } z-40 h-[100px] w-[10px] bg-sky-900`}
          ref={ref3}
        />
        <div
          className={`absolute ${
            width >= 900 ? `top-[350vh]` : `top-[310vh]`
          } z-40 h-[300px] w-[10px] bg-emerald-200`}
          ref={ref4}
        />
        <div
          className={`absolute top-[450vh] z-40 h-[100px] w-[10px] bg-purple-200`}
          ref={ref5}
        />
        <div
          className={`absolute top-[550vh] z-40 h-[100px] w-[10px] bg-rose-200`}
          ref={ref6}
        />
        <div
          className={`absolute top-[650vh] z-40 h-[100px] w-[10px] `}
          ref={ref7}
        />
        <div
          className={`absolute top-[750vh] z-40 h-[100px] w-[10px] `}
          ref={ref8}
        />
      </ul>
    </div>
  )
}
