import { title } from 'process'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import { rmAssembleCards } from './Page.RMformer'

interface IProps {
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
  windowWidth: number
}

export const PageReadMore: React.FC<IProps> = ({
  sm,
  md,
  lg,
  xl,
  windowWidth,
}) => {
  const { isDarkMode } = useDarkMode()

  const [cards, setCards] = useState(rmAssembleCards(2, []))
  const [page, setPage] = useState(0)

  useDidMountEffect(() => setCards(rmAssembleCards(2, cards)), [page])

  const navigate = useNavigate()

  const card = (title: string, text: string, image: any, i: number) => (
    <>
      <div
        key={i}
        className={`flex items-start ${xl && 'my-4'} ${
          xl && windowWidth >= 2700 && 'w-[49%]'
        } justify-between ${!sm ? 'flex' : 'flex-col'} cursor-pointer`}
        // onMouseDown={() => navigate(`/page/${Math.floor(Math.random() * 40)}`)}
      >
        <div className={`${!sm ? `w-[65%]` : 'w-full'} `}>
          <img
            src={image}
            alt=""
            className={`${
              !sm ? `aspect-book ` : `aspect-custom1`
            }  object-cover`}
          />
        </div>
        <div className={` ${!sm ? `w-[32%] -mt-2` : 'w-full mt-2'}`}>
          <div
            className={` ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} 
             ${
               xl || lg
                 ? windowWidth > 1800
                   ? 'text-React-h1'
                   : 'text-React-h2'
                 : `text-React-h1*1.2 `
             }`}
          >
            {title}
          </div>
          {!sm && (
            <div
              className={` ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}  ${
                xl || lg
                  ? windowWidth > 1800
                    ? 'text-React-h2'
                    : 'text-React-h3'
                  : `text-React-h2*1.5 `
              } opacity-80 mt-4 `}
            >
              {text}
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  )

  const pageButton = (num: number) => (
    <div
      key={num}
      className={`w-[2vh] h-[2vh] rounded-sm cursor-pointer ${
        num === page
          ? isDarkMode
            ? 'bg-sky-200'
            : 'bg-sky-700'
          : isDarkMode
          ? 'bg-sky-900'
          : 'bg-sky-300'
      }`}
      onMouseDown={() => setPage(num)}
    />
  )
  const pages = [0, 1, 2, 3, 4].map((el) => pageButton(el))

  return (
    <div className={`w-full  my-4 mx-[] font-Bebas`}>
      <div
        className={`text-React-h1  ${
          xl ? `pl-20 mx-[15px]` : lg ? `pl-12 mx-[15px]` : `mx-[15px]`
        } ${
          isDarkMode ? 'bg-sky-900 text-gray-50' : `bg-sky-100 text-gray-900`
        }`}
      >
        READ MORE FROM BLAST:
      </div>
      <div
        className={`${
          xl
            ? 'mx-[100px]'
            : lg || (xl && windowWidth < 2000)
            ? windowWidth >= 1650
              ? `mx-[100px]`
              : 'mx-[20px]'
            : md
            ? ``
            : `mx-[15px]`
        } mt-6 flex items-center justify-start ${
          xl || lg ? `gap-8` : `flex-col gap-6`
        } `}
      >
        {cards.map((el, i) => card(el.title, el.text, el.image, i))}
      </div>
      <div className={`w-full flex justify-center items-center gap-4 my-4`}>
        {pages}
      </div>
    </div>
  )
}
