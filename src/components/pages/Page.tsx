import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import useOnScreen from '../../utils/hooks/useOnScreen'
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
    console.log(location)
    if (pathname == '') {
      setIsMain(true)
      console.log('mainnn')
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
          back: true,
          height: '0vh',
        })),
      0
    )

    return () => {
      clearTimeout(id0)
    }
  }, [])

  const handleBack = () => {
    setParams((prev) => ({
      ...prev,
      padding: `3% 3%`,
      height: '50vh',
      back: false,
    }))

    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    } catch (error) {
      window.scrollTo(0, 0)
    }

    setTimeout(() => navigate('/'), 500)
    setTimeout(() => setOpen(null), 500)
  }

  useDidMountEffect(() => {
    // if (!opening) {
    handleBack()
    // }
  }, [opening])

  const { isDarkMode } = useDarkMode()

  // const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '0px')

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
    <div className={`w-[100%] flex flex-col items-center`}>
      <motion.div
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
        className={`z-10 flex flex-col items-center justify-center w-[100%] relative `}
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
            className={`z-10 font-BebasNeue  ${
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
            className={`z-10 font-Bebas first-letter:uppercase`}
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
          padding: params.padding,
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
          padding: params.padding,
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
        className={`w-[100%] h-[min-content]  font-Cooper ${
          !sm || 1 ? `text-React-Page max-w-[1000] ` : `text-React-p`
        } ${isDarkMode ? ` text-gray-200` : `text-gray-800 `}`}
      >
        <div
          className={` w-full ${
            !sm ? `pb-8 text-React-h2 ` : `pb-4 text-React-p2`
          } w-full  flex items-center`}
        >
          {['Belize Sierra', 'Ivory Coast', 'Liberia', 'Montenegro'].map(
            (el, i) => (
              <span
                className={`${
                  isDarkMode
                    ? `text-gray-400 border-gray-400`
                    : `text-gray-700 border-gray-800`
                } border  ${
                  !sm ? `p-[2px_8px]` : `p-[2px_4px] whitespace-nowrap`
                } rounded-md mr-3`}
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
          <picture className={`flex flex-col  float-right w-[30%] ml-8 mb-4`}>
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
          className={`  bg-red-20 ${
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
          } text-React-p2 pl-1 font-Cooper`}
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
            className={`w-[47%] float-left mb-6 aspect-album object-cover`}
            // alt="Miami Beach. FL. USA"
            // src={MiamiBeach}
            src={card.image.main}
            alt=""
          />
        )}
        <img
          className={`aspect-album object-cover ${
            xl || lg
              ? ` translate-y-[10px] float-left  w-[40%] mr-10 mb-8`
              : md
              ? `w-[40%] mr-6 mb-4 float-left translate-y-[10px]`
              : 'w-[47%] mr-3 mb-6 float-right'
          } `}
          // alt="Ocean Drive"
          // src={OceanDrive}
          src={card.image.vertical}
          alt=""
        />
        <p>
          Fugiat est<span style={textHighlight}> repudiandae tenetur </span>{' '}
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
          className={`float-right aspect-book object-cover ${
            xl || lg
              ? ` w-[50%] ml-10 mb-8 `
              : md
              ? `w-[100%] mb-8`
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
