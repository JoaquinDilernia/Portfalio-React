import './App.css'
import {  Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Experiencia from './components/Experiencia/Experiencia'
import Proyectos from './components/Proyectos/Proyectos'
import Contacto from './components/Contacto/Contacto'
import Dark from './components/Dark/Dark'
import Educacion from './components/Educacion/Educacion'

function App() {

  return (
    <>
    <Dark />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiencia" element={<Experiencia />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/educacion" element={<Educacion />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
    <NavBar />

    </>
  )
}

export default App
