import React from 'react'
import '../landing/card.css'

interface IProps {
  loadingBlast: null | string
  setOpening: (opening: boolean) => void
  setLoadingBlast: (tag: string) => void
}

export const SlidesContainer: React.FC<IProps> = ({
  setOpening,
  setLoadingBlast,
  loadingBlast,
}) => {
  return (
    <div className={`no-scrollbar  w-full `}>
      <ul
        className={`no-scrollbar snap relative  snap-y snap-mandatory overflow-y-scroll`}
      >
        <li className={`snap-center`}>
          <div
            className={`h-screen w-full border-b border-black  bg-red-200`}
          ></div>{' '}
        </li>
        <li className={`snap-center`}>
          <div
            className={`h-screen w-full border-b border-black bg-sky-200`}
          ></div>{' '}
        </li>
        <li className={`snap-center`}>
          <div
            className={`h-screen w-full border-b border-black bg-emerald-200`}
          ></div>{' '}
        </li>
      </ul>
    </div>
  )
}
