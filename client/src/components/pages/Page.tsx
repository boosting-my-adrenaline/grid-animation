import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import useOnScreen from '../../utils/hooks/useOnScreen'
import { CardsAnimation } from '../main/Cards.animation'
import { Card } from '../main/cards.former'
import { PageReadMore } from './Page.read.more'
import { PageShareThisStory } from './Page.share'

interface IProps {
  width: number
  height: number
  setOpen: (open: null | number) => void
  opening: boolean
  windowWidth: number
  card: Card
  isMain: boolean
  setIsMain: (main: boolean) => void
}

export const Page: React.FC<IProps> = ({
  width,
  height,
  setOpen,
  opening,
  windowWidth,
  card,
  setIsMain,
  isMain,
}) => {
  const xl = width >= 1800
  const lg = width < 1800 && width >= 1200
  const md = width < 1200 && width > 800
  const sm = width <= 800

  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    if (pathname == '') {
      setIsMain(true)
    } else {
      setIsMain(false)
    }
  }, [pathname])

  const [params, setParams] = useState({
    padding: `3% 3%`,
    height: `50vh`,
    back: false,
  })

  useEffect(() => {
    let id0 = setTimeout(
      () =>
        setParams((prev) => ({
          ...prev,
          padding: xl || lg ? `1% 10%` : md ? `1% 5%` : `3% 5%`,
          height: '0vh',
        })),
      0
    )

    let id1 = setTimeout(
      () =>
        setParams((prev) => ({
          ...prev,
          back: true,
        })),
      300
    )

    return () => {
      clearTimeout(id0)
      clearTimeout(id1)
    }
  }, [])

  const handleBack = () => {
    setTimeout(
      () =>
        setParams((prev) => ({
          ...prev,
          padding: `3% 3%`,
          height: '50vh',
          back: false,
        })),
      150
    )

    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    } catch (error) {
      window.scrollTo(0, 0)
    }

    setTimeout(() => navigate('/cards/cherie'), 500)
    setTimeout(() => setOpen(null), 600)
  }

  useDidMountEffect(() => {
    handleBack()
  }, [opening])

  const { isDarkMode } = useDarkMode()

  const refHead: any = useRef<HTMLDivElement>()
  const onScreen: boolean = useOnScreen<HTMLDivElement>(refHead, '-50px')

  const bg: [string, string, string, boolean, string] = [
    card.colors.mainColor,
    card.colors.contrastForMain,
    card.colors.forLightBackground,
    card.colors.isLight,
    card.colors.forDarkBackground,
  ]

  let textHighlight = { color: !isDarkMode ? bg[2] : bg[4] }

  const highlightTitleText = { color: card.colors.contrastForMain }

  return (
    <div className={` flex w-[100%] flex-col items-center`}>
      {!sm && (
        <motion.div
          initial={{
            top: xl || lg ? '140vh' : md ? '' : '',
            left: xl || lg ? '2vw' : '1.75vw',
          }}
          animate={{
            top: params.back ? '15vh' : '140vh',
            backgroundColor: onScreen ? 'white' : card.colors.mainColor,
            color: 'black',
            borderColor: 'black',
          }}
          className={`fixed ${
            xl || lg ? `px-4 py-1` : `px-1 py-1`
          } font-Bebas text-React-h1 z-20 cursor-pointer rounded-md border-2`}
          onMouseDown={handleBack}
        >
          {xl || lg ? (
            `BACK`
          ) : (
            <svg
              viewBox="-10 0 128 128"
              width={'1.2rem'}
              height={'1.2rem'}
              xmlSpace="preserve"
            >
              <path
                style={{
                  // fill: isDarkMode ? 'rgb(55 65 81)' : 'rgb(229 231 235)',
                  fill: onScreen
                    ? isDarkMode
                      ? 'white'
                      : 'black'
                    : card.colors.mainColor,
                  stroke: 'black',
                  strokeWidth: 14,
                  strokeMiterlimit: 10,
                }}
                d="M68 111.3 22.7 66 68 20.7"
              />
            </svg>
          )}
        </motion.div>
      )}

      <motion.div
        onMouseDown={handleBack}
        ref={refHead}
        initial={{
          height: 'min-content',

          backgroundColor: bg[0],
          padding: params.padding,
        }}
        animate={{
          height: 'min-content',
          backgroundColor: bg[0],
          padding: params.padding,
        }}
        transition={{ delay: 0, duration: 0.4 }}
        className={`relative z-10 flex w-[100%] flex-col items-center justify-center `}
      >
        <motion.div
          initial={{
            backgroundColor: bg[0],
          }}
          animate={{
            width: params.back ? windowWidth : width / 2,
          }}
          transition={{ duration: 0.6 }}
          className={`absolute h-[100%]`}
        />
        <div className={`z-10 w-full`}>
          <h1
            className={`font-BebasNeue z-10  ${
              !sm ? `text-React-h1*3 ` : `text-React-h1*1.5`
            } translate-y-[-3px] `}
          >
            {card.title}
          </h1>

          <motion.p
            initial={{ fontSize: !sm ? 'calc(6.6vmin)' : `calc(3.3vmin)` }}
            animate={{
              fontSize: !params.back
                ? !sm
                  ? 'calc(6.6vmin)'
                  : 'calc(3.3vmin)'
                : 'calc(2.8vmin)',
            }}
            transition={{ duration: 0.4 }}
            className={`font-Bebas z-10 first-letter:uppercase`}
          >
            {' '}
            {card.text.split(' ').map((el, i) => {
              if (el === el.toUpperCase()) {
                return (
                  <span style={highlightTitleText} className={` lowercase`}>
                    {el}{' '}
                  </span>
                )
              } else {
                return <span>{el} </span>
              }
            })}
          </motion.p>
        </div>
        <motion.div
          initial={{ height: `50vh` }}
          animate={{ height: params.height }}
          transition={{ duration: 0.4 }}
          className={`w-[100%] `}
        ></motion.div>
      </motion.div>

      {/* <div style={{ color: bg[4], backgroundColor: '#333' }}>TEST</div> */}

      <motion.div
        initial={{
          y: 1000,
          // padding: params.padding,
          // width: xl
          //   ? windowWidth >= 2700
          //     ? '70%'
          //     : windowWidth > 2000
          //     ? '65%'
          //     : 1200
          //   : lg
          //   ? 1000
          //   : '',
        }}
        animate={{
          y: 0,
          // padding: params.padding,
          padding: '5%',
          width: xl
            ? windowWidth >= 2700
              ? '70%'
              : windowWidth > 2000
              ? '65%'
              : 1200
            : lg
            ? 1000
            : '',
        }}
        transition={{ delay: 0, duration: 0.4 }}
        className={`font-Cooper h-[min-content] w-[100%]  text-justify ${
          !sm || 1 ? `text-React-Page max-w-[1000] ` : `text-React-p`
        } ${isDarkMode ? ` text-gray-200` : `text-gray-800 `}`}
      >
        <div
          className={` w-full ${
            !sm ? `text-React-h2 pb-8 ` : `text-React-p2 pb-4`
          } flex  w-full items-center`}
        >
          {['Belize Sierra', 'Ivory Coast', 'Liberia', 'Montenegro'].map(
            (el, i) => (
              <span
                className={`${
                  isDarkMode
                    ? `border-gray-400 text-gray-400`
                    : `border-gray-800 text-gray-700`
                } border  ${
                  !sm ? `p-[2px_8px]` : `whitespace-nowrap p-[2px_4px]`
                } mr-3 rounded-md`}
              >
                {el}
              </span>
            )
          )}
          <div className={`flex-grow`} />
          <span className={`font-MochiyPopPOne`}>JAN. 23, 2022</span>
          {/* <div className={`w-[32%]`} /> */}
        </div>
        {(xl || lg || md) && (
          <picture className={`float-right ml-8  mb-4 flex w-[30%] flex-col`}>
            <img
              className={` aspect-album object-cover`}
              // alt="Miami Beach. FL. USA"
              alt=""
              // src={MiamiBeach}
              src={card.image.main}
            />
            <dd className={`text-React-h3`}></dd>
          </picture>
        )}
        <div
          className={` bg-red-20 text-left ${
            xl ? `space-y-[-3.5vh]` : lg ? `space-y-[-2.5vh]` : ``
          }`}
        >
          <h1
            className={`${
              xl
                ? 'text-xl-2'
                : lg
                ? windowWidth >= 1550
                  ? `text-xl-2*0.75`
                  : `text-xl-2*0.66`
                : md
                ? `text-xl-2-sm`
                : `text-xl-2*0.75`
            } font-Cooper uppercase`}
          >
            tempo aucto de`pellen tesque{' '}
          </h1>
        </div>
        <div
          className={`${
            isDarkMode ? `text-gray-400` : `text-gray-700`
          } text-React-p2 font-Cooper pl-1`}
        >
          Praesent elementum lorem vel ligula imperdiet molestie elementum nunc.
        </div>
        <br />
        <div className={``}>
          Vivamus tincidunt, ante{' '}
          <span style={textHighlight}>laoreet lobortis </span>
          facilisis,
          <span style={textHighlight}> neque ipsum facilisis orci</span>, quis
          tristique felis augue ultricies ipsum. Nunc lobortis massa eros,
          mollis <span style={textHighlight}>ultricies </span>
          libero consequat vitae.
          <br />
          <br />
          Cras porttitor vel leo a mollis. Pellentesque rhoncus eros non
          venenatis tristique.{' '}
          <span style={textHighlight}>Fusce in gravida sem</span>. Cras
          sollicitudin maximus risus sit amet aliquam. Donec rhoncus felis
          tortor, at porttitor est aliquet ac. Pellentesque a
          <span style={textHighlight}> egestas ex</span>. Cras porttitor vel leo
          a mollis. Pellentesque rhoncus eros non venenatis tristique. Fusce in{' '}
          <span style={textHighlight}>gravida </span>sem.
        </div>
        <br />
        {sm && (
          <img
            className={`aspect-album float-left mb-6 w-[47%] object-cover`}
            // alt="Miami Beach. FL. USA"
            // src={MiamiBeach}
            src={card.image.main}
            alt=""
          />
        )}
        <img
          className={`aspect-album object-cover ${
            xl || lg
              ? `float-left mr-10  mb-8 w-[40%] translate-y-[10px]`
              : md
              ? `float-left mr-6 mb-4 w-[40%] translate-y-[10px]`
              : `float-right mr-3 mb-6 w-[47%]`
          } `}
          src={card.image.vertical}
          alt={``}
        />
        <p>
          Fugiat est<span style={textHighlight}> repudiandae tenetur </span>
          delectus repellendus corrupti impedit, commodi nam debitis illo
          distinctio<span style={textHighlight}> reiciendis </span>veritatis
          excepturi quidem inventore reprehenderit repellat aspernatur ullam?
        </p>
        <br />
        <p>
          Repudiandae a<span style={textHighlight}> recusandae nihil</span>.
          Consequatur sequi rem modi labore exercitationem molestiae minus fugit
          iure, alias perferendis impedit error, illum dolor iste quaerat
          mollitia expedita aperiam possimus fuga dignissimos quos temporibus.
          Iusto reprehenderit ut fugiat. Doloremque sint{' '}
          <span style={textHighlight}>
            voluptate natus enim mollitia, cupiditate, unde est repellat
          </span>{' '}
          ex aliquid, porro voluptatum incidunt.{' '}
        </p>
        <br />
        <p>
          Error aliquid cum amet, rerum{' '}
          <span style={textHighlight}>incidunt mollitia </span>dolore rem at?
          Commodi adipisci nesciunt culpa nisi? Illum dignissimos ab quibusdam
          tempora. Ducimus commodi id at, fugiat perspiciatis incidunt fuga.
          Odit aliquid cumque, inventore{' '}
          <span style={textHighlight}>
            blanditiis eligendi cupiditate quia ipsa neque eius{' '}
          </span>
          earum doloremque? Possimus voluptatem nulla impedit.{' '}
        </p>
        <br />
        <p>
          Optio laudantium consectetur dolorum unde vel accusantium, sit minus
          repudiandae nam fuga quasi possimus cum, in voluptatum adipisci
          pariatur earum. Necessitatibus corporis veniam quaerat esse accusamus
          enim nulla maxime dignissimos? Soluta
          <span style={textHighlight}> velit reiciendis </span>deserunt? Quia
          provident ad beatae alias. Incidunt consequuntur iure maxime beatae
          ipsa sapiente atque?<span style={textHighlight}> Dolore</span>, ab.
        </p>
        <br />
        <img
          className={`aspect-book float-right object-cover ${
            xl || lg
              ? ` ml-10 mb-8 w-[50%] `
              : md
              ? `mb-8 w-[100%]`
              : 'ml-3 mb-6'
          } translate-y-[10px]`}
          // alt="Tropics"
          // src={Tropics}
          src={card.image.gorizontal}
          alt=""
        />{' '}
        <p>
          Error aliquid cum amet, rerum{' '}
          <span style={textHighlight}>incidunt mollitia </span>dolore si rem at?
          Commodi ot adip lisci nesciunt dom culpa nisi? Illum iure dignissimos
          ab quibusdam tempora. Ducimus commodi id at, fugiat perspiciatis
          incidunt fuga. Odit aliquid cumque, inventore{' '}
          <span style={textHighlight}>
            blanditiis eligendi cupiditate quia ipsa neque eius{' '}
          </span>
          earum doloremque? Possimus voluptatem nulla impedit.
        </p>
        <br />
        <p>
          {' '}
          Optio laudantium consectetur dolorum unde vel accusantium, sit minus
          repudiandae nam fuga quasi possimus cum, in voluptatum adipisci
          pariatur earum. Necessitatibus corporis veniam quaerat esse accusamus
          enim nulla maxime dignissimos? Soluta
          <span style={textHighlight}> velit reiciendis </span>deserunt? Quia
          provident ad beatae alias. Incidunt consequuntur iure maxime beatae
          ipsa sapiente atque?<span style={textHighlight}> Dolore</span>, ab.
        </p>
        <br />
        <br />
        <PageShareThisStory />
        <br />
        <hr />
        <br />
      </motion.div>
      <PageReadMore sm={sm} md={md} lg={lg} xl={xl} windowWidth={windowWidth} />
    </div>
  )
}
