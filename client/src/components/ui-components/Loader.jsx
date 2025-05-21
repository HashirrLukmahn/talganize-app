import React from 'react'
import { Oval, RotatingLines } from 'react-loader-spinner'

function Loader({ isLoading }) {
    return (
        <div>
            {
                isLoading ?
                    <div className='w-full h-full absolute z-30 left-0 top-0 backdrop-blur-lg flex justify-center items-center'>
                        <RotatingLines
                            visible={true}
                            height="50"
                            width="50"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div> : null
            }
        </div>
    )
}

export default Loader