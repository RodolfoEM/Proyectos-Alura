import { useState } from 'react';
import './App.css';
import Form from './componentes/Form/Form';
import Header from './componentes/Header/Header.js';
import MyOrg from './componentes/MyOrg/MyOrg';
import Team from './componentes/Team/Team';

function App() {

  const [showForm, actualizarMostrar] = useState(true)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra (corto circuito).

  const cambiarMostrar = () => {
    actualizarMostrar(!showForm)
  }

  //Lista de equipo
  const teams = [
    {
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    },
]

  return (
    <div>
      {/* {Header()} */} {/*Esta es otra forma de insertar un componente  */}
      {/* <Header></Header> Esta es otra forma de insertar un componente  */}
      <Header/>
      {showForm && <Form teams={teams.map((team) => team.titulo)}/>}
      <MyOrg cambiarMostrar={cambiarMostrar} />

      {
        teams.map((team) => <Team datos={team} key={team.titulo} />)
      }


    </div>
  );
}

export default App;
