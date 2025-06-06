import { saveJob, unsaveJob } from "@/services/jobService"
import Button from "./Button"
import { Bookmark, BookmarkCheck, Clock, DollarSign, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

function JobCard(props) {

    const [saved, setSaved] = useState(false)

    const { company, job, id } = props?.jobDetails
    const { isSaved, handleSaveJob, handleUnsaveJob } = props



    const experienceLevel = [
        { key: "Entry level", value: "Internships, 0 - 1 year total work experience" },
        { key: "Junior level", value: "1 - 2 years total work experience" },
        { key: "Mid level", value: "2 - 5 years total work experience" },
        { key: "Senior level", value: "5-9 years total work experience" },
        { key: "Expert/Managerial", value: "Above 9 years specialized work" },
    ]

    const expLevel = experienceLevel.find(level => level.key === job.experienceLevel);


    function showJobs(id) {
        props.openModal()
    }






    return (
        <div className="rounded-xl ring-1 shadow-md hover:shadow-xl transition-all duration-300 ring-gray-200 p-6 bg-white w-[350px] md:w-[400px] ">
            {/* Company & Time */}
            <div className="flex relative items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shadow-sm">
                    <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_17_40)">
                            <path
                                d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                                fill="#4285F4"
                            />
                            <path
                                d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                                fill="#34A853"
                            />
                            <path
                                d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                                fill="#FBBC04"
                            />
                            <path
                                d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                                fill="#EA4335"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_17_40">
                                <rect width="48" height="48" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col items-start">
                    <p className="font-semibold text-lg text-primary">{company?.name}</p>
                    <div className="flex items-center text-gray-500 text-sm mt-0.5">
                        <Clock size={14} className="mr-1" />
                        <span>{company?.updatedDaysAgo} days ago</span>
                    </div>
                </div>
                <div className="ml-auto mb-auto cursor-pointer" >
                    {isSaved ? <span className="flex text-sm items-center text-gray-600" onClick={(e) => handleUnsaveJob(id)}><BookmarkCheck className="mr-1" size={16} /> Saved</span>
                        : <span className="flex text-sm items-center text-gray-600" onClick={(e) => handleSaveJob(id)}><Bookmark className="mr-1" size={16} /> Save</span>}
                </div>
            </div>

            {/* Job Title & Experience */}
            <div className="mb-5 text-left flex items-baseline">
                <h2 className="font-bold text-2xl text-primary mb-1.5 mr-2">{job?.title}</h2>
                <div className="inline-flex items-center px-1 py-1 rounded text-xs font-medium  text-gray-500" title={expLevel.value}>
                    {job?.experienceLevel}
                </div>
            </div>

            {/* Skills */}
            {/* flex gap-2 flex-wrap items-center overflow-x-hidden min-w-full */}
            <div className="mb-6 text-left">
                <h3 className="text-sm font-medium text-gray-700 mb-2.5">Required Skills</h3>
                <div className="flex gap-2 flex-wrap items-center overflow-x-hidden min-w-full">
                    {job.skills.slice(0, 5).map((item, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100 transition-colors"
                        >
                            {item.skill}
                            <span className="ml-1 text-gray-500">• {item.experience} y</span>
                        </span>
                    ))}
                    {job.skills.length > 5 && (
                        <span className="text-xs text-gray-500">+{job.skills.length - 3} more</span>
                    )}
                </div>
            </div>
            {/* <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2.5">Required Skills</h3>
                <div className="relative">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent max-h-[72px] mask-fade-right">
                        {skills.map((item, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100 transition-colors whitespace-nowrap flex-shrink-0"
                            >
                                {item.skill}
                                <span className="ml-1 text-gray-500">• {item.experience} yrs</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div> */}

            <hr className="border-gray-100 my-5" />

            {/* Salary & Location */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <div className="flex items-center mb-2">
                        <DollarSign size={16} />
                        <p className="font-semibold text-primary">{job.salary}</p>
                    </div>

                    <div className="flex items-center mb-3">
                        <MapPin size={16} className="text-gray-500 mr-1.5" />
                        <span className="text-sm text-gray-600">{job.location}</span>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        {job.tags.slice(0, 2).map((item, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700"
                            >
                                {item}
                            </span>
                        ))}
                        {
                            job.tags.length > 2 && (
                                <span className="inline-flex items-center text-xs text-gray-500">+{job.tags.length - 2} more</span>
                            )
                        }
                    </div>
                </div>

                {/* Details Button */}
                <Button
                    onClick={() => showJobs(1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow w-full sm:w-auto"
                >
                    View Details
                </Button>
            </div>
        </div>
    )
}

export default JobCard

