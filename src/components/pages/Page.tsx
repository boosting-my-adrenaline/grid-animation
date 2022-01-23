import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import useOnScreen from '../../utils/hooks/useOnScreen'
const Arch = require('../../static/arch.jpg')
const Tropics = require('../../static/tropics.jpg')
const MiamiBeach = require('../../static/miami-beach.jpg')

interface IProps {
  bg: [string, string, string, boolean]
  width: number
  height: number
  setOpen: (open: null) => void
}

export const Page: React.FC<IProps> = ({ bg, width, height, setOpen }) => {
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
      125
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

    setTimeout(() => navigate('/'), 450)
    setTimeout(() => setOpen(null), 450)
  }

  const ref: any = useRef<HTMLDivElement>()
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '0px')

  return (
    <div className={`w-[100%] `}>
      <motion.span
        initial={{ backgroundColor: bg[0], left: `2vh`, top: `70vh` }}
        animate={{
          top: !params.back ? '120vh' : '2vh',
          backgroundColor: !onScreen ? bg[0] : 'whitesmoke',
          color: onScreen ? 'black' : bg[3] ? 'white' : 'black',
        }}
        transition={{ duration: 0.4 }}
        className={`fixed cursor-pointer  font-Bebas text-React-h1 px-2 py-1 border border-gray-800 rounded-lg`}
        onMouseDown={handleBack}
      >
        BACK
      </motion.span>
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
        transition={{ delay: 0, duration: 0.5 }}
        className={`z-10 flex flex-col items-start justify-start w-[100%] h-[100vh] `}
      >
        <h1 className={`font-BebasNeue text-React-h1*3 translate-y-[-3px]`}>
          Tenetur, sapiente, ea excepturi
        </h1>
        <motion.p
          initial={{ fontSize: 'calc(6.6vmin)' }}
          animate={{
            fontSize: !params.back ? 'calc(6.6vmin)' : 'calc(2.8vmin )',
          }}
          transition={{ duration: 0.6 }}
          className={`font-Bebas`}
        >
          Error dicta molestias
          <span style={{ color: params.back ? bg[1] : 'rgb(115 115 115)' }}>
            {' '}
            nesciunt accusantium{' '}
          </span>
          in doloremque quisquam assumenda id, tenetur amet debitis. Debitis
          sequi eligendi{' '}
          <span style={{ color: params.back ? bg[1] : 'rgb(115 115 115)' }}>
            ex{' '}
          </span>
          voluptatum. Repellendus{' '}
          <span style={{ color: params.back ? bg[1] : 'rgb(115 115 115)' }}>
            architecto minus{' '}
          </span>
          exercitationem. Velit nihil odio
          <span style={{ color: params.back ? bg[1] : 'rgb(115 115 115)' }}>
            {' '}
            nostrum{' '}
          </span>
          dolorem eos, repellat ullam et deserunt pariatur, itaque
          <span style={{ color: params.back ? bg[1] : 'rgb(115 115 115)' }}>
            {' '}
            enim vero
          </span>{' '}
          quibusdam nulla quia.
        </motion.p>
        <motion.div
          initial={{ height: `50vh` }}
          animate={{ height: params.height }}
          transition={{ duration: 0.6 }}
          className={`w-[100%] `}
        ></motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 1000, padding: params.padding }}
        animate={{ y: 0, padding: params.padding }}
        transition={{ delay: 0, duration: 0.5 }}
        className={`w-[100%] h-[200vh]  text-gray-800 font-Bebas text-React-h1`}
      >
        <div className={`pb-8 text-React-h2 w-full`}>
          {['Belize Sierra', 'Ivory Coast', 'Liberia', 'Montenegro'].map(
            (el, i) => (
              <span
                className={`text-gray-800 border border-gray-800 p-[2px_8px] rounded-md mr-3`}
              >
                {el}
              </span>
            )
          )}
        </div>
        <img
          className={`float-right w-[30%] ml-8 `}
          alt="Miami Beach. FL. USA"
          src={MiamiBeach}
        />
        <div className={`w-[min-content]  bg-red-20 space-y-[-6vh]`}>
          <h1
            className={`text-xl-2 font-Staatliches uppercase flex items-between`}
          >
            <span>tempo</span>
            <div className={`flex-grow`} />
            <span>aucto</span>
          </h1>
          <h1 className={`text-xl-1 font-Staatliches uppercase`}>
            de`pellentesque
          </h1>
        </div>
        <div className={`text-gray-700 text-React-p2 pl-1`}>
          Praesent elementum lorem vel ligula imperdiet molestie elementum nunc
          at tellus vel, sagittis congue.
        </div>
        <br />
        <div className={`mr- [33%] bg-red-00 text-React-h1`}>
          Vivamus tincidunt, ante{' '}
          <span style={{ color: bg[2] }}>laoreet lobortis </span>
          facilisis,
          <span style={{ color: bg[2] }}> neque ipsum facilisis orci</span>,
          quis tristique felis augue ultricies ipsum. Nunc lobortis massa eros,
          mollis <span style={{ color: bg[2] }}>ultricies </span>
          libero consequat vitae. Cras porttitor vel leo a mollis. Pellentesque
          rhoncus eros non venenatis tristique.{' '}
          <span style={{ color: bg[2] }}>Fusce in gravida sem</span>. Cras
          sollicitudin maximus risus sit amet aliquam. Donec rhoncus felis
          tortor, at porttitor est aliquet ac. Pellentesque a
          <span style={{ color: bg[2] }}> egestas ex</span>. Cras porttitor vel
          leo a mollis. Pellentesque rhoncus eros non venenatis tristique. Fusce
          in <span style={{ color: bg[2] }}>gravida </span>sem.
        </div>

        <br />
        <br />
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}

        <img
          className={`float-left w-[40%] mr-10 mb-8 translate-y-[10px]`}
          alt="Tropics"
          src={Tropics}
        />
        <p>
          Fugiat est repudiandae tenetur delectus repellendus corrupti impedit,
          commodi nam debitis illo distinctio reiciendis veritatis excepturi
          quidem inventore reprehenderit repellat aspernatur ullam? Repudiandae
          a recusandae nihil. Consequatur sequi rem modi labore exercitationem
          molestiae minus fugit iure, alias perferendis impedit error, illum
          dolor iste quaerat mollitia expedita aperiam possimus fuga dignissimos
          quos temporibus. Iusto reprehenderit ut fugiat. Doloremque sint
          voluptate natus enim mollitia, cupiditate, unde est repellat ex
          aliquid, porro voluptatum incidunt.{' '}
        </p>
        <br />

        <p>
          Error aliquid cum amet, rerum incidunt mollitia dolore rem at? Commodi
          adipisci nesciunt culpa nisi? Illum dignissimos ab quibusdam tempora.
          Ducimus commodi id at, fugiat perspiciatis incidunt fuga. Odit aliquid
          cumque, inventore blanditiis eligendi cupiditate quia ipsa neque eius
          earum doloremque? Possimus voluptatem nulla impedit. Optio laudantium
          consectetur dolorum unde vel accusantium, sit minus repudiandae nam
          fuga quasi possimus cum, in voluptatum adipisci pariatur earum.
          Necessitatibus corporis veniam quaerat esse accusamus enim nulla
          maxime dignissimos? Soluta velit reiciendis deserunt? Quia provident
          ad beatae alias. Incidunt consequuntur iure maxime beatae ipsa
          sapiente atque? Dolore, ab.
        </p>
        <br />

        <p>
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
        </p>
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
