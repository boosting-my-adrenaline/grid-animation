import React from 'react'
import useDarkMode from '../../utils/hooks/useDarkMode'

const h0 = require('../../static/hotels/h0.jpg')
const h1 = require('../../static/hotels/h1.jpg')
const h2 = require('../../static/hotels/h2.jpg')
const h3 = require('../../static/hotels/h3.jpg')
const h4 = require('../../static/hotels/h4.jpg')
const h5 = require('../../static/hotels/h5.jpg')
const h6 = require('../../static/hotels/h6.jpg')

interface IProps {
  sm: boolean
  option: number
}

export const LandingCardRectSmall: React.FC<IProps> = ({ sm, option }) => {
  const { isDarkMode } = useDarkMode()

  const images = [h0, h1, h2, h3, h4, h5, h6]

  const awe = `
  Nulla ut , ac . nunc, non  a. Lorem ipsum dolor sit amet,  elit. . , , , at ., sapien et , neque mauris venenatis turpis, sit amet  urna ut ante. urna orci, a  maximus id. , . ,lacinia,dolor, sit  .

., imperdiet ligula et, efficitur odio. Pellentesque nisl urna, placerat id felis eu, volutpat mattis ante. Quisque dui magna, ullamcorper non placerat nec, consequat a ante. Aliquam ac diam ut sapien euismod pharetra. Nunc bibendum ligula eu efficitur condimentum. Maecenas ut elit urna.

Donec auctor finibus quam eget tincidunt.  urna at lorem feugiat viverra ut vel tellus. , non molestie ligula. Suspendisse eu tellus nibh. Vivamus nec tempus lectus, in porta elit. Cras vulputate porta risus, nec volutpat eros ornare quis. Suspendisse porta auctor dictum. Integer mattis, nibh sit amet viverra tempus, dolor libero sodales quam, at auctor leo sem eget ante. Phasellus tempus lobortis magna, sit amet ultrices erat auctor at. Nunc malesuada, nisl id rhoncus feugiat, urna orci lobortis turpis, sit amet dapibus nisi dolor quis leo. Sed in gravida velit, eu volutpat arcu.

Fusce condimentum a mauris eget imperdiet. Ut gravida quam iaculis elit pellentesque varius. Integer non metus at libero mattis fermentum nec a orci. Morbi et eros ac urna aliquet efficitur nec eget diam. Vestibulum auctor enim eu metus venenatis, vitae maximus tortor condimentum. Curabitur at ex ligula. Mauris bibendum hendrerit diam ut dapibus. Curabitur et tempor tortor. Phasellus ullamcorper malesuada augue eget suscipit. Vivamus sollicitudin tempor rutrum. Vestibulum tempor ipsum et euismod varius. Integer rutrum aliquet tortor, non rutrum augue porta non. Phasellus quis mollis quam. Pellentesque scelerisque tellus at sodales lobortis. Nullam neque sem, volutpat id egestas interdum, gravida in tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Aenean id sagittis lorem. Nulla volutpat est eget aliquet cursus. Cras nec lorem blandit, venenatis urna sed, porta lacus. Duis feugiat ligula ligula, ac consectetur neque finibus vitae. Duis ac nibh sapien. Ut nec semper metus. Nullam tristique leo sed massa egestas dapibus. Nam ornare dolor turpis. Aenean bibendum ornare urna id mattis. Quisque convallis eros purus, sit amet iaculis massa porttitor nec. Cras rhoncus et sem ac vulputate.

Phasellus pharetra vestibulum mi sed finibus. Sed ultricies, est ut sollicitudin placerat, magna ligula tincidunt lectus, sed semper elit risus ac arcu. Donec rutrum mauris in nunc fermentum laoreet. Sed in fringilla nunc. Nulla imperdiet volutpat libero eget auctor. Aenean sed sapien felis. Duis tempor eros porttitor sagittis lacinia. Nulla tempor varius porta. Pellentesque non molestie tellus, eu feugiat diam. Mauris non mauris venenatis, luctus odio et, consequat neque. Aliquam massa dolor, congue ut odio ac, vulputate consequat eros. Duis a ipsum risus.

Donec pharetra, dui in pretium convallis, elit velit accumsan ex, nec blandit leo orci eu tellus. Suspendisse sed cursus metus. Nunc ut nisi cursus, lacinia dui eu, sagittis lectus. Sed venenatis vehicula elit at imperdiet. Aenean quis velit quis ipsum ornare pretium ac eu urna. Aenean tellus neque, viverra et quam ut, ornare ornare diam. Ut interdum et magna in sodales. Sed quis ligula nisi. Aenean diam ipsum, consectetur et sapien vel, porttitor pretium libero. Phasellus vel ullamcorper dolor. Curabitur vel libero porttitor, finibus lorem quis, rhoncus dui. In hac habitasse platea dictumst. Proin tincidunt nunc dignissim, eleifend quam nec, elementum sapien. Integer sed interdum neque.

Vivamus eget pellentesque sapien. Donec id tristique elit, sed interdum sem. Curabitur metus dui, condimentum non euismod non, placerat id lorem. Quisque facilisis semper laoreet. Suspendisse nunc mi, interdum eu justo dignissim, bibendum dignissim justo. Vestibulum eget tempor urna. Nullam dignissim ac nibh a dapibus. Donec finibus faucibus augue in venenatis. Suspendisse potenti. Proin in libero eleifend, sagittis tellus a, maximus dolor. Quisque suscipit non sem non efficitur. Vestibulum nec eros gravida, pretium risus id, dictum quam.

Ut semper viverra cursus. Sed elementum ultricies faucibus. Suspendisse iaculis mattis dolor, eget euismod tortor luctus vel. Curabitur consectetur accumsan felis, eget maximus metus hendrerit a. Vivamus at dui risus. Vivamus ornare diam elit, a blandit odio imperdiet et. Maecenas faucibus, quam sit amet tempor efficitur, sapien nisl sagittis est, et accumsan erat mauris vitae ipsum. In nec maximus sem. .

Nulla vel dui eget libero iaculis egestas. , ac congue ligula tempus sed. In tempus purus eget neque fringilla, eu tempor sem interdum. Aenean sodales ultricies suscipit. Integer gravida, nunc eu pharetra aliquet, lectus nunc convallis sem, a feugiat diam ipsum in odio. Suspendisse potenti. Integer tempus nibh at nisl finibus faucibus. Ut in auctor justo. Vivamus laoreet justo metus, eget mollis ante dapibus ut. Suspendisse sem tortor, commodo in faucibus nec, interdum vel justo. Phasellus in vestibulum mi. Donec a ex libero. Curabitur sagittis accumsan laoreet. Suspendisse feugiat sodales nulla, sit amet pharetra tortor dictum et. Cras vitae malesuada mi, ac dignissim arcu.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam magna elit, commodo et tristique non, faucibus vitae mauris. Vestibulum mollis rutrum nunc et dictum. Donec consectetur eleifend nunc ut dictum. Nullam sit amet urna libero. Nulla varius tellus eget ante porttitor ullamcorper. Pellentesque at nibh ac felis egestas gravida.

Nam porttitor placerat ipsum ut maximus. Donec et justo lacus. Donec sit amet ligula lacus. Aliquam posuere ultrices orci at scelerisque. Vestibulum vitae nibh nunc. Vestibulum sagittis purus sit amet metus mollis cursus. Pellentesque nisi enim, euismod eu velit non, eleifend vehicula nibh.

. Nam tristique cursus diam, eu tristique nunc elementum id. Quisque commodo, metus eu efficitur dictum, nisl turpis tempus purus, in scelerisque ipsum lectus sed augue. Aenean consectetur erat ut purus faucibus, vitae rhoncus justo aliquet. Etiam ut risus vel sem eleifend laoreet quis vitae quam. Integer quis augue ut nulla bibendum posuere. Quisque diam ex, dapibus sed ullamcorper condimentum, accumsan non nibh.

Aliquam erat volutpat. Maecenas fermentum, tortor ac iaculis aliquet, sem est molestie lorem, non bibendum urna justo ac sem. In suscipit mauris dignissim viverra blandit. Fusce augue libero, lobortis id aliquam sed, congue vitae augue. Donec ullamcorper augue faucibus diam posuere, ac hendrerit nisl consequat. Fusce convallis consectetur auctor.

In hac habitasse platea dictumst. Vestibulum cursus faucibus rhoncus. Vestibulum interdum mauris at magna dignissim, in sollicitudin enim ornare. Sed sed nisi bibendum, dictum augue ut, dapibus diam. Sed ornare tellus eu mattis molestie. Nulla facilisi. Nunc tristique felis ac tempus hendrerit. Mauris consequat libero vel ipsum viverra lobortis. Sed sapien nunc, venenatis quis orci at, suscipit gravida dolor. Fusce hendrerit, erat sit amet hendrerit lobortis, erat ligula venenatis neque, ac congue sapien mauris quis metus. Donec eget tellus mollis, ullamcorper erat ut, scelerisque diam. Maecenas faucibus gravida ex, vitae volutpat mi accumsan quis. Morbi rutrum, lacus in efficitur consequat, lacus mi maximus ex, non varius ex nulla ac diam. Morbi vel finibus dui. 

Mauris in metus nisl. Donec molestie urna augue, sed faucibus magna tincidunt vitae.  . Donec nisl mi, varius id consectetur a, placerat eget ipsum. Ut erat tortor, condimentum eu dapibus vitae, mollis vitae tellus. Phasellus eget risus  tristique feugiat vel sed enim. Vivamus sed diam pharetra, ornare ante sed, convallis magna. , nibh arcu consequat nulla, ut sollicitudin libero orci eget velit.

Donec . Donec eget nibh a sem  at felis. In id ornare purus. , rutrum ornare dui.  odio, id . Ut gravida, mauris nec porttitor fringilla, tellus ex pharetra dolor, nec . Curabitur viverra mauris orci, a  venenatis nec. Pellentesque .  Sed accumsan finibus ante, ac eleifend arcu. Integer  mi quis fermentum. Nulla facilisi. 

, bibendum molestie finibus ac, tincidunt ut dui.. Curabitur quis maximus neque. ,  nisl efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras facilisis arcu lorem,  neque posuere ac. Pellentesque ac commodo quam. Nulla interdum sit amet turpis at vehicula. Maecenas vitae maximus elit. Praesent interdum pulvinar nisl ac venenatis. 

 Donec erat quam, ,  nec eros.  in mattis. Donec ,  ut, cursus vel nisl. Mauris a , . , id  metus. Nunc id magna at est auctor  quis vel ex. euismod. Quisque tincidunt volutpat sapien.  , aliquet turpis. . Phasellus vel sodales erat.

Pellentesque  egestas. Proin .  est .    malesuada fames ac turpis . Ut nec ipsum nec  . Duis lacinia maximus laoreet. Sed tempor lacus nisl, a tempus risus .  lorem. Morbi nec . Etiam ut  felis. , , imperdiet  massa. Donec ullamcorper vehicula congue. S.`

  const titles = [
    `Curabitur quis`,
    `pulvinar magna`,
    `tempus dignissim`,
    `consequat turpis`,
    `sodales tortor `,
    `pellentesque ut`,
    `sed mattis`,
  ]

  return (
    <div className={`full h-full cursor-pointer select-none`}>
      <div className={`relative w-full overflow-hidden rounded-[6px] bg-black`}>
        <img
          src={images[option]}
          className={`aspect-[1.78]
          rounded-[6px]  object-cover
          transition-all duration-200 ease-in hover:scale-[1.02] hover:opacity-70`}
        />
      </div>
      <div className={`font-UI `}>
        <div>
          <span
            className={` text-[12px] font-[400]
          ${isDarkMode ? `text-white/[.92]` : `capitalize text-black/[.86]`}
          `}
          >
            {titles[option]}
          </span>
        </div>
      </div>
    </div>
  )
}
