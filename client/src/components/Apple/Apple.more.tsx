import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useWindowSize } from '../../utils/hooks/useDimensions'

interface IProps {
  sm: boolean
}

export const LandingMore: React.FC<IProps> = ({ sm }) => {
  const { width: windowWidth } = useWindowSize()

  const width = windowWidth > 1680 ? 1680 : windowWidth

  const columns = width > 1500 ? 3 : !sm ? 2 : 1
  const { isDarkMode } = useDarkMode()

  return (
    <>
      <header
        className={`flex w-full select-none items-center justify-between pt-[10px] ${
          width > 1000 ? `px-[40px]` : 'px-[20px]'
        }`}
      >
        <h1
          className={` text-[17px] font-[700]
          ${isDarkMode ? `text-white/[.92]` : `text-black/[.86]`}
          `}
        >
          More
        </h1>
        <button
          className={`text-[15px] text-[#fa586a] decoration-2 outline-none hover:underline`}
        >
          {/* See All */}
        </button>
      </header>
      <div
        className={`font-UI mb-[60px] w-full select-none  ${
          width > 1000 ? `px-[40px]` : !sm ? 'px-[20px]' : `px-[20px]`
        } `}
      >
        <ul
          className={`my-[10px] grid w-full ${
            columns === 3
              ? `grid-cols-3`
              : columns === 2
              ? `grid-cols-2`
              : `grid-cols-1`
          } gap-[20px]`}
        >
          {[
            `Consequat`,
            `Justo Quis`,
            `Rhoncus iaculis`,
            `Antre`,
            `Ornare Nih`,
            `De Grace`,
          ].map((el) => (
            <li
              key={el}
              className={`h-[58px flex cursor-pointer items-center justify-center rounded-[15px] ${
                isDarkMode ? `bg-white/[.05]` : `bg-black/[.08]`
              } px-[16px]`}
            >
              <a className={`font-[13px] flex-grow py-[16px] text-[#fa586a]`}>
                {el}
              </a>

              <svg
                className={`fill-[#fa586a]`}
                viewBox="0 0 36 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke-linejoin="round"
                height="12px"
              >
                <path d="M3.344 64c.957 0 1.768-.368 2.394-.994l29.2-28.538c.701-.7 1.069-1.547 1.069-2.468 0-.957-.368-1.841-1.068-2.467L5.774 1.031C5.112.37 4.301.001 3.344.001 1.43 0-.006 1.472-.006 3.387c0 .884.367 1.767.956 2.393L27.758 32 .95 58.218a3.5 3.5 0 00-.956 2.395c0 1.914 1.435 3.387 3.35 3.387z"></path>
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
