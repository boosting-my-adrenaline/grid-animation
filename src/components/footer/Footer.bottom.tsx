import React from 'react'
import { FooterLi } from './Footer.li'

interface IProps {
  lg: boolean
}

export const FooterBottom: React.FC<IProps> = ({ lg }) => {
  return (
    <div
      className={`w-full flex ${
        lg
          ? ` justify-between text-React-h2 items-center pb-[1.5rem]`
          : `flex-col-reverse text-React-h1*1.5 gap-[1rem] pb-[2.5rem]`
      }  `}
    >
      <ul className={`flex flex-wrap gap-[4rem]`}>
        {[
          `Interdum © 2022 Faucibus Tellum`,
          `Henderit`,
          `Laogreet eros`,
          'Commodo ex',
        ].map((el, i) => (
          <FooterLi i={i} tag={el} />
        ))}
      </ul>
      <ul className={`flex ${lg ? `gap-[2rem]` : 'gap-[3.5rem]'}`}>
        <li>
          <a
            target={'_blank'}
            href={`https://github.com/boosting-my-adrenaline`}
          >
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width={lg ? '2.5rem' : '4rem'}
              height={lg ? '2.5rem' : '4rem'}
            >
              <path d="M32,6C17.641,6,6,17.641,6,32c0,12.277,8.512,22.56,19.955,25.286c-0.592-0.141-1.179-0.299-1.755-0.479V50.85 c0,0-0.975,0.325-2.275,0.325c-3.637,0-5.148-3.245-5.525-4.875c-0.229-0.993-0.827-1.934-1.469-2.509 c-0.767-0.684-1.126-0.686-1.131-0.92c-0.01-0.491,0.658-0.471,0.975-0.471c1.625,0,2.857,1.729,3.429,2.623 c1.417,2.207,2.938,2.577,3.721,2.577c0.975,0,1.817-0.146,2.397-0.426c0.268-1.888,1.108-3.57,2.478-4.774 c-6.097-1.219-10.4-4.716-10.4-10.4c0-2.928,1.175-5.619,3.133-7.792C19.333,23.641,19,22.494,19,20.625 c0-1.235,0.086-2.751,0.65-4.225c0,0,3.708,0.026,7.205,3.338C28.469,19.268,30.196,19,32,19s3.531,0.268,5.145,0.738 c3.497-3.312,7.205-3.338,7.205-3.338c0.567,1.474,0.65,2.99,0.65,4.225c0,2.015-0.268,3.19-0.432,3.697 C46.466,26.475,47.6,29.124,47.6,32c0,5.684-4.303,9.181-10.4,10.4c1.628,1.43,2.6,3.513,2.6,5.85v8.557 c-0.576,0.181-1.162,0.338-1.755,0.479C49.488,54.56,58,44.277,58,32C58,17.641,46.359,6,32,6z" />
              <path d="M33.813,57.93C33.214,57.972,32.61,58,32,58C32.61,58,33.213,57.971,33.813,57.93z" />
              <path d="M37.786,57.346c-1.164,0.265-2.357,0.451-3.575,0.554C35.429,57.797,36.622,57.61,37.786,57.346z" />
              <path d="M32,58c-0.61,0-1.214-0.028-1.813-0.07C30.787,57.971,31.39,58,32,58z" />
              <path d="M29.788,57.9c-1.217-0.103-2.411-0.289-3.574-0.554C27.378,57.61,28.571,57.797,29.788,57.9z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href={`https://www.linkedin.com/in/boosting-my-adrenaline/`}
          >
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width={lg ? '2.5rem' : '4rem'}
              height={lg ? '2.5rem' : '4rem'}
            >
              <path d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z" />
            </svg>
          </a>
        </li>
        <li>
          <a target="_blank" href={`https://t.me/boosting_my_adrenaline`}>
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -2.5 60 60"
              width={lg ? '2.5rem' : '4rem'}
              height={lg ? '2.5rem' : '4rem'}
            >
              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}
