import { Component } from "react";

class Modal extends Component{
    render(){
        const Alert = (element) => {
            // alert("Leo Das")
            element.target.style.backgroundColor = 'skyblue'
        }
        
        const Alert2 = (element) => {
            document.body.style.backgroundColor = 'black'
            element.target.style.backgroundColor = 'red'
        }
        const cons = (e) => {
            console.log(e.target.value)
        }

        const cons2 = (e) => {
            console.log(e.target.value)
        }

        return(
            <>
            <button onMouseOver={Alert} onMouseLeave={Alert2}>LCU</button><br />
            <input onChange={cons} type="text" name="fname" placeholder="Enter First Name"></input><br/><br/>
            <input onChange={cons2} type="text" name="lname" placeholder="Enter Last Name"></input>
            </>
        )
    }
}

export default Modal;