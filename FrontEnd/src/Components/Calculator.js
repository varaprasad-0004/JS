import { useState } from "react";

function Calculator() {

    let [output,setOutput] = useState('');

    const getNum = (num) => {
        if (num==='='){
            setOutput(eval(output))
        }else if (num==='c'){
            setOutput('')
        }else{
            setOutput((prevState)=> prevState+num)
        }
    }

    
    return(
        <div>
            <h1>Calculator</h1>
            <table border="1" align="center" width={300}>
                <td colSpan="4" style={{"textAlign":"right"}}>{output}</td>
            
            <tr>
                <td onClick={() =>getNum('7')}>7</td>
                <td onClick={() =>getNum('8')}>8</td>
                <td onClick={() =>getNum('9')}>9</td>
                <td onClick={() =>getNum('+')}>+</td>
            </tr>
            <tr>
                <td onClick={() =>getNum('4')}>4</td>
                <td onClick={() =>getNum('5')}>5</td>
                <td onClick={() =>getNum('6')}>6</td>
                <td onClick={() =>getNum('-')}>-</td>
            </tr>
            <tr>
                <td onClick={() =>getNum('3')}>3</td>
                <td onClick={() =>getNum('2')}>2</td>
                <td onClick={() =>getNum('1')}>1</td>
                <td onClick={() =>getNum('*')}>*</td>
            </tr>
            <tr>
                <td onClick={() =>getNum('0')}>0</td>
                <td onClick={()=>getNum('c')}>C</td>
                <td onClick={()=>getNum('=')}>=</td>
                <td onClick={() =>getNum('/')}>/</td>
            </tr>
            </table>
        </div>
    )
}

export default Calculator;