import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({});

  useEffect(async() => {
    try {
      const data = await fetch
    } catch (e){
      console.log(e);
    }
  }, [step])

  //step = 0 => <DatosUsuario/>
  //step = 1 => <DatosPersonales />
  //step = 2 => <DatosEntrega />
  //step = 3 => <complete />

  const updateStep = (step)  => {
    setStep(step)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let newStep = step + 1
    setStep(newStep)
  }

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value
    const valid = validator(value)


  }

  const stepFlow = {
    0: {
      inputs:[
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: true,
          onChange:handleChange,
          helperText: "Ingrese un correo electrónico válido.",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: true,
          onChange:handleChange,
          helperText: "Ingresa una contraseña mayor a 8 caracteres.",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onsubmit
    }
  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales  updateStep={updateStep} />,
    2: <DatosEntrega  updateStep={updateStep} />,
    3: <Complete />
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/* {steps[step]} */}
        <Step data={stepFlow[step]} step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
