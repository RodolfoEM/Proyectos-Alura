import { useState } from "react";
import "./Field.css"

const Field = (props) => { /* Aquí recibimos como parámetro las propiedades que enviemos desde el componente que nos manda a llamar. En este caso recibimos el nombre y los placeholders como un objeto */

    //Destructuración
    const{ type = "text" } = props

    const[valor, actualizarValor] = useState("")
    const placeholderModificado = `${props.placeholder}...` /* Se pueden crear constantes y variables y estas utilizarlas dentro de nuestras etiquetas */

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className={`field field-${type}`} >
        <label>{props.titulo}</label> {/* Aquí utilizamos el valor del objeto que recibimos como parámetro, en este caso el título del input  */}
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        /> {/* Aquí utilizamos una constante que creamos arriba y que modifica el placeholder que se recibe como argumento*/}
    </div>
}

export default Field