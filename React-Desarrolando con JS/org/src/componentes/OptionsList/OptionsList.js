import "./OptionsList.css"
const OptionsList = (props) => {

    // Método map -> arreglo.map((element, index) => {
    //  return <option></option>
    // })

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value);
    }

    return <div className="options-list">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option valor="" disable defaultValue="" hidden>Seleccionar Equipo</option>
            {props.teams.map((team,index) =>  //Aquí lo que hacemos es iterar entre cada uno de los elementos del array que creamos. Se usa map en lugar de foreach porque map nos permite hacer uso de cada uno de los elementos del array y los devuelve
                <option key={index} value={team}>{team}</option> // La propiedad ky la utiliza react y sirve para asignar un folio único a cada uno de los elementos creados
            // En los arrow functions, cuando solo se requiere retornar una línea de código, se puede omitir la palabra "return" y las llaves entre las que vá lo que se quiere retornar, como en el ejemplo de ariiba
            )}
        </select>
    </div>
}

export default OptionsList