import React from "react";

function Click() {
    const clikk = () => {
        alert('Freak OUT')
    }

    const handleClick = () => {
        alert("Harold")
    }

    const handleMouseDown = () => {
        alert('Mouse button down!');
      };
    
      const handleMouseEnter = () => {
        alert('Mouse entered!');
      };  
    const handleClick3 = (name) =>{
        alert(name)
    }
    const handleClick2 = (e) => {
        console.log(e.target.value)
    }
    return (
        <>
        <button onClick={clikk}>Clikk Here</button>
        <button onMouseOver={handleClick}>Click</button>
        <button onClick={() => handleClick3("Hai")}>Click on</button>
        <input type="text" name="fname" onChange={handleClick2}></input>
        <button onMouseDown={handleMouseDown}>MouseDown</button>
        <button onMouseEnter={handleMouseEnter}>Hover over me</button>

        </>
    )
}

export default Click;