import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import NavbarMenu from './NavbarData';
import Button from '../Button';
import '../../index.css'


const Navbar = () => {

    const [activeHam, setActiveHam] = useState(false)
      
  
    const menuItems = (
      <ul> 
        <li className='Nav-social'>
            <Link to='/' className='Nav-link'>
                Home
            </Link>
        </li>
        <li className='Nav-social'>
            <Link to='/Roadmap' className='Nav-link'>
                Events
            </Link>
        </li>
        <li className='Nav-social'>
            <Link to='/Story' className='Nav-link'>
                Courses
            </Link>
        </li>
        <li className='Nav-social'>
            <Link to='/Story' className='Nav-link'>
                Head Start
            </Link>
        </li>
        <li className='Nav-social'>
            <Link to='/Story' className='Nav-link'>
                Testmonials
            </Link>
        </li>
        <li className='Nav-social'>
            <Link to='/Story' className='Nav-link'>
                Clients
            </Link>
        </li>
      </ul>
    );
  
    return (
      
        <div className='Nav-container'>
          <nav className='Nav-bar'>
            <div className='Nav-logo Nav-right'>
              <Link to='/'>
                <img src='/wizer-logo.png' alt='' className='logo-img' />
              </Link>
              <NavbarMenu />
            </div>
            <Button handleClick={() => alert('contact info')} type='submit' className='btn solid ham_btn'>
              Contact Us
            </Button>
            <button className={activeHam ? 'hamburger active-hamburger' : 'hamburger'} 
                    onClick = {() => setActiveHam(!activeHam)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            
          </nav>
          {activeHam && <div className='nav-dropdown'>
              {menuItems}
              <Button handleClick={() => alert('contact info')} type='submit' className='solid hamBtn'>
                Contact Us
              </Button>
            </div>}
        </div>
    )
  }
  
                        
                        
export default Navbar