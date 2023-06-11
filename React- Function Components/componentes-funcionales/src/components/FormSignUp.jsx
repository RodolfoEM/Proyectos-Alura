import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

function FormSignUp() {
    return(
    <form>
        <TextField
            id="name"
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            />
        <TextField
            id="lastName"
            label="Apellids"
            variant="outlined"
            fullWidth
            margin="normal"
            />
        <TextField
            id="email"
            label="Email"
            ariant="outlined"
            fullWidth
            margin="normal"
            />
        <label>Promociones</label>
        <input type="checkbox"/>
        <Button variant="contained" >Registrarse</Button>
    </form>
    )
}

export default FormSignUp;