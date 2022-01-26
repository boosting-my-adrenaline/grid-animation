import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import useOnScreen from '../../utils/hooks/useOnScreen'
const Arch = require('../../static/arch.jpg')
const Tropics = require('../../static/tropics.jpg')
const MiamiBeach = require('../../static/miami-beach.jpg')
const OceanDrive = require('../../static/ocean-drive.jpg')

interface IProps {
  bg: [string, string, string, boolean, string]
  width: number
  height: number
  setOpen: (open: null) => void
  opening: boolean
  windowWidth: number
}

export const Page: React.FC<IProps> = ({
  bg,
  width,
  height,
  setOpen,
  opening,
  windowWidth,
}) => {
  const xl = width
  const lg = width >= 1200
  const md = width < 1200 && width

  const navigate = useNavigate()

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
          padding: `1% 10%`,
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

    setTimeout(() => navigate('/'), 400)
    setTimeout(() => setOpen(null), 400)
  }

  useDidMountEffect(() => {
    if (!opening) {
      handleBack()
    }
  }, [opening])

  const { isDarkMode } = useDarkMode()

  const ref: any = useRef<HTMLDivElement>()
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '0px')

  let textHighlight = { color: !isDarkMode ? bg[2] : bg[4] }

  return (
    <div className={`w-[100%] `}>
      <motion.div
        ref={ref}
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
        <div className={`z-10`}>
          <h1
            className={`z-10 font-BebasNeue text-React-h1*3 translate-y-[-3px] `}
          >
            Tenetur, sapiente, ea excepturi
          </h1>

          <motion.p
            initial={{ fontSize: 'calc(6.6vmin)' }}
            animate={{
              fontSize: !params.back ? 'calc(6.6vmin)' : 'calc(2.8vmin )',
            }}
            transition={{ duration: 0.4 }}
            className={`z-10 font-Bebas `}
          >
            Error dicta molestias
            <span
              style={{ color: params.back || 1 ? bg[1] : 'rgb(115 115 115)' }}
            >
              {' '}
              nesciunt accusantium{' '}
            </span>
            in doloremque quisquam assumenda id, tenetur amet debitis. Debitis
            sequi eligendi{' '}
            <span
              style={{ color: params.back || 1 ? bg[1] : 'rgb(115 115 115)' }}
            >
              ex{' '}
            </span>
            voluptatum. Repellendus{' '}
            <span
              style={{ color: params.back || 1 ? bg[1] : 'rgb(115 115 115)' }}
            >
              architecto minus{' '}
            </span>
            exercitationem. Velit nihil odio
            <span
              style={{ color: params.back || 1 ? bg[1] : 'rgb(115 115 115)' }}
            >
              {' '}
              nostrum{' '}
            </span>
            dolorem eos, repellat ullam et deserunt pariatur, itaque
            <span
              style={{ color: params.back || 1 ? bg[1] : 'rgb(115 115 115)' }}
            >
              {' '}
              enim vero
            </span>{' '}
            quibusdam nulla quia.
          </motion.p>
        </div>
        <motion.div
          initial={{ height: `50vh` }}
          animate={{ height: params.height }}
          transition={{ duration: 0.4 }}
          className={`w-[100%] `}
        ></motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 1000, padding: params.padding }}
        animate={{ y: 0, padding: params.padding }}
        transition={{ delay: 0, duration: 0.4 }}
        className={`w-[100%] h-[min-content]  text-gray-800 font-Bebas text-React-h1 ${
          isDarkMode && ` text-gray-50`
        }`}
      >
        <div className={`pb-8 text-React-h2 w-full  flex`}>
          {['Belize Sierra', 'Ivory Coast', 'Liberia', 'Montenegro'].map(
            (el, i) => (
              <span
                className={`${
                  isDarkMode
                    ? `text-gray-400 border-gray-400`
                    : `text-gray-700 border-gray-800`
                } border  p-[2px_8px] rounded-md mr-3`}
              >
                {el}
              </span>
            )
          )}
          <div className={`flex-grow`} />
          <span className={`font-MochiyPopPOne`}>JAN. 23, 2022</span>
          <div className={`w-[32%]`} />
        </div>
        <img
          className={`float-right w-[30%] ml-8 `}
          alt="Miami Beach. FL. USA"
          src={MiamiBeach}
        />
        <div className={`w-[min-content]  bg-red-20 space-y-[-5.5vh]`}>
          <h1
            className={`text-xl-2 font-Merriweather uppercase flex items-between`}
          >
            <span>tempo</span>
            <div className={`flex-grow`} />
            <span>aucto</span>
          </h1>
          <h1 className={`text-xl-1 font-Merriweather uppercase`}>
            de`pellentesque
          </h1>
        </div>
        <div
          className={`${
            isDarkMode ? `text-gray-400` : `text-gray-700`
          } text-React-p2 pl-1`}
        >
          Praesent elementum lorem vel ligula imperdiet molestie elementum nunc
          at tellus vel, sagittis congue.
        </div>
        <br />
        <div className={`mr- [33%] bg-red-00 text-React-h1`}>
          Vivamus tincidunt, ante{' '}
          <span style={textHighlight}>laoreet lobortis </span>
          facilisis,
          <span style={textHighlight}> neque ipsum facilisis orci</span>, quis
          tristique felis augue ultricies ipsum. Nunc lobortis massa eros,
          mollis <span style={textHighlight}>ultricies </span>
          libero consequat vitae. Cras porttitor vel leo a mollis. Pellentesque
          rhoncus eros non venenatis tristique.{' '}
          <span style={textHighlight}>Fusce in gravida sem</span>. Cras
          sollicitudin maximus risus sit amet aliquam. Donec rhoncus felis
          tortor, at porttitor est aliquet ac. Pellentesque a
          <span style={textHighlight}> egestas ex</span>. Cras porttitor vel leo
          a mollis. Pellentesque rhoncus eros non venenatis tristique. Fusce in{' '}
          <span style={textHighlight}>gravida </span>sem.
        </div>
        <br />
        <img
          className={`float-left w-[30%] mr-10 mb-8 translate-y-[10px]`}
          alt="Ocean Drive"
          src={OceanDrive}
        />
        <p>
          Fugiat est<span style={textHighlight}> repudiandae tenetur </span>{' '}
          delectus repellendus corrupti impedit, commodi nam debitis illo
          distinctio<span style={textHighlight}> reiciendis </span>veritatis
          excepturi quidem inventore reprehenderit repellat aspernatur ullam?
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
          earum doloremque? Possimus voluptatem nulla impedit. Optio laudantium
          consectetur dolorum unde vel accusantium, sit minus repudiandae nam
          fuga quasi possimus cum, in voluptatum adipisci pariatur earum.
          Necessitatibus corporis veniam quaerat esse accusamus enim nulla
          maxime dignissimos? Soluta
          <span style={textHighlight}> velit reiciendis </span>deserunt? Quia
          provident ad beatae alias. Incidunt consequuntur iure maxime beatae
          ipsa sapiente atque?<span style={textHighlight}> Dolore</span>, ab.
        </p>
        <br />
        <img
          className={`float-right  w-[36%] ml-10 mb-8 translate-y-[10px]`}
          alt="Tropics"
          src={Tropics}
        />{' '}
        <p>
          Error aliquid cum amet, rerum{' '}
          <span style={textHighlight}>incidunt mollitia </span>dolore rem at?
          Commodi adipisci nesciunt culpa nisi? Illum dignissimos ab quibusdam
          tempora. Ducimus commodi id at, fugiat perspiciatis incidunt fuga.
          Odit aliquid cumque, inventore{' '}
          <span style={textHighlight}>
            blanditiis eligendi cupiditate quia ipsa neque eius{' '}
          </span>
          earum doloremque? Possimus voluptatem nulla impedit. Optio laudantium
          consectetur dolorum unde vel accusantium, sit minus repudiandae nam
          fuga quasi possimus cum, in voluptatum adipisci pariatur earum.
          Necessitatibus corporis veniam quaerat esse accusamus enim nulla
          maxime dignissimos? Soluta
          <span style={textHighlight}> velit reiciendis </span>deserunt? Quia
          provident ad beatae alias. Incidunt consequuntur iure maxime beatae
          ipsa sapiente atque?<span style={textHighlight}> Dolore</span>, ab.
        </p>
        <br />
        {/* <div
          className={`w-f h-[1px] ${
            isDarkMode ? `bg-gray-200` : `bg-gray-400`
          }`}
        ></div> */}
        <br />
        {/* <p>
          {' '}
          Ipsa tempora qui ex quod velit odit quia unde quidem sunt. Quae animi
          voluptates necessitatibus nesciunt soluta eligendi inventore similique
          iusto fuga. Error minima maiores fuga explicabo necessitatibus
          blanditiis velit temporibus culpa dicta, voluptatibus, nihil quisquam
          voluptate omnis. Ipsum, sunt suscipit. Fuga, omnis tenetur excepturi
          quidem corporis debitis blanditiis magni atque earum, recusandae,
          distinctio numquam deleniti. Illo perspiciatis expedita porro.
          Exercitationem quos aliquam vitae necessitatibus eos qui ipsum
          cupiditate, consectetur saepe. Nisi, ipsum blanditiis aspernatur
          obcaecati iste officia quas incidunt error atque beatae voluptatum
          fuga, soluta laudantium eum eligendi quam explicabo rem nulla.
          Assumenda praesentium illo asperiores nihil a nulla consequuntur.
          Facere, impedit. Aut, soluta. Asperiores quia architecto tempora
          numquam eos omnis amet nihil vero quis. Ea inventore velit dolor
          explicabo rerum, ad, voluptatem ducimus voluptatibus eveniet
          perspiciatis nihil. Expedita, rem? Modi, consequuntur quibusdam vel
          blanditiis, hic voluptatibus neque suscipit illum consequatur totam
          exercitationem architecto beatae praesentium eligendi alias. Repellat
          dolores perspiciatis dolorum maiores quam doloremque ipsa. Fugiat
          consequatur eaque sed. Aut porro qui, eos provident commodi expedita
          cumque vel ipsa odio laboriosam ut rerum molestiae iure, blanditiis
          assumenda. Facere sint magni maiores quo dignissimos eos tempore
          libero temporibus corrupti iste.{' '}
        </p>
        <br />
        <p>
          Architecto non adipisci sapiente cumque tenetur, eveniet iure magni
          dolores minus neque, dignissimos impedit, iusto consequuntur velit id
          quod. Sit doloribus molestias officiis aliquid tempora alias
          asperiores, quia quasi excepturi? Tenetur, sapiente, ea odit excepturi
          totam suscipit quisquam aliquam pariatur doloremque, aspernatur
          aperiam. Eligendi ut, consequatur enim facere rerum nisi omnis soluta
          maxime sequi, reprehenderit culpa. Repudiandae quaerat ut deserunt.
          Quidem ab dolores reprehenderit laborum labore perspiciatis officia
          nulla corporis quae. Harum ducimus explicabo magni magnam animi ipsam
          sunt esse expedita porro blanditiis? Sit, hic tenetur nisi architecto
          suscipit dolor? Placeat, non provident perspiciatis autem at modi
          expedita mollitia earum iure qui ex sint quis quos. Optio harum non
          aliquam asperiores aspernatur repellat sed molestiae laudantium, nulla
          rem suscipit quos. Blanditiis, vero quam molestiae libero ab rem,
          aspernatur minima voluptate sit officia, architecto repellendus minus
          qui saepe tenetur.{' '}
        </p>
        <br />
        <p>
          Temporibus similique nam iusto vero fuga facere, doloribus ab quae
          beatae harum? Eveniet exercitationem, cum inventore ullam incidunt
          deserunt unde quae adipisci assumenda odio doloribus doloremque ad,
          temporibus explicabo voluptatibus ipsam cupiditate officia nam? Quos
          dolore corporis perspiciatis praesentium, ad ratione quis? Sapiente
          minima vero molestias voluptatum nulla non accusantium blanditiis,
          corrupti inventore officiis, veniam possimus impedit dolorum quis
          exercitationem dolore tempora nisi omnis ipsam id dignissimos quod
          repudiandae. Repellendus, temporibus sunt?
        </p> */}
      </motion.div>
    </div>
  )
}

{
  /* <div
className={`z-10 flex flex-col items-start justify-start w-[100%] h-[100%] `}
>
{' '}
<h1 className={`font-BebasNeue text-React-h1 text-gray-900`}>
  Lorem ipsum dolor sit amet
</h1>
<p className={`font-Bebas text-React-p text-gray-700`}>
  Error dicta molestias nesciunt accusantium in doloremque quisquam
  assumenda id, tenetur amet debitis. Debitis sequi eligendi ex
  voluptatum. Repellendus architecto minus exercitationem. Velit nihil
  odio nostrum dolorem eos, repellat ullam et deserunt pariatur, itaque
  enim vero quibusdam nulla quia quisquam assumenda magni accusantium
  quae similique hic optio unde tempora. Assumenda, nemo sequi.
</p>
</div> */
}
