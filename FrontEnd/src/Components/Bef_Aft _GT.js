import { useState } from "react";

function Gt() {
    const [old,setOld] = useState(false)

    return (
        <center><div>
            <img src={old ? 'new.jpg' : 'old.jpg'} alt="" style={{height:'500px',width:'500px'}} onMouseEnter={() => setOld(true)} onMouseLeave={() => setOld(false)} />
        </div></center>
    )
}
export default Gt;