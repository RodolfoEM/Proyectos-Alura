import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({updateStep}) => {

  const [email, setEmail] = useState({value: "", valid:true})
  const [password, setPassword] = useState({value: "", valid:true})


    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if(email.valid && password.valid){
            console.log("Siguiente formulario");
            updateStep(1);
          } else {
            console.log("No hacer nada")
          }
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={!email.valid}
          helperText={!email.valid && "Ingresa un correo electrónico válido"}
          value={email.value}
          onChange={ (input) => {
            const email = input.target.value
            const valido = validarEmail(email)
            setEmail({value: email, valid: valido})}
          }
          onBlur={(input) => {
            const email = input.target.value
            const valido = validarEmail(email)
            setEmail({value: email, valid: valido})}
          }
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error={!password.valid}
          helperText={!password.valid && "Ingresa una contraseña mayor a 8 caracteres"}
          value={password.value}
          onChange={ (input) => {
            const password = input.target.value
            setPassword({value: password, valid: validarPassword(password)})}
          }
          onBlur={ (input) => {
            const password = input.target.value
            setPassword({value: password, valid: validarPassword(password)})}
          }
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );

}

export default DatosUsuario;
