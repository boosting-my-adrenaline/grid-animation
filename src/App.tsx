import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainContainer } from './components/main/Main.container'
import { Page } from './components/pages/Page'
import { useDidMountEffect } from './utils/hooks/useDidMountEffect'
import useElementSize from './utils/hooks/useElementSize'
import useLocalStorage from './utils/hooks/useLocalStorage'

export const App: React.FC = () => {
  const [parentRef, { width, height }] = useElementSize()

  const [open, setOpen] = useLocalStorage<null | number>('isOpen', null)
  const [multiple, setMultiple] = useLocalStorage('main-multiple', 1)
  const [params, setParams] = useLocalStorage('main-params', { x: 0, y: 0 })

  useDidMountEffect(() => {
    if (open === null) {
      setMultiple(1)
      setParams({ x: 0, y: 0 })
    }
  }, [open])

  const colors = [
    '#D65DB1',
    '#845EC2',
    '#FF6F91',
    '#FF9671',
    '#FFC75F',
    '#F9F871',
    '#4FFBDF',
    '#C4FCEF',
    '#B0A8B9',
    '#D65DB1',
  ]

  return (
    <BrowserRouter>
      <div className={`w-[100%] h-[100vh]`} ref={parentRef}>
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
    </BrowserRouter>
  )
}
