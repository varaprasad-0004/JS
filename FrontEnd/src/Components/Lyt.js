// import React from "react";
// import { useState } from "react";

// function Lyt() {
//     const [isOn, setIsOn] = useState(false);
  
//     const handleOn = () => {
//       setIsOn(true);
//     };
  
//     const handleOff = () => {
//       setIsOn(false);
//     };
  
//     return (
//       <div>
//         <button style={{marginLeft:'90px', height:'30px', borderRadius:'25px', width:'100px', backgroundColor:'black',color:'white'}} onClick={handleOn}>On</button>
//         <button style={{height:'30px', borderRadius:'25px', width:'100px', backgroundColor:'black',color:'white',marginLeft:'10px'}} onClick={handleOff}>Off</button><br/>
//         <br />
//         <img
//           src={isOn ? "on.jpg" : "off.jpg"}
//           alt=""
//           style={{ width: "400px", height: "400px", borderRadius:'30%' }}
//           onClick={() => setIsOn(!isOn)}
//         />
//       </div>
//     );
//   }
  
// export default Lyt;

import { useState } from "react";

function Lyt() {
  
  const [off,setOff] = useState('off.jpg')

  return(
    <div>
    <button onClick={() => setOff('off.jpg')}>Off</button>
    <button onClick={() => setOff('on.jpg')}>On</button><br/>
    <img src={off}></img>
    </div>
  )
}

export default Lyt;