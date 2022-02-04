import React from 'react'

const l1 = require('../../static/landing/l1.jpg')
const l2 = require('../../static/landing/l2.jpg')
const l3 = require('../../static/landing/l3.jpg')
const l4 = require('../../static/landing/l4.jpg')
const l5 = require('../../static/landing/l5.jpg')
const l6 = require('../../static/landing/l6.jpg')
const l7 = require('../../static/landing/l7.jpg')
const l8 = require('../../static/landing/l8.jpg')
const l9 = require('../../static/landing/l9.jpg')
const l10 = require('../../static/landing/l10.jpg')

export const Landing: React.FC = () => {
  return (
    <div
      className={`h-[200vh] pt-4 flex flex-col items-center justify-start
      `}
      // flex flex-col items-center justify-start
    >
      <div>
        <div className={`mt-32 relative`}>
          <h1 className={`text-5xl font-extrabold tracking-tight text-center`}>
            Get away this winter
          </h1>
          <ul
            className={`mt-10 pb-8 px-[50vh] w-full flex overflow-x-auto gap-8`}
          >
            {[
              { image: l1, titile: 'Miami' },
              { image: l2, titile: 'Miami' },
              { image: l3, titile: 'Miami' },
              { image: l4, titile: 'Miami' },
            ].map((el, i) => (
              <li key={i}>
                <div
                  className={`relative flex-shrink-0 max-w-[95vw] owerflow-hidden rounded-3xl`}
                >
                  <img
                    src={el.image}
                    alt=""
                    className={` inset-0 h-full w-full object-cover object-bottom`}
                  />
                  <div
                    className={`z-10  inset-0 h-full w-full bg-gradient-to-br from-black/25`}
                  />
                  <div
                    className={`ralative h-96 w-[768px] p-12 flex flex-col justify-between items-start`}
                  >
                    <p className={`font-medium text-white`}>Destinations</p>
                    <h2
                      className={`mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white`}
                    >
                      {el.titile}
                    </h2>
                  </div>
                  <a
                    className={`px-4 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium`}
                  >
                    Browse destination
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
