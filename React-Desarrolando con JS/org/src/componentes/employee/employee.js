import "./employee.css"
import { AiFillCloseCircle, AiOutlineHeart,  AiFillHeart} from "react-icons/ai"

const Employee = (props) => {
    const {nombre,puesto,foto,equipo, id, fav} = props.datos;
    const {colorPrimario, eliminarColaborador, like } = props;
    return <div className="employee-div">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="header" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {   // Usando operador ternario: condicion ? verdadero : falso
                fav ? <AiFillHeart color="Red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />
            }
        </div>
    </div>
}

export default Employee