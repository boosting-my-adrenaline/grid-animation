import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainContainer } from './components/main/Main.container'
import { Navbar } from './components/navbar/Navbar'
import { Page } from './components/pages/Page'
import useDarkMode from './utils/hooks/useDarkMode'
import useElementSize from './utils/hooks/useElementSize'
import useLocalStorage from './utils/hooks/useLocalStorage'

export const App: React.FC = () => {
  const [parentRef, { width, height }] = useElementSize()

  const [open, setOpen] = useLocalStorage<null | number>('isOpen', null)
  const [multiple, setMultiple] = useLocalStorage('main-multiple', 1)
  const [params, setParams] = useLocalStorage('main-params', { x: 0, y: 0 })

  useEffect(() => {
    if (open === null) {
      setMultiple(1)
      setParams({ x: 0, y: 0 })
    }
  }, [open])

  const colors: [string, string, string, boolean, string][] = [
    ['#D65DB1', '#EDEDED', '#D65DB1', true, '#D65DB1'],
    ['#845EC2', '#EDEDED', '#845EC2', true, '#845EC2'],
    ['#FF6F91', '#EDEDED', '#FF6F91', true, '#FF6F91'],

    ['#F9F871', '#0A0AFF', '#0A0AFF', false, '#F9F871'],
    ['#FF9671', '#FDFDFD', '#FF9671', true, '#FF9671'],
    ['#FFC75F', '#2424FF', '#2424FF', false, '#FFC75F'],

    ['#4FFBDF', '#8F7200', '#8F7200', false, '#4FFBDF'],
    ['#C4FCEF', '#468847', '#468847', false, '#468847'],
    ['#B0A8B9', '#FDFDFD', '#B0A8B9', true, '#F9F871'],

    ['#D65DB1', '#EDEDED', '#D65DB1', true, '#D65DB1'],
  ]
  // const [squareRef, { width, height }] = useElementSize()
  const { isDarkMode } = useDarkMode()

  return (
    <div
      className={`w-full h-[100vh] ${
        isDarkMode
          ? `bg-[#333333] shadow-gray-200/60`
          : `bg-white shadow-gray-500/60`
      }`}
    >
      <BrowserRouter>
        <Navbar />
        <div
          className={`w-[100%]
        ${
          `` //  open === null ? `px-10` : `px-1`
        } transition duration-200 ease-in-out`}
        >
          <div
            className={`w-[100%] h-[95vh] ${
              open !== null ? `mt-[5vh] mx-[0vh]` : `mt-[5.5vh] mx-[0vh]`
            } transition-all duration-200 ease-in-out`}
            ref={parentRef}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <MainContainer
                    open={open}
                    setOpen={setOpen}
                    width={width}
                    height={height}
                    colors={colors}
                    params={params}
                    setParams={setParams}
                    multiple={multiple}
                    setMultiple={setMultiple}
                    columns={3}
                  />
                }
              />
              <Route
                path="/page/*"
                element={
                  <Page
                    bg={colors[open || 9]}
                    width={width}
                    height={height}
                    setOpen={setOpen}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}
