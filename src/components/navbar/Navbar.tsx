import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'

export const Navbar: React.FC = () => {
  const { toggle, isDarkMode } = useDarkMode()

  return (
    <nav
      className={`z-50 w-full h-[5.5vh]  fixed top-0 right-0 left-0 flex items-center  shadow-[2px_0_5px_2px_rgba(0,0,0,0.1)] ${
        isDarkMode
          ? // ? `bg-[#131313] shadow-[#f9557b]/60`
            `bg-[#333333] shadow-gray-200/60`
          : `bg-gray-200 shadow-gray-500/60`
      }`}
    >
      <div
        className={`flex-grow bg-red-100 border-t border-b border-red-200 h-2`}
      />
      <span
        className={`cursor-pointer  font-Bebas text-React-p3 mr-[2%] ${
          isDarkMode ? `text-gray-100` : `text-gray-900`
        }`}
        onMouseDown={() => toggle()}
      >
        {isDarkMode ? `DAYMODE` : `DARKMODE`}
      </span>
    </nav>
  )
}
