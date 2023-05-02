import './App.css';
import Form from './componentes/Form/Form';
import Header from './componentes/Header/Header.js';
import MyOrg from './componentes/MyOrg/MyOrg';


function App() {
  return (
    <div>
      {/* {Header()} */} {/*Esta es otra forma de insertar un componente  */}
      {/* <Header></Header> Esta es otra forma de insertar un componente  */}
      <Header/>
      <Form />
      <MyOrg />
    </div>
  );
}

export default App;
