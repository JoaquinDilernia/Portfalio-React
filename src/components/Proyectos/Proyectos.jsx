import React from 'react'
import './Proyectos.css'

import ar from '../../assets/ALTORANCHO.jpg'
import ecommerce from '../../assets/ECOMERCE-PLATZI.png'
import calculadora from '../../assets/calculadora.png'
import formtarjeta from '../../assets/form-tarjeta.png'
import Easybank from '../../assets/Easybank.png'
import ecomerceshoes from '../../assets/ecomerce-shoes.png'
import {motion} from 'framer-motion'

import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa'
import { FaHtml5 as FaHtml5F } from 'react-icons/fa'
import { FaCss3Alt as FaCss3AltF } from 'react-icons/fa'
import { IoLogoJavascript as IoLogoJavascriptI } from 'react-icons/io5'
import { SiMongodb as SiMongodbS } from 'react-icons/si'
import { SiFirebase as SiFirebaseS } from 'react-icons/si'
import { SiPostgresql as SiPostgresqlS } from 'react-icons/si'
import { SiStrapi as SiStrapiS } from 'react-icons/si'
import { SiVite as SiViteS } from 'react-icons/si'
import { SiFramer as SiFramerS } from 'react-icons/si'
import { SiRedux as SiReduxS } from 'react-icons/si'
import { SiTailwindcss as SiTailwindcssS } from 'react-icons/si'
import { SiBootstrap as SiBootstrapS } from 'react-icons/si'
import { SiSass as SiSassS } from 'react-icons/si'


import { FiExternalLink } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'

const Proyectos = () => {
  return (
    <div className='portafolio-personal'>
      <h2>Portafolio <span>Personal</span></h2>
      <p>Estos son algunos de los proyectos personales en los que he trabajado</p>
      <p>Para ver todos los proyectos visita mi perfil de <a href="https://github.com/JoaquinDilernia">Github <BsGithub /> </a></p>
      <motion.div initial={{ scale:0.1}} animate={{ scale:1 }} transition={{ duration: 1.2 }} className='contenedor-portafolio'>
        <div className='card'>
          <div className='card-header'>
            <h3>CLON TESLA</h3>
          </div>
          <div className='card-body'>
          <a href="https://github.com/JoaquinDilernia/sitio-web-telsa"> <img src="https://user-images.githubusercontent.com/1561955/238280704-7aa648fc-0824-4ad1-9a36-7b2e4d272b53.jpg" alt="" /></a>     
            <p>Clon de la pagina de Tesla</p>
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              <IoLogoJavascriptI />
            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href="https://github.com/JoaquinDilernia/sitio-web-telsa"> <BsGithub /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <h3>ECOMMERCE</h3>
          </div>
          <div className='card-body'>
          <a href="https://github.com/JoaquinDilernia/React-Ecommerce-platzi" className='link-img'> <img src={ecommerce} alt="" /></a>       
            <p>Ecommerce desarrollado con React.js y consumiendo API de productos</p>
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              <IoLogoJavascriptI />
              <FaReact />

            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href="https://github.com/JoaquinDilernia/React-Ecommerce-platzi"> <BsGithub /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <h3>CALCULADORA</h3>
          </div>
          <div className='card-body'>
           <a href="https://github.com/JoaquinDilernia/calculadora-front-end-mentor"> <img src={calculadora} alt="" /></a>
            <p>Calculadora Desafio FrontEnd Mentor</p>
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              <SiSassS />
              <IoLogoJavascriptI />
            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href="https://github.com/JoaquinDilernia/calculadora-front-end-mentor"> <BsGithub /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <h3>FORUMALARIO TARJETA</h3>
          </div>
          <div className='card-body'>
          <a href="https://github.com/JoaquinDilernia/tarjeta-front-end-mentor"> <img src={formtarjeta} alt="" /></a>
            <p>formulario de detalles de tarjeta interactivo</p>
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              <IoLogoJavascriptI />
            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href="https://github.com/JoaquinDilernia/tarjeta-front-end-mentor"> <BsGithub /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <h3>EASYBANK</h3>
          </div>
          <div className='card-body'>
          <a href="https://github.com/JoaquinDilernia/easyBank-front-end-mentor"> <img src={Easybank} alt="" /></a> 
            <p>Desarrollo de sitio web para banco ficticio</p>
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              <IoLogoJavascriptI />
            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href="https://github.com/JoaquinDilernia/easyBank-front-end-mentor"> <BsGithub /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <h3>ECOMMERCE SHOES</h3>
          </div>
          <div className='card-body'>
          <a href="https://github.com/JoaquinDilernia/Eccomerce-Shoes-Front-End-Mentor"> <img src={ecomerceshoes} alt="" /></a>  
            <p>Ecommerce de venta de zapatillas</p>      
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              < SiSassS />
              <IoLogoJavascriptI />
            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href="https://github.com/JoaquinDilernia/Eccomerce-Shoes-Front-End-Mentor"> <BsGithub /></a>
            </div>
          </div>
        </div>

      </motion.div>


    </div>

  )
}

export default Proyectos
