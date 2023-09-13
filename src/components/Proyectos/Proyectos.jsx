import React from 'react'
import './Proyectos.css'

import ar from '../../assets/ALTORANCHO.jpg'
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

import { FiExternalLink } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'


const Proyectos = () => {
  return (
    <div className='portafolio-personal'>
      <h2>Portafolio <span>Personal</span></h2>
      <p>Estos son algunos de los proyectos personales en los que he trabajado</p>
      <p>Para ver todos los proyectos visita mi perfil de <a href="">Github</a></p>
      <motion.div initial={{ scale:0.1}} animate={{ scale:1 }} transition={{ duration: 1.2 }} className='contenedor-portafolio'>
        <div className='card'>
          <div className='card-header'>
            <h3>ALTORANCHO</h3>
          </div>
          <div className='card-body'>
          <a href=""> <img src={ar} alt="" /></a>            <p>Desarrollo a medida de ecommerce con tienda nube</p>
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              <IoLogoJavascriptI />
            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href=""> <BsGithub /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <h3>ALTORANCHO</h3>
          </div>
          <div className='card-body'>
          <a href="" className='link-img'> <img src={ar} alt="" /></a>            <p>Desarrollo a medida de ecommerce con tienda nube</p>
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              <IoLogoJavascriptI />
            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href=""> <BsGithub /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <h3>ALTORANCHO</h3>
          </div>
          <div className='card-body'>
           <a href=""> <img src={ar} alt="" /></a>
            <p>Desarrollo a medida de ecommerce con tienda nube</p>
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              <IoLogoJavascriptI />
            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href=""> <BsGithub /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <h3>ALTORANCHO</h3>
          </div>
          <div className='card-body'>
          <a href=""> <img src={ar} alt="" /></a>            <p>Desarrollo a medida de ecommerce con tienda nube</p>
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              <IoLogoJavascriptI />
            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href=""> <BsGithub /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <h3>ALTORANCHO</h3>
          </div>
          <div className='card-body'>
          <a href=""> <img src={ar} alt="" /></a>            <p>Desarrollo a medida de ecommerce con tienda nube</p>
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              <IoLogoJavascriptI />
            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href=""> <BsGithub /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <h3>ALTORANCHO</h3>
          </div>
          <div className='card-body'>
          <a href=""> <img src={ar} alt="" /></a>            <p>Desarrollo a medida de ecommerce con tienda nube</p>
            <div className='iconos-portafolio'>
              <FaGitAlt />
              <FaHtml5F />
              <FaCss3AltF />
              <IoLogoJavascriptI />
            </div>
            <div className='card-footer'>
              <a href=""> <FiExternalLink /></a>
              <a href=""> <BsGithub /></a>
            </div>
          </div>
        </div>

      </motion.div>


    </div>

  )
}

export default Proyectos
