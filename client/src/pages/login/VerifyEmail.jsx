import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


function VerifyEmail({ email }) {
    const [isLoading, setIsLoading] = useState(true)


    return (
        <div className='flex bg-lightbg justify-center items-center h-dvh'>
            {isLoading ? <Loader isLoading={true} /> : null}

            <Card className="w-[350px] bg-white">
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
            </Card>
        </div>
    )
}

export default VerifyEmail