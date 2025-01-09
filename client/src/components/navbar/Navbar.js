import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import * as AppRoutes from '../../app-routes/AppRoutes'
import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navlink = [
        {
            id: 1,
            name: "Home",
            path: AppRoutes.Home,
        },
        {
            id: 2,
            name: "About Us",
            path: '#about-us',
        },
        {
            id: 3,
            name: "Our Clients",
            path: '#our-clients',
        },
        {
            id: 4,
            name: "Contact Us",
            path: AppRoutes.ContactUs
        },
    ]

    return (
        <nav className="bg-[#4B4847] w-full sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between  items-baseline gap-2">
                {/* Logo */}
                <div className="w-[200px] md:w-[200px] text-2xl font-bold text-gray-800">
                    <Link to={AppRoutes.Home}><img className='w-full' src={Logo} alt='Logo' /></Link>
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6  text-semibold">
                    {
                        navlink.map((item) => (
                            <li key={item.id}>
                                <a href={item.path} className="text-[#ffffff] no-underline ">
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {/* Hamburger icon */}
                    <Menu color='#ffffff' />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#4B4847] px-4 py-2">
                    <ul className="flex flex-col space-y-2 text-gray-800">
                        {
                            navlink.map((item) => (
                                <li key={item.id}>
                                    <a href={item.path} className="text-[#ffffff] no-underline font-semibold">
                                        {item.name}
                                    </a>
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