import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import { jobs } from '../../assets/testData'
import JobCard from '../ui-components/JobCard'
import Popup from '../ui-components/Popup';

function SavedJobs() {

    const [open, setOpen] = useState(false);

    const openModal = (id) => {
        setOpen(true)
    }

    const closeModal = () => setOpen(false);

    return (
        <div className='bg-[#F0F2FA] min-h-screen justify-center items-center'>
            <Navbar />

            {open && <Popup
                open={open}
                onClose={closeModal}
            >
            </Popup >}
            <div className='flex mx-auto max-w-[900px] justify-center py-5 mt-5 mb-2 text-4xl font-semibold text-left '>
                <p>Saved Jobs</p>
            </div>
            <div className='container flex justify-center items-strech flex-wrap gap-5 mt-4 mx-auto'>

                {
                    jobs.slice(0, 3).map((job) => {
                        return (
                            <JobCard key={job.id} jobDetails={job} openModal={openModal} closeModal={closeModal} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default SavedJobs