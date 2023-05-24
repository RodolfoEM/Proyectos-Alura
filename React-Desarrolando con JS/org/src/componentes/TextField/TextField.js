import { useState } from "react";
import "./TextField.css"

const TextField = (props) => { /* Aquí recibimos como parámetro las propiedades que enviemos desde el componente que nos manda a llamar. En este caso recibimos el nombre y los placeholders como un objeto */

    const[valor, actualizarValor] = useState("")
    const placeholderModificado = `${props.placeholder}...` /* Se pueden crear constantes y variables y estas utilizarlas dentro de nuestras etiquetas */

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className="text-field">
        <label>{props.titulo}</label> {/* Aquí utilizamos el valor del objeto que recibimos como parámetro, en este caso el título del input  */}
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        /> {/* Aquí utilizamos una constante que creamos arriba y que modifica el placeholder que se recibe como argumento*/}
    </div>
}

export default TextField