import React, { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { LandingArrow } from './Apple.arrow'
import './noscrollbar.css'
import useElementSize from '../../utils/hooks/useElementSize'
import useOnScreen from '../../utils/hooks/useOnScreen'

import useDarkMode from '../../utils/hooks/useDarkMode'
import { LandingCardSquareSmall3 } from './Apple.card.square.small3'
import { LandingCardSquareSmall4 } from './Apple.card.square.small4'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import { AppleCardMusic } from './Apple.card.song'

interface IProps {
  sm: boolean
}
export const LandingMusic: React.FC<IProps> = ({ sm }) => {
  const { width: windowWidth, height } = useWindowSize()
  const ref: any = useRef<HTMLElement>(null)

  let width = windowWidth > 1680 ? 1680 : windowWidth

  let columnWidth =
    width >= 1400
      ? (width - 60 - 80) / 4
      : width > 1160
      ? (width - 40 - 80) / 3
      : width > 1000
      ? (width - 20 - 80) / 2
      : !sm
      ? 411
      : width - 45

  let snap =
    width >= 1400
      ? `snap-start`
      : width > 1160
      ? `snap-center`
      : width > 1000
      ? `snap-start`
      : !sm
      ? `snap-none`
      : `snap-center`

  const scroll = (offset: number) => {
    ref.current.scrollLeft += offset
  }

  const handleLeftArrow = () => {
    scroll(-width)
  }

  const handleRightArrow = () => {
    scroll(width)
  }

  useEffect(() => {
    scroll(-width * 3)
  }, [sm])

  const [ref2, { height: divHeight }] = useElementSize()
  const startRef: any = useRef()
  const endRef: any = useRef()

  const startOnScreen: boolean = useOnScreen<HTMLDivElement>(
    startRef,
    `${
      -0.7 *
      (width >= 1400
        ? (width - 60 - 80) / 4
        : width > 1160
        ? (width - 40 - 80) / 3
        : width > 1000
        ? (width - 20 - 80) / 2
        : !sm
        ? 411
        : width - 45)
    }px`
  )
  const endOnScreen: boolean = useOnScreen<HTMLDivElement>(
    endRef,
    `${
      -0.8 *
      (width >= 1400
        ? (width - 60 - 80) / 4
        : width > 1160
        ? (width - 40 - 80) / 3
        : width > 1000
        ? (width - 20 - 80) / 2
        : !sm
        ? 411
        : width - 45)
    }px`
  )

  const [hover, setHover] = useState(false)
  const { isDarkMode } = useDarkMode()

  const images = [
    `https://picsum.photos/id/10/40/40`,
    `https://picsum.photos/id/100/40/40`,
    `https://picsum.photos/id/1000/40/40`,
    `https://picsum.photos/id/1002/40/40`,
    `https://picsum.photos/id/1005/40/40`,
    `https://picsum.photos/id/1008/40/40`,
    `https://picsum.photos/id/101/40/40`,
    `https://picsum.photos/id/1014/40/40`,
    `https://picsum.photos/id/1015/40/40`,
    `https://picsum.photos/id/1016/40/40`,
    `https://picsum.photos/id/1018/40/40`,
    `https://picsum.photos/id/1019/40/40`,
    `https://picsum.photos/id/1021/40/40`,
    `https://picsum.photos/id/1022/40/40`,
    `https://picsum.photos/id/1028/40/40`,
    `https://picsum.photos/id/1026/40/40`,
    `https://picsum.photos/id/1029/40/40`,
    `https://picsum.photos/id/1031/40/40`,
    `https://picsum.photos/id/1033/40/40`,
    `https://picsum.photos/id/1036/40/40`,
    `https://picsum.photos/id/1037/40/40`,
    `https://picsum.photos/id/1038/40/40`,
    `https://picsum.photos/id/1040/40/40`,
    `https://picsum.photos/id/1041/40/40`,
    `https://picsum.photos/id/1042/40/40`,
    `https://picsum.photos/id/1045/40/40`,
    `https://picsum.photos/id/1047/40/40`,
    `https://picsum.photos/id/1048/40/40`,
    `https://picsum.photos/id/185/40/40`,
    `https://picsum.photos/id/1049/40/40`,
    `https://picsum.photos/id/1050/40/40`,
    `https://picsum.photos/id/1051/40/40`,
    `https://picsum.photos/id/1052/40/40`,
    `https://picsum.photos/id/1053/40/40`,
    `https://picsum.photos/id/1055/40/40`,
    `https://picsum.photos/id/1081/40/40`,
    `https://picsum.photos/id/1056/40/40`,
    `https://picsum.photos/id/1057/40/40`,
    `https://picsum.photos/id/1058/40/40`,
    `https://picsum.photos/id/1061/40/40`,
    `https://picsum.photos/id/1063/40/40`,
    `https://picsum.photos/id/1064/40/40`,
    `https://picsum.photos/id/1065/40/40`,
    `https://picsum.photos/id/1067/40/40`,
    `https://picsum.photos/id/107/40/40`,
    `https://picsum.photos/id/1073/40/40`,
    `https://picsum.photos/id/1075/40/40`,
    `https://picsum.photos/id/1076/40/40`,
    `https://picsum.photos/id/11/40/40`,
    `https://picsum.photos/id/114/40/40`,
    `https://picsum.photos/id/115/40/40`,
    `https://picsum.photos/id/120/40/40`,
    `https://picsum.photos/id/119/40/40`,
    `https://picsum.photos/id/12/40/40`,
    `https://picsum.photos/id/122/40/40`,
    `https://picsum.photos/id/121/40/40`,
    `https://picsum.photos/id/123/40/40`,
    `https://picsum.photos/id/135/40/40`,
    `https://picsum.photos/id/14/40/40`,
    `https://picsum.photos/id/141/40/40`,
    `https://picsum.photos/id/149/40/40`,
    `https://picsum.photos/id/147/40/40`,
    `https://picsum.photos/id/151/40/40`,
    `https://picsum.photos/id/154/40/40`,
    `https://picsum.photos/id/155/40/40`,
    `https://picsum.photos/id/158/40/40`,
    `https://picsum.photos/id/16/40/40`,
    `https://picsum.photos/id/182/40/40`,
    `https://picsum.photos/id/17/40/40`,
    `https://picsum.photos/id/170/40/40`,
    `https://picsum.photos/id/172/40/40`,
    `https://picsum.photos/id/171/40/40`,
    `https://picsum.photos/id/174/40/40`,
    `https://picsum.photos/id/176/40/40`,
    `https://picsum.photos/id/178/40/40`,
    `https://picsum.photos/id/179/40/40`,
    `https://picsum.photos/id/18/40/40`,
    `https://picsum.photos/id/181/40/40`,
    `https://picsum.photos/id/182/40/40`,
    `https://picsum.photos/id/184/40/40`,
    `https://picsum.photos/id/186/40/40`,
  ]

  const titles2 = [
    `Sed accumsan finibus ante`,
    `Phasellus`,
    `molestie urna `,
    `Ut gravida`,
    `nisl mi varius id Consectetur`,
    `placerat eget`,
    `ondimentum eu dapibus vitae`,
    `a  Venenatis nec`,
    `olestie finibus ac Tincidunt `,
    `Morbi rutrum`,
    ` lacus in efficitur consequat`,
    `  lacus mi maximus ex`,
    `  Fusce hendrerit erat sit amet hendrerit lobortis`,
    `  scelerisque diam`,
    `  Vestibulum cursus faucibus rhoncus`,
    `  felis`,
    `  malesuada fames`,
    `  quis vel ex euismod`,
    `  magna`,
    `  interdum sit amet`,
    `Sed accumsan finibus ante`,
    `Phasellus`,
    `molestie urna `,
    `Ut gravida`,
    `nisl mi varius id Consectetur`,
    `placerat eget`,
    `ondimentum eu dapibus vitae`,
    `a  Venenatis nec`,
    `olestie finibus ac Tincidunt `,
    `Morbi rutrum`,
    ` lacus in efficitur consequat`,
    `  lacus mi maximus ex`,
    `  Fusce hendrerit erat sit amet hendrerit lobortis`,
    `  scelerisque diam`,
    `  Vestibulum cursus faucibus rhoncus`,
    `  felis`,
    `  malesuada fames`,
    `  quis vel ex euismod`,
    `  magna`,
    `  interdum sit amet`,
  ]

  const titles = [
    `Curabitur Quis`,
    `Pulvinar Magna`,
    `Tempus Dignissim`,
    `interdum`,
    `consequat turpis`,
    `sodales tortor `,
    `turpis at vehicula`,
    `pellentesque ut`,
    `sed mattis`,
    `eget`,
    `malesuada fames`,
    `ullamcorper`,
    `Etiam ut`,
    `lacinia`,
    `nec eros`,
    `Quisque tincidunt`,
    `in mattis`,
    `ac commodo quam`,
    `cursus vel nisl`,
    `quis maximus`,
    `Curabitur Quis`,
    `Pulvinar Magna`,
    `Tempus Dignissim`,
    `interdum`,
    `consequat turpis`,
    `sodales tortor `,
    `turpis at vehicula`,
    `pellentesque ut`,
    `sed mattis`,
    `eget`,
    `malesuada fames`,
    `ullamcorper`,
    `Etiam ut`,
    `lacinia`,
    `nec eros`,
    `Quisque tincidunt`,
    `in mattis`,
    `ac commodo quam`,
    `cursus vel nisl`,
    `quis maximus`,
  ]

  return (
    <>
      <header
        className={`flex w-full select-none items-center justify-between pt-[10px] ${
          width > 1000 ? `px-[40px]` : 'px-[20px]'
        }`}
        onMouseEnter={() => {
          // setTimeout(() =>
          setHover(true)
          // )
        }}
        onMouseLeave={() => setHover(false)}
      >
        <h1
          className={` text-[17px] font-[700]
          ${isDarkMode ? `text-white/[.92]` : `text-black/[.86]`}
          `}
        >
          Redamancy
        </h1>
        <button
          className={`text-[15px] text-[#fa586a] decoration-2 outline-none hover:underline`}
        >
          See All
        </button>
      </header>

      <div
        className={`box-content flex w-full translate-y-[-8px] items-stretch justify-between align-top`}
        ref={ref2}
        onMouseEnter={() => {
          // setTimeout(() =>
          setHover(true)
          // )
        }}
        onMouseLeave={() => setHover(false)}
      >
        {/* <div className={`absolute left-10`}> scr: {scr ? 1 : 0}</div> */}
        {width > 1000 && (
          <LandingArrow
            onClick={handleLeftArrow}
            disabled={startOnScreen || !hover}
            height={divHeight}
            pt={-20}
          />
        )}
        <ul
          className={`no-scrollbar grid h-full w-full snap-x snap-mandatory ${
            width > 1000
              ? `scroll-pl-[40px] scroll-pr-[40px] pl-[40px] `
              : `scroll-pl-[20px] scroll-pr-[20px] pl-[20px]`
          } overflow-x-scroll scroll-smooth pt-[20px] pb-[10px]    ${
            width < 1000
          } ${
            width > 1000 ? `pr-[40px]` : ` pr-[150px]`
          } transition duration-300 ease-in`}
          style={{
            gridTemplateRows: `repeat(1, max-content)`,
            columnGap: !sm ? 20 : 10,
            rowGap: -10,
            gridTemplateColumns: `repeat(10, ${columnWidth}px) `,
            // columnGap: 20,
            // gridAutoColumns: `calc((100% - 2 * var(--grid-column-gap))/ 3)`,
            // gridAutoColumns: 2,
          }}
          ref={ref}
        >
          <li className={`h-full ${snap} `} ref={startRef}>
            <AppleCardMusic
              images={[images[0], images[1], images[2], images[3]]}
              titles={[titles[0], titles[1], titles[2], titles[3]]}
              titles2={[titles2[0], titles2[1], titles2[2], titles2[3]]}
            />
          </li>

          {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
            <li key={el} className={`h-full ${snap} `}>
              <AppleCardMusic
                images={[
                  images[el * 4],
                  images[el * 4 + 1],
                  images[el * 4 + 2],
                  images[el * 4 + 3],
                ]}
                titles={[
                  titles[el * 4],
                  titles[el * 4 + 1],
                  titles[el * 4 + 2],
                  titles[el * 4 + 3],
                ]}
                titles2={[
                  titles2[el * 4],
                  titles2[el * 4 + 1],
                  titles2[el * 4 + 2],
                  titles2[el * 4 + 3],
                ]}
              />
            </li>
          ))}

          <li className={`h-full ${snap} `} ref={endRef}>
            <AppleCardMusic
              images={[images[36], images[37], images[38], images[39]]}
              titles={[titles[36], titles[37], titles[38], titles[39]]}
              titles2={[titles2[36], titles2[37], titles2[38], titles2[39]]}
            />
          </li>
        </ul>
        {width > 1000 && (
          <LandingArrow
            onClick={handleRightArrow}
            right
            disabled={endOnScreen || !hover}
            height={divHeight}
            pt={-20}
          />
        )}
      </div>
      <div
        className={` mt-[8px]  h-[0.5px]
         ${isDarkMode ? `bg-white/[.16]` : `bg-black/[.18]`}
         `}
        style={{ width: windowWidth > 1000 ? width - 80 : width - 40 }}
      />
    </>
  )
}
