import React from 'react'
import './Contacto.css'

import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

import { motion } from 'framer-motion'

const Contacto = () => {
  return (
    <div className='contacto-contenedor'>
      <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1 }} className='contacto-contenedor-texto'>
        <h2>Contacto</h2>
        <p>Si te interesa mi perfil y queres contactarme, podes hacerlo a traves de mis redes sociales</p>
        <motion.div initial={{ scale: 0.1 }} animate={{ scale: 1 }} transition={{ duration: 1 }} className='contacto-contenedor-social'>
          <a href="https://instagram.com/joacodiler?igshid=YTQwZjQ0NmI0OA==" target='blank'><BsInstagram /></a>
          <a href="https://wa.me/1164212370" target='blank'><BsWhatsapp /></a>
          <a href="https://www.linkedin.com/in/joaquin-di-lernia-800884286/" target='blank'><BsLinkedin /></a>
          <a href="https://github.com/JoaquinDilernia" target='blank'><BsGithub /></a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contacto
