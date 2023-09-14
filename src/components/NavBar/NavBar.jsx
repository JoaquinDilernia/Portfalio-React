import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { BiHomeAlt2 } from 'react-icons/bi'
import { MdOutlineWorkHistory } from 'react-icons/md'
import { FiBriefcase } from 'react-icons/fi'
import { LuContact } from 'react-icons/lu'
import { IoSchoolOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

const NavBar = () => {
  return (
    < div className='navbar'>
      <motion.div initial={{ y: -50 }} whileHover={{ scale: 1.05 }} animate={{ y: 0 }} transition={{ duration: 1 }} className='navbar-flotante'>
        <div className='navbar-contenedor'>
          <ul>
            <li>
              <NavLink to="/" className="link-navbar" activeClassName="active" exact>
                <BiHomeAlt2 />
              </NavLink>
            </li>
            <li>
              <NavLink to="/experiencia" className="link-navbar" activeClassName="active" exact>
                <MdOutlineWorkHistory />
              </NavLink>
            </li>
            <li>
              <NavLink to="/proyectos" className="link-navbar" activeClassName="active" exact>
                <FiBriefcase />
              </NavLink>
            </li>
            <li>
              <NavLink to="/educacion" className="link-navbar" activeClassName="active" exact>
                <IoSchoolOutline />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className="link-navbar" activeClassName="active" exact>
                <LuContact />
              </NavLink>
            </li>
          </ul>
        </div>

      </motion.div>

    </div>

  )
}

export default NavBar
