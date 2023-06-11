import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

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
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Promociones" />
            <FormControlLabel control={<Switch defaultChecked />} label="Novedades" />
        </FormGroup>
        <Button variant="contained" >Registrarse</Button>
    </form>
    )
}

export default FormSignUp;