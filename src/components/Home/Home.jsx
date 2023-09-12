import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import foto from '../../assets/fotoperfil.jpeg'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'



const Home = () => {
  return (
    
      <div className='home-contenedor'>
        <div className='home-contenedor-foto'>
          <img src={foto} alt="foto perfil" />
          </div>
        <div className='home-contenedor-texto'>
          <motion.h1 initial={{ y:-50 }} animate={{ y:0}} transition={{ duration: 1 }}>Hola, soy <span>Joaquin Di Lernia</span></motion.h1>
          <motion.h2 initial={{ y:-50 }} animate={{ y:0}} transition={{ duration: 1 }}>Desarrollador Fullstack</motion.h2>
          <motion.p initial={{ y:-50 }} animate={{ y:0}} transition={{ duration: 1 }}>Tecnico Universitarion en Programacion UTN y Fullstack developer CODERHOUSE.</motion.p>
          <motion.div initial={{ y:-50 }} animate={{ y:0}} transition={{ duration: 1 }} className='home-contenedor-social'>
            <a href=""><BsInstagram /></a>
            <a href=""><BsWhatsapp /></a>
            <a href=""><BsLinkedin /></a>
          </motion.div>

          </div>
          </div>

  )
}

export default Home
