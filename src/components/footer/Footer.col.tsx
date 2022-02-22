import React, { useEffect, useState } from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'
import { FooterLi } from './Footer.li'

interface IPropsCol {
  title: string
  lis: string[]
  lg: boolean
}

export const FooterCol: React.FC<IPropsCol> = ({ title, lis, lg }) => {
  const [expanded, setExpanded] = useState(false)
  const { width } = useWindowSize()
  let mobile = width <= 500

  useEffect(() => {
    setExpanded(false)
  }, [lg])

  const handleClick = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <li
      className={` ${
        lg ? ` mx-[1rem]` : `w-full cursor-pointer pt-[0.75rem]`
      }  ease-custom-1 transition duration-500`}
      onMouseDown={handleClick}
    >
      <div className={`${lg || `mr-[2rem] flex items-center justify-between`}`}>
        <h5
          className={` ${
            lg
              ? `text-React-h2`
              : !mobile
              ? `text-React-h1*2`
              : `text-React-h1*1.5`
          } font-BebasNeue  mb-[0.5rem]`}
        >
          {title}
        </h5>
        {lg || (
          <svg
            className={`w-[2rem] text-gray-100 ${
              expanded && `rotate-180`
            } duration-400 ease translate-y-[-0.25rem] translate-x-[20px] transition`}
            viewBox="0 0 33.5 19.992"
          >
            <path
              d="M33.5 0v5.223L16.63 19.992 0 5.343V.12l16.63 12.908z"
              fill="rgb(243 244 246)"
            ></path>
          </svg>
        )}
      </div>

      {(lg || expanded) && (
        <div className={`${lg || `text-React-h1*1.5`}`}>
          <ul>
            {lis.map((el, i) => (
              <FooterLi i={i} tag={el} />
            ))}
          </ul>
        </div>
      )}
      {lg || <div className={`h-[1px] w-full bg-gray-100 `} />}
    </li>
  )
}
