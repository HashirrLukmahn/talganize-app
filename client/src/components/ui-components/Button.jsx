import React from 'react';

const Button = ({ variant = "normal", className = "", children, onClick }) => {
    const baseClasses = "px-4 py-2 font-medium rounded-lg duration-150 transition-all";

    const variants = {
        normal: "bg-secondary text-white hover:bg-talgan-green-dark",
        outline: "border border-secondary text-secondary hover:bg-secondary hover:text-white",
        muted: " border border-muted text-muted",
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant] || variants.normal} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;