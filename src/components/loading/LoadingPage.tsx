import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

interface IProps {
  tag: string
  setLoadingBlast: (loading: null | string) => void
}

export const LoadingPage: React.FC<IProps> = ({ tag, setLoadingBlast }) => {
  const [cooordinates, setCoordinates] = useState(['-100%', '-100%'])

  useEffect(() => {
    const delays = [0, 450, 900, 1100, 1500]

    setTimeout(() => setCoordinates(['0%', '-100%']), delays[0])
    setTimeout(() => setCoordinates(['0%', '0%']), delays[1])
    setTimeout(() => setCoordinates(['0', '100%']), delays[2])
    setTimeout(() => setCoordinates(['100%', '100%']), delays[3])
    setTimeout(() => setLoadingBlast(null), delays[4])
  }, [])

  return (
    <div
      className={`fixed h-[200vh] w-full z-[9] flex items-start justify-center`}
    >
      <motion.div
        initial={{ x: '-100%', y: '-50%' }}
        animate={{ x: cooordinates[0] }}
        // transition={{ duration: 0.8 }}
        transition={{ duration: 0.5 }}
        className={`absolute w-full h-full bg-white`}
      >
        <div className={`w-full h-full bg-[#ff6afd]/70`} />
      </motion.div>
      <motion.div
        // transition={{ duration: 0.6 }}
        transition={{ duration: 0.3 }}
        initial={{ x: '-100%', y: '-50%' }}
        animate={{ x: cooordinates[1] }}
        className={`absolute w-full h-full bg-[#00035a]/70`}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ skew: '-15deg', opacity: 1 }}
        transition={{
          skew: { delay: 0.4, duration: 0.5 },
          opacity: { delay: 0, duration: 0.3 },
        }}
        className={` absolute font-BebasNeue text-Blast h-[100vh] flex items-center justify-center text-white `}
      >
        <motion.div
          initial={{}}
          animate={{ opacity: 0 }}
          transition={{
            opacity: { delay: 1.1, duration: 0.5 },
          }}
          className={`flex items-center justify-center`}
        >
          <div className={`z-10 `}>{tag}</div>
          <motion.div
            animate={{ x: 10, y: 10, opacity: 0 }}
            transition={{
              x: { delay: 0.1, duration: 1 },
              y: { delay: 0.1, duration: 1 },
              opacity: { delay: 0.8, duration: 0.5 },
            }}
            className={'-z-10 absolute font-BebasNeue text-Blast text-[#333]'}
            style={{
              textShadow: `-1px -1px 0 #333,   1px -1px 0 #333, -1px 1px 0 #333, 1px 1px 0 #333`,
            }}
          >
            {tag}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
