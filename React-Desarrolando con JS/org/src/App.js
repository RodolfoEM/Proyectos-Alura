import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Form from './componentes/Form/Form';
import Header from './componentes/Header/Header.js';
import MyOrg from './componentes/MyOrg/MyOrg';
import Team from './componentes/Team/Team';
import Footer from './componentes/Footer/Footer.';

function App() {

  const [showForm, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const[teams, actualizarEquipos] = useState(
    [
      {
        id: uuid(),
        titulo:"Programación",
        colorPrimario:"#57C278",
        colorSecundario:"#D9F7E9"
      },
      {
        id: uuid(),
        titulo:"Front End",
        colorPrimario:"#82CFFA",
        colorSecundario:"#E8F8FF"
      },
      {
        id: uuid(),
        titulo:"Data Science",
        colorPrimario:"#A6D157",
        colorSecundario:"#F0F8E2"
      },
      {
        id: uuid(),
        titulo:"Devops",
        colorPrimario:"#E06B69",
        colorSecundario:"#FDE7E8"
      },
      {
        id: uuid(),
        titulo:"UX y Diseño",
        colorPrimario:"#DB6EBF",
        colorSecundario:"#FAE9F5"
      },
      {
        id: uuid(),
        titulo:"Móvil",
        colorPrimario:"#FFBA05",
        colorSecundario:"#FFF5D9"
      },
      {
        id: uuid(),
        titulo:"Innovación y Gestión",
        colorPrimario:"#FF8A29",
        colorSecundario:"#FFEEDF"
      },
  ]
)

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

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id);
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = teams.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario =  color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...teams, {...nuevoEquipo, id:uuid()}])
  }

  return (
    <div>
      {/* {Header()} */} {/*Esta es otra forma de insertar un componente  */}
      {/* <Header></Header> Esta es otra forma de insertar un componente  */}
      <Header/>
      {showForm && <Form
        teams={teams.map((team) => team.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }


      <MyOrg cambiarMostrar={cambiarMostrar} />

      {
        teams.map((team) => <Team
          datos={team}
          key={team.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === team.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
