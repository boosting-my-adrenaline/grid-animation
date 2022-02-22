import React, { useEffect } from 'react'
import '../landing/card.css'
import { Slide1 } from './Slide1'

interface IProps {
  loadingBlast: null | string
  setOpening: (opening: boolean) => void
  setLoadingBlast: (tag: string) => void
  setTest: (test: boolean) => void
}

export const SlidesContainer: React.FC<IProps> = ({
  setOpening,
  setLoadingBlast,
  loadingBlast,
  setTest,
}) => {
  useEffect(() => {
    let id = setTimeout(() => setTest(true), 200)
    return () => clearTimeout(id)
  }, [])

  const li = (slide: JSX.Element) => (
    <li className={`snap-center`}>
      <div className={`h-[92vh] w-full border-b border-black  bg-sky-100`}>
        {slide}
      </div>
    </li>
  )
  return (
    <div className={`  relative w-full overflow-visible`}>
      <ul
        className={`no-scrollbar snap relative h-[92vh] snap-y snap-mandatory overflow-y-scroll`}
      >
        {li(<Slide1 />)}
        {li(<h1></h1>)}
        {li(<h1></h1>)}
      </ul>
      <div className={`h-[8vh]`}></div>
    </div>
  )
}
