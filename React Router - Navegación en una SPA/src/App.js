import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"

//Aquí importamos la librería "react-router-dom" y la usamos para iterar entre las diferentes rutas de nuestra web
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    {/* Aquí usamos la librería "react-router-dom" */}
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
