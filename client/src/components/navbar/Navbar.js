import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import * as AppRoutes from '../../app-routes/AppRoutes'
import Logo from '../../assets/images/Logo.svg'
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
            name: "Job Seekers",
            path: AppRoutes.JobSeeker,
        },
        {
            id: 3,
            name: "Companies",
            path: AppRoutes.Companies,
        },
        {
            id: 4,
            name: "Contact Us",
            path: AppRoutes.ContactUs
        },
    ]

    return (
        <nav className="bg-[#4B4847] w-full">
            <div className="container mx-auto px-4 py-2 flex justify-between  items-center gap-2">
                {/* Logo */}
                <div className="w-[50px] md:w-[80px] text-2xl font-bold text-gray-800">
                    <img className='w-full' src={Logo} alt='Logo' />
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6  text-semibold">
                    {
                        navlink.map((item) => (
                            <li key={item.id}>
                                <Link to={item.path} className="text-[#ffffff] no-underline ">
                                    {item.name}
                                </Link>
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
                                    <Link to={item.path} className="text-[#ffffff] no-underline font-semibold">
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