import React from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { TeslaNavbar } from './Tesla.navbar'
import { TeslaSlideDown } from './Tesla.slidedown'

interface IProps {
  scroll: (offset: number) => void
  openMenu: () => void
  handleNavigate: (link: string) => void
  showNav: boolean
}

export const TeslaSlide1: React.FC<IProps> = ({
  scroll,
  openMenu,
  handleNavigate,
  showNav,
}) => {
  const { height, width } = useWindowSize()

  const lg = width >= 1200
  const md = width < 1200 && width >= 900
  const sm = width < 900 && width >= 600
  const mobile = width < 600

  return (
    <div
      className={`w-f bg-slide2 font-Gotham flex h-screen flex-col items-center bg-cover bg-no-repeat object-cover`}
    >
      {showNav && (
        <TeslaNavbar
          show={showNav}
          openMenu={openMenu}
          handleNavigate={handleNavigate}
        />
      )}

      <div
        className={`w-f  z-[10] flex h-full flex-col items-center justify-between bg-cover object-cover pt-[16vh] pb-[9vh]`}
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
        <section
          className={`flex ${
            width >= 900 ? `gap-[48px]` : `flex-col items-center gap-[20px]`
          }`}
        >
          <ul className={`flex gap-[24px] text-[#f4f4f4]`}>
            <li
              className={`${mobile || `px-[20px]`} ${
                showNav || `translate-y-[-4vh] opacity-0`
              } transition duration-300 ease-linear`}
            >
              <div className={`flex flex-col items-center`}>
                <div
                  className={`${
                    !mobile ? `text-[28px]` : `text-[20px]`
                  } flex translate-y-[-5px] items-center justify-center font-[500] leading-[1rem] text-transparent`}
                >
                  24/7
                  <svg
                    className={`absolute ${mobile && `translate-y-[4px]`}`}
                    width={!mobile ? 28 : 24}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <title />
                    <path
                      d="M4 10.5V10l5-8h15l5 8v20H4V10.5Zm1.225-.5L9.6 3h13.8l4.375 7H5.225ZM5 15v14h23V15H5Zm8.997 5A1.994 1.994 0 0 0 12 22a2 2 0 0 0 1.997 2h5.006A1.994 1.994 0 0 0 21 22a2 2 0 0 0-1.997-2h-5.006Zm.006 1A.999.999 0 0 0 13 22c0 .552.438 1 1.003 1h4.994A.999.999 0 0 0 20 22c0-.552-.438-1-1.003-1h-4.994ZM5 11v3h23v-3H5Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div
                  className={`flex flex-col items-center pt-[8px] ${
                    !mobile ? `text-[12px]` : `text-[10px]`
                  }`}
                >
                  <p>At Vero Eos </p>
                  <p>et Accusamus</p>
                </div>
              </div>
            </li>

            <li
              className={`${mobile || `px-[28px]`} ${
                showNav || `translate-y-[-4vh] opacity-0`
              } transition duration-300 ease-linear`}
            >
              <div className={`flex flex-col items-center`}>
                <div
                  className={`${
                    !mobile ? `text-[28px]` : `text-[20px]`
                  } font-[500] leading-[1rem]`}
                >
                  $
                </div>
                <div
                  className={`flex flex-col items-center pt-[8px] ${
                    !mobile ? `text-[12px]` : `text-[10px]`
                  }`}
                >
                  <p>Corrupti Quos </p>
                  <p> Deleniti Atque </p>
                </div>
              </div>
            </li>

            <li
              className={`${mobile || `px-[20px]`} ${
                showNav || `translate-y-[-4vh] opacity-0`
              } transition duration-300 ease-linear`}
            >
              <div className={`flex flex-col items-center`}>
                <div
                  className={`${
                    !mobile ? `text-[28px]` : `text-[20px]`
                  } font-[500] leading-[1rem]`}
                >
                  24/7
                </div>
                <div
                  className={`flex flex-col items-center pt-[8px] ${
                    !mobile ? `text-[12px]` : `text-[10px]`
                  }`}
                >
                  <p>Officiis Debitis </p>
                  <p> aut Rerum</p>
                </div>
              </div>
            </li>
          </ul>
          <div
            // initial={{ opacity: 0, y: '-4vh' }}
            // animate={{
            //   opacity: showNav ? 1 : 0,
            //   y: !sm ? (showNav ? `0vh` : '-4vh') : showNav ? `0vh` : '2vh',
            // }}
            className={`h-[40px]  ${mobile ? `min-w-[260px] ` : `w-[204px]`}  ${
              showNav || `translate-y-[-3vh] opacity-0`
            } transition duration-300 ease-linear`}
          >
            <a
              className={`ease flex h-full w-full flex-grow cursor-pointer items-center justify-center rounded-full border-[3px] border-[#f4f4f4] p-[4px_24px] text-[#f4f4f4] transition duration-200 hover:bg-[#f4f4f4] hover:text-[#171a20]`}
            >
              <span className={`text-[12px] font-[500] uppercase `}>
                order now
              </span>
            </a>
          </div>
        </section>
      </div>
      {mobile || (
        <div className={`absolute bottom-[10px] z-20`}>
          <TeslaSlideDown onClick={() => scroll(height + 100)} />
        </div>
      )}

      <div
        className={`absolute bottom-0  h-[30vh] w-full bg-gradient-to-t from-black/[.55] via-black/[.75] to-transparent`}
      ></div>
    </div>
  )
}
