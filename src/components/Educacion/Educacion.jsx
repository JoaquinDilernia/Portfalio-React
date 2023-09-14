import React from 'react'
import './Educacion.css'
import { IoSchoolOutline } from 'react-icons/io5'
import { FaGraduationCap } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Educacion = () => {
  return (

    <div className='educacion'>
      <h2>Educación</h2>
      <p>Estos son algunos de los cursos que he realizado</p>
      <p>Para ver toda la mi educacion visita mi perfil de <a href="https://www.linkedin.com/in/joaquin-di-lernia-800884286/">Linkedin  <BsLinkedin /></a></p>
      <motion.div initial={{ scale:0.1}} animate={{ scale:1 }} transition={{ duration: 1.2 }} className='educacion-contenedor'>
        <ul>
          <li>
            <h3>Tecnico Universitario en Programacion</h3>
            <h4>2019 - 2022</h4>
            <p>Universidad Tecnologica Nacional</p>
            <div className='icono-educacion'><IoSchoolOutline /></div>

          </li>
          <li>
            <h3>PHP y MySql Intermedio</h3>
            <h4>2020</h4>
            <p>Universidad Tecnologica Nacional</p>
            <div className='icono-educacion'><IoSchoolOutline /></div>

        
          </li>


          <li>
            <h3> Carrera Fullstack Developer </h3>
            <h4>2022 - 2023</h4>
            <p>CODERHOUSE</p>
            <div className='icono-educacion'><IoSchoolOutline /></div>
            
          </li>
          <li>
            <h3>Curso Definitivo de HTML y CSS</h3>
            <h4>2023</h4>
            <p>Platzi</p>
            <div className='icono-educacion'><IoSchoolOutline /></div>

            
          </li>
          <li>
            <h3>Curso de React.js</h3>
            <h4>2023</h4>
            <p>Platzi</p>
            <div className='icono-educacion'><IoSchoolOutline /></div>

        
          </li>


          <li>
            <h3>Curso de React.js con TypeScript</h3>
            <h4>2023</h4>
            <p>Platzi</p>
            <div className='icono-educacion'><IoSchoolOutline /></div>

        
          </li>

          <li>
            <h3>Curso de React.js con Vite.js y TailwindCSS</h3>
            <h4>2023</h4>
            <p>Platzi</p>
            <div className='icono-educacion'><IoSchoolOutline /></div>

        
          </li>

          <li>
            <h3>Curso Práctico de Frontend Developer</h3>
            <h4>2023</h4>
            <p>Platzi</p>
            <div className='icono-educacion'><IoSchoolOutline /></div>

        
          </li>

          <li>
            <h3>Curso Práctico de JavaScript</h3>
            <h4>2023</h4>
            <p>Platzi</p>
            <div className='icono-educacion'><IoSchoolOutline /></div>

        
          </li>

          <li>
            <h3>Curso Básico de Programación con C#</h3>
            <h4>2023</h4>
            <p>Platzi</p>
            <div className='icono-educacion'><IoSchoolOutline /></div>

        
          </li>
        </ul>
        


      </motion.div>



      </div>

  )
}

export default Educacion
