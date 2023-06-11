import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";

function FormSignUp({handleSubmit}) {
    const [name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "Deben ser almenos 3 caracteres"
        }
    })

    const validarNombre = (nombre) => {
        if(nombre.length >= 3) {
            return {name: { error: false, message: ""}}
        } else{
            return {name: { error: true, message: "Deben ser almenos 3 caracteres"}}
        }
    }

    return(
    <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit({
            name,
            lastName,
            email,
            prom,
            nov
        })
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
            error={errors.name.error}
            helperText={errors.name.error ? errors.name.message : ""}
            onBlur={(e) => {
                setErrors(validarNombre(e.target.value))
            }}
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
            onBlur={(e) => {
                setErrors(validarNombre(e.target.value))
            }}
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