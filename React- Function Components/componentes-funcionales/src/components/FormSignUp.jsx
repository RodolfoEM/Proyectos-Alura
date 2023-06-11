import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";

function FormSignUp() {

    const [name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)


    return(
    <form onSubmit={(e) => {
        e.preventDefault()
        console.log({name,lastName,email,prom,nov})
        }}>
        <TextField
            id="name"
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            // COn el siguiente onChange obtenemos la información ingresada por el usuario
            onChange={(e) => {
                setName(e.target.value)
            }}
            value={name}
            />
        <TextField
            id="lastName"
            label="Apellids"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => {
                setlastName(e.target.value)
            }}
            value={lastName}
            />
        <TextField
            id="email"
            label="Email"
            ariant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            value={email}
            />
        <FormGroup>
            <FormControlLabel
                control={
                    <Switch checked={prom} onChange={(e) => {
                        setProm(e.target.checked)}
                        }/>
                        }
                label="Promociones" />
            <FormControlLabel
                control={
                    <Switch  checked={nov} onChange={(e) => {
                        setNov(e.target.checked)}
                        }/>
                        }
                label="Novedades" />
        </FormGroup>
        <Button variant="contained" type="submite" >Registrarse</Button>
    </form>
    )
}

export default FormSignUp;