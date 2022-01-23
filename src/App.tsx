import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainContainer } from './components/main/Main.container'
import { Page } from './components/pages/Page'
import { useDidMountEffect } from './utils/hooks/useDidMountEffect'
import useElementSize from './utils/hooks/useElementSize'
import useLocalStorage from './utils/hooks/useLocalStorage'

export const App: React.FC = () => {
  const [parentRef, { width, height }] = useElementSize()

  // const [open, setOpen] = useLocalStorage<null | number>('isOpen', null)
  // const [multiple, setMultiple] = useLocalStorage('main-multiple', 1)
  // const [params, setParams] = useLocalStorage('main-params', { x: 0, y: 0 })

  const [open, setOpen] = useState<null | number>(null)
  const [multiple, setMultiple] = useState(1)
  const [params, setParams] = useState({ x: 0, y: 0 })

  // useEffect(() => {
  //   if (open === null) {
  //     setMultiple(1)
  //     setParams({ x: 0, y: 0 })
  //   }
  // }, [])

  useDidMountEffect(() => {
    if (open === null) {
      setMultiple(1)
      setParams({ x: 0, y: 0 })
    }
  }, [open])

  const colors: [string, string, string, boolean][] = [
    ['#D65DB1', '#EDEDED', '#D65DB1', true],
    ['#845EC2', '#EDEDED', '#845EC2', true],
    ['#FF6F91', '#EDEDED', '#FF6F91', true],

    ['#F9F871', '#0A0AFF', '#0A0AFF', false],
    ['#FF9671', '#FDFDFD', '#FF9671', true],
    ['#FFC75F', '#2424FF', '#2424FF', false],

    ['#4FFBDF', '#8F7200', '#8F7200', false],
    ['#C4FCEF', '#468847', '#468847', false],
    ['#B0A8B9', '#FDFDFD', '#B0A8B9', true],

    ['#D65DB1', '#EDEDED', '#D65DB1', true],
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
