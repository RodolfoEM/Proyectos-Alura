import "./Team.css"
const Team = (props) => {
    //DEstructuración
    const { colorPrimario, colorSecundario, titulo } = props.datos; // Esto equibale a crear una constante como: const colorPrimario = props.datos.colorPrimario
    const obj = {
        backgroundColor: colorSecundario
    }
    const titleStyle = {
        borderColor: colorPrimario
    }

    return <section className="team" style={obj} >
        <h3 style={titleStyle} >{titulo}</h3>
        <div className="colaboradores"></div>
    </section>
}

export default Team