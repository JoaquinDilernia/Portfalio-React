import React from 'react'
import './Experiencia.css'

import { motion } from 'framer-motion'

import ar from '../../assets/ALTORANCHO.jpg'
import bh from '../../assets/bahala.jpeg'
import lt from '../../assets/bylett.jpg'

import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa'
import { FaHtml5 as FaHtml5F } from 'react-icons/fa'
import { FaCss3Alt as FaCss3AltF } from 'react-icons/fa'
import { IoLogoJavascript as IoLogoJavascriptI } from 'react-icons/io5'
import { SiFirebase as SiFirebaseS } from 'react-icons/si'
import { SiStrapi as SiStrapiS } from 'react-icons/si'
import { SiVite as SiViteS } from 'react-icons/si'
import { SiFramer as SiFramerS } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'



const Experiencia = () => {
  return (
    <>
      <div className='experiencia-laboral'>
        <h2>Experiencia como <span>Desarrollador</span></h2>
        <p>Estos son algunos de los proyectos en los que he trabajado</p>
        <p>Para ver toda la experiencia laboral visita mi perfil de <a href="https://www.linkedin.com/in/joaquin-di-lernia-800884286/" target='blank'>Linkedin  <BsLinkedin /></a> </p>
        <motion.div initial={{ scale: 0.1 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }} className='experiencia-laboral-contenedor'>
          <div className='experiencia-laboral-contenedor-trabajo'>
            <a href="https://altorancho.com/ " target='blank'>ALTORANCHO</a>
            <div className='experiencia-laboral-contenedor-trabajo-img'>
              <a href="https://altorancho.com/" target='blank'><img src={ar} alt="" /></a>
            </div>
            <div className='experiencia-laboral-contenedor-trabajo-texto'>
              <h3>Desarrollo web ALTORANCHO</h3>
              <h4>2022 - actual</h4>
              <p>Desarrollo a medida de ecommerce con tienda nube</p>
              <div className='iconos-experiencia'>
                <FaGitAlt />
                <FaHtml5F />
                <FaCss3AltF />
                <IoLogoJavascriptI />
              </div>

            </div>
          </div>
          <div className='experiencia-laboral-contenedor-trabajo'>
            <a href="https://bahala.com.ar/" target='blank'>BAHALA</a>
            <div className='experiencia-laboral-contenedor-trabajo-img'>
              <a href="https://bahala.com.ar/" target='blank'>  <img src={bh} alt="" /> </a>
            </div>
            <div className='experiencia-laboral-contenedor-trabajo-texto'>
              <h3>Desarrollador Front-End BAHALA</h3>
              <h4>2023</h4>
              <p>Landing page para centro de estetica BHALA</p>
              <div className='iconos-experiencia'>
                <FaReact />
                <FaGitAlt />
                <FaHtml5F />
                <FaCss3AltF />
                <IoLogoJavascriptI />
              </div>
            </div>
          </div>
          <div className='experiencia-laboral-contenedor-trabajo'>
            <a href="https://lettcomercial.com/" target='blank'>LETTCOMERCIAL SA</a>
            <div className='experiencia-laboral-contenedor-trabajo-img'>
              <a href="https://lettcomercial.com/" target='blank'><img src={lt} alt="" /></a>
            </div>
            <div className='experiencia-laboral-contenedor-trabajo-texto'>
              <h3>Desarrollador Fullstack LETTCOMERCIAL S.A</h3>
              <h4>2023</h4>
              <p>Desarrollo de aplicacion web para gestionar clientes y pedidos en eventos</p>
              <div className='iconos-experiencia'>
                <FaReact />
                <FaNodeJs />
                <FaGitAlt />
                <SiStrapiS />
                <SiViteS />
                <SiFramerS />
              </div>
            </div>
          </div>
          <div className='experiencia-laboral-contenedor-trabajo'>
            <a href="https://lettcomercial.com/" target='blank'>LETTCOMERCIAL SA</a>
            <div className='experiencia-laboral-contenedor-trabajo-img'>
              <a href="https://lettcomercial.com/" target='blank'><img src={lt} alt="" /></a>
            </div>
            <div className='experiencia-laboral-contenedor-trabajo-texto'>
              <h3>Desarrollador Fullstack LETTCOMERCIAL S.A</h3>
              <h4>2023</h4>
              <p>Desarrollo de aplicaciones web para recolectar mails de clientes en eventos</p>
              <div className='iconos-experiencia'>
                <FaReact />
                <FaGitAlt />
                <SiFirebaseS />
                <SiViteS />
                <SiFramerS />
              </div>

            </div>
          </div>
        </motion.div>


      </div>



    </>


  )
}

export default Experiencia
