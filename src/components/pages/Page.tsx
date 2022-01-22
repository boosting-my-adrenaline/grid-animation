import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

interface IProps {
  bg: string
  width: number
  height: number
  setOpen: (open: null) => void
}

export const Page: React.FC<IProps> = ({ bg, width, height, setOpen }) => {
  const navigate = useNavigate()
  // 'React-h1': 'calc(10px + 2vmin)',
  // 'React-h1*3': 'calc(30px + 6vmin)',

  const [params, setParams] = useState({
    padding: `3% 3%`,
    // height: '120vh',
    height: `50vh`,
    back: false,
  })

  useEffect(() => {
    let id0 = setTimeout(
      () =>
        setParams((prev) => ({
          ...prev,
          padding: `3% 10%`,
          back: true,
          height: '0vh',
        })),
      100
    )
    let id1 = setTimeout(
      () =>
        setParams((prev) => ({
          ...prev,
          // height: 'calc(${Math.pow(60, 1)}vh + ${100 - height * 0.04}px)',
          // height: heightCalc,

          // height: `60vh`,
          // height: `60vh`,
        })),
      0
    )

    // let id2 = setTimeout(
    //   () =>
    //     setParams((prev) => ({
    //       ...prev,
    //       // height: 'calc(${Math.pow(60, 1)}vh + ${100 - height * 0.04}px)',
    //       // height: heightCalc,
    //       // height: `60vh`,
    //       height: `min-content`,
    //     })),
    //   1500
    // )

    return () => {
      clearTimeout(id0)
      // clearTimeout(id1)
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

  return (
    <div className={`w-[100%] `}>
      <motion.span
        initial={{ backgroundColor: bg, left: `2vh`, top: `70vh` }}
        animate={{
          top: !params.back ? '120vh' : '8.6vh',
          backgroundColor: !params.back ? bg : 'whitesmoke',
        }}
        transition={{ duration: 0.4 }}
        className={`fixed cursor-pointer  font-Bebas text-React-h1 px-2 py-1 border border-gray-800 rounded-lg`}
        onMouseDown={handleBack}
      >
        BACK
      </motion.span>
      <motion.div
        initial={{
          height: 'min-content',

          backgroundColor: bg,
          padding: params.padding,
        }}
        animate={{
          height: 'min-content',

          backgroundColor: bg,
          padding: params.padding,
        }}
        transition={{ delay: 0, duration: 0.5 }}
        className={`z-10 flex flex-col items-start justify-start w-[100%] h-[100vh] `}
      >
        <h1
          className={`font-BebasNeue text-React-h1*3 transition duration-300 ease-in-out  text-gray-900 translate-y-[-3px]`}
        >
          Lorem ipsum dolor sit amet
        </h1>
        <p className={`font-Bebas text-React-p*3 text-gray-700`}>
          Error dicta molestias nesciunt accusantium in doloremque quisquam
          assumenda id, tenetur amet debitis. Debitis sequi eligendi ex
          voluptatum. Repellendus architecto minus exercitationem. Velit nihil
          odio nostrum dolorem eos, repellat ullam et deserunt pariatur, itaque
          enim vero quibusdam nulla quia quisquam assumenda magni accusantium
          quae similique hic optio unde tempora. Assumenda, nemo sequi.
        </p>
        <motion.div
          initial={{ height: `50vh` }}
          animate={{ height: params.height }}
          transition={{ duration: 0.6 }}
          className={`w-[100%] `}
        ></motion.div>
      </motion.div>{' '}
      <motion.div
        initial={{ y: 1000, padding: params.padding }}
        animate={{ y: 0, padding: params.padding }}
        transition={{ delay: 0, duration: 0.5 }}
        className={`w-[100%] h-[200vh] font-Bebas text-React-p*3 text-gray-800`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est
        repudiandae tenetur delectus repellendus corrupti impedit, commodi nam
        debitis illo distinctio reiciendis veritatis excepturi quidem inventore
        reprehenderit repellat aspernatur ullam? Repudiandae a recusandae nihil
        aliquam dolorem ullam, voluptates officiis ab, delectus eius praesentium
        enim nostrum exercitationem neque natus reprehenderit iure excepturi quo
        voluptatibus sint ipsum veritatis? Assumenda earum doloremque enim.
        Consequatur sequi rem modi labore exercitationem molestiae minus fugit
        iure, alias perferendis impedit error, illum dolor iste quaerat mollitia
        expedita aperiam possimus fuga dignissimos quos temporibus. Iusto
        reprehenderit ut fugiat. Doloremque sint voluptate natus enim mollitia,
        cupiditate, unde est repellat ex aliquid, porro voluptatum incidunt.
        Error aliquid cum amet, rerum incidunt mollitia dolore rem at? Commodi
        adipisci nesciunt culpa nisi? Illum dignissimos ab quibusdam tempora.
        Ducimus commodi id at, fugiat perspiciatis incidunt fuga. Odit aliquid
        cumque, inventore blanditiis eligendi cupiditate quia ipsa neque eius
        earum doloremque? Possimus voluptatem nulla impedit. Optio laudantium
        consectetur dolorum unde vel accusantium, sit minus repudiandae nam fuga
        quasi possimus cum, in voluptatum adipisci pariatur earum.
        Necessitatibus corporis veniam quaerat esse accusamus enim nulla maxime
        dignissimos? Soluta velit reiciendis deserunt? Quia provident ad beatae
        alias. Incidunt consequuntur iure maxime beatae ipsa sapiente atque?
        Dolore, ab. Ipsa tempora qui ex quod velit odit quia unde quidem sunt.
        Quae animi voluptates necessitatibus nesciunt soluta eligendi inventore
        similique iusto fuga. Error minima maiores fuga explicabo necessitatibus
        blanditiis velit temporibus culpa dicta, voluptatibus, nihil quisquam
        voluptate omnis. Ipsum, sunt suscipit. Fuga, omnis tenetur excepturi
        quidem corporis debitis blanditiis magni atque earum, recusandae,
        distinctio numquam deleniti. Illo perspiciatis expedita porro.
        Exercitationem quos aliquam vitae necessitatibus eos qui ipsum
        cupiditate, consectetur saepe. Nisi, ipsum blanditiis aspernatur
        obcaecati iste officia quas incidunt error atque beatae voluptatum fuga,
        soluta laudantium eum eligendi quam explicabo rem nulla. Assumenda
        praesentium illo asperiores nihil a nulla consequuntur. Facere, impedit.
        Aut, soluta. Asperiores quia architecto tempora numquam eos omnis amet
        nihil vero quis. Ea inventore velit dolor explicabo rerum, ad,
        voluptatem ducimus voluptatibus eveniet perspiciatis nihil. Expedita,
        rem? Modi, consequuntur quibusdam vel blanditiis, hic voluptatibus neque
        suscipit illum consequatur totam exercitationem architecto beatae
        praesentium eligendi alias. Repellat dolores perspiciatis dolorum
        maiores quam doloremque ipsa. Fugiat consequatur eaque sed. Aut porro
        qui, eos provident commodi expedita cumque vel ipsa odio laboriosam ut
        rerum molestiae iure, blanditiis assumenda. Facere sint magni maiores
        quo dignissimos eos tempore libero temporibus corrupti iste. Architecto
        non adipisci sapiente cumque tenetur, eveniet iure magni dolores minus
        neque, dignissimos impedit, iusto consequuntur velit id quod. Sit
        doloribus molestias officiis aliquid tempora alias asperiores, quia
        quasi excepturi? Tenetur, sapiente, ea odit excepturi totam suscipit
        quisquam aliquam pariatur doloremque, aspernatur aperiam. Eligendi ut,
        consequatur enim facere rerum nisi omnis soluta maxime sequi,
        reprehenderit culpa. Repudiandae quaerat ut deserunt. Quidem ab dolores
        reprehenderit laborum labore perspiciatis officia nulla corporis quae.
        Harum ducimus explicabo magni magnam animi ipsam sunt esse expedita
        porro blanditiis? Sit, hic tenetur nisi architecto suscipit dolor?
        Placeat, non provident perspiciatis autem at modi expedita mollitia
        earum iure qui ex sint quis quos. Optio harum non aliquam asperiores
        aspernatur repellat sed molestiae laudantium, nulla rem suscipit quos.
        Blanditiis, vero quam molestiae libero ab rem, aspernatur minima
        voluptate sit officia, architecto repellendus minus qui saepe tenetur.
        Temporibus similique nam iusto vero fuga facere, doloribus ab quae
        beatae harum? Eveniet exercitationem, cum inventore ullam incidunt
        deserunt unde quae adipisci assumenda odio doloribus doloremque ad,
        temporibus explicabo voluptatibus ipsam cupiditate officia nam? Quos
        dolore corporis perspiciatis praesentium, ad ratione quis? Sapiente
        minima vero molestias voluptatum nulla non accusantium blanditiis,
        corrupti inventore officiis, veniam possimus impedit dolorum quis
        exercitationem dolore tempora nisi omnis ipsam id dignissimos quod
        repudiandae. Repellendus, temporibus sunt?
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
