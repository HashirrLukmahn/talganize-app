import React, { useEffect, useState } from 'react'
import JobCard from '../ui-components/JobCard'

function JobGrid({ jobs, openModal, closeModal, handleUnsaveJob, handleSaveJob, savedJobIds }) {
    const [user, setUser] = useState(null)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user'));

        // setUser(userInfo)
        // let jobid = location.pathname.split('/')

        // if (jobid === 1) {
        //     setOpen(true)
        // }
        fetchSavedJobs(userInfo)
    }, [])

    const fetchSavedJobs = async (userInfo) => {
        if (!userInfo) {
            return
        }
        try {

            const response = await savedJobs(userInfo.id)

            if (response.status) {
                setSavedJobIds(response.result)
            }
            else {
                setSavedJobIds([])
            }

        } catch (error) {
            console.log('Error', error)
        }

    }

    return (
        <div className='flex justify-center items-strech flex-wrap gap-5'>

            {
                jobs.map((job) => {
                    return (
                        <JobCard
                            // user={user}
                            key={job.id}
                            jobDetails={job}
                            openModal={openModal}
                            closeModal={closeModal}
                            isSaved={savedJobIds.includes(job.id)}
                            handleSaveJob={handleSaveJob}
                            handleUnsaveJob={handleUnsaveJob}
                            page='content' />
                    )
                })
            }
        </div>
    )
}

export default JobGrid