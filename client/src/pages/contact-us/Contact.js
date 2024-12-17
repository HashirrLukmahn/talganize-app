import React from 'react'

function Contact() {
    return (
        <div className='h-[90vh] flex justify-center'>
            <div className='container h-[100%] pt-24 flex flex-col md:flex-row justify-between items-start'>
                <div className=''>
                    <h1 className='text-3xl'>Contact Us</h1>
                </div>
                <div className='form-wrap shadow-md rounded p-5 w-[550px]'>
                    <h1 className='font-medium text-3xl text-left mb-10'>Send Message</h1>
                    <form className='text-left'>
                        <div className='flex flex-col mb-5'>
                            <label className='mb-1'>Full Name</label>
                            <input className='px-5 py-2 border outline-none border-gray-light rounded'
                                placeholder='Full Name'
                                type='text'
                                required
                            />
                        </div>
                        <div className='flex flex-col  mb-5'>
                            <label className='mb-1'>Phone Number</label>
                            <input className='px-5 py-2 border outline-none border-gray-light rounded'
                                placeholder='Phone Number'
                                type='tel'
                                required
                            />
                        </div>
                        <div className='flex flex-col  mb-5'>
                            <label className='mb-1'>Email</label>
                            <input className='px-5 py-2 border outline-none border-gray-light rounded'
                                placeholder='Email'
                                type='email'
                                required
                            />
                        </div>
                        <div className='flex flex-col  mb-5'>
                            <label className='mb-1'>Message</label>
                            <textarea className='px-5 py-2 border outline-none border-gray-light rounded'
                                placeholder='Message'
                                required
                            />
                        </div>
                        <div className='w-full'>
                            <button className='w-full bg-[#4B4847] text-white py-2 rounded'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact