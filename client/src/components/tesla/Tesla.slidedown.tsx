import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

interface IProps {
  onClick: () => void
}
export const TeslaSlideDown: React.FC<IProps> = ({ onClick }) => {
  const [turn, setTurn] = useState(1)

  useEffect(() => {
    let a = 1
    let id = setInterval(() => {
      if (a === 1) {
        setTurn(2)
        a = 2
      } else if (a === 2) {
        setTurn(3)
        a = 3
      } else if (a === 3) {
        setTurn(3)
        a = 4
      } else if (a === 4) {
        setTurn(4)
        a = 5
      } else if (a === 5) {
        setTurn(5)
        a = 6
      } else if (a === 6) {
        setTurn(6)
        a = 7
      } else if (a === 7) {
        setTurn(7)
        a = 8
      } else if (a === 8) {
        setTurn(8)
        a = 9
      } else if (a === 9) {
        setTurn(9)
        a = 1
      }
    }, 200)

    return () => clearInterval(id)
  }, [])

  return (
    <div className={`cursor-pointer`} onMouseDown={onClick}>
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y:
            turn === 2
              ? 7
              : turn === 4
              ? 0
              : turn === 5
              ? 3
              : turn === 6
              ? 0
              : ``,
        }}
      >
        <svg
          className={`rotate-90`}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          // height="9"
          width="22"
        >
          <title />
          <path
            style={{
              fill: 'none',
              stroke: '#fff',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 40,
            }}
            d="M174.02 91.26 338.5 255.74l-165 165"
          />
        </svg>
      </motion.div>
    </div>
  )
}
