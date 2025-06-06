import React from "react";

const Input = ({ type = "text", name, placeholder, value, onChange, required = false, id }) => {


    // className = "w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-secondary shadow-sm rounded-lg"

    return (
        <input
            {...(id && { id })}
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground ring-1 ring-gray-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
    );
};

export default Input;
