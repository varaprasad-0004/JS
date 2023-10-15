// import React, { useState } from "react";

// function Lytof() {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div>
//       <img
//         src={isOn ? "on.jpg" : "off.jpg"}
//         alt=""
//         style={{ width: "300px", height: "300px" }}
//         onMouseEnter={() => setIsOn(true)} // Turn "On" on hover
//         onMouseLeave={() => setIsOn(false)} // Turn "Off" on hover out
//       />
//     </div>
//   );
// }

// export default Lytof;

import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";

function Lytof() {

  const [hoverr,setHoverr] = useState('off.jpg')

  return(
    <div>
      <img src={hoverr} onMouseOver={() => setHoverr('on.jpg')} onMouseLeave={() => setHoverr('off.jpg')}></img>
    </div>
  )
}

export default Lytof;