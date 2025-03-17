import React from 'react'
import Button from '../../components/ui-components/Button'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Talganize.svg'
import * as AppRoutes from '../../app-routes/AppRoutes'

function ForgotPassword() {


    return (
        <div className='bg-[#F5F7F9] h-screen'>
            <div className='w-full h-full flex flex-col justify-center items-center gap-6 px-4'>
                <div className='w-64'>
                    <Link to={'/'}><img src={Logo} alt='Talganize' /></Link>
                </div>
                <div className='bg-white px-5 py-8 md:px-10 md:py-8 w-full md:w-[500px] shadows text-left rounded-md'>

                    <p className='text-3xl font-bold mb-2'>Forgot Password</p>
                    <p className='text-gray-text mb-4'>Please enter your details</p>

                    <div className='mt-4 mb-4'>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            placeholder='Enter your e-mail'
                            className="w-full mt-2 px-3 py-2 mb-6 text-gray-500 bg-transparent outline-none border border-gray-light focus:border-talgan-green shadow-sm rounded-lg"
                        />
                        <Button className='w-full'>Send Password Reset Link</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword