export const handleClickMultiple3 = (
  num: number,
  block: boolean,
  width: number,
  height: number,
  setBlock: (block: boolean) => void,
  navigate: (link: string) => void,
  setMultiple: (multiple: 1 | 3) => void,
  setOpen: (open: number | null) => void,
  setParams: (params: { x: number; y: number }) => void,
  open: null | number
) => {
  if (block) return
  setBlock(true)
  setTimeout(() => {
    setBlock(false)
  }, 1000)

  try {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  } catch (error) {
    window.scrollTo(0, 0)
  }

  setTimeout(() => {
    if (open !== null) {
      navigate('/')
    } else {
      navigate('/page/' + (num + 1))
    }
  }, 1000)
  if (open !== null) {
    setMultiple(1)
    setOpen(null)
    setParams({ x: 0, y: 0 })
  } else {
    setOpen(num)
    setMultiple(3)
    switch (num) {
      case 0:
        return setParams({
          x: width,
          y: height,
        })
      case 1:
        return setParams({
          x: 0,
          y: height,
        })
      case 2:
        return setParams({
          x: -width,
          y: height,
        })
      case 3:
        return setParams({
          x: width,
          y: 0,
        })
      case 4:
        return
      case 5:
        return setParams({
          x: -width,
          y: 0,
        })
      case 6:
        return setParams({
          x: width,
          y: -height,
        })
      case 7:
        return setParams({
          x: 0,
          y: -height,
        })
      case 8:
        return setParams({
          x: -width,
          y: -height,
        })
    }
  }
}
