import { useState } from 'react';
import './App.css';
import Form from './componentes/Form/Form';
import Header from './componentes/Header/Header.js';
import MyOrg from './componentes/MyOrg/MyOrg';


function App() {

  const [showForm, actualizarMostrar] = useState(true)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra (corto circuito).

  const cambiarMostrar = () => {
    actualizarMostrar(!showForm)
  }
  return (
    <div>
      {/* {Header()} */} {/*Esta es otra forma de insertar un componente  */}
      {/* <Header></Header> Esta es otra forma de insertar un componente  */}
      <Header/>
      {showForm && <Form />}
      <MyOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
