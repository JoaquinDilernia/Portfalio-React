import React from 'react'
import './Dark.css'
import { BsMoonStars } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'



const Dark = () => {

    return (
        <div className='dark-contenedor'>
            <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className='home-contenedor-social'>
                <a href="https://instagram.com/joacodiler?igshid=YTQwZjQ0NmI0OA=="><BsInstagram /></a>
                <a href="https://wa.me/1164212370"><BsWhatsapp /></a>
                <a href="https://www.linkedin.com/in/joaquin-di-lernia-800884286/"><BsLinkedin /></a>
                <a href="https://github.com/JoaquinDilernia"><BsGithub /></a>

            </motion.div>
            <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className='dark-contenedor-icono'>
                <BsMoonStars />
            </motion.div>

        </div>

    )
}

export default Dark
