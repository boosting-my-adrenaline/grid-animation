import React from 'react'
const bg = require('../../static/slide1.jpg')

interface IProps {}

export const Slide1: React.FC<IProps> = () => {
  return (
    <div className={`w-f bg-slide1 h-full bg-cover object-cover`}>test</div>
  )
}
