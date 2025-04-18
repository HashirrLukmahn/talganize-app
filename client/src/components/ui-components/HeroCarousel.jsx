import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { carouselImages } from '../../assets/images'

const carouselItems = [
    {
        id: 1,
        image: "https://cdn.pixabay.com/photo/2023/04/19/09/34/flower-7937334_960_720.jpg",
        title: "Find Your Dream Job Today",
        description: "Connect with top employers and discover opportunities that match your skills and aspirations.",
        cta: "Search Jobs",
    },
    {
        id: 2,
        image: "https://cdn.pixabay.com/photo/2021/12/10/16/04/bellflower-6860818_640.jpg",
        title: "Thousands of New Opportunities",
        description: "Browse through our extensive collection of job listings across various industries.",
        cta: "Explore Careers",
    },
    {
        id: 3,
        image: "https://cdn.pixabay.com/photo/2024/05/15/07/59/flowers-8763039_640.jpg",
        title: "Career Growth Starts Here",
        description: "Take the next step in your professional journey with resources and guidance.",
        cta: "Get Started",
    },
]

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg h-[500px]">
            {/* Carousel Images */}
            <div className="relative h-full">
                {carouselItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img src={item.image || "/placeholder.svg"} alt={item.title} className="object-cover w-full h-full" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                            <div className="text-white p-8 md:p-12 max-w-2xl">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{item.title}</h1>
                                <p className="text-lg md:text-xl opacity-90 mb-6">{item.description}</p>

                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg mb-6">
                                    <div className="flex flex-col md:flex-row gap-3">
                                        <div className="flex-1">
                                            <div className="relative">
                                                <Search
                                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                                    size={18}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Job title, keywords, or company"
                                                    className="w-full pl-10 pr-4 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                placeholder="Location"
                                                className="w-full px-4 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                        </div>
                                        <Button className="md:w-auto">
                                            <Search className="mr-2 h-4 w-4" /> {item.cta}
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                                        Upload Resume
                                    </Button>
                                    <Button>Browse Categories</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/40"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

