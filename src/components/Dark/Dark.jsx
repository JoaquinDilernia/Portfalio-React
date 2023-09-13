import React from 'react'
import './Dark.css'
import { BsMoonStars } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'



const Dark = () => {

    return (
        <div className='dark-contenedor'>
            <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className='home-contenedor-social'>
                <a href=""><BsInstagram /></a>
                <a href=""><BsWhatsapp /></a>
                <a href=""><BsLinkedin /></a>
                <a href=""><BsGithub /></a>
            </motion.div>
            <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className='dark-contenedor-icono'>
                <BsMoonStars />
            </motion.div>

        </div>

    )
}

export default Dark
