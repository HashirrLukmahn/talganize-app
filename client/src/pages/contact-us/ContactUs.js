import { Mail, MapPin, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function ContactUs() {
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
        <div className="container mx-auto px-4 py-32">
            <div className="flex flex-col lg:flex-row gap-8 justify-between text-left">
                {/* Left Column - Contact Information */}
                <div className="flex-1 space-y-8">
                    <div className="space-y-4 mb-20">
                        <h1 className="text-4xl font-bold mb-10">Get In Touch With Us</h1>
                        {/* <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            quis nostrud exercitation ullamco
                        </p> */}
                    </div>

                    <div className="space-y-10">
                        {/* Location */}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-purple-700 text-white rounded-lg flex-shrink-0">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Our Location</h3>
                                <p className="text-gray-600">PLOT NO 216, PHASE 2, SAKET TOWNSHIP, SAINIKPURI,</p>
                                <p className="text-gray-600">DR A S RAO NAGAR, SECUNDERABAD, HYDERABAD 500062</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-purple-700 text-white rounded-lg flex-shrink-0">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Phone Number</h3>
                                <p className="text-gray-600">9535806430</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-purple-700 text-white rounded-lg flex-shrink-0">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Email Address</h3>
                                <p className="text-gray-600">info@talganize.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="flex-1">

                    <div className="shadow border border-gray-light rounded p-8 max-w-[500px]">
                        <h2 className='mb-10 text-black text-2xl font-semibold'>Send Message</h2>
                        <form className="flex flex-col space-y-4" ref={form} onSubmit={e => sendEmail(e)}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border outline-none border-gray-light rounded"
                                name='from_name'
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border outline-none border-gray-light rounded"
                                name='from_email'
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Your Phone"
                                className="w-full p-3 border outline-none border-gray-light rounded"
                                name='phone_number'
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={4}
                                className="w-full p-3 resize-none border outline-none border-gray-light rounded"
                                name='message'
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-pink-500 text-white py-3 px-6 transition-colors"
                                disabled={buttonDisable}
                            >
                                {buttonDisable ? 'Please Wait..' : 'Submit'}
                            </button>
                        </form>
                    </div>

                    <div className='p-2 mx-auto mt-2 bg-white  rounded-lg inline-block '>
                        <p>{emailStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs