import React from 'react'
import './Experiencia.css'
import { motion } from 'framer-motion'
import ar from '../../assets/ALTORANCHO.jpg'
import bh from '../../assets/bahala.jpeg'
import lt from '../../assets/bylett.jpg'

const Experiencia = () => {
  return (
    <>
    <div className='experiencia-laboral'>
    <h2>Experiencia como <span>Desarrollador</span></h2>
      <div className='experiencia-laboral-contenedor'>
        <div className='experiencia-laboral-contenedor-trabajo'>
          <div className='experiencia-laboral-contenedor-trabajo-img'>
            <a href=""><img src={ar} alt="" /></a>
          </div>
          <div className='experiencia-laboral-contenedor-trabajo-texto'>
            <h3>Desarrollo web ALTORANCHO</h3>
            <h4>2022 - actual</h4>
            <p>Desarrollo a medida de ecommerce con tienda nube</p>
            <p>HTML CSS JS</p>
            <a href="altorancho.com">ALTORANCHO</a>
          </div>
        </div>
        <div className='experiencia-laboral-contenedor-trabajo'>
          <div className='experiencia-laboral-contenedor-trabajo-img'>
          <a href="">  <img src={bh} alt="" /> </a>
          </div>
          <div className='experiencia-laboral-contenedor-trabajo-texto'>
            <h3>Desarrollador Front-End BAHALA</h3>
            <h4>2023</h4>
            <p>Landing page para centro de estetica BHALA</p>
            <p>REACT.JS VITE.JS FRAMER-MOTION</p>
            <a href="https://bahala.com.ar/">BAHALA</a>
          </div>
        </div>
        <div className='experiencia-laboral-contenedor-trabajo'>
          <div className='experiencia-laboral-contenedor-trabajo-img'>
            <a href=""><img src={lt} alt="" /></a>
          </div>
          <div className='experiencia-laboral-contenedor-trabajo-texto'>
            <h3>Desarrollador Fullstack LETTCOMERCIAL S.A</h3>
            <h4>2023</h4>
            <p>Desarrollo de aplicacion web para gestionar clientes y pedidos en eventos</p>
            <p>REACT.JS VITE.JS FRAMER-MOTION STRAPI</p>
            <a href="https://lettsa.com.ar/">LETTCOMERCIAL SA</a>
          </div>
        </div>
        <div className='experiencia-laboral-contenedor-trabajo'>
          <div className='experiencia-laboral-contenedor-trabajo-img'>
            <a href=""><img src={lt} alt="" /></a>
          </div>
          <div className='experiencia-laboral-contenedor-trabajo-texto'>
            <h3>Desarrollador Fullstack LETTCOMERCIAL S.A</h3>
            <h4>2023</h4>
            <p>Desarrollo de aplicaciones web para recolectar mails de clientes en eventos</p>
            <p>REACT.JS VITE.JS FIREBASE</p>
            <a href="https://lettsa.com.ar/">LETTCOMERCIAL SA</a>

          </div>
        </div>
        </div>


    </div>


      
    </>


  )
}

export default Experiencia
