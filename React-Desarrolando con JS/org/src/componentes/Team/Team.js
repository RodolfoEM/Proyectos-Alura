import "./Team.css"
import Employee from "../employee/employee";
import hexToRgba from "hex-to-rgba"

const Team = (props) => {
    //Destructuración
    const { colorPrimario, colorSecundario, titulo, } = props.datos; // Esto equibale a crear una constante como: const colorPrimario = props.datos.colorPrimario
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
    const titleStyle = {
        borderColor: colorPrimario
    }

    return <section className="team" style={obj} >
        <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(event)=> {
                actualizarColor(event.target.value, titulo)
            }}
        />
        <h3 style={titleStyle} >{titulo}</h3>
        <div className="employee">
            {
                colaboradores.map((colaborador,index)=> <Employee
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                    eliminarColaborador= {eliminarColaborador}
                    like={like}
                />)
            }
        </div>
    </section>
}

export default Team