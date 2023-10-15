import { useState } from "react";

function Hookz() {
    const [count,setCount] = useState(0);

    const incre = () => {
        if (count<10) {
            setCount(count+1)
        }
    }

    const decre = () => {
        if (count>-10) {
            setCount(count-1)
        }
    }

    return(
        <div>
            <h4>CC: {count}</h4>
            <button onClick={incre}>incre</button>
            <button onClick={decre}>decre</button>
        </div>
    )
}

export default Hookz;