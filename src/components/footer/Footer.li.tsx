import React, { useEffect, useState } from 'react'
import './footer.styles.css'

interface IPropsLi {
  i: number
  tag: string
}

export const FooterLi: React.FC<IPropsLi> = ({ i, tag }) => {
  return (
    <li key={i} className={`mb-[0.5rem] `}>
      <a href={`#`} className={`test`}>
        {tag}
      </a>
    </li>
  )
}
