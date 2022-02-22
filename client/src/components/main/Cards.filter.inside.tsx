import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'
import { useDidMountEffect } from '../../utils/hooks/useDidMountEffect'
import useLocalStorage from '../../utils/hooks/useLocalStorage'

interface IProps {
  setFilterActives: (filters: number) => void
  sm: boolean
  handleChangeFilter: () => void
}

interface Toggle {
  tag: string
  filter: boolean
  onClick: () => void
}

export const CardsFilterInside: React.FC<IProps> = ({
  setFilterActives,
  sm,
  handleChangeFilter,
}) => {
  const { isDarkMode } = useDarkMode()

  const [filter1, setFilter1] = useLocalStorage(`filter1`, false)
  const [filter2, setFilter2] = useLocalStorage(`filter2`, false)
  const [filter3, setFilter3] = useLocalStorage(`filter3`, false)
  const [filter4, setFilter4] = useLocalStorage(`filter4`, false)
  const [filter5, setFilter5] = useLocalStorage(`filter5`, false)
  const [filter6, setFilter6] = useLocalStorage(`filter6`, false)

  const [filter111, setFilter111] = useLocalStorage(`filter111`, 1)
  const [filter222, setFilter222] = useLocalStorage(`filter222`, 1)

  useEffect(() => {
    setFilterActives(
      [filter1, filter2, filter3, filter4, filter5, filter6].filter((el) => el)
        .length +
        (filter111 === 1 ? 0 : 1) +
        (filter222 === 1 ? 0 : 1)
    )
  }, [
    filter1,
    filter2,
    filter3,
    filter4,
    filter5,
    filter6,
    filter111,
    filter222,
  ])

  useDidMountEffect(() => {
    handleChangeFilter()
  }, [
    filter1,
    filter2,
    filter3,
    filter4,
    filter5,
    filter6,
    filter111,
    filter222,
  ])

  const toggles1: Toggle[] = [
    {
      tag: `pariatur`,
      filter: filter1,
      onClick: () => setFilter1((prev) => !prev),
    },
    {
      tag: `occaecat`,
      filter: filter2,
      onClick: () => setFilter2((prev) => !prev),
    },
    {
      tag: `aliquip`,
      filter: filter3,
      onClick: () => setFilter3((prev) => !prev),
    },
    {
      tag: `muerto`,
      filter: filter4,
      onClick: () => setFilter4((prev) => !prev),
    },
    {
      tag: `splash`,
      filter: filter5,
      onClick: () => setFilter5((prev) => !prev),
    },
    {
      tag: `brothers`,
      filter: filter6,
      onClick: () => setFilter6((prev) => !prev),
    },
  ]

  const selectors1: {
    tag: string
    filter: boolean
    onClick: () => void
    extra: string
  }[] = [
    {
      tag: `any`,
      filter: filter222 === 1,
      onClick: () => setFilter222(1),
      extra: '0',
    },
    {
      tag: `pharetra`,
      filter: filter222 === 2,
      onClick: () => setFilter222(2),
      extra: '1',
    },
    {
      tag: `integer`,
      filter: filter222 === 3,
      onClick: () => setFilter222(3),
      extra: '2',
    },
  ]

  const selectors2: {
    tag: string
    filter: boolean
    onClick: () => void
    extra: string
  }[] = [
    {
      tag: `any`,
      filter: filter111 === 1,
      onClick: () => setFilter111(1),
      extra: '0',
    },
    {
      tag: `ultrices`,
      filter: filter111 === 2,
      onClick: () => setFilter111(2),
      extra: '1',
    },
    {
      tag: `argen`,
      filter: filter111 === 3,
      onClick: () => setFilter111(3),
      extra: '2',
    },
  ]

  const toggleElement = (
    tag: string,
    filter: boolean,
    onClick: () => void,
    i: number,
    extra: string
  ) => (
    <motion.div
      key={i}
      animate={{
        border: '1px solid',
        borderColor: filter
          ? isDarkMode
            ? 'rgb(3 105 161)'
            : '#0081CF'
          : isDarkMode
          ? 'rgb(12 74 110)'
          : 'rgb(186 230 253)',
        backgroundColor: filter
          ? isDarkMode
            ? 'rgb(186 230 253)'
            : '#0081CF'
          : isDarkMode
          ? 'rgba(12 74 110, 0.3)'
          : 'rgb(224 242 254)',
        color: filter
          ? isDarkMode
            ? 'rgb(7 89 133)'
            : 'rgb(255 255 255)'
          : isDarkMode
          ? 'rgb(186 230 253)'
          : 'rgb(12 74 110)',
      }}
      whileHover={{ y: 2 }}
      whileTap={{ scale: 0.9 }}
      className={` px-3 py-1  cursor-pointer 
      ${
        extra === `0`
          ? 'rounded-md mx-4 my-2 mr-0 rounded-r-none'
          : extra === `1`
          ? `my-2 mx-0 rounded-none`
          : extra === `2`
          ? `rounded-md mx-4  my-2 ml-0 rounded-l-none`
          : 'rounded-md mx-4 my-2'
      }  bg-sky-800`}
      onMouseDown={onClick}
    >
      {tag}
    </motion.div>
  )

  return (
    <div
      className={`w-full ${
        '' // !isDarkMode ? 'bg-sky-900' : 'bg-sky-50'
      } py-4 items-center justify-center flex-wrap border-t border-b ${
        isDarkMode ? 'border-gray-200' : 'border-gray-700'
      }`}
    >
      <div
        className={`${
          !sm && `mx-4`
        } bg-red-40 flex items-center justify-center flex-wrap`}
      >
        {toggles1.map((el, i) =>
          toggleElement(el.tag, el.filter, el.onClick, i, ' ')
        )}
      </div>
      <div className={`flex ${sm && `flex-col`} w-full justify-evenly`}>
        <div className={`w-full flex flex-col items-center `}>
          <div
            className={`w-full my-2 text-center ${
              isDarkMode
                ? `bg-sky-800 text-gray-100`
                : `bg-sky-100 text-sky-900`
            }`}
          >
            sollicitudin tempor
          </div>
          <div className={`mx-4 bg-red-40 flex items-center justify-start`}>
            {selectors1.map((el, i) =>
              toggleElement(el.tag, el.filter, el.onClick, i, el.extra)
            )}
          </div>
        </div>

        <div className={`w-full flex flex-col items-center `}>
          <div
            className={`w-full my-2 text-center ${
              isDarkMode
                ? `bg-sky-800 text-gray-100`
                : `bg-sky-100 text-sky-900`
            }`}
          >
            bibendum le cont
          </div>
          <div className={`mx-4 bg-red-40 flex items-center justify-start`}>
            {selectors2.map((el, i) =>
              toggleElement(el.tag, el.filter, el.onClick, i, el.extra)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
