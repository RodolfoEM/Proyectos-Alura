import "./Team.css"
import Employee from "../employee/employee";

const Team = (props) => {
    //Destructuración
    const { colorPrimario, colorSecundario, titulo, } = props.datos; // Esto equibale a crear una constante como: const colorPrimario = props.datos.colorPrimario
    const obj = {
        backgroundColor: colorSecundario
    }
    const {colaboradores} = props
    const titleStyle = {
        borderColor: colorPrimario
    }

    return <section className="team" style={obj} >
        <h3 style={titleStyle} >{titulo}</h3>
        <div className="employee">
            {
                colaboradores.map((colaborador,index)=> <Employee
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                />)
            }
        </div>
    </section>
}

export default Team