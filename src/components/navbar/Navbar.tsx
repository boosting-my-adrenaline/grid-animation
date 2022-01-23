import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'

export const Navbar: React.FC = () => {
  const { toggle, isDarkMode } = useDarkMode()

  return (
    <nav
      className={`z-50 w-full h-[5vh]  fixed top-0 right-0 left-0  shadow-[2px_0_5px_2px_rgba(0,0,0,0.1)] ${
        isDarkMode
          ? // ? `bg-[#131313] shadow-[#f9557b]/60`
            `bg-[#131313] shadow-gray-200/60`
          : `bg-gray-200 shadow-gray-500/60`
      }`}
    ></nav>
  )
}
