import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import foto from '../../assets/fotoperfil2.jpeg'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa'
import { FaHtml5 as FaHtml5F } from 'react-icons/fa'
import { FaCss3Alt as FaCss3AltF } from 'react-icons/fa'
import { IoLogoJavascript as IoLogoJavascriptI } from 'react-icons/io5'





const Home = () => {
  return (

    <div className='home-contenedor'>

      <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1.5 }}className='home-contenedor-foto'>
        <img src={foto} alt="foto perfil" />
      </motion.div>
      <div className='home-contenedor-texto'>
        <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1.5 }}>Hola, soy <span>Joaquin Di Lernia</span></motion.h1>
        <motion.h2 initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1.5 }}>Desarrollador Fullstack</motion.h2>
 
        <motion.p initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1.5 }}>Tecnico Universitarion en Programacion UTN y Fullstack developer CODERHOUSE.</motion.p>
        <motion.div initial={{ scale: 0.1 }} animate={{ scale:1}} transition={{ duration: 1.5 }} className='home-contenedor-iconos'>
          <i href=""><FaHtml5F /></i>
          <i href=""><FaCss3AltF /></i>
          <i href=""><IoLogoJavascriptI /></i>
          <i href=""><FaReact /> </i>
          <i href=""><FaNodeJs /></i>
          <i href=""><FaGitAlt /></i>
        </motion.div>

      </div>
    </div>

  )
}

export default Home
