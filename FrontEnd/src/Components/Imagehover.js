import React from 'react'

export default function Imagehover() {
    const zoom = (element) => {
        element.target.style.transform = 'scale(1.5)'
        document.body.style.backgroundColor = 'skyblue'
    }

    const zout = (element) => {
        element.target.style.transform = 'scale(0.5)'
        document.body.style.backgroundColor = 'black'
    }
  return (
    <div>
        <center><img style={{height:'200px', width:'200px', marginTop:'50px'}} onMouseOver={zoom} src='passion.png' onMouseOut={zout} alt=''></img></center>
    </div>
  )
}