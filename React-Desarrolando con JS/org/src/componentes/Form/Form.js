import { useState } from "react"
import "./Form.css"
import TextField from "../TextField/TextField.js"
import OptionsList from "../OptionsList/OptionsList.js"
import Button from "../Button/Button.js"

const Form = () => {

    //Estos son los diferentes estados:
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const handleShipping = (evento) => {
        evento.preventDefault();
        console.log("Manejar envío", evento);
        let datosAEnviar = {
            nombre:nombre,
            puesto: puesto,
            foto: foto
        }
        console.log(datosAEnviar);
    }

    return  <section className="form" >
                <form onSubmit={handleShipping}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <TextField
                        titulo="Nombre"
                        placeholder="Ingresar nombre"
                        required
                        valor={nombre}
                        actualizarValor={actualizarNombre} />
                    <TextField
                        titulo="Puesto"
                        placeholder="Ingresar puesto"
                        required
                        valor={puesto}
                        actualizarValor={actualizarPuesto} />
                    <TextField
                        titulo="Foto"
                        placeholder="Ingresar enlace de foto"
                        required
                        valor={foto}
                        actualizarValor={actualizarFoto} />
                    <OptionsList valor={equipo} actualizarEquipo={actualizarEquipo} />
                    <Button texto="Crear" />
                </form>
            </section>
}

export default Form