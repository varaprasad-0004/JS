import { useState } from "react";

function Fashion() {

    const [ori,setOri] = useState('1.png')
    
    return (
        <div>
        <img alt="" style={{height:'380px', width:'80%'}} src={ori}/>
        <button onClick={() => setOri('1.png')}>Black</button>
        <button onClick={() => setOri('2.png')}>Blue</button>
        <button onClick={() => setOri('3.png')}>White</button>
        <button onClick={() => setOri('4.png')}>Red</button>
        <button onClick={() => setOri('5.png')}>Green</button>
        </div>
    )
}

export default Fashion;