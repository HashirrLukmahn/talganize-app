import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Swal from 'sweetalert2'
import { Link, useParams } from 'react-router-dom'
import { verifyEmailToken } from '@/services/authService'
import { CircleCheck, CircleX } from 'lucide-react'
import Loader from '@/components/ui-components/Loader'
import { Login } from '@/app-routes/Constants'

function EmailVerification() {

    const [verified, setVerified] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

    useEffect(() => {
        verifyToken(params.uniqueId)
    }, [])

    const verifyToken = async (uniqueId) => {
        setIsLoading(true)
        try {
            let data = {
                uniqueId: uniqueId
            }
            const response = await verifyEmailToken(data)

            if (response.status) {
                setIsLoading(false)
                setVerified(true)
            }
        } catch (error) {
            setIsLoading(false)
            Swal.fire({
                position: 'top-end',
                icon: "error",
                title: "Unable to verify email id.",
                text: "Please try again.",
                timer: 2000,
                toast: true,
                showConfirmButton: false
            })
        }

    }

    return (
        <div className='flex bg-lightbg justify-center items-center h-screen'>
            {isLoading ? <Loader isLoading={true} /> : null}
            {
                verified ? <Card className="w-[350px] bg-white">
                    <CardHeader>
                        {/* <CardTitle></CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription> */}
                        <div className='flex justify-center'>
                            <CircleCheck size={40} color='green' />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className='text-xl font-bold mb-4'>Congratulations.</p>
                        <p className='text-md'>Your email id is verified successfully!</p>
                        <p><Link to={Login} className='text-secondary'>Login</Link> to continue..</p>
                    </CardContent>
                </Card> :
                    <Card className="w-[350px] bg-white">
                        <CardHeader>
                            {/* <CardTitle></CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription> */}
                            <div className='flex justify-center'>
                                <CircleX size={40} color='red' />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className='text-xlg font-bold mb-4'>Email id verification failed.</p>
                            <p className='text-md'>Please try again...</p>
                        </CardContent>
                    </Card>
            }

        </div>
    )
}

export default EmailVerification