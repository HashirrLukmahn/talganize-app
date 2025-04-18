import React, { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import * as AppRoutes from '../../app-routes/Constants'
import Logo from '../../assets/images/Talganize.svg'
import { Link } from 'react-scroll'
import { NavLink, useNavigate } from 'react-router-dom'
import JobseekerDropdown from '../ui-components/JobseekerDropdown'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from '@/services/authService'
import * as Constants from '../../app-routes/Constants'


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState("")

    const navigate = useNavigate()


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user'))
        setUser(userInfo)
    }, [])


    const logoutUser = () => {
        logout()
        navigate(Constants.Login)
    }


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
                <ul className="hidden md:flex items-center space-x-6 font-semibold text-talgan-green">
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
                    {!user &&
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger>For Employers</DropdownMenuTrigger>
                                <DropdownMenuContent className=''>
                                    <DropdownMenuItem onClick={() => navigate(Constants.JobPost)}>Post a job</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>}
                    {!user && <li><NavLink to={AppRoutes.Login} className='bg-talgan-green px-5 py-2 text-white rounded cursor-pointer no-underline'>Login</NavLink></li>}

                    {user &&
                        <>

                            <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>{user.first_name}</DropdownMenuTrigger>
                                    <DropdownMenuContent className=''>
                                        <DropdownMenuItem onClick={() => navigate(Constants.Profile)}>Profile</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => navigate(Constants.SavedJobs)}>Saved Jobs</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => navigate(Constants.Jobs)}>Jobs</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={logoutUser}>Logout</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li>
                                <Avatar>
                                    <AvatarImage src={user.picture} />
                                    <AvatarFallback>{user.first_name.charAt(0).toUpperCase()}</AvatarFallback>
                                </Avatar>
                            </li>
                        </>}
                    {/* <li><JobseekerDropdown /></li> */}
                </ul>






                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {/* Hamburger icon */}
                    <Menu className='text-talgan-green' />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-yellow px-4 py-2">
                    <ul className="flex flex-col items-center space-y-2 text-talgan-green font-semibold">
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