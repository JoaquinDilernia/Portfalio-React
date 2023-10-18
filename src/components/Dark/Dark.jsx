import React from 'react'
import { useState } from 'react'
import './Dark.css'
import { BsMoonStars } from 'react-icons/bs'

import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

import { motion } from 'framer-motion'




const Dark = () => {

    const [dark, setDark] = useState(false)

// cambiar la clase del dark-contenedor para el dark mode

    const handleDark = () => {
        if (dark === false) {
            setDark(true)
            document.querySelector('.dark-contenedor').classList.add('dark-contenedor-dark')
            document.querySelector('.home-contenedor-social').classList.add('home-contenedor-social-dark')
            document.querySelector('.dark-contenedor-icono').classList.add('dark-contenedor-icono-dark')
            document.querySelector('.home-contenedor').classList.add('home-contenedor-dark')
            document.querySelector('.home-contenedor-texto').classList.add('home-contenedor-texto-dark')
            document.querySelector('.home-contenedor-iconos').classList.add('home-contenedor-iconos-dark')



        } else {
            setDark(false)
            document.querySelector('.dark-contenedor').classList.remove('dark-contenedor-dark')
            document.querySelector('.home-contenedor-social').classList.remove('home-contenedor-social-dark')
            document.querySelector('.dark-contenedor-icono').classList.remove('dark-contenedor-icono-dark')
            document.querySelector('.home-contenedor').classList.remove('home-contenedor-dark')
            document.querySelector('.home-contenedor-texto').classList.remove('home-contenedor-texto-dark')
            document.querySelector('.home-contenedor-iconos').classList.remove('home-contenedor-iconos-dark')

            
        }
    }

    return (
        <div className='dark-contenedor'>
            <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className='home-contenedor-social'>
                <a href="https://instagram.com/joacodiler?igshid=YTQwZjQ0NmI0OA==" target='blank'><BsInstagram /></a>
                <a href="https://wa.me/1164212370" target='blank'><BsWhatsapp /></a>
                <a href="https://www.linkedin.com/in/joaquin-di-lernia-800884286/" target='blank'><BsLinkedin /></a>
                <a href="https://github.com/JoaquinDilernia" target='blank'><BsGithub /></a>

            </motion.div>
            <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className='dark-contenedor-icono'>
                <BsMoonStars onClick={handleDark} />
            </motion.div>


        </div>

    )
}

export default Dark
