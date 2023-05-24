import { useState } from 'react';
import './App.css';
import Form from './componentes/Form/Form';
import Header from './componentes/Header/Header.js';
import MyOrg from './componentes/MyOrg/MyOrg';
import Team from './componentes/Team/Team';
import Footer from './componentes/Footer/Footer.';

function App() {

  const [showForm, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra (corto circuito).

  const cambiarMostrar = () => {
    actualizarMostrar(!showForm)
  }

  //Registra colaborador

  const registrarColaborador =(colaborador) => {
    // console.log("Nuevo colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
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
      {showForm && <Form
        teams={teams.map((team) => team.titulo)}
        registrarColaborador={registrarColaborador}
        />
      }


      <MyOrg cambiarMostrar={cambiarMostrar} />

      {
        teams.map((team) => <Team
          datos={team}
          key={team.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === team.titulo)}
          />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
