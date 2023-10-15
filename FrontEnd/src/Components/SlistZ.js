import { Component } from "react"
import './zcs.css'

const sl = [
    {
        name:'Das',
        movie:'Leo'
    },
    {
        name:'Surya',
        movie:'Vikram'
    },
    {
        name:'Karthi',
        movie:'Khadhi'
    }
]

class Slistz extends Component {
    render() {
        return (
            <div>
                {sl.map((item,index) => (
                        <b><p>{index+1}. {item.name}, {item.movie}</p></b>
                ))}
                <table border={'1px'} style={{width:'300px',borderCollapse:'collapse'}}>
                    <thead>
                        <tr>
                            <th style={{textAlign:'center',backgroundColor:'lightgray'}}>Sl.no</th>
                            <th style={{textAlign:'center',backgroundColor:'lightgray'}}>Name</th>
                            <th style={{textAlign:'center',backgroundColor:'lightgray'}}>Movie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sl.map((item,index) => (
                            <tr>
                                <td className="dev">{index+1}.</td>
                                <td style={{textAlign:'center'}}>{item.name}</td>
                                <td style={{textAlign:'center'}}>{item.movie}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ul>
                    {sl.map((item,index)=>(
                        <li>
                            <b>Name:</b> {item.name} <br/><b>Movie:</b> {item.movie}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Slistz;