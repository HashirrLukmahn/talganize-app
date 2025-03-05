import React, { useState } from 'react'
import Button from '../ui-components/Button'
import Navbar from '../navbar/Navbar'
import { Plus, Trash2 } from 'lucide-react';
import Label from '../ui-components/Label';

function Profile() {






    // Experience
    const [experiences, setExperiences] = useState([
        { id: Date.now(), company: '', jobTitle: '', from: '', to: '' },
    ]);

    const addExperience = () => {
        setExperiences([...experiences, { id: Date.now(), company: '', jobTitle: '', from: '', to: '' }]);
    };

    const removeExperience = (id) => {
        setExperiences(experiences.filter((exp) => exp.id !== id));
    };


    // Education

    const [educations, setEducations] = useState([
        { id: Date.now(), degree: '', institution: '', graduationYear: '', country: '', gpa: '' },
    ]);

    const addEducation = () => {
        setEducations([...educations, { id: Date.now(), degree: '', institution: '', graduationYear: '', country: '', gpa: '' }]);
    };

    const removeEducation = (id) => {
        setEducations(educations.filter((edu) => edu.id !== id));
    };
    return (
        <div className='bg-[#F0F2FA] min-h-screen justify-center items-center'>
            <Navbar />


            <div className='flex flex-col items-center mt-6'>
                <div className='rounded-xl ring-1 shadow-md hover:shadow-xl ring-slate-200 transition-shadow shadow-black/5 ring-slate-700/10 text-slate-700 p-6 text-left h-auto w-full max-w-[900px] bg-white mx-auto'>
                    <p className='mb-6 text-2xl font-semibold'>Basic Details</p>

                    <div className='flex flex-col sm:flex-row justify-center gap-6'>
                        <div className='w-full sm:w-1/2'>
                            <label className='text-sm font-semibold'>First Name</label>
                            <input
                                type='text'
                                className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                placeholder='First Name' />
                        </div>
                        <div className='w-full sm:w-1/2'>
                            <label className='text-sm font-semibold'>Last Name</label>
                            <input
                                type='text'
                                className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                placeholder='Last Name' />
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-center gap-6 mt-4'>
                        <div className='w-full sm:w-1/2'>
                            <label className='text-sm font-semibold'>Email Id</label>
                            <input
                                type='text'
                                className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                placeholder='Email Id' />
                        </div>
                        <div className='w-full sm:w-1/2'>
                            <label className='text-sm font-semibold'>Phone Number</label>
                            <input
                                type='text'
                                className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                placeholder='Phone Number' />
                        </div>
                    </div>

                    <div className='mt-6 flex justify-end'>
                        <Button>Update</Button>
                    </div>
                </div>




                {/* Experience Details */}
                <div className='w-full max-w-[900px] mx-auto'>
                    <div className='rounded-xl mt-4 ring-1 shadow-md hover:shadow-xl ring-slate-200 transition-shadow shadow-black/5 ring-slate-700/10 text-slate-700 p-6 text-left bg-white relative'>
                        <p className='mb-6 text-2xl font-semibold'>Experience Details</p>

                        {experiences.map((experience, index) => (
                            <div key={experience.id}>
                                <div className='flex justify-between items-baseline mb-4'>
                                    <p className='text-lg font-semibold'>Experience {index + 1}</p>
                                    {experiences.length > 1 && (
                                        <button className='bg-white flex items-center gap-2 px-2 py-1 ring-1 ring-green rounded-md' variant='destructive' onClick={() => removeExperience(experience.id)}>
                                            <Trash2 size={18} />
                                            Remove
                                        </button>
                                    )}
                                </div>

                                <div className='flex flex-col sm:flex-row justify-center gap-6'>
                                    <div className='w-full'>
                                        <Label required className='text-sm font-semibold'>Company Name</Label>
                                        <input
                                            type='text'
                                            className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                            placeholder='Company Name'
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <Label required className='text-sm font-semibold'>Job Title</Label>
                                        <input
                                            type='text'
                                            className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                            placeholder='Job Title'
                                        />
                                    </div>
                                </div>

                                <div className='flex flex-col sm:flex-row justify-center gap-6 mt-4'>
                                    <div className='w-full sm:w-1/3'>
                                        <Label required className='text-sm font-semibold'>From</Label>
                                        <input
                                            type='month'
                                            min='1990-01'
                                            max='2025-03'
                                            required
                                            className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                        />
                                    </div>
                                    <div className='w-full sm:w-1/3'>
                                        <Label className='text-sm font-semibold'>To</Label>
                                        <input
                                            type='month'
                                            min='1990-01'
                                            max='2025-03'
                                            required
                                            className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                        />
                                    </div>
                                    <div className='w-full sm:w-1/3'>
                                        <Label required className='text-sm font-semibold'>Country</Label>
                                        <input
                                            type='text'
                                            className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                            placeholder='Country'
                                        />
                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <Label required className='text-sm font-semibold'>Describe your role</Label>
                                    <textarea
                                        className='rounded-md resize-y h-32 w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                        placeholder='Describe your role'
                                    />
                                </div>

                                <hr className='w-full h-[2px] bg-gray-400 mt-8 mb-4'></hr>
                            </div>
                        ))}

                        <div className='mt-6 flex flex-col sm:flex-row justify-between gap-4'>
                            <button className='bg-white flex items-center gap-2 px-2 py-1 ring-1 ring-green rounded-md' onClick={addExperience}><Plus />Add Experience</button>
                            <Button>Update</Button>
                        </div>
                    </div>
                </div>



                {/* Education */}



                <div className='w-full max-w-[900px] mx-auto'>
                    <div className='rounded-xl mt-4 ring-1 shadow-md hover:shadow-xl ring-slate-200 transition-shadow shadow-black/5 ring-slate-700/10 text-slate-700 p-6 text-left bg-white relative'>
                        <p className='mb-6 text-2xl font-semibold'>Education Details</p>

                        {educations.map((education, index) => (
                            <div key={education.id}>
                                <div className='flex justify-between items-center mb-4'>
                                    <p className='text-lg font-semibold'>Education {index + 1}</p>
                                    {educations.length > 1 && (
                                        <button className='bg-white flex items-center gap-2 px-2 py-1 ring-1 ring-green rounded-md' variant='destructive' onClick={() => removeEducation(education.id)}>
                                            <Trash2 size={18} />Remove
                                        </button>
                                    )}
                                </div>

                                {/* Degree & Institution Name */}
                                <div className='flex flex-col sm:flex-row justify-center gap-6'>
                                    <div className='w-full'>
                                        <label className='text-sm font-semibold'>Degree</label>
                                        <input
                                            type='text'
                                            className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                            placeholder='Degree'
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <label className='text-sm font-semibold'>Institution Name</label>
                                        <input
                                            type='text'
                                            className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                            placeholder='Institution Name'
                                        />
                                    </div>
                                </div>

                                {/* Graduation Year & Country */}
                                <div className='flex flex-col sm:flex-row justify-center gap-6 mt-4'>
                                    <div className='w-full sm:w-1/2'>
                                        <label className='text-sm font-semibold'>Graduation Year</label>
                                        <input
                                            type='number'
                                            min='1900'
                                            max='2030'
                                            required
                                            className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                            placeholder='Graduation Year'
                                        />
                                    </div>
                                    <div className='w-full sm:w-1/2'>
                                        <label className='text-sm font-semibold'>Country</label>
                                        <input
                                            type='text'
                                            className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                            placeholder='Country'
                                        />
                                    </div>
                                </div>

                                {/* GPA */}
                                <div className='w-full mt-4'>
                                    <label className='text-sm font-semibold'>GPA</label>
                                    <input
                                        type='text'
                                        className='rounded-md w-full mt-2 px-5 py-2 outline-none ring-1 ring-gray-400'
                                        placeholder='GPA'
                                    />
                                </div>

                                <hr className='w-full h-[2px] bg-gray-400 mt-8 mb-4'></hr>
                            </div>
                        ))}

                        {/* Buttons */}
                        <div className='mt-6 flex flex-col sm:flex-row justify-between gap-4'>
                            <button className='bg-white flex items-center gap-2 px-2 py-1 ring-1 ring-green rounded-md' onClick={addEducation}><Plus />Add Education</button>
                            <Button>Update</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Profile