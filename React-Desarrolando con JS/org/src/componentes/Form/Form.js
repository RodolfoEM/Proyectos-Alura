import { useState } from "react"
import "./Form.css"
import Field from "../Field/Field.js"
import OptionsList from "../OptionsList/OptionsList.js"
import Button from "../Button/Button.js"


const Form = (props) => {

    //Estos son los diferentes estados:
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor ] = useState("");

    //Destructuración de datos
    const {registrarColaborador, crearEquipo} = props

    const handleShipping = (evento) => {
        evento.preventDefault();
        // console.log("Manejar envío", evento);
        let datosAEnviar = {
            nombre:nombre,
            puesto: puesto,
            foto: foto,
            equipo:equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario:color});
    }

    return  <section className="form" >
                <form onSubmit={handleShipping}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <Field
                        titulo="Nombre"
                        placeholder="Ingresar nombre"
                        required
                        valor={nombre}
                        actualizarValor={actualizarNombre} />
                    <Field
                        titulo="Puesto"
                        placeholder="Ingresar puesto"
                        required
                        valor={puesto}
                        actualizarValor={actualizarPuesto} />
                    <Field
                        titulo="Foto"
                        placeholder="Ingresar enlace de foto"
                        required
                        valor={foto}
                        actualizarValor={actualizarFoto} />
                    <OptionsList
                        valor={equipo}
                        actualizarEquipo={actualizarEquipo}
                        teams={props.teams} />
                    <Button texto="Crear" />
                </form>
                <form onSubmit={manejarNuevoEquipo}>
                    <h2>Rellena el formulario para crear el equipo.</h2>
                    <Field
                        titulo="Título"
                        placeholder="Ingresar titulo"
                        required
                        valor={titulo}
                        actualizarValor={actualizarTitulo} />
                    <Field
                        titulo="Color"
                        placeholder="Ingresar el color en Hex"
                        required
                        valor={color}
                        actualizarValor={actualizarColor}
                        type="color" />
                    <Button texto="Registrar Equipo" />
                    </form>
            </section>
}

export default Form