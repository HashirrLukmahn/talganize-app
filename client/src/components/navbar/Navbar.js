import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import * as AppRoutes from '../../app-routes/AppRoutes'
import Logo from '../../assets/images/Talganize.svg'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navlink = [
        {
            id: 1,
            name: "Home",
            path: "home",
        },
        {
            id: 2,
            name: "About Us",
            path: 'about-us',
        },
        {
            id: 3,
            name: "Our Clients",
            path: 'our-clients',
        },
        {
            id: 4,
            name: "Contact Us",
            path: "contact-us"
        },
    ]

    return (
        <nav className="bg-yellow w-full sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between md:items-end gap-2">
                {/* Logo */}
                <div className="w-[200px] md:w-[200px]">
                    <NavLink to={AppRoutes.Home}><img className='w-full' src={Logo} alt='Talganize' /></NavLink>
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-semibold text-green">
                    {/* <li><NavLink to={AppRoutes.Home} className='cursor-pointer text-green no-underline'>Home</NavLink></li> */}

                    {
                        navlink.map((item) => (
                            <li key={item.id}>
                                <Link to={item.path} smooth={true} duration={300} className="cursor-pointer no-underline ">
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                    <li><NavLink to={AppRoutes.Login} className='bg-green px-5 py-2 text-white rounded cursor-pointer no-underline'>Login</NavLink></li>
                </ul>






                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {/* Hamburger icon */}
                    <Menu className='text-green' />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-yellow px-4 py-2">
                    <ul className="flex flex-col items-center space-y-2 text-green font-semibold">
                        {
                            navlink.map((item) => (
                                <li key={item.id}>
                                    <Link to={item.path} smooth={true} duration={300} className="no-underline">
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}

        </nav >

    )
}

export default Navbar