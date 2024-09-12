import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../donnee/images/logo.png';
import { Menu } from '@mui/icons-material';


export default function Header() {
  const [responsive, Setresponsive]= useState(false)
  return (
    <>
   <header className='container flex-sb'>
        <div className="logo">
          <img src={logo} alt="" data-aos='zoom-in-right'/>
        </div>
        <div className="navbar flex-sb">
          <ul className={responsive ? 'hideMenu' : 'flex-sb space nav'}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Porfolio">Porfolio</Link></li>
            <li><Link to="/Testimonials">Testimonials</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
          <button className='toggle' onClick={()=> Setresponsive(!responsive)}>
            <Menu className='icon'></Menu>
          </button>
        </div>

      </header>
    </>
  )
}
