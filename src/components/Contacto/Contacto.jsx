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
      <motion.div  initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1 }} className='contacto-contenedor-texto'>
        <h2>Contacto</h2>
        <p>Si te interesa mi perfil y queres contactarme, podes hacerlo a traves de mis redes sociales</p>
        <motion.div initial={{ scale: 0.1 }} animate={{ scale:1}} transition={{ duration: 1 }} className='contacto-contenedor-social'>
          <a href=""><BsInstagram /></a>
          <a href=""><BsWhatsapp /></a>
          <a href=""><BsLinkedin /></a>
          <a href=""><BsGithub /></a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contacto
