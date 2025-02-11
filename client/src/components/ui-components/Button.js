import React from 'react'

function Button({ className, children, onClick }) {
    return (
        <>
            <button
                className={className ? `${className} mt-4 px-4 py-2 text-white font-medium bg-green hover:bg-green-dark rounded-lg duration-150` : `mt-4 px-4 py-2 text-white font-medium bg-green hover:bg-green-dark active:bg-indigo-600 rounded-lg duration-150`}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}

export default Button