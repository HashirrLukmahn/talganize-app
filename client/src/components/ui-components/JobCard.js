import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as AppRoutes from '../../app-routes/AppRoutes'


function JobCard(props) {

    const navigate = useNavigate()

    const experienceLevel = [
        { key: 'Entry level', value: 'Internships, 0 - 1 year total work experience' },
        { key: 'Junior level', value: '1 - 2 years total work experience' },
        { key: 'Mid level', value: '2 - 5 years total work experience' },
        { key: 'Senior level', value: '5-9 years total work experience' },
        { key: 'Expert/Managerial', value: 'Above 9 years specialized work' },
    ]

    const skills = [
        { skill: 'React.js', experience: '2' },
        { skill: 'Node.js', experience: '2' },
        { skill: 'Javascript', experience: '2' },
        { skill: 'HTML', experience: '2' },
        { skill: 'MongoDB', experience: '2' },
        { skill: 'Github', experience: '2' },

    ]

    const tags = [
        { tag: 'Full time' },
        { tag: 'Remote' },

    ]

    function showJobs(id) {
        console.log(id);

        if (id !== undefined) {
            navigate(`${AppRoutes.Jobs}/${id}`)
        } else {
            navigate(`${AppRoutes.Jobs}`)
        }

        props.openModal()

    }


    return (
        <div className='rounded-xl ring-1 shadow-md hover:shadow-xl ring-slate-200 transition-shadow hadow-black/5 ring-slate-700/10  text-slate-700 p-5 md:p-6 text-left h-auto max-w-[400px] bg-white'>
            <div className='mb-6 flex gap-3 justify-start items-center'>
                <div className='rounded-full'>
                    <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_17_40)">
                            <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                            <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                            <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                            <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                        </g>
                        <defs>
                            <clipPath id="clip0_17_40">
                                <rect width="48" height="48" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <p className='font-semibold'>Amazon</p>
                <span className='text-gray-400 font-medium text-[12px]'>5 Days ago</span>
            </div>
            <div className='flex justify-start items-baseline gap-2 mb-2'>


            </div>
            <div className='flex items-baseline gap-2 mb-6'>
                <p className='font-bold text-2xl'>Data Scientist</p>
                <span className='text-gray-400 font-medium text-[12px]' title='Internships, 0 - 1 year total work experience'>Entry Level</span>
            </div>
            <div className='flex gap-3 flex-wrap text-sm mb-10'>
                {
                    skills.map(item => (
                        <span className="inline-flex items-center rounded-sm bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
                            {item.skill} - {item.experience} Yrs
                        </span>
                    ))
                }

            </div>
            <hr className='text-gray-light'></hr>
            <div className='flex justify-between items-center p-2'>
                <div>
                    <p className='text-sm'>₹ 125k-150k Annually</p>
                    <span className='text-[12px] text-gray-400'>San Francisco, CA</span>
                    <div className='flex gap-3 flex-wrap text-sm mt-2'>
                        {
                            tags.map(item => (
                                <span className="inline-flex items-center rounded-sm bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
                                    {item.tag}
                                </span>
                            ))
                        }

                    </div>
                </div>
                <button onClick={(e) => showJobs(1)} className='bg-green px-4 py-1 rounded text-white'>Details</button>

            </div>
        </div>
    )
}

export default JobCard