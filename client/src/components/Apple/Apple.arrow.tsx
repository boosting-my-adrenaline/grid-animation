import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useWindowSize } from '../../utils/hooks/useDimensions'

interface IProps {
  onClick: () => void
  right?: boolean
  disabled?: boolean
  height: number
  first?: boolean
  pt?: number
}

export const LandingArrow: React.FC<IProps> = ({
  onClick,
  right = false,
  disabled,
  height,
  first = false,
  pt = 0,
}) => {
  const { width } = useWindowSize()
  const { isDarkMode } = useDarkMode()
  return (
    <>
      <div
        style={{
          height: height,
          right: first
            ? right
              ? width > 1680
                ? (width - 1680) / 2
                : 0
              : ``
            : right
            ? 0
            : ``,
          // paddingTop: pt > 0 ? (!right ? pt : -pt) : ``,
          // paddingBottom: pt > 0 ? (right ? pt : ``) : ``,
        }}
        className={` absolute z-10  flex h-[100%] w-[42px]  ${
          right && `translate-x-[1px] rotate-180`
        } ${
          `` // right && (width >1680?  `right-0`)
        }  shrink-0 cursor-pointer flex-col items-center justify-center ${
          isDarkMode
            ? `bg-gradient-to-r from-[#202020] via-[#202020] to-transparent`
            : `bg-gradient-to-r from-[#FFFBFF] via-[#FFFBFF] to-transparent`
        } `}
        onMouseDown={onClick}
      >
        <svg
          style={{ transform: `translateY(${!right ? pt : -pt}px)` }}
          className={` ${
            disabled && `opacity-0`
          } transition-opacity duration-[250] ease-linear`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13 29"
          xmlSpace="preserve"
          width="13px"
          height="29px"
        >
          <path
            className={`
          ${isDarkMode ? `stroke-white/[.92]` : `stroke-black/[.88]`}`}
            style={{
              fill: 'none',
              // stroke: '#000',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="m11.9 28.4-10.3-14L11.6.6"
          />
        </svg>
      </div>
    </>
  )
}
