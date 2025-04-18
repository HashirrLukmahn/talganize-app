import React, { useEffect, useState } from 'react'
import { carouselImages } from '../../assets/images'
import { Link } from 'react-scroll'
import { Building2, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import * as AppRoutes from '../../app-routes/Constants'
import { Badge } from "@/components/ui/badge"
import { jobs } from '../../assets/testData'
function Carousel() {

    const navigate = useNavigate()
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

    const navigateTo = () => {
        navigate(AppRoutes.Jobs)
    }

    return (
        <div className='flex-1 gap-2 h-[90vh] grid md:grid-cols-[1fr,450px]'>


            <div id='home' className="relative w-full  overflow-hidden">
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

                <div className="absolute inset-0 bg-black bg-opacity-5 flex flex-col justify-center items-center text-center text-white p-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Talganize</h1>
                    <p className="text-lg md:text-2xl mb-6">Find your dream job with us</p>

                    <Link to="contact-us" smooth={true} duration={300} className="cursor-pointer no-underline bg-talgan-green hover:bg-talgan-green-dark text-white font-bold py-3 px-6 rounded">
                        Get Started
                    </Link>
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




            <div className='flex bg-gray-50 flex-col gap-4 px-2 h-full py-4 overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent'>
                <div className="bg-gray-50 p-6 overflow-auto max-h-[calc(100vh-4rem)]">
                    <h2 className="text-xl font-semibold mb-6">Latest Job Openings</h2>
                    <div className="space-y-4">
                        {jobs.slice(0, 5).map((item, index) => (
                            <div key={index} className="p-4 hover:shadow-lg transition-shadow rounded-xl ring-1 shadow-md ring-gray-200">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Building2 className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">{item.company.name}</span>
                                        </div>
                                        <h3 className="font-semibold text-lg">{item.job.title}</h3>
                                    </div>
                                    <span className="text-sm text-gray-500">{item.company.updatedDaysAgo} Days ago</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {
                                        item.job.skills.slice(0, 2).map((skill, index) => (
                                            <Badge key={index} variant="outline">{skill.skill} • {skill.experience} y</Badge>
                                        ))
                                    }
                                    {
                                        item.job.skills.length > 2 && (<span className='text-sm'>more..</span>)
                                    }
                                    {/* <Badge variant="outline">{item.}</Badge>
                                    <Badge variant="outline">Machine Learning</Badge>
                                    <Badge variant="outline">AI</Badge> */}
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <MapPin className="h-4 w-4" />
                                        <span>San Francisco, CA</span>
                                    </div>
                                    <span className="font-medium">125k-150k Annually</span>
                                </div>
                                <button onClick={navigateTo} className='w-full mt-4 bg-talgan-green text-white px-4 py-2 rounded-md'>Details</button>
                            </div>
                        ))}
                    </div>
                </div>
                {/* {
                    jobs.slice(0, 5).map((job) => {
                        return (
                            <JobCard key={job.id} jobDetails={job} page='homepage' />
                        )
                    })
                } */}
            </div>
        </div>

    )
}

export default Carousel