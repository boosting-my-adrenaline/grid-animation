import React, { useEffect, useRef } from 'react'

interface InfiniteScrollProps {
  children: React.ReactNode
  loader: React.ReactElement
  dispatchScroll: (data: any) => void
  mainWrapper?: any
}

// export const useDidMountEffect = (
//   func: EffectCallback | any,
//   deps?: DependencyList
// ) => {

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  loader,
  dispatchScroll,
  mainWrapper = null,
}) => {
  const mainWrapperRef: any = useRef<HTMLDivElement>()

  // let mainWrapperRef = useRef()

  const triggerScroll = () =>
    //  mainWrapperRef
    {
      if (
        mainWrapperRef.current &&
        Object.keys(mainWrapperRef.current).length > 0
      ) {
        const element = mainWrapperRef.current
        element.onscroll = (e: React.UIEvent<HTMLDivElement>) => {
          if (
            e.currentTarget.scrollTop + e.currentTarget.offsetHeight ===
            e.currentTarget.scrollHeight
          )
            dispatchScroll({ scrollHeight: e.currentTarget.scrollHeight })
        }
      }
    }

  useEffect(() => {
    triggerScroll()
    // mainWrapperRef
  }, [triggerScroll])

  return React.cloneElement(mainWrapper, { ref: mainWrapperRef }, [
    children,
    loader,
  ])
}

// InfiniteScroll.defaultProps = {
//   mainWrapper: null, //Should be html tag or React element
//   loader: null, //It should be a React element.
//   dipatchScroll: (data) => {
//     console.log('dipatchScroll', data)
//   }, //Used to handle scroll callback event in the parent.
// }

// InfiniteScroll.propTypes = {
//   mainWrapper: PropTypes.element.isRequired,
//   loader: PropTypes.element,
//   dipatchScroll: PropTypes.func.isRequired,
// };

// module.exports.InfiniteScroll = InfiniteScroll
