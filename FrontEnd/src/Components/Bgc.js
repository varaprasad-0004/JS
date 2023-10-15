import React, { useState } from "react";

function BackgroundColorChanger() {
  const backgroundColor = useState("white");

  const handleColorChange = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.documentElement.style.backgroundColor = randomColor;
  };

  return (
    <div style={{ backgroundColor }}>
      <button onClick={handleColorChange}>Change Background Color</button>
    </div>
  );
}

export default BackgroundColorChanger;

// import React from "react";
// import { useState } from "react";

// function BackgroundColorChanger() {
  
//   const clz = ['black', 'blue', 'green', 'pink', 'red']

//   const [clr, setClr] = useState('white')

//   const getrandomcolour = () => {
//     const randomi = Math.floor(Math.random()*clz.length);
//     return clz[randomi];
//   }

//   return(
//     <center><div>
//       <button style={{width:'100px', height:'50px', backgroundColor:'black', color:'white', border:'2px solid black', marginTop:'10px', borderRadius:'25px'}} onClick={() => setClr(getrandomcolour())}>BGC</button>
//       <div style={{width:'500px', height:'500px', backgroundColor:clr, border:'2px solid black', marginTop:'30px', borderRadius:'25px'}}></div>
//     </div></center>
//   )
// }

// export default BackgroundColorChanger;