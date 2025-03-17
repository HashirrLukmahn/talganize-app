import React from "react";

const Input = ({ type = "text", placeholder, value, onChange, required = false, id }) => {
    return (
        <input
            {...(id && { id })}
            type={type}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-secondary shadow-sm rounded-lg"
        />
    );
};

export default Input;
