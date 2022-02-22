import React, { useEffect, useRef, useState } from 'react'

interface CardProps {
  title: string
}

export const Card: React.FC<CardProps> = ({ title }) => {
  return <div className={`inline-block w-[250px]`}>{title}</div>
}

function sideScroll(
  element: HTMLDivElement,
  direction: 'right' | 'left',
  speed: number,
  distance: number,
  step: number
) {
  let scrollAmount = 0
  var slideTimer = setInterval(() => {
    if (direction == 'left') {
      element.scrollLeft -= step
    } else {
      element.scrollLeft += step
    }
    scrollAmount += step
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer)
    }
  }, speed)
}

interface CardContainerProps {}

export const CardContainer: React.FC<CardContainerProps> = ({}) => {
  const scrollContainerRef: any = useRef<HTMLDivElement>()
  const [disableScroll, setDisableScroll] = useState(false)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [scrollPos, setScrollPos] = useState(1)
  const [clonesWidth, setClonesWidth] = useState(0)

  const getClonesWidth = () => {
    const clones = document.getElementsByClassName('is-clone')
    let clonesWidth = 0
    for (let i = 0; i < clones.length; i++) {
      clonesWidth = clonesWidth + clones[i].clientWidth
    }
    return clonesWidth
  }

  const reCalc = () => {
    if (scrollPos <= 0) {
      setScrollPos(1)
    }
    setScrollWidth(scrollContainerRef.current.clientWidth)
    setClonesWidth(getClonesWidth())
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const scrollWidth = container.scrollWidth
    const clonesWidth = getClonesWidth()
    let scrollPos = container.scrollLeft
    let scrollPosAdd
    container.clientWidth > clonesWidth
      ? (scrollPosAdd = container.clientWidth)
      : (scrollPosAdd = clonesWidth)

    if (!disableScroll) {
      if (scrollPos + scrollPosAdd >= scrollWidth) {
        setScroll(container, 1 + Math.floor(scrollPosAdd / 12.09))
      } else if (scrollPos <= 0) {
        setScroll(
          container,
          scrollWidth - clonesWidth - Math.floor(scrollPosAdd / 12.09)
        )
        setDisableScroll(true)
      }
    }
  }

  const setScroll = (element: HTMLDivElement, pos: number) => {
    element.scrollLeft = pos
    setScrollPos(element.scrollLeft)
  }

  const scrollNext = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget.previousSibling
    sideScroll(container as HTMLDivElement, 'right', 10, 272, 10)
  }

  const scrollPrev = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget.nextSibling
    sideScroll(container as HTMLDivElement, 'left', 10, 272, 10)
  }

  useEffect(() => {
    window.addEventListener('resize', reCalc)

    return () => window.removeEventListener('resize', reCalc)
  }, [])

  useEffect(() => {
    if (disableScroll) {
      setTimeout(() => setDisableScroll(false), 40)
    }
  }, [disableScroll, scrollWidth, scrollPos, clonesWidth])

  return (
    <div className="card-container">
      <div
        className={`absolute left-[10px] z-[5] hidden h-[235px] basis-0 bg-red-200 p-[5px] leading-[235px] text-blue-900 transition duration-[2000] hover:block`}
        onClick={scrollPrev}
      >
        1
      </div>
      <div
        ref={scrollContainerRef}
        className={`overflow-y-hidden overflow-x-scroll whitespace-nowrap bg-yellow-200 `}
        style={{ WebkitOverflowScrolling: `touch` }}
        onScroll={handleScroll}
      >
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 1`}
        />
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 2`}
        />
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 3`}
        />
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 4`}
        />
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 5`}
        />
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 6`}
        />
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 1`}
        />
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 2`}
        />
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 3`}
        />
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 4`}
        />
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 5`}
        />
        <Card
          title={`${
            disableScroll ? 'ds' : 'nds'
          } sw:${scrollWidth} sp:${scrollPos} cw:${clonesWidth} 6`}
        />
      </div>
      <div
        className={`absolute right-[10px] z-[5] hidden h-[235px] basis-0 bg-red-200 p-[5px] leading-[235px] text-blue-900 transition duration-[2000] hover:block`}
        // scroll-next"
        onClick={scrollNext}
      >
        2
      </div>
    </div>
  )
}

// function sideScroll(element, direction, speed, distance, step) {
//   let scrollAmount = 0
//   var slideTimer = setInterval(() => {
//     if (direction == 'left') {
//       element.scrollLeft -= step
//     } else {
//       element.scrollLeft += step
//     }
//     scrollAmount += step
//     if (scrollAmount >= distance) {
//       window.clearInterval(slideTimer)
//     }
//   }, speed)
// }

// class Card extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return <div className={'card '}>{this.props.title}</div>
//   }
// }

// export class CardContainer extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       disableScroll: false,
//       scrollWidth: 0,
//       scrollPos: 1,
//       clonesWidth: 0,
//     }
//     this.scrollContainerRef = React.createRef()
//     this.handleScroll = this.handleScroll.bind(this)
//     this.scrollNext = this.scrollNext.bind(this)
//     this.scrollPrev = this.scrollPrev.bind(this)
//     this.setScroll = this.setScroll.bind(this)
//     this.getClonesWidth = this.getClonesWidth.bind(this)
//     this.reCalc = this.reCalc.bind(this)
//   }

//   reCalc() {
//     let scrollPos = this.state.scrollPos
//     let scrollWidth = this.scrollContainerRef.current.clientWidth
//     let clonesWidth = this.getClonesWidth()

//     if (scrollPos <= 0) {
//       scrollPos = 1
//     }
//     this.setState({
//       scrollPos: scrollPos,
//       scrollWidth: scrollWidth,
//       clonesWidth: clonesWidth,
//     })
//   }

//   handleScroll(e) {
//     const container = e.currentTarget
//     const scrollWidth = container.scrollWidth
//     const clonesWidth = this.getClonesWidth()
//     let scrollPos = container.scrollLeft
//     let scrollPosAdd
//     container.clientWidth > clonesWidth
//       ? (scrollPosAdd = container.clientWidth)
//       : (scrollPosAdd = clonesWidth)

//     if (!this.state.disableScroll) {
//       if (scrollPos + scrollPosAdd >= scrollWidth) {
//         this.setScroll(
//           // The math floor value helps smooth out the scroll jump,
//           // I don't know why that particular value works, but it does
//           // Same goes for the other setScroll call below
//           container,
//           1 + Math.floor(scrollPosAdd / 12.09)
//         )
//         this.setState({
//           disableScroll: true,
//         })
//       } else if (scrollPos <= 0) {
//         this.setScroll(
//           container,
//           scrollWidth - clonesWidth - Math.floor(scrollPosAdd / 12.09)
//         )
//         this.setState({
//           disableScroll: true,
//         })
//       }
//     }

//     this.setState({
//       scrollWidth: container.scrollWidth,
//       scrollPos: container.scrollLeft,
//     })
//   }

//   getClonesWidth() {
//     const clones = document.getElementsByClassName('is-clone')
//     let clonesWidth = 0
//     for (let i = 0; i < clones.length; i++) {
//       clonesWidth = clonesWidth + clones[i].clientWidth
//     }
//     return clonesWidth
//   }

//   setScroll(element, pos) {
//     element.scrollLeft = pos
//     this.setState({
//       scrollPos: element.scrollLeft,
//     })
//   }

//   scrollNext(e) {
//     const container = e.currentTarget.previousSibling
//     sideScroll(container, 'right', 10, 272, 10)
//   }

//   scrollPrev(e) {
//     const container = e.currentTarget.nextSibling
//     sideScroll(container, 'left', 10, 272, 10)
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.disableScroll) {
//       window.setTimeout(
//         function () {
//           this.setState({
//             disableScroll: false,
//           })
//         }.bind(this),
//         40
//       )
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('resize', this.reCalc)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.reCalc)
//   }

//   render() {
//     return (
//       <div className="card-container">
//         <div className="scroll scroll-prev" onClick={this.scrollPrev}>
//           <i className="fas fa-chevron-left"></i>
//         </div>
//         <div
//           ref={this.scrollContainerRef}
//           className="scrolling-wrapper"
//           onScroll={this.handleScroll}
//         >
//           <Card title={'Card Number 1'} classes={''} />
//           <Card title={'Card Number 2'} />
//           <Card title={'Card Number 3'} />
//           <Card title={'Card Number 4'} />
//           <Card title={'Card Number 5'} />
//           <Card title={'Card Number 6'} />
//           <Card title={'Card Number 1'} classes={'is-clone is-start'} />
//           <Card title={'Card Number 2'} classes={'is-clone'} />
//           <Card title={'Card Number 3'} classes={'is-clone'} />
//           <Card title={'Card Number 4'} classes={'is-clone'} />
//           <Card title={'Card Number 5'} classes={'is-clone'} />
//           <Card title={'Card Number 6'} classes={'is-clone'} />
//         </div>
//         <div className="scroll scroll-next" onClick={this.scrollNext}>
//           <i className="fas fa-chevron-right"></i>
//         </div>
//       </div>
//     )
//   }
// }
