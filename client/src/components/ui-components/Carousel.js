import React, { useEffect, useState } from 'react'
import { carouselImages } from '../../assets/images'

function Carousel() {


    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    // Handle manual slide control (optional)
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Carousel Images */}
            {carouselImages.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
            ))}

            {/* Overlay */}

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Talganize</h1>
                <p className="text-lg md:text-2xl mb-6">Find your dream job with us</p>
                <button className="bg-[#6DD5FF] hover:bg-[#37b2e2] transition-bg duration-500 text-white font-bold py-3 px-6 rounded">
                    Get Started
                </button>
            </div>

            {/* Manual Slide Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    )
}

export default Carousel