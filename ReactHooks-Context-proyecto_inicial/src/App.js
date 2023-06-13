import { MainSpace, ImageSpace, FormSpace } from "./styles";
import Form from "./Form";
import { Button } from "@mui/material";
import { CounterContext } from "./Context";
import { useContext } from "react";

function App() {
  const counterData = useContext(CounterContext)
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <Button onClick={() => counterData.resta()}>-</Button>
        <Button onClick={() => counterData.suma()}>+</Button>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
