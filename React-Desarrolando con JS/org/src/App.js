import './App.css';
import Form from './componentes/Form/Form';
import Header from './componentes/Header/Header.js';


function App() {
  return (
    <div>
      {/* {Header()} */} {/*Esta es otra forma de insertar un componente  */}
      {/* <Header></Header> Esta es otra forma de insertar un componente  */}
      <Header/>
      <Form />
    </div>
  );
}

export default App;
