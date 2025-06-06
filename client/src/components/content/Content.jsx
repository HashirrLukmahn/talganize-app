import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import JobCard from '../ui-components/JobCard'
import Button from '../ui-components/Button'
import Popup from '../ui-components/Popup';
import { jobsData } from '../../assets/testData'
import { useLocation, useNavigate } from 'react-router-dom';
import { savedJobs, saveJob, unsaveJob } from '@/services/jobService';
import Swal from "sweetalert2"
import * as Constants from '../../app-routes/Constants'
import Input from '../ui-components/Input';
import FilterBar from './FilterBar';
import JobGrid from './JobGrid';
function Content() {

    const [jobs, setJobs] = useState(jobsData)
    const [user, setUser] = useState(null)
    const [open, setOpen] = useState(false);
    const [savedJobIds, setSavedJobIds] = useState([])
    const [filters, setFilters] = useState({
        datePosted: "",
        payRange: "",
        jobTypes: [],
        location: "",
        industries: [],
        skills: [],
        remote: false,
        searchTitle: "",
    })
    const location = useLocation()
    const navigate = useNavigate()



    const [jobTitle, setJobTitle] = useState("")
    const [searchLocation, setSearchLocation] = useState("")

    // Apply filters when they change
    useEffect(() => {
        applyFilters()
    }, [filters])

    // Function to apply filters
    const applyFilters = () => {
        // setIsLoading(true)

        try {
            let filteredJobs = [...jobsData]

            // Filter by date posted
            if (filters.datePosted) {
                const daysAgo = Number.parseInt(filters.datePosted)
                filteredJobs = filteredJobs.filter((job) => job.company.updatedDaysAgo <= daysAgo)
            }

            // Filter by pay range
            if (filters.payRange) {
                const [minStr, maxStr] = filters.payRange.split("-")
                const min = Number.parseInt(minStr)
                const max = Number.parseInt(maxStr)

                filteredJobs = filteredJobs.filter((job) => {
                    if (job.job.salary === "Not disclosed") return true

                    // Extract numeric values from salary string (e.g., "$125k-150k Annually" -> [125000, 150000])
                    const salaryMatch = job.job.salary.match(/\$(\d+)k-(\d+)k/)
                    console.log('match', salaryMatch, job.job.salary);

                    if (!salaryMatch) return true

                    const jobMin = Number.parseInt(salaryMatch[1]) * 1000
                    const jobMax = Number.parseInt(salaryMatch[2]) * 1000

                    // Check if job salary range overlaps with filter range
                    return jobMin <= max && jobMax >= min
                })
            }

            // Filter by job types
            if (filters.jobTypes.length > 0) {
                filteredJobs = filteredJobs.filter((job) => filters.jobTypes.some((type) => job.job.tags.includes(type)))
            }

            // Filter by location
            if (filters.location) {
                filteredJobs = filteredJobs.filter((job) =>
                    job.job.location.toLowerCase().includes(filters.location.toLowerCase()),
                )
            }

            // Filter by industries (not in the sample data, but included for completeness)
            if (filters.industries.length > 0) {


                filteredJobs = filteredJobs.filter((job) => {
                    return filters.industries.some(industry =>
                        job.company.industry.toLowerCase() === industry.toLowerCase()
                    );
                });
            }

            // Filter by skills
            if (filters.skills.length > 0) {
                filteredJobs = filteredJobs.filter((job) =>
                    filters.skills.some((skill) => job.job.skills.some((jobSkill) => jobSkill.skill === skill)),
                )
            }

            // Filter by remote
            if (filters.remote) {
                filteredJobs = filteredJobs.filter((job) => job.job.tags.includes("Remote"))
            }

            // Filter by search title
            if (filters.searchTitle) {
                filteredJobs = filteredJobs.filter((job) =>
                    job.job.title.toLowerCase().includes(filters.searchTitle.toLowerCase()),
                )
            }

            setJobs(filteredJobs)
        } catch (error) {
            console.error("Error applying filters:", error)
        } finally {
            // setIsLoading(false)
        }
    }

    const handleSearch = () => {
        console.log('title', jobTitle, searchLocation);

        updateFilter("searchTitle", jobTitle)
        updateFilter("location", searchLocation)
    }

    // Update filters
    const updateFilter = (key, value) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }))
    }


    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user'));

        setUser(userInfo)
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

    const handleSaveJob = async (id) => {
        if (!user) {
            navigate(Constants.Login)
            return
        }
        try {
            const response = await saveJob(user.id, id)

            if (response.status) {
                fetchSavedJobs(user)
            } else {
                setSaved(false)
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Unable to save job.",
                    text: "Please try again later.",
                    showConfirmButton: false,
                    timer: 2000,
                    toast: true
                })
            }

        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Unable to save job.",
                text: "Please try again.",
                showConfirmButton: false,
                timer: 2000,
                toast: true
            })
        }

    }

    const handleUnsaveJob = async (id) => {
        if (!user) {
            navigate(Constants.Login)
            return
        }
        try {
            const response = await unsaveJob(user.id, id)
            fetchSavedJobs(user)

        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Unable to remove saved job.",
                text: "Please try again.",
                showConfirmButton: false,
                timer: 2000,
                toast: true
            })
        }

    }


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
                    <p>Recommended Jobs</p>
                </div>

                <div className="bg-white lg:w-[60%] mx-auto rounded-lg shadow-md p-4 mb-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            placeholder="Job title"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            className="flex-1"
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        />
                        <Input
                            placeholder="Location"
                            value={searchLocation}
                            onChange={(e) => setSearchLocation(e.target.value)}
                            className="flex-1"
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        />
                        <Button onClick={handleSearch} className="bg-secondary text-white">
                            Search
                        </Button>
                    </div>
                </div>

                <FilterBar
                    onFilterChange={updateFilter}
                    activeFilters={
                        Object.entries(filters).filter(([_, value]) => {
                            if (Array.isArray(value)) return value.length > 0
                            if (typeof value === "boolean") return value
                            return value !== ""
                        }).map(([key]) => key)
                    }

                />

                <JobGrid
                    jobs={jobs}
                    openModal={openModal}
                    closeModal={closeModal}
                    handleUnsaveJob={handleUnsaveJob}
                    handleSaveJob={handleSaveJob}
                    savedJobIds={savedJobIds}
                />


                {/* <div className='flex justify-center items-strech flex-wrap gap-5'>

                    {
                        jobs.map((job) => {
                            return (
                                <JobCard
                                    user={user}
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
                </div> */}
            </div>

        </div>
    )
}

export default Content