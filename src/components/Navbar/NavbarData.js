import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const data = [
    {
        id: 1,
        menu: 'Home',
        page: '/'
    },
    {
        id: 2,
        menu: 'Events',
        page: '/Events'
    },
    {
        id: 3,
        menu: 'Courses',
        page: '/Courses'
    },
    {
        id: 4,
        menu: 'Head Start',
        page: '/HeadStart'
    },
    {
        id: 5,
        menu: 'Testimonials',
        page: '/Testimonials'
    },
    {
        id: 6,
        menu: 'Clients',
        page: '/Clients'
    }
]

function Navbar_menu() {

    const [Data, setData] = useState(data)

    return (
        <div className='Nav-bar-items Nav-menu'>
            {Data.map((item, i) => (
                <li key={item.id} className='Nav-social'>
                    <NavLink to={item.page} className={(navData) => navData.isActive ? 'Nav-link-active' : 'Nav-link' }>
                        {item.menu} 
                    </NavLink>
                </li>
            ))}
        </div>
    )

}

export default Navbar_menu