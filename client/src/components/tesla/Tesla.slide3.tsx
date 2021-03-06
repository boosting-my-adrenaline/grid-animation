import { motion } from 'framer-motion'
import React from 'react'
import { useWindowSize } from '../../utils/hooks/useDimensions'
const bg = require('../../static/slides/slide3.jpeg')

interface IProps {
  show: boolean
  scroll: (offset: number) => void
  handleNavigate: (link: string) => void
}

export const TeslaSlide3: React.FC<IProps> = ({
  show,
  scroll,
  handleNavigate,
}) => {
  const { width } = useWindowSize()

  const lg = width >= 1200
  const md = width < 1200 && width >= 900
  const sm = width < 900 && width >= 600
  const mobile = width < 600

  const elements: [string, string, JSX.Element][] = [
    [
      `Vehicula Quam `,
      `Pellentesque a sapien a neque `,
      <svg width={lg ? 54 : 44} xmlSpace="preserve" viewBox="0 0  32 32">
        <g fill="#000">
          <path d="M17.5 31h-3a.5.5 0 0 1-.493-.418l-.475-2.848a11.89 11.89 0 0 1-2.431-.792l-2.06 2.027a.5.5 0 0 1-.645.048L5.97 27.254a.5.5 0 0 1-.153-.628l1.29-2.583a12.03 12.03 0 0 1-1.513-2.068l-2.846.428a.492.492 0 0 1-.55-.34l-.928-2.854a.5.5 0 0 1 .245-.598l2.563-1.333C4.025 16.811 4 16.397 4 16s.025-.81.079-1.278L1.516 13.39a.5.5 0 0 1-.245-.598l.927-2.854a.494.494 0 0 1 .55-.34l2.848.427c.158-.274.329-.544.509-.804a.5.5 0 0 1 .821.569 10.59 10.59 0 0 0-.623 1.019.496.496 0 0 1-.515.257l-2.77-.416-.665 2.048 2.496 1.297a.5.5 0 0 1 .265.511C5.036 15.078 5 15.553 5 16s.036.922.113 1.494a.5.5 0 0 1-.265.511l-2.496 1.298.666 2.048 2.77-.416a.497.497 0 0 1 .515.258c.468.87 1.062 1.684 1.767 2.417a.5.5 0 0 1 .087.57L6.9 26.694l1.742 1.266 2.005-1.974a.505.505 0 0 1 .569-.094c.904.439 1.859.75 2.84.925a.5.5 0 0 1 .405.41L14.924 30h2.152l.462-2.772a.5.5 0 0 1 .405-.41 10.895 10.895 0 0 0 2.842-.925.5.5 0 0 1 .568.094l2.005 1.973 1.741-1.266-1.255-2.514a.499.499 0 0 1 .087-.57 11.042 11.042 0 0 0 1.766-2.417c.1-.186.299-.29.515-.258l2.771.415.665-2.048-2.496-1.297a.5.5 0 0 1-.265-.511c.077-.572.113-1.047.113-1.494s-.036-.922-.113-1.494a.5.5 0 0 1 .265-.511l2.496-1.298-.666-2.048-2.77.416a.502.502 0 0 1-.515-.258A11.029 11.029 0 0 0 23.93 8.39a.5.5 0 0 1-.087-.57L25.1 5.306 23.357 4.04l-2.005 1.974a.5.5 0 0 1-.569.094 10.87 10.87 0 0 0-2.84-.925.5.5 0 0 1-.405-.41L17.076 2h-2.152l-.462 2.772a.5.5 0 0 1-.405.41c-.979.175-1.936.485-2.842.925a.5.5 0 0 1-.568-.094L8.642 4.041 6.9 5.307 8.155 7.82a.5.5 0 0 1-.894.448L5.816 5.375a.5.5 0 0 1 .154-.628l2.427-1.764a.5.5 0 0 1 .645.048l2.06 2.026a11.9 11.9 0 0 1 2.432-.792l.475-2.848A.497.497 0 0 1 14.5 1h3a.5.5 0 0 1 .493.418l.475 2.848c.833.175 1.648.44 2.431.792l2.06-2.027a.5.5 0 0 1 .645-.048l2.428 1.764a.5.5 0 0 1 .153.628l-1.29 2.583a12.03 12.03 0 0 1 1.513 2.068l2.846-.428a.494.494 0 0 1 .55.34l.928 2.854a.5.5 0 0 1-.245.598l-2.563 1.333c.051.466.076.88.076 1.277s-.025.81-.079 1.278l2.563 1.332a.5.5 0 0 1 .245.598l-.927 2.854a.49.49 0 0 1-.55.34l-2.847-.427a12.093 12.093 0 0 1-1.512 2.068l1.289 2.582a.501.501 0 0 1-.153.628l-2.427 1.764a.5.5 0 0 1-.645-.048l-2.06-2.026a11.9 11.9 0 0 1-2.432.792l-.475 2.848a.495.495 0 0 1-.49.417zM16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
          <path d="M16 24c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8a7.936 7.936 0 0 1-1.657 4.878.501.501 0 0 1-.793-.609A6.945 6.945 0 0 0 23 16c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7c.828 0 1.642-.145 2.42-.43a.5.5 0 0 1 .344.94A8.022 8.022 0 0 1 16 24z" />
          <circle cx={20.5} cy={22} r={0.5} />
        </g>
      </svg>,
    ],
    [
      `Mattis Dictum`,
      `Nulla dapibus lectus lectus`,
      <svg width={lg ? 54 : 44} xmlSpace="preserve" viewBox="0 0  64 64">
        <path d="M46 22h-6.671l5.557-6.352A4.498 4.498 0 0 0 46 12.685V12.5c0-2.481-2.019-4.5-4.5-4.5S37 10.019 37 12.5V14h2v-1.5c0-1.379 1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5v.185c0 .606-.22 1.19-.619 1.646L37 21.624V24h9v-2zM54 24h2v-3h2v-2h-2V8h-2.618L48 18.764V21h6v3zm-3.882-5L54 11.236V19h-3.882z" />
        <path d="M50.405 32.627C57.596 31.061 63 24.653 63 17c0-8.822-7.178-16-16-16-7.653 0-14.061 5.404-15.627 12.595A25.033 25.033 0 0 0 26 13C12.215 13 1 24.215 1 38s11.215 25 25 25 25-11.215 25-25c0-1.807-.207-3.608-.595-5.373zM47 3c7.72 0 14 6.28 14 14s-6.28 14-14 14-14-6.28-14-14S39.28 3 47 3zm-2.039 34H43v2h1.949a18.897 18.897 0 0 1-4.847 11.688l-1.375-1.375-1.414 1.414 1.375 1.375A18.892 18.892 0 0 1 27 56.949V55h-2v1.949a18.897 18.897 0 0 1-11.688-4.847l1.375-1.375-1.414-1.414-1.375 1.375A18.892 18.892 0 0 1 7.051 39H9v-2H7.051a18.897 18.897 0 0 1 4.847-11.688l1.375 1.375 1.414-1.414-1.375-1.375A18.892 18.892 0 0 1 25 19.051V21h2v-1.961c1.438.076 2.862.318 4.255.72 1.156 6.611 6.374 11.829 12.986 12.986.401 1.393.643 2.817.72 4.255zM26 61C13.317 61 3 50.683 3 38s10.317-23 23-23c1.706 0 3.407.201 5.072.577-.042.47-.072.943-.072 1.423 0 .209.023.413.031.621A20.896 20.896 0 0 0 26 17C14.421 17 5 26.421 5 38s9.421 21 21 21 21-9.421 21-21c0-1.695-.212-3.381-.621-5.031.208.008.412.031.621.031.48 0 .953-.03 1.423-.072.376 1.665.577 3.366.577 5.072 0 12.683-10.317 23-23 23z" />
        <path d="M29 38a2.996 2.996 0 0 0-2-2.816V23h-2v12.184A2.996 2.996 0 0 0 23 38c0 1.654 1.346 3 3 3a2.95 2.95 0 0 0 1.285-.301l7.008 7.008 1.414-1.414-7.008-7.008A2.95 2.95 0 0 0 29 38zm-4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM56 35c-1.654 0-3 1.346-3 3 0 1.251.771 2.324 1.862 2.773A28.973 28.973 0 0 1 46.71 58.3l1.428 1.4a30.975 30.975 0 0 0 8.725-18.842A2.993 2.993 0 0 0 59 38c0-1.654-1.346-3-3-3zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM6.283 16.733c4.658-4.321 10.651-6.978 16.949-7.579A3.005 3.005 0 0 0 26 11c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.993 2.993 0 0 0-2.858 2.137 31.053 31.053 0 0 0-18.218 8.13l1.359 1.466zM26 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>,
    ],
    [
      `Aene ac Massa`,
      `Iaculis at hendrerit ligula `,
      <svg width={lg ? 54 : 44} xmlSpace="preserve" viewBox="0 0  32 32">
        <path
          d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-29C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14S23.72 2 16 2z"
          fill="#263238"
        />
        <path
          d="M19.5 24a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h1.535L16 7.867 10.965 15H12.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V16h-2a.5.5 0 0 1-.409-.789l6-8.5c.188-.265.63-.265.817 0l6 8.5A.503.503 0 0 1 22 16h-2v7.5a.5.5 0 0 1-.5.5z"
          fill="#263238"
        />
        <circle cx={12.5} cy={23.5} fill="#263238" r={0.5} />
      </svg>,
    ],
    [
      `Deleniti Atque`,
      `Corrupti quos dolores et quas`,
      <svg width={lg ? 54 : 44} xmlSpace="preserve" viewBox="0 0  32 32">
        <g fill="#263238">
          <path d="M17.621 17a.5.5 0 0 1-.354-.853l9.697-9.696a.5.5 0 0 1 .707 0l1.234 1.234.978-5.569-5.569.978 1.234 1.234a.5.5 0 0 1 0 .707l-7.694 7.695a.5.5 0 0 1-.707-.707l7.341-7.342-1.561-1.561a.5.5 0 0 1 .267-.846l7.218-1.268a.502.502 0 0 1 .579.579l-1.268 7.218a.5.5 0 0 1-.846.267l-1.561-1.561-9.344 9.343a.484.484 0 0 1-.351.148zM30.5 31a.49.49 0 0 1-.086-.007l-7.218-1.268a.5.5 0 0 1-.267-.846l1.561-1.561-9.343-9.344a.5.5 0 0 1 .707-.707l9.696 9.697a.5.5 0 0 1 0 .707l-1.234 1.234 5.569.978-.978-5.569-1.234 1.234a.5.5 0 0 1-.707 0L19.3 17.886a.5.5 0 0 1 .707-.707l7.312 7.311 1.561-1.561a.5.5 0 0 1 .846.267l1.268 7.218A.5.5 0 0 1 30.5 31zM1.5 31a.5.5 0 0 1-.493-.586l1.268-7.218a.5.5 0 0 1 .846-.267l1.561 1.561 9.344-9.343a.5.5 0 0 1 .707.707L5.035 25.55a.5.5 0 0 1-.707 0l-1.234-1.234-.978 5.569 5.569-.978-1.235-1.235a.5.5 0 0 1 0-.707l7.694-7.695a.5.5 0 0 1 .707.707L7.51 27.319l1.561 1.561a.5.5 0 0 1-.267.846l-7.218 1.268A.61.61 0 0 1 1.5 31z" />
          <path d="M12.375 14.997a.502.502 0 0 1-.354-.146l-7.34-7.34-1.56 1.56a.5.5 0 0 1-.846-.267L1.007 1.586a.5.5 0 0 1 .579-.579l7.218 1.268a.5.5 0 0 1 .267.846l-1.56 1.561 9.343 9.344a.5.5 0 0 1-.707.707L6.45 5.035a.5.5 0 0 1 0-.707l1.234-1.234-5.568-.978.978 5.569L4.328 6.45a.5.5 0 0 1 .707 0l7.694 7.693a.5.5 0 0 1-.354.854z" />
        </g>
      </svg>,
    ],
    [
      `Libero Tempore`,
      `Aut officiis debitis aut rerum`,
      <svg
        width={lg ? 60 : 52}
        xmlSpace="preserve"
        viewBox="0 0 100.353 100.352"
      >
        <path d="m58.23 69.992 14.993-24.108c.049-.078.09-.16.122-.245a26.697 26.697 0 0 0 3.956-13.969c0-14.772-12.018-26.79-26.79-26.79S23.72 16.898 23.72 31.67c0 4.925 1.369 9.75 3.96 13.975.03.074.065.146.107.216l14.455 24.191c-11.221 1.586-18.6 6.2-18.6 11.797 0 6.935 11.785 12.366 26.829 12.366S77.3 88.783 77.3 81.849c.001-5.623-7.722-10.34-19.07-11.857zM30.373 44.294A23.708 23.708 0 0 1 26.72 31.67c0-13.118 10.672-23.79 23.791-23.79 13.118 0 23.79 10.672 23.79 23.79 0 4.457-1.263 8.822-3.652 12.624-.05.08-.091.163-.124.249L54.685 70.01c-.238.365-.285.448-.576.926l-4 6.432-19.602-32.804a1.508 1.508 0 0 0-.134-.27zm20.099 46.921c-14.043 0-23.829-4.937-23.829-9.366 0-4.02 7.37-7.808 17.283-8.981l4.87 8.151c.269.449.751.726 1.274.73h.013c.518 0 1-.268 1.274-.708l5.12-8.232C66.548 73.9 74.3 77.784 74.3 81.849c.001 4.43-9.785 9.366-23.828 9.366z" />
        <path d="M60.213 31.67c0-5.371-4.37-9.741-9.741-9.741s-9.741 4.37-9.741 9.741 4.37 9.741 9.741 9.741c5.371 0 9.741-4.37 9.741-9.741zm-16.482 0c0-3.717 3.024-6.741 6.741-6.741s6.741 3.024 6.741 6.741-3.023 6.741-6.741 6.741-6.741-3.024-6.741-6.741z" />
      </svg>,
    ],
  ]
  return (
    <div
      className={`w-f font-Gotham flex   ${
        width >= 900 ? `h-screen` : width >= 300 ? `h-[60vh]` : `h-[70vh]`
      } bg-bottom! flex-col items-center justify-center object-cover`}
    >
      {width >= 900 && (
        <div
          className={` h-[110vh] ${
            `` // !sm ? `h-[70vh]` : `0`
          } relative flex w-full items-end justify-center overflow-hidden bg-bottom pb-[2%]`}
        >
          {mobile ? (
            <div
              // initial={{ opacity: 0, y: '-4vh' }}
              // animate={{
              //   opacity: showNav ? 1 : 0,
              //   y: !sm ? (showNav ? `0vh` : '-4vh') : showNav ? `0vh` : '2vh',
              // }}
              className={`h-[40px]  ${mobile ? `w-[297px]` : `w-[204px]`}  ${
                `` //!show && sm && `translate-y-[-3vh] opacity-0`
              } transition duration-300 ease-linear`}
            >
              <a
                className={`ease flex h-full w-full flex-grow cursor-pointer items-center justify-center rounded-full border-[3px] border-[#171a20]
              bg-[#171a20] p-[4px_24px]  text-[#f4f4f4] transition  duration-200`}
              >
                <span className={`text-[12px] font-[500] uppercase `}>
                  order now
                </span>
              </a>
            </div>
          ) : (
            <img alt={``} src={bg} className={`object-cover object-top`} />
          )}
        </div>
      )}

      <div
        className={`${
          !sm ? `h-[25vh]` : `h-screen`
        } flex w-full items-center justify-center px-[40px]`}
      >
        <ul
          className={`flex ${
            width >= 900 && `w-full`
          } justify-evenly py-[60px] ${
            width >= 900 ? `gap-[20px]` : `flex-col gap-[20px]`
          }`}
        >
          {elements.map((el, i) => (
            <li key={i} className={` ${width >= 900 ? `flex-[20%]` : ``}`}>
              <motion.div
                initial={{ opacity: 0, x: `-20%` }}
                animate={
                  width >= 9
                    ? { opacity: show ? 1 : 0, x: show ? `0%` : `-20%` }
                    : { opacity: 1, x: 0 }
                }
                transition={{ delay: i * 0.2 }}
                className={`flex w-full   ${
                  width >= 900 ? `flex-col ` : `gap-[10px]`
                } items-center ${!show && `opacity-0`} transition  ease-linear`}
              >
                <div
                  className={`flex h-[60px] w-[60px] items-center justify-center rounded-md `}
                >
                  {el[2]}
                </div>
                <div
                  className={`font-Gotham flex w-full flex-col justify-center pt-[8px]`}
                >
                  <span
                    className={`w-full ${width >= 900 && `text-center`} ${
                      width >= 1200 ? `text-[18px]` : `text-[18px]`
                    }`}
                  >
                    {el[0]}
                  </span>
                  <span
                    className={`${width >= 900 && `text-center`} ${
                      width >= 1200 ? `text-[14px]` : `text-[12px]`
                    }`}
                  >
                    {el[1]}
                  </span>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
