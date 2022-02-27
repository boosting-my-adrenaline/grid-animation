import React from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'

interface IProps {
  sm: boolean
}

export const LandingMore: React.FC<IProps> = ({ sm }) => {
  const { width: windowWidth } = useWindowSize()

  const width = windowWidth > 1680 ? 1680 : windowWidth

  const columns = width > 1500 ? 3 : !sm ? 2 : 1

  return (
    <div
      className={`grid w-full select-none  ${
        width > 1000 ? `px-[40px]` : !sm ? 'px-[20px]' : `px-[10px]`
      } `}
      style={{
        gridTemplateColumns: `repeat(1fr, ${columns})`,
      }}
    >
      <ul className={`mt-[10px] w-full`}></ul>
    </div>
  )
}
