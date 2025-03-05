import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import JobCard from '../ui-components/JobCard'
import Button from '../ui-components/Button'
import Popup from '../ui-components/Popup';




function Content() {

    const [open, setOpen] = useState(false);



    const openModal = (id) => {
        setOpen(true)
        console.log('open')
    }

    const closeModal = () => setOpen(false);

    return (
        <div className="bg-[#F0F2FA] min-h-screen pb-20">
            <Navbar />

            {open && <Popup
                open={open}
                onClose={closeModal}
            >
            </Popup>}

            <div className='container mx-auto px-5 md:px-10 lg:px-20'>

                <div className='flex  justify-center py-5 mt-5 mb-5 text-4xl font-semibold text-left '>
                    <p>Recommened Jobs</p>
                </div>

                <div className='max-w-[800px] flex flex-col md:flex-row mx-auto p-2 bg-white mb-5 rounded-md ring-1 shadow-md hover:shadow-xl ring-slate-200 transition-shadow hadow-black/5 ring-slate-700/10'>
                    <form className='w-full '>
                        <div className=''>
                            <div className='flex flex-col md:flex-row'>
                                <input
                                    name=''
                                    type='text'
                                    className='rounded-md w-full px-5 py-2 p-2 outline-none  md:ring-0'
                                    placeholder='Job title' required />
                                <div className='w-full h-[1px] md:w-[2px] bg-gray-400'></div>
                                <input
                                    name=''
                                    type='text'
                                    className='rounded-md w-full px-5 py-2 p-2 outline-none   md:ring-0'
                                    placeholder='Location' required />
                                <div className='w-full h-[1px] md:w-[2px] bg-gray-400'></div>
                            </div>
                        </div>
                    </form>
                    <Button className='self-end mt-3 md:mt-0'>Search</Button>
                </div>
                {/* <div className='inline-block bg-white mb-5 '>
                    <div className='flex flex-col md:flex-row gap-4 justify-center py-2 px-2 border border-gray-200 shadow-md hover:shadow-lg transition-shadow'>
                        <div className='min-w-[400px] max-w-[500px]'>
                            <input
                                name=''
                                type='text'
                                className='rounded-md w-full px-5 py-2 p-2 outline-none'
                                placeholder='Search Jobs' required />

                        </div>
                        <div className='w-[2px] bg-gray-400'></div>
                        <div className='min-w-[400px] max-w-[500px]'>
                            <input
                                name=''
                                type='text'
                                className='rounded-md w-full px-5 py-2 p-2 outline-none'
                                placeholder='Location' required />

                        </div>
                        <div>
                            <Button>Search</Button>

                        </div>
                    </div>
                </div> */}

                <div className='flex justify-center items-center gap-5 flex-wrap mb-20'>

                    <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 cursor-pointer font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">Frontend</span>
                    <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 cursor-pointer font-medium text-gray-600  ring-gray-500/10 ring-inset">Backend</span>
                    <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 cursor-pointer font-medium text-gray-600  ring-gray-500/10 ring-inset">Fullstack</span>
                    <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 cursor-pointer font-medium text-gray-600  ring-gray-500/10 ring-inset">Data Scientist</span>
                    <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 cursor-pointer font-medium text-gray-600  ring-gray-500/10 ring-inset">Devops</span>
                </div>

                <div className='flex justify-center items-center flex-wrap gap-5'>
                    <JobCard openModal={openModal} closeModal={closeModal} />
                    <JobCard openModal={openModal} closeModal={closeModal} />
                    <JobCard openModal={openModal} closeModal={closeModal} />
                    <JobCard openModal={openModal} closeModal={closeModal} />
                    <JobCard openModal={openModal} closeModal={closeModal} />
                    <JobCard openModal={openModal} closeModal={closeModal} />
                    <JobCard openModal={openModal} closeModal={closeModal} />
                    <JobCard openModal={openModal} closeModal={closeModal} />
                    <JobCard openModal={openModal} closeModal={closeModal} />
                </div>
            </div>

        </div>
    )
}

export default Content