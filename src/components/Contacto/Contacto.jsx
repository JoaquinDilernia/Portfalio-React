import React from 'react'
import './Contacto.css'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Contacto = () => {
  return (
    <div className='contacto-contenedor'>
      <div className='contacto-contenedor-texto'>
        <h2>Contacto</h2>
        <p>Si te interesa mi perfil y queres contactarme, podes hacerlo a traves de mis redes sociales</p>
        <div className='contacto-contenedor-social'>
          <a href=""><BsInstagram /></a>
          <a href=""><BsWhatsapp /></a>
          <a href=""><BsLinkedin /></a>
        </div>
      </div>
    </div>
  )
}

export default Contacto
