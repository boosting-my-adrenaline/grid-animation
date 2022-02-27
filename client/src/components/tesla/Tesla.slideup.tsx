import React, { useEffect, useState } from 'react'

interface IProps {
  onClick: () => void
  dark: boolean
}
export const TeslaSlideUp: React.FC<IProps> = ({ onClick, dark }) => {
  return (
    <div className={`cursor-pointer`} onMouseDown={onClick}>
      <svg
        className={`-rotate-90`}
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        // height="9"
        width="22"
      >
        <title />
        <path
          style={{
            fill: 'none',
            stroke: dark ? `#000` : '#fff',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 40,
          }}
          d="M174.02 91.26 338.5 255.74l-165 165"
        />
      </svg>
    </div>
  )
}
