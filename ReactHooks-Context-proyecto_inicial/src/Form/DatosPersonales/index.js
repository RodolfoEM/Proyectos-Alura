import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellidos, validarTelefono } from "./validaciones";

const DatosPersonales = ({updateStep}) => {

  const [name, setName] = useState({ value:"", valid: true});
  const [lastName, setLastName] = useState({ value:"", valid: true});
  const [phone, setPhone] = useState({ value:"", valid: true});


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
        updateStep(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarNombre(value)
          setName({value, valid})
        }}
        error={!name.valid}
        helperText={!name.valid && "Ingrese al menos 2 caracteres"}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarApellidos(value)
          setLastName({value, valid})
        }}
        error={!lastName.valid}
        helperText={!lastName.valid && "Ingrese al menos 2 caracteres"}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarTelefono(value)
          setPhone({value, valid})
        }}
        error={!phone.valid}
        helperText={!phone.valid && "Ingresa un número entre 8 y 14 caracteres"}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
