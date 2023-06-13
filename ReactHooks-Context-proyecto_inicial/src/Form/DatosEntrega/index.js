import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validación";

const DatosEntrega = ({updateStep}) => {

  const [address, setAddress] = useState({value: "", valid: true})
  const [city, setCity] = useState({value: "", valid: true})
  const [province, setProvince] = useState({value: "", valid: true})


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
        updateStep(3);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address.values}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setAddress({value, valid})
          console.log(value, valid)
        }}
        error={!address.valid}
        helperText={!address.valid && "Ingrese al menos 4 caracteres"}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setCity({value, valid})
        }}
        error={!city.valid}
        helperText={!city.valid && "Ingrese al menos 4 caracteres"}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={province.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setProvince({value, valid})
        }}
        error={!province.valid}
        helperText={!province.valid && "Ingrese al menos 4 caracteres"}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
