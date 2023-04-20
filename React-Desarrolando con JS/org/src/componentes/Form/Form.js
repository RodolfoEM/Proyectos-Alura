import "./Form.css"
import TextField from "../TextField/TextField.js"
const Form = () => {
    return  <section className="form" >
                <form>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <TextField titulo="Nombre" placeholder="Ingresar nombre"/>
                    <TextField titulo="Puesto" placeholder="Ingresar puesto"/>
                    <TextField titulo="Foto" placeholder="Ingresar enlace de foto"/>
                </form>
            </section>
}

export default Form