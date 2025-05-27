import React, { useState } from 'react'
import Button from '../../components/ui-components/Button'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/Talganize.svg'
import * as Constants from '../../app-routes/Constants'
import { useGoogleLogin } from '@react-oauth/google';
import { loginWithGoogle, loginWithEmail, sendEmailVerificationLink } from '@/services/authService';
import Swal from 'sweetalert2';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Loader from '@/components/ui-components/Loader';
import { CircleCheck } from 'lucide-react';
import Label from '@/components/ui-components/Label';
import Input from '@/components/ui-components/Input';
import { msalConfig, loginRequest } from '@/services/authService'
import { useMsal } from '@azure/msal-react';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailVerified, setEmailVerified] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [enteredEmail, setEnteredEmail] = useState('')
    

    //Configured MSAL hooks for Microsoft Authentication.
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();
    
    const navigate = useNavigate()
    

    const login = async (authResult) => {


        try {

            if (authResult['code']) {
                const result = await loginWithGoogle(authResult['code'])

                if (result.user && result.user.type_name === "JobSeeker") {
                    localStorage.setItem('token', result.token)
                    localStorage.setItem('user', JSON.stringify(result.user))
                    navigate(Constants.Jobs)
                } else if (result && result.user_type === 2) {
                    navigate(Constants.JobPost)
                }
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Unable to login.",
                    text: "Please try again.",
                    showConfirmButton: false,
                    timer: 2000,
                    toast: true
                })
                return
            }


        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Unable to login.",
                text: "Please try again.",
                showConfirmButton: false,
                timer: 2000,
                toast: true
            })
            console.log('Error: ', error);
        }
    };

        // AMENDED: Added Microsoft login handler function
    const handleMicrosoftLogin = async () => {
        try {
            const loginResponse = await instance.loginPopup({
                ...loginRequest,
                scopes: ["user.read"]
            });

            if (loginResponse.account) {
                // AMENDED: Handle Microsoft login success
                // You'll need to create a backend endpoint to handle Microsoft tokens
                // Similar to how you have loginWithGoogle
                const microsoftAuthData = {
                    accessToken: loginResponse.accessToken,
                    account: loginResponse.account
                };

                // AMENDED: You'll need to create this function in your authService.js
                // const result = await loginWithMicrosoft(microsoftAuthData);
                
                // For now, let's handle it similarly to Google login
                // You'll need to send the Microsoft token to your backend
                console.log('Microsoft login successful:', loginResponse);
                
                // AMENDED: Temporary success handling - replace with actual backend call
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Microsoft login successful!",
                    text: "You are now logged in.",
                    showConfirmButton: false,
                    timer: 2000,
                    toast: true
                });

                // AMENDED: Navigate to appropriate page after successful login
                // Replace this with your actual logic after backend integration
                navigate(Constants.Jobs);
                
            }
        } catch (error) {
            console.error('Microsoft login error:', error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Microsoft login failed.",
                text: "Please try again.",
                showConfirmButton: false,
                timer: 2000,
                toast: true
            });
        }
    };

    // AMENDED: Added Microsoft logout handler function
    const handleMicrosoftLogout = async () => {
        try {
            await instance.logoutPopup({
                postLogoutRedirectUri: '/',
            });
            // AMENDED: Clear local storage similar to regular logout
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            window.location.reload();
        } catch (error) {
            console.error('Microsoft logout error:', error);
        }
    };


    const googleLogin = useGoogleLogin({
        onSuccess: login,
        onError: login,
        flow: 'auth-code'
    })

    /*
    const microsoftLogin = useMicrosoftLogin({
        onSuccess: login,
        onError: login,
        flow:
    })
    */

    const testLogin = (e) => {
        e.preventDefault()
        localStorage.setItem('user', JSON.stringify(Constants.defaultUser.user))
        localStorage.setItem('token', Constants.defaultUser.token)
        navigate(Constants.Jobs)
    }

    const emailLogin = async (e) => {
        e.preventDefault()

        if (email.trim() === "" || password.trim() === "") {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Invalid input.",
                showConfirmButton: false,
                timer: 2000,
                toast: true

            })
            return
        }

        let data = {
            email: email,
            password: password
        }

        try {
            const result = await loginWithEmail(data)

            if (!result || !result.token || !result.user) {
                throw new Error("Invalid login response");
            }
            const { user, token } = result;


            const { type_name, email_verified } = user;

            if (type_name === "JobSeeker") {
                if (email_verified === 1) {
                    localStorage.setItem('token', token)
                    localStorage.setItem('user', JSON.stringify(user))
                    navigate(Constants.Jobs)
                } else {
                    setEmailVerified(true)
                }
            } else if (result && result.user_type === 2) {
                navigate(Constants.JobPost)
            }

        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Invalid email or password.",
                text: "Please try again with valid password.",
                showConfirmButton: false,
                toast: true,
                timer: 2000
            })
            console.log(error.meesage);
        }

    }

    const verifyEmail = async (e) => {
        e.preventDefault()

        if (enteredEmail.trim() === "") {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Invalid input.",
                text: "Please enter valid email.",
                showConfirmButton: false,
                toast: true,
                timer: 2000
            })
            return
        }
        try {
            let data = {
                email: enteredEmail
            }
            const response = await sendEmailVerificationLink(data)
            if (response.status) {
                setEmailVerified(true)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Please check your inbox.",
                    text: "A verification link has been sent to your email id.",
                    showConfirmButton: false,
                    toast: true,
                    timer: 2000
                })
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Unable to send verification link.",
                    text: "Please try again.",
                    showConfirmButton: false,
                    toast: true,
                    timer: 2000
                })
            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Unable to send verification link.",
                text: "Please try again.",
                showConfirmButton: false,
                toast: true,
                timer: 2000
            })
        }
    }

    return (
        <>
            {
                !emailVerified ?
                    <div className='bg-[#F5F7F9] h-screen'>
                        < div className='w-full h-full flex flex-col justify-center items-center gap-6 px-4' >
                            <div className='w-64'>
                                <Link to={'/'}><img src={Logo} alt='Talganize' /></Link>
                            </div>
                            <div className='bg-white px-5 py-8 md:px-10 md:py-8 w-full md:w-[500px] shadows text-left rounded-md'>

                                <p className='text-3xl font-bold mb-2'>Login</p>
                                <p className='text-gray-text mb-4'>Please enter your details</p>
                                <div className='flex flex-col mb-8'>
                                    <button
                                        onClick={googleLogin}
                                        className='flex justify-center items-center gap-4 relative w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none
                             border border-gray-light shadow-sm rounded-lg font-semibold mb-4'>
                                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_17_40)">
                                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_17_40">
                                                    <rect width="48" height="48" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span> Continue with Google</span>
                                    </button>
                                    <button
                                        onClick={handleMicrosoftLogin}
                                        className='flex justify-center items-center gap-4 relative w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none
                             border border-gray-light shadow-sm rounded-lg font-semibold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><title>MS-SymbolLockup</title>
                                            <rect x="1" y="1" width="9" height="9" fill="#f25022" /><rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                                            <rect x="11" y="1" width="9" height="9" fill="#7fba00" /><rect x="11" y="11" width="9" height="9" fill="#ffb900" />
                                        </svg>
                                        <span>Continue with Microsoft</span>
                                    </button>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='h-[1px] w-1/2 bg-gray-text'></div>
                                    <p className='px-1 text-gray-text'>or</p>
                                    <div className='h-[1px] w-1/2 bg-gray-text'></div>
                                </div>
                                <div className='mt-4 mb-4'>
                                    <form onSubmit={emailLogin} >
                                        <label className="font-medium">
                                            Email
                                        </label>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            required
                                            placeholder='Enter your e-mail'
                                            className="w-full mt-2 px-3 py-2 mb-6 text-gray-500 bg-transparent outline-none border border-gray-light focus:border-talgan-green shadow-sm rounded-lg"
                                        />
                                        <label className="font-medium">
                                            Password
                                        </label>
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            required
                                            placeholder='Enter your password'
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-light focus:border-talgan-green shadow-sm rounded-lg"
                                        />

                                        <Button type='submit' className='w-full mt-6'>Sign in</Button>
                                    </form>
                                    <Button onClick={testLogin} type='submit' className='w-full mt-6'>Test sign in</Button>

                                </div>

                                <div className='w-full flex justify-center mb-4'>
                                    <p>Don't have an account? <Link className='text-talgan-green font-semibold' to={Constants.Register}>Sign up</Link></p>
                                </div>
                                <div className='w-full flex justify-center'>
                                    <Link className='text-talgan-green font-semibold' to={Constants.ForgotPassword}>Forgot Password?</Link>
                                </div>
                            </div>
                        </div >
                    </div >
                    :
                    <div className='flex bg-lightbg justify-center items-center h-dvh'>
                        {isLoading ? <Loader isLoading={true} /> : null}

                        <Card className="w-[350px] bg-white">
                            <CardHeader>
                                <CardTitle>Your email is not verified.</CardTitle>
                                <CardDescription>Please verify before login.</CardDescription>
                            </CardHeader>
                            <CardContent className="text-left">
                                <form onSubmit={verifyEmail}>
                                    <Label className="mb-2">Email</Label>
                                    <Input
                                        type='email'
                                        placeholder="Enter your email."
                                        className="mb-2"
                                        required
                                        value={enteredEmail}
                                        onChange={(e) => setEnteredEmail(e.target.value)}
                                    />
                                    <Button type="submit" className='mt-4 w-full'>Verify</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
            }

        </>
    )
}

export default Login