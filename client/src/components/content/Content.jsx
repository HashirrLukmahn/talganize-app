import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import JobCard from '../ui-components/JobCard'
import Button from '../ui-components/Button'
import Popup from '../ui-components/Popup';
import { jobs } from '../../assets/testData'
import { useLocation } from 'react-router-dom';


function Content() {

    const [open, setOpen] = useState(false);
    const location = useLocation()


    useEffect(() => {
        let jobid = location.pathname.split('/')

        if (jobid === 1) {
            setOpen(true)
        }
    }, [])

    // const jobTypes = ["Full Time", "Part Time", "Contract", "Internship"];
    // const locations = ["New York", "San Francisco", "Remote", "Toronto"];



    const openModal = (id) => {
        setOpen(true)
    }

    const closeModal = () => setOpen(false);

    const handleFilterSelect = (filter) => {
        console.log("Selected filter:", filter);
    };


    return (
        <div className="bg-lightbg min-h-screen pb-20">
            <Navbar />

            {open && <Popup
                open={open}
                onClose={closeModal}
            >
            </Popup >}


            <div className='container mx-auto px-5 md:px-10 lg:px-20'>

                <div className='flex  justify-center py-5 mt-5 mb-5 text-4xl font-semibold text-left '>
                    <p>Recommened Jobs</p>
                </div>

                <div className="max-w-[800px] flex flex-col md:flex-row items-center mx-auto p-2 bg-white mb-5 rounded-md ring-1 shadow-md hover:shadow-lg ring-slate-200 transition-shadow shadow-black/5 ring-slate-700/10">
                    <form className="w-full flex flex-col md:flex-row items-center gap-2">
                        <input
                            type="text"
                            className="rounded-md flex-1 w-full md:w-auto px-5 py-2 outline-none ring-gray-400"
                            placeholder="Job title"
                            required
                        />
                        <div className='hidden flex-1 md:w-[2px] bg-red-700'></div>
                        <input
                            type="text"
                            className="rounded-md flex-1 w-full md:w-auto px-5 py-2 outline-none ring-gray-400"
                            placeholder="Location"
                            required
                        />
                        <Button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                            Search
                        </Button>
                    </form>
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
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 cursor-pointer font-medium text-gray-600 ring-1 ring-gray-500 ring-inset">Date</span>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 cursor-pointer font-medium text-gray-600 ring-1 ring-gray-500 ring-inset">Pay</span>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 cursor-pointer font-medium text-gray-600 ring-1 ring-gray-500 ring-inset">Job type</span>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 cursor-pointer font-medium text-gray-600 ring-1 ring-gray-500 ring-inset">Location</span>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 cursor-pointer font-medium text-gray-600 ring-1 ring-gray-500 ring-inset">Remote</span>
                </div>
                {/* flex justify-center items-strech flex-wrap gap-5 */}
                <div className='flex justify-center items-strech flex-wrap gap-5'>

                    {
                        jobs.map((job) => {
                            return (
                                <JobCard key={job.id} jobDetails={job} openModal={openModal} closeModal={closeModal} page='content' />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Content