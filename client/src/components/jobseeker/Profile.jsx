import React, { useEffect, useState } from 'react'
import Button from '../ui-components/Button'
import Navbar from '../navbar/Navbar'
import { Plus, Trash2 } from 'lucide-react';
import Label from '../ui-components/Label';
import Input from '../ui-components/Input';

function Profile() {

    const [user, setUser] = useState('')
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user'))
        setUser(userInfo)
    }, [])


    // Experience
    const [experiences, setExperiences] = useState([
        { id: Date.now(), company: '', jobTitle: '', from: '', to: '', country: '', responsibility: '' },
    ]);

    const addExperience = () => {
        setExperiences([...experiences, { id: Date.now(), company: '', jobTitle: '', from: '', to: '' }]);
    };

    const handleExperienceChange = (id, field, value) => {
        setExperiences(prev =>
            prev.map(exp =>
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        );
    };

    const validateExperiences = () => {
        const newErrors = {}

        experiences.forEach((exp, index) => {
            const expErrors = {};

            if (!exp.company.trim()) expErrors.company = "Company is required.";
            if (!exp.jobTitle.trim()) expErrors.jobTitle = "Job Title is required.";
            if (!exp.from.trim()) expErrors.from = "Start date is required.";
            if (!exp.to.trim()) expErrors.to = "End date is required.";
            if (!exp.country.trim()) expErrors.country = "Country is required.";
            if (!exp.responsibility.trim()) expErrors.responsibility = "Responsibility is required."

            if (Object.keys(expErrors).length > 0) {
                newErrors[exp.id] = expErrors
            }
        })

        setErrors(newErrors)

        return Object.keys(newErrors).length = 0;
    }

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

            <div className='flex mx-auto max-w-[900px] justify-center py-5 mt-5 mb-2 text-4xl font-semibold text-left '>
                <p>Profile</p>
            </div>
            <div className='flex flex-col items-center mt-2'>
                <div className='rounded-xl ring-1 shadow-md hover:shadow-xl ring-slate-200 transition-shadow shadow-black/5 ring-slate-700/10 text-slate-700 p-6 text-left h-auto w-full max-w-[900px] bg-white mx-auto'>
                    <p className='mb-6 text-2xl font-semibold'>Basic Details</p>

                    <div className='flex flex-col sm:flex-row justify-center gap-6'>
                        <div className='w-full sm:w-1/2'>
                            <label className='text-sm font-semibold'>First Name</label>
                            <Input
                                type='text'
                                placeholder='First Name'
                                value={user?.first_name}
                            />
                        </div>
                        <div className='w-full sm:w-1/2'>
                            <label className='text-sm font-semibold'>Last Name</label>
                            <Input
                                type='text'
                                placeholder='Last Name'
                                value={user?.last_name}
                            />

                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-center gap-6 mt-4'>
                        <div className='w-full sm:w-1/2'>
                            <label className='text-sm font-semibold'>Email Id</label>
                            <Input
                                type='text'
                                placeholder='Email Id'
                                value={user?.email}
                            />
                        </div>
                        <div className='w-full sm:w-1/2'>
                            <label className='text-sm font-semibold'>Phone Number</label>
                            <Input
                                type='text'
                                placeholder='Phone Number'
                                value={user?.phone}
                            />
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
                        {JSON.stringify(experiences, null, 2)}
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
                                        <Input
                                            type='text'
                                            placeholder='Company Name'
                                            value={experiences.company}
                                            onChange={(e) => handleExperienceChange(experience.id, 'company', e.target.value)}
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <Label required className='text-sm font-semibold'>Job Title</Label>
                                        <Input
                                            type='text'
                                            placeholder='Job Title'
                                            value={experiences.jobTitle}
                                            onChange={(e) => handleExperienceChange(experience.id, 'jobTitle', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='flex flex-col sm:flex-row justify-center gap-6 mt-4'>
                                    <div className='w-full sm:w-1/3'>
                                        <Label required className='text-sm font-semibold'>From</Label>
                                        <Input
                                            type='month'
                                            min='1990-01'
                                            max='2025-05'
                                            required
                                            value={experience.from}
                                            onChange={e => handleExperienceChange(experience.id, 'from', e.target.value)}
                                        />
                                    </div>
                                    <div className='w-full sm:w-1/3'>
                                        <Label className='text-sm font-semibold'>To</Label>
                                        <Input
                                            type='month'
                                            min='1990-01'
                                            max='2025-03'
                                            required
                                            value={experience.to}
                                            onChange={e => handleExperienceChange(experience.id, 'to', e.target.value)}

                                        />
                                    </div>
                                    <div className='w-full sm:w-1/3'>
                                        <Label required className='text-sm font-semibold'>Country</Label>
                                        <Input
                                            type='text'
                                            placeholder='Country'
                                            value={experience.country}
                                            onChange={e => handleExperienceChange(experience.id, 'country', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <Label required className='text-sm font-semibold'>Describe your role</Label>
                                    <textarea
                                        className="w-full mt-2 px-3 py-2 h-32 text-black bg-transparent outline-none border border-gray-300 focus:border-talgan-green shadow-sm rounded-lg"
                                        placeholder='Describe your role'
                                        value={experience.responsibility}
                                        onChange={e => handleExperienceChange(experience.id, 'responsibility', e.target.value)}
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
                                        <Input
                                            type='text'
                                            placeholder='Degree'
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <label className='text-sm font-semibold'>Institution Name</label>
                                        <Input
                                            type='text'
                                            placeholder='Institution Name'
                                        />
                                    </div>
                                </div>

                                {/* Graduation Year & Country */}
                                <div className='flex flex-col sm:flex-row justify-center gap-6 mt-4'>
                                    <div className='w-full sm:w-1/2'>
                                        <label className='text-sm font-semibold'>Graduation Year</label>
                                        <Input
                                            type='number'
                                            min='1900'
                                            max='2030'
                                            required
                                            placeholder='Graduation Year'
                                        />
                                    </div>
                                    <div className='w-full sm:w-1/2'>
                                        <label className='text-sm font-semibold'>Country</label>
                                        <Input
                                            type='text'
                                            placeholder='Country'
                                        />
                                    </div>
                                </div>

                                {/* GPA */}
                                <div className='w-full mt-4'>
                                    <label className='text-sm font-semibold'>GPA</label>
                                    <Input
                                        type='text'
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