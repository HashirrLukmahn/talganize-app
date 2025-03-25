import React, { useState } from "react";

const locations = ["OnSite", "Hybrid", "Remote", "Travel required"];

function ButtonSelector({ onSelect }) {
    const [selected, setSelected] = useState(null);

    const handleSelect = (location) => {
        setSelected(location);
        onSelect(location); // Callback to parent component
    };

    return (
        <div className="flex justify-start flex-wrap gap-4">
            {locations.map((location) => (
                <button
                    key={location}
                    className={`px-2 w-1/3 py-2 font-medium rounded-lg transition-all
            ${selected === location
                            ? "bg-primary text-white shadow-md"
                            : "bg-secondary text-white hover:bg-primary"
                        }`}
                    onClick={() => handleSelect(location)}
                >
                    {location}
                </button>
            ))}
        </div>
    );
}

export default ButtonSelector;
