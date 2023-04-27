import "./Form.css"
import TextField from "../TextField/TextField.js"
import OptionsList from "../OptionsList/OptionsList.js"
import Button from "../Button/Button.js"

const Form = () => {

    const handleShipping = (evento) => {
        evento.preventDefault();
        console.log("Manejar envío", evento);
    }

    return  <section className="form" >
                <form onSubmit={handleShipping}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <TextField titulo="Nombre" placeholder="Ingresar nombre" required/>
                    <TextField titulo="Puesto" placeholder="Ingresar puesto" required/>
                    <TextField titulo="Foto" placeholder="Ingresar enlace de foto" required/>
                    <OptionsList/>
                    <Button texto="Crear" />
                </form>
            </section>
}

export default Form