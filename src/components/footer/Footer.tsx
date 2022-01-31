import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { FooterBottom } from './Footer.bottom'
import { FooterButtonAbove } from './Footer.buttonAbove'
import { FooterCol } from './Footer.col'

export const Footer: React.FC = () => {
  const { width } = useWindowSize()
  const { isDarkMode } = useDarkMode()

  const lg = width >= 1200
  const md = width < 1200 && width >= 500
  const sm = width <= 500

  return (
    <div
      className={`w-full h-[min-content] ${
        isDarkMode ? `bg-[#333] text-gray-100` : `bg-gray-400 text-[#333]`
      } border-t border-gray-500 font-Bebas ${
        lg
          ? `text-React-h2 px-[2vh]`
          : sm
          ? `text-React-h1*1.2 p-[0.5vh]`
          : `text-React-h1*1.5 p-[1vh]`
      } pt-[4rem]  `}
    >
      <FooterButtonAbove />

      <div
        className={`${
          lg ? `px-[4rem]` : sm ? `px-[0.5rem]` : `px-[2rem]`
        } mx-auto ${
          width > 2000
            ? 'max-w-[1800px]'
            : width <= 2000 && width > 1200
            ? `max-w-[1620px]`
            : ''
        } `}
      >
        <ul
          className={`flex ${
            lg ? `items-start justify-between pb-[2rem]` : `flex-col pb-[3rem]`
          }  `}
        >
          <FooterCol
            lg={lg}
            title={`Quisque`}
            lis={[
              `Consectetur vel`,
              `Phasellus lacus nunc`,
              `Maximus elit tempor`,
              `Justo est`,
              `Rhoncus`,
            ]}
          />
          <FooterCol
            lg={lg}
            title={`Blandit quis massa`}
            lis={[
              `Aliquam per quirem`,
              `Non tincidunt `,
              `Voluptas mauric`,
              `Begiunto `,
              `Molistie dapigbus`,
              `Arcu ligula`,
              `Placerat non eu`,
            ]}
          />
          <FooterCol
            lg={lg}
            title={`Euimois morbi`}
            lis={[
              `Eros fringilla`,
              `Nunc sit amet efficur `,
              `Liberto quis`,
              `Gorde quas est`,
              `Lectus augue`,
              `Redimus gravida`,
            ]}
          />
          <FooterCol
            lg={lg}
            title={`Curabitus`}
            lis={[
              `Turpis varius`,
              `Risus ac elit fonte `,
              `Enihb oulvinar`,
              `Condimentum dapibus`,
              `Orci praesent at pausere`,
              `Laoret ullamcorper`,
              `Maecenas`,
              `Finibus maxima`,
            ]}
          />
          <FooterCol
            lg={lg}
            title={`Elementum auctor`}
            lis={[
              `Beuqinte de amet`,
              `Suscipir eros `,
              `Pretium fermentum`,
              `Urna vitae`,
              `Elefend anter eget`,
              `Fusce sit arcu`,
            ]}
          />
          <FooterCol
            lg={lg}
            title={`Consectetur `}
            lis={[
              `Neque porro opere`,
              `Suspendisse tortor`,
              `Laoreet erat odio`,
              `Quisque et vel`,
              `Enim mattis`,
              `Cras curcus ac elit`,
              `Dapibus ac vitae`,
            ]}
          />
        </ul>

        <div className={`w-full h-[1px] bg-gray-200 mb-[2rem]`} />

        <FooterBottom lg={lg} />
      </div>
    </div>
  )
}
