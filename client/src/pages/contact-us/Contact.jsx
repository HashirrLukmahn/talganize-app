import { Mail, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import bgImg from '../../assets/images/form-bg.png'
function Contact() {
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
        <div className='main h-screen bg-white '>
            <div className='w-full h-[40%] bg-talgan-green flex justify-center items-center text-white'>
                <h1 className='text-5xl font-semibold'>Contact Us</h1>
            </div>
            <div className='flex justify-center'>
                <div className='card-container flex flex-col md:flex-row  w-[100%] md:max-w-[800px] relative top-[-100px] rounded bg-white p-4 box-shadow'>
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
                    <div className='text-left p-10 grow'>
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
                            <button className='w-full bg-talgan-green hover:bg-talgan-green-dark px-5 py-2 rounded text-white font-semibold'>{buttonDisable ? 'Please Wait..' : 'Submit'}</button>
                        </form>
                        <div className='mx-auto mt-2 bg-white  rounded-lg inline-block '>
                            <p>{emailStatus}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact