import React, { useState } from 'react'
import motion from 'framer-motion'
import useDarkMode from '../../utils/hooks/useDarkMode'

interface IProps {
  sm: boolean
}

export const NavbarBLAST: React.FC<IProps> = ({ sm }) => {
  const [into, setInto] = useState(false)
  const [hover, setHover] = useState(false)

  const { isDarkMode } = useDarkMode()

  return (
    <div
      className={`flex flex-row-reverse  items-center cursor-pointer font-extrabold text-transparent bg-clip-text ${
        into
          ? isDarkMode
            ? `bg-gradient-to-br from-[#0081CF] to-[#0081CF]`
            : `bg-gradient-to-br from-[#0081CF] to-[#0081CF]`
          : hover
          ? isDarkMode
            ? `bg-gradient-to-br from-[#ff6afd]/40 to-sky-200`
            : `bg-gradient-to-br from-[#ff6afd]/80 to-[#00035a]/80`
          : isDarkMode
          ? `bg-gradient-to-br from-[#ff6afd]/90 to-sky-100`
          : `bg-gradient-to-br from-[#ff6afd]/70 to-[#00035a]/70`
      } transition duration-200 ease-custom-1`}
      onMouseDown={() => setInto(true)}
      onMouseUp={() => setTimeout(() => setInto(false), 0)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        setInto(false)
      }}
    >
      {!sm && `BLAST`}
      <div className={`flex items-center justify-center`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          xmlSpace="preserve"
          width="3rem"
          height="3rem"
        >
          <path
            style={{
              fill: '#fff',
              // transform: `translate(${
              //   into ? -4.155 : hover ? -4.155 * -0.3 : 0
              // }%, ${into ? 6.525 : hover ? 6.525 * -0.3 : 0}%)`,
              transform: `translate(${
                into ? -4.155 : hover ? -4.155 * -0.3 : 0
              }%, ${into ? 6.625 : hover ? 6.58 * -0.3 : 0}%)`,
            }}
            className={`transition-all duration-200 ease-custom-1`}
            d="m61.6 28.1 30.7 24.1-.6-1.4L71.2 8.2z"
          />
          <path
            style={{
              fill: '#fff',

              transform: `translate(${
                into ? 3.97 : hover ? 3.97 * -0.3 : 0
              }%, ${into ? 3.87 : hover ? 3.87 * -0.3 : 0}%)`,
            }}
            className={`transition-all duration-200 ease-custom-1`}
            d="m34.4 66.6 20.2-1.8 6.3-13L67 63.7l18-1.705-3.1-6.4-30.7-24.1z"
          />
          <path
            style={{
              fill: '#fff',

              // transform: `translate(${into ? -1.5 : hover ? 1.5 * -0.3 : 0}%, ${
              //   into ? -3 : hover ? -3 * -0.3 : 0
              // }%)`,
              transform: `translate(${into ? -1.5 : hover ? 1.5 * -0.3 : 0}%, ${
                into ? -3.2 : hover ? -3 * -0.3 : 0
              }%)`,
            }}
            className={`transition-all duration-200 ease-custom-1`}
            d="m61.6 73.6-7.2 14.8h27L74 72.5l18-1.7 16.7 35H26.8l14.6-30.4z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          xmlSpace="preserve"
          width="3rem"
          height="3rem"
          className={`absolute`}
        >
          <path
            style={{
              opacity: !hover && !into ? 0.5 : into ? 1 : 0.65,
              fill: into ? '#0081CF' : '#3f3fff',
              // transform: `translate(${
              //   into ? -4.155 : hover ? -4.155 * -0.3 : 0
              // }%, ${into ? 6.525 : hover ? 6.525 * -0.3 : 0}%)`,
              transform: `translate(${
                into ? -4.155 : hover ? -4.155 * -0.3 : 0
              }%, ${into ? 6.625 : hover ? 6.58 * -0.3 : 0}%)`,
            }}
            className={`transition-all duration-200 ease-custom-1`}
            d="m61.6 28.1 30.7 24.1-.6-1.4L71.2 8.2z"
          />
          <path
            style={{
              opacity: !hover && !into ? 0.5 : into ? 1 : 0.65,
              fill: into ? '#0081CF' : '#0005b4',
              transform: `translate(${
                into ? 3.97 : hover ? 3.97 * -0.3 : 0
              }%, ${into ? 3.87 : hover ? 3.87 * -0.3 : 0}%)`,
            }}
            className={`transition-all duration-200 ease-custom-1`}
            d="m34.4 66.6 20.2-1.8 6.3-13L67 63.7l18-1.705-3.1-6.4-30.7-24.1z"
          />
          <path
            style={{
              opacity: !hover && !into ? 0.5 : into ? 1 : 0.65,
              fill: into ? '#0081CF' : '#ff6afc',
              // transform: `translate(${into ? -1.5 : hover ? 1.5 * -0.3 : 0}%, ${
              //   into ? -3 : hover ? -3 * -0.3 : 0
              // }%)`,
              transform: `translate(${into ? -1.5 : hover ? 1.5 * -0.3 : 0}%, ${
                into ? -3.2 : hover ? -3 * -0.3 : 0
              }%)`,
            }}
            className={`transition-all duration-200 ease-custom-1`}
            d="m61.6 73.6-7.2 14.8h27L74 72.5l18-1.7 16.7 35H26.8l14.6-30.4z"
          />
        </svg>
      </div>
    </div>
  )
}
