import Carousel from '../../components/ui-components/Carousel'
import { Briefcase, Globe, GraduationCap } from 'lucide-react'
import { clients } from '../../assets/images'
import { images } from '../../assets/images'
import { Mail, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import bgImg from '../../assets/images/form-bg.png'
import Navbar from '../../components/navbar/Navbar'
function Home() {


    const form = useRef();

    const [emailStatus, setEmailStatus] = useState("")
    const [buttonDisable, setButtonDisable] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        setButtonDisable(true)
        setEmailStatus("")
        emailjs.sendForm('service_pwpyt6i', 'template_3xbeeek', form.current, {
            publicKey: 'KK5gpeywHnU7WSJJP',
        })
            .then(resp => {
                setButtonDisable(false)
                if (resp.status) {
                    console.log('success.')
                    setEmailStatus("Message sent successfully.")
                } else {
                    setEmailStatus("Unable to send, please try again.")
                }
            }).catch(err => {
                console.log('err', err)
                setButtonDisable(false)
                setEmailStatus("Unable to send, please try again.")
            })
    }


    return (

        <div className='w-full h-full'>
            <Navbar />
            <Carousel />

            <section id='about-us' className=' bg-yellow py-10 md:py-24 lg:py-24 text-left px-5'>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-green sm:text-4xl text-center mb-20">
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
                        <h2 className="text-3xl font-extrabold text-green sm:text-4xl text-center mb-2">
                            Our Clients
                        </h2>
                        {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Clients</h2> */}
                        <p className="max-w-[900px] text-green md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
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
            <section id='contact-us' className='bg-white py-10 md:py-24 lg:py-24 bg-no-repeat bg-cover bg-center filter ' style={{ backgroundImage: `url(${images.contactUs})` }}>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-20">
                    Contact Us
                </h2>
                <div className='flex justify-center px-2'>
                    <div className='card-container flex flex-col-reverse md:flex-row  w-[100%] md:max-w-[800px] rounded bg-white p-4 box-shadow'>
                        <div className='h-full w-full md:w-[40%] rounded pt-12 flex flex-col gap-8 pb-8 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
                            <div className='px-5 flex justify-start gap-3 text-gray'>
                                <Mail size={24} className='p-1 rounded ring-1 ring-slate-900/10' />
                                <div className='text-left'>
                                    <p className='font-semibold'>E-Mail</p>
                                    <p><a href='mailto:info@talganize.com'>info@talganize.com</a></p>
                                </div>
                            </div>
                            <div className='px-5 flex justify-start gap-3 text-gray'>
                                <MapPin size={24} className='p-1 rounded ring-1 ring-slate-900/10' />
                                <div className='text-left'>
                                    <p className='font-semibold'>India</p>
                                    <p> Plot NO 216, Phase 2, Saket Township,<br></br> Sainikpuri,
                                        DR A S Rao nagar, Secunderabad, <br></br>Hyderabad, 500062</p>
                                </div>
                            </div>
                            <div className='px-5 flex justify-start gap-3 text-gray'>
                                <MapPin size={24} className='p-1 rounded ring-1 ring-slate-900/10' />
                                <div className='text-left'>
                                    <p className='font-semibold'>USA</p>
                                    <p> 1421 Begonia Way Superior CO 80027 </p>
                                </div>
                            </div>
                        </div>
                        <div className='text-left px-10 py-5 grow'>
                            <div className='mb-5'>
                                <p className='text-gray text-4xl font-semibold mb-2'>Send Message</p>
                                <p className='text-[#9BA9BD]'>Please provide your details.</p>
                            </div>
                            <form ref={form} onSubmit={e => sendEmail(e)}>
                                <div className='flex flex-col mb-5'>
                                    <label className='text-gray mb-1'>First Name</label>
                                    <input
                                        name='first_name'
                                        type='text'
                                        className='rounded-md ring-1 ring-slate-900/10 hover:ring-slate-300 shadow-sm p-2 outline-none'
                                        placeholder='John'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col mb-5'>
                                    <label className='text-gray mb-1'>Last Name</label>
                                    <input
                                        name='last_name'
                                        type='text'
                                        className='rounded-md ring-1 ring-slate-900/10 hover:ring-slate-300 shadow-sm p-2 outline-none'
                                        placeholder='Doe' required />
                                </div>
                                <div className='flex flex-col mb-5'>
                                    <label className='text-gray mb-1'>Email Address</label>
                                    <input
                                        name='from_email'
                                        type='email'
                                        className='rounded-md ring-1 ring-slate-900/10 hover:ring-slate-300 shadow-sm p-2 outline-none'
                                        placeholder='e.g. johndoe@email.com' required />

                                </div>
                                <div className='flex flex-col mb-5'>
                                    <label className='text-gray mb-1'>Phone Number</label>
                                    <input
                                        name='phone_number'
                                        type='tel'
                                        className='rounded-md ring-1 ring-slate-900/10 hover:ring-slate-300 shadow-sm p-2 outline-none'
                                        placeholder='e.g. +1234567890' required />
                                </div>
                                <div className='flex flex-col mb-5'>
                                    <label className='text-gray mb-1'>Message</label>
                                    <textarea
                                        type='text'
                                        className='rounded-md ring-1 ring-slate-900/10 hover:ring-slate-300 shadow-sm p-2 outline-none'
                                        placeholder='Message...' required />
                                </div>
                                <button className='w-full bg-green hover:bg-green-dark px-5 py-2 rounded text-white font-semibold'>{buttonDisable ? 'Please Wait..' : 'Submit'}</button>
                            </form>
                            <div className='mx-auto mt-2 bg-white  rounded-lg inline-block '>
                                <p>{emailStatus}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='py-5 text-sm bg-yellow text-white'>
                <p className='text-green'>2025 © TALGANIZE.</p>
            </footer>
        </div >
    )
}


export default Home