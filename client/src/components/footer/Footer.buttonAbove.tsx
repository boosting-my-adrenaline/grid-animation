import React from 'react'

export const FooterButtonAbove: React.FC = () => {
  const handleClick = () => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    } catch (error) {
      window.scrollTo(0, 0)
    }
  }

  return (
    <div
      className={`mb-[3rem] mx-auto flex justify-center cursor-pointer`}
      onMouseDown={handleClick}
    >
      <div className={`w-[2.5rem] rotate-180`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 19.992">
          <path
            d="M33.5 0v5.223L16.63 19.992 0 5.343V.12l16.63 12.908z"
            fill="rgb(107 114 128)"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.5 19.992"
          className={`translate-y-[-0.5rem]`}
        >
          <path
            d="M33.5 0v5.223L16.63 19.992 0 5.343V.12l16.63 12.908z"
            fill="rgb(243 244 246)"
          ></path>
        </svg>
      </div>
    </div>
  )
}
