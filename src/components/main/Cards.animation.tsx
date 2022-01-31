import React from 'react'

export const CardsAnimation: React.FC = () => {
  const width = 40
  const height = 40

  const duration = '1s'
  const keyTimes = '0;0.5;1'
  const values = '0;0.9;1'

  const colors = [
    '#2C73D2',
    '#e15b64',
    '#f47e60',
    '#f8b26a',
    '#abbd81',
    '#008E9B',
    '#B39CD0',
    '#FF8066',
  ]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        // background: 'rgb(255, 255, 255)',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width="200px"
      height="200px"
      viewBox="0 0 150 150"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(25,25)">
        <rect
          //111

          x="-20"
          y="-20"
          width={width}
          height={height}
          fill={colors[Math.floor(Math.random() * colors.length)]}
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur={duration}
            keyTimes={keyTimes}
            values={values}
            begin="-0.75s"
          ></animateTransform>
        </rect>
      </g>

      <g transform="translate(75,25)">
        <rect
          //2222

          x="-20"
          y="-20"
          width={width}
          height={height}
          fill={colors[Math.floor(Math.random() * colors.length)]}
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur={duration}
            keyTimes={keyTimes}
            values={values}
            begin="-0.6s"
          ></animateTransform>
        </rect>
      </g>

      <g transform="translate(125,25)">
        <rect
          //333

          x="-20"
          y="-20"
          width={width}
          height={height}
          fill={colors[Math.floor(Math.random() * colors.length)]}
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur={duration}
            keyTimes={keyTimes}
            values={values}
            begin="-0.45s"
          ></animateTransform>
        </rect>
      </g>

      <g transform="translate(25,75)">
        <rect
          //4444

          x="-20"
          y="-20"
          width={width}
          height={height}
          fill={colors[Math.floor(Math.random() * colors.length)]}
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur={duration}
            keyTimes={keyTimes}
            values={values}
            begin="-0.6s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(75,75)">
        <rect
          //5555

          x="-20"
          y="-20"
          width={width}
          height={height}
          fill={colors[Math.floor(Math.random() * colors.length)]}
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur={duration}
            keyTimes={keyTimes}
            values={values}
            begin="-0.45s"
          ></animateTransform>
        </rect>
      </g>

      <g transform="translate(125,75)">
        <rect
          //66666

          x="-20"
          y="-20"
          width={width}
          height={height}
          fill={colors[Math.floor(Math.random() * colors.length)]}
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur={duration}
            keyTimes={keyTimes}
            values={values}
            begin="-0.3s"
          ></animateTransform>
        </rect>
      </g>

      <g transform="translate(25,125)">
        <rect
          //777

          x="-20"
          y="-20"
          width={width}
          height={height}
          fill={colors[Math.floor(Math.random() * colors.length)]}
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur={duration}
            keyTimes={keyTimes}
            values={values}
            begin="-0.45s"
          ></animateTransform>
        </rect>
      </g>

      <g transform="translate(75,125)">
        <rect
          //8888

          x="-20"
          y="-20"
          width={width}
          height={height}
          fill={colors[Math.floor(Math.random() * colors.length)]}
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur={duration}
            keyTimes={keyTimes}
            values={values}
            begin="-0.3s"
          ></animateTransform>
        </rect>
      </g>

      <g transform="translate(125,125)">
        <rect
          //999

          x="-20"
          y="-20"
          width={width}
          height={height}
          fill={colors[Math.floor(Math.random() * colors.length)]}
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur={duration}
            keyTimes={keyTimes}
            values={values}
            begin="-0.15s"
          ></animateTransform>
        </rect>
      </g>
    </svg>
  )
}
