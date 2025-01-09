import Carousel from '../../components/ui-components/Carousel'
import { Briefcase, Globe, GraduationCap } from 'lucide-react'
import { clients } from '../../assets/images'
function Home() {



    return (

        <div className='w-full h-full'>
            <Carousel />

            <section id='about-us' className=' bg-yellow py-10 md:py-24 lg:py-24 text-left px-5'>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-20">
                        We Excel in the Following Areas
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="bg-gray rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex items-center justify-center w-12 h-12 bg-yellow rounded-md mb-4">
                                <Globe />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Global Reach, Local Expertise</h3>
                            <p className="text-white">We proudly serve major markets across Singapore, India, and the US, ensuring our clients benefit from our extensive network and local knowledge.</p>
                        </div>
                        <div className="bg-gray rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex items-center justify-center w-12 h-12 bg-yellow rounded-md mb-4">
                                <Briefcase />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Industry-Spanning Expertise
                            </h3>
                            <p className="text-white">Our proficiency in placing technology professionals extends beyond the tech sector, reaching into non-technology industries, especially private markets and manufacturing industries. This versatility allows us to meet diverse hiring needs with precision.</p>
                        </div>
                        <div className="bg-gray rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex items-center justify-center w-12 h-12 bg-yellow rounded-md mb-4">
                                <GraduationCap />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Specialized Focus Areas</h3>
                            <p className="text-white">We are dedicated to supporting fresh graduates in launching their careers and providing comprehensive outplacement support.</p>
                        </div>
                    </div>
                </div>
            </section >
            <section id='our-clients' className=" mx-auto bg-[#F1F1F1]  w-full py-10 md:py-24 lg:py-24 bg-gray-50" >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-20">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-2">
                            Our Clients
                        </h2>
                        {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Clients</h2> */}
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            We're proud to work with some of the most innovative companies in the industry.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {clients.map((client, index) => (
                            <div key={index} className="overflow-hidden bg-white rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                                <div className="p-6">
                                    <div className="flex items-center justify-center h-24">
                                        <img
                                            src={client.logo}
                                            alt={`${client.name} logo`}
                                            width={180}
                                            height={80}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <footer className='py-5 text-sm bg-gray text-white'>
                <p>2025 © TALGANIZE PRIVATE LIMITED. ALL RIGHTS RESERVED.</p>
            </footer>

        </div >
    )
}


export default Home