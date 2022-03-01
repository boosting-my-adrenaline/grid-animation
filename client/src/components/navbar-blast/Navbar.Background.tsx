import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import useLocalStorage from '../../utils/hooks/useLocalStorage'

export const NavbarBackground: React.FC = () => {
  const { isDarkMode } = useDarkMode()

  const dark = `bg-[#101010] shadow-gray-200/60`
  const light = `bg-[#FFFBFF] shadow-gray-500/60`

  const [row1, setRow1] = useLocalStorage(`bg-row1`, isDarkMode)
  const [row2, setRow2] = useLocalStorage(`bg-row2`, isDarkMode)
  const [row3, setRow3] = useLocalStorage(`bg-row3`, isDarkMode)
  const [row4, setRow4] = useLocalStorage(`bg-row4`, isDarkMode)
  const [row5, setRow5] = useLocalStorage(`bg-row5`, isDarkMode)
  const [row6, setRow6] = useLocalStorage(`bg-row6`, isDarkMode)
  const [row7, setRow7] = useLocalStorage(`bg-row7`, isDarkMode)
  const [row8, setRow8] = useLocalStorage(`bg-row8`, isDarkMode)
  const [row9, setRow9] = useLocalStorage(`bg-row9`, isDarkMode)

  useEffect(() => {
    const delays = [100, 150, 200, 250, 300, 350, 400, 450, 500]

    let id1 = setTimeout(() => {
      setRow1(isDarkMode)
    }, delays[0])
    let id2 = setTimeout(() => {
      setRow2(isDarkMode)
    }, delays[1])
    let id3 = setTimeout(() => {
      setRow3(isDarkMode)
    }, delays[2])
    let id4 = setTimeout(() => {
      setRow4(isDarkMode)
    }, delays[3])
    let id5 = setTimeout(() => {
      setRow5(isDarkMode)
    }, delays[4])
    let id6 = setTimeout(() => {
      setRow6(isDarkMode)
    }, delays[5])
    let id7 = setTimeout(() => {
      setRow7(isDarkMode)
    }, delays[6])
    let id8 = setTimeout(() => {
      setRow8(isDarkMode)
    }, delays[7])
    let id9 = setTimeout(() => {
      setRow9(isDarkMode)
    }, delays[8])

    return () => {
      clearTimeout(id1)
      clearTimeout(id2)
      clearTimeout(id3)
      clearTimeout(id4)
      clearTimeout(id5)
      clearTimeout(id6)
      clearTimeout(id7)
      clearTimeout(id8)
      clearTimeout(id9)

      setRow1(isDarkMode)
      setRow2(isDarkMode)
      setRow3(isDarkMode)
      setRow4(isDarkMode)
      setRow5(isDarkMode)
      setRow6(isDarkMode)
      setRow7(isDarkMode)
      setRow8(isDarkMode)
      setRow9(isDarkMode)
    }
  }, [isDarkMode])

  const el = (active: boolean) => (
    <motion.div
      initial={{ backgroundColor: active ? `#101010` : `#FFFBFF` }}
      animate={{ backgroundColor: active ? `#101010` : `#FFFBFF` }}
      className={`h-full w-full shrink-0 border-none`}
    />
  )

  const row = (arr: boolean[]) => (
    <div className={`flex h-[20%] w-full shrink-0 border-none`}>
      {arr.map((elem) => el(elem))}
    </div>
  )

  return (
    <div className={`h-full w-full flex-col `}>
      {row([row5, row4, row3, row2, row1])}
      {row([row6, row5, row4, row3, row2])}
      {row([row7, row6, row5, row4, row3])}
      {row([row8, row7, row6, row5, row4])}
      {row([row9, row8, row7, row6, row5])}
    </div>
  )
}
