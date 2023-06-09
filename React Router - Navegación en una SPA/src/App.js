import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from './pages/Pages404'
import Header from './components/Header';
import Post from './pages/Pots';
import Categoria from './pages/Categoria';


//Aquí importamos la librería "react-router-dom" y la usamos para iterar entre las diferentes rutas de nuestra web
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    {/* Aquí usamos la librería "react-router-dom" */}
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categoria />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
