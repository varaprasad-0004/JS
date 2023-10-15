import Blackhole from './bh.png'
import Modi from '../nm.png'

const Compo2 = () => {
    const czz = {
        width: '500px',
        borderRadius: '10%',
        height: '300px'
    }
    const cz = {
        width: '500px',
        borderRadius: '10%',
        height: '500px'
    }
    // const czzz = {
    //     width: '500px',
    //     borderRadius: '10%',
    //     height: '400px'
    // }
    return (
        <div>
            <img style={czz} src={Blackhole} alt="" />;
            <br></br>
            <img style={cz} src={Modi} alt='' />
            <br></br>
            <img style={{width:'500px',height:'500px',borderRadius:'10%'}} src='passion.png' alt='' />
        </div>
    )
}

export default Compo2;