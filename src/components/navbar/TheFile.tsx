import React from 'react'

// function sideScroll(
//   element: HTMLDivElement,
//   direction: 'right' | 'left',
//   speed: number,
//   distance: number,
//   step: number
// ) {
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

// interface CardProps {
//   title: string
// }

// export const Card: React.FC<CardProps> = ({ title }) => {
//   return <div className={`inline-block w-[250px]`}>{title}</div>
// }

// interface Props {
//   scrollContainerRef: any
// }

// export class CardContainer extends React.Component {
//   constructor(props: Props) {
//     super(props)
//     this.state = {
//       disableScroll: false,
//       scrollWidth: 0,
//       scrollPos: 1,
//       clonesWidth: 0,
//     }
//     this.scrollContainerRef = React.createRef<HTMLDivElement>()
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

//   handleScroll(e: React.UIEvent<HTMLDivElement>) {
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

//   setScroll(element: HTMLDivElement, pos: number) {
//     element.scrollLeft = pos
//     this.setState({
//       scrollPos: element.scrollLeft,
//     })
//   }

//   scrollNext(e: React.UIEvent<HTMLDivElement>) {
//     const container = e.currentTarget.previousSibling
//     sideScroll(container as HTMLDivElement, 'right', 10, 272, 10)
//   }

//   scrollPrev(e: React.UIEvent<HTMLDivElement>) {
//     const container = e.currentTarget.nextSibling
//     sideScroll(container as HTMLDivElement, 'left', 10, 272, 10)
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
//           <Card title={'Card Number 1'} />
//           <Card title={'Card Number 2'} />
//           <Card title={'Card Number 3'} />
//           <Card title={'Card Number 4'} />
//           <Card title={'Card Number 5'} />
//           <Card title={'Card Number 6'} />
//           <Card title={'Card Number 1'} />
//           <Card title={'Card Number 2'} />
//           <Card title={'Card Number 3'} />
//           <Card title={'Card Number 4'} />
//           <Card title={'Card Number 5'} />
//           <Card title={'Card Number 6'} />
//         </div>
//         <div className="scroll scroll-next" onClick={this.scrollNext}>
//           <i className="fas fa-chevron-right"></i>
//         </div>
//       </div>
//     )
//   }
// }

// body, #root, .app {
//   width: 100%;
//   margin: 0 auto;
// }

// .header {
//   position: fixed;
//   top: 0;
//   z-index: 15;
//   width: 100%;
//   height: 50px;
//   margin: 0 auto;
//   background-color: white;
//   box-shadow: 0px 0px 10px 0px grey;
// }

// .nav {
//   margin: 0 auto;
//   max-width: 1200px;
//   height: 100%;
//   width: 90%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .nav-links-container {
//   display: flex;
//   list-style: none;
//   justify-content: space-between;
//   align-items: center;
//   margin: 0;
// }

// .nav-link {
//   margin: 0 15px;
//   &:last-child {
//     margin-right: 0;
//   }
// }

// .main {
//   width: 100%;
//   min-height: calc(100vh - 50px);
//   position: relative;
//   top: 29px;

//   padding: 0;
//   background-color: darkred;
// }

// .content {
//   max-width: 1200px;
//   width: 90%;
//   height: 100vh;
//   margin: 0 auto;
//   position: relative;
//   top: 0;
//   padding: 0 10px;
//   padding-top: 20px;
//   background-color: white;
// }

// .card {
//   // margin: 5px 10px;
//   // border: 1px solid #bbb;
//   width: 250px;
//   // box-shadow: 3px 2px 5px 0px lightgrey;
//   // background-color: white;
//   // font-family: 'Helvetica';
//   // position: relative;
//   display: inline-block;
// }

// .card-img-container {
//   height: 150px;
//   text-align: center;
//   line-height: 150px;
//   border-bottom: 1px solid #bbb;
// }

// .scroll {
//   padding: 5px;
//   height: 235px;
//   line-height: 235px;
//   position: absolute;
//   flex-basis: 0;
//   z-index: 5;
//   background-color: rgba(225,225,225,0.8);
//   color: darkgrey;
//   display: none;
//   transition: 2s;
// }

// .card-container:hover .scroll {
//   display: block;
//   transition: 2s;
// }

// .scroll-prev {
//   left: 10px;
// }

// .scroll-next {
//   right: 10px;
// }

// .scrolling-wrapper {
//   overflow-x: scroll;
//   overflow-y: hidden;
//   white-space: nowrap;
//   background-color: #eee;
//   -webkit-overflow-scrolling: touch;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// }
