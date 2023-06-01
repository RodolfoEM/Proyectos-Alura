import "./employee.css"
import { AiFillCloseCircle } from "react-icons/ai"

const Employee = (props) => {
    const {nombre,puesto,foto,equipo, id} = props.datos;
    const {colorPrimario, eliminarColaborador } = props;
    return <div className="employee-div">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="header" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Employee