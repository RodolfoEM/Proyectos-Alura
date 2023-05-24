import "./employee.css"

const Employee = (props) => {
    const {nombre,puesto,foto,equipo} = props.datos;
    const {colorPrimario } = props;
    return <div className="employee-div">
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