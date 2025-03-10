import React from 'react'

function Button({ className, children, onClick }) {
    return (
        <>
            <button
                className={className ? `${className}  px-4 py-2 text-white font-medium bg-talgan-green hover:bg-talgan-green-dark rounded-lg duration-150` : `px-4 py-2 text-white font-medium bg-talgan-green hover:bg-talgan-green-dark active:bg-talgan-green-dark rounded-lg duration-150`}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}

export default Button