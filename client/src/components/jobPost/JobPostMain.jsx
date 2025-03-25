import { useState } from "react"
import Button from "../ui-components/Button"
import Input from "../ui-components/Input"
import Label from "../ui-components/Label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Briefcase, Building, FileText, User } from "lucide-react"
import ButtonSelector from "../ui-components/ButtonSelector"
import SkillSelector from "../ui-components/SkillSelector"

function JobPostMain() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        // Company details
        companyName: "",
        companyWebsite: "",
        companyLinkedIn: "",
        companyIndustry: "",
        companyLocations: [],
        email: "",

        // Job details
        jobTitle: "",
        jobDescription: "",
        jobLocation: "",
        jobLocationType: "",
        hybridDetails: "",

        // Requirements
        experience: "",
        skills: [],
        education: "",

        // Additional info
        minSalary: "",
        maxSalary: "",
        salaryRate: "",
        benefits: [],
        applicationDeadline: "",
    })

    const suggestedSkills = [
        { name: "AWS" },
        { name: "Microservices" },
        { name: "AWS Certification" },
    ];

    const availableSkills = ["MySQL", "MongoDB", "JavaScript", "React", "Python"];


    const handleSkillSelect = (skillData) => {
        setSelectedSkills((prev) => [...prev, skillData]);
    };




    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
            window.scrollTo(0, 0)
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
            window.scrollTo(0, 0)
        }
    }

    const steps = [
        { id: 1, name: "Company", icon: <Building className="h-5 w-5" /> },
        { id: 2, name: "Job Details", icon: <Briefcase className="h-5 w-5" /> },
        { id: 3, name: "Requirements", icon: <FileText className="h-5 w-5" /> },
        { id: 4, name: "Additional Info", icon: <User className="h-5 w-5" /> },
    ]

    return (
        <div className="min-h-screen bg-yellow py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute top-[30%] left-0 w-full h-[70%] bg-white"></div>

            <div className="max-w-4xl bg-none  text-left  mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-heading font-heading text-lightbg">Post a New Job</h1>
                    <p className="text-small font-small text-lightbg">Complete all steps to publish your job posting</p>
                </div>
                {/* Timeline */}
                <div className="mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t-2 border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-between">
                            {steps.map((step) => (
                                <div key={step.id} className="flex flex-col items-center">
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${currentStep >= step.id
                                            ? "border-accent bg-accent text-white"
                                            : "border-gray-300 bg-white text-gray-500"
                                            }`}
                                    >
                                        {step.icon}
                                    </div>
                                    <div className="mt-2 text-sm font-medium text-white">{step.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl   text-left  mx-auto">

                {/* {JSON.stringify(formData, null, 2)} */}

                {/* Form Cards */}
                <div className="rounded-xl mt-4 ring-1 shadow-md hover:shadow-xl ring-slate-200 transition-shadow shadow-black/5 ring-slate-700/10 text-slate-700 p-6 text-left bg-white relative">
                    <div className="mb-6">
                        <p className="text-subheading font-subheading text-primary">{steps[currentStep - 1].name}</p>
                        <div>
                            {currentStep === 1 && <p className="text-small font-small text-secondary">Enter your company information</p>}
                            {currentStep === 2 && <p className="text-small font-small text-secondary">Provide details about the job position</p>}
                            {currentStep === 3 && "Specify job requirements and qualifications"}
                            {currentStep === 4 && "Add additional information about the position"}
                        </div>
                    </div>
                    <div>
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="companyName">Company name</Label>
                                    <Input
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your company name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="companyWebsite">Company website</Label>
                                    <Input
                                        id="companyWebsite"
                                        name="companyWebsite"
                                        value={formData.companyWebsite}
                                        onChange={handleInputChange}
                                        placeholder="https://yourcompany.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="companyLinkedIn">Company's linkedIn URL</Label>
                                    <Input
                                        id="companyLinkedIn"
                                        name="companyLinkedIn"
                                        value={formData.companyLinkedIn}
                                        onChange={handleInputChange}
                                        placeholder="https://linkedin.com/company/yourcompany"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="companyIndustry">Company industry</Label>
                                    <Select id='companyIndustry' onValueChange={(value) => handleSelectChange("companyIndustry", value)}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select Industry" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Select Industry</SelectLabel>
                                                <SelectItem value="technology">Technology</SelectItem>
                                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                                <SelectItem value="finance">Finance</SelectItem>
                                                <SelectItem value="education">Education</SelectItem>
                                                <SelectItem value="retail">Retail</SelectItem>
                                                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {/* <select
                                        onValueChange={(value) => handleSelectChange("companyIndustry", value)}
                                        value={formData.companyIndustry}
                                    >
                                        <SelectTrigger id="companyIndustry">
                                            <SelectValue placeholder="Select an industry" />
                                        </SelectTrigger> */}

                                    {/* <select className="border p-2 bg-lightbg round-xl">
                                        <option value="technology">Technology</option >
                                        <option value="healthcare">Healthcare</option >
                                        <option value="finance">Finance</option >
                                        <option value="education">Education</option >
                                        <option value="retail">Retail</option >
                                        <option value="manufacturing">Manufacturing</option >
                                        <option value="other">Other</option >
                                    </select> */}
                                    {/* </select> */}
                                </div>

                                <div className="space-y-2">
                                    <Label id='companyLocation'>Company office location</Label>
                                    <Select id='companyLocation' onValueChange={(value) => handleSelectChange("companyLocation", value)}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select Location" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Select Location</SelectLabel>
                                                <SelectItem value="remote">Remote</SelectItem>
                                                <SelectItem value="onsite">Onsite</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <select className="border p-2 bg-lightbg">
                                            <option value="Remote">Remote</option >
                                            <option value="Onsite">Onsite</option >
                                            <option value="finance">Finance</option >
                                            <option value="education">Education</option >
                                            <option value="retail">Retail</option >
                                            <option value="manufacturing">Manufacturing</option >
                                            <option value="other">Other</option >
                                        </select>
                                        <div className="flex items-center space-x-2">
                                            <input type='checkbox' id="location-us" />
                                            <label
                                                htmlFor="location-us"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                United States
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type='checkbox' id="location-canada" />
                                            <label
                                                htmlFor="location-canada"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Canada
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type='checkbox' id="location-europe" />
                                            <label
                                                htmlFor="location-europe"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Europe
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type='checkbox' id="location-asia" />
                                            <label
                                                htmlFor="location-asia"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Asia
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type='checkbox' id="location-remote" />
                                            <label
                                                htmlFor="location-remote"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Remote-first
                                            </label>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="signinemail">Sign in e-mail address</Label>
                                    <Input
                                        id="signinemail"
                                        name="signinemail"
                                        type="signinemail"
                                        value={formData.signinemail}
                                        onChange={handleInputChange}
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="jobTitle">Job title</Label>
                                    <Input
                                        id="jobTitle"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Senior Software Engineer"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Job location type</Label>
                                    <div>
                                        <ButtonSelector onSelect={(value) => handleSelectChange("jobLocationType", value)} />
                                    </div>
                                </div>

                                {formData.jobLocationType === "OnSite" || formData.jobLocationType === "Hybrid" ? (
                                    <div className="space-y-2">
                                        <Label htmlFor="jobLocation">Job location for on-site/hybrid roles</Label>
                                        <Input
                                            id="jobLocation"
                                            name="jobLocation"
                                            value={formData?.jobLocation}
                                            onChange={handleInputChange}
                                            placeholder="e.g. New York"
                                        />
                                    </div>
                                ) : null}

                                {formData.jobLocationType === "Hybrid" && (
                                    <div className="space-y-2">
                                        <Label htmlFor="hybridDetails">Hybrid details</Label>
                                        <Input
                                            id="hybridDetails"
                                            name="hybridDetails"
                                            value={formData.hybridDetails}
                                            onChange={handleInputChange}
                                            placeholder="e.g. 3 days in office, 2 days remote"
                                        />
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <Label>Salary range</Label>
                                    <div className="flex gap-2 flex-wrap">
                                        <div className="w-1/3">
                                            <Label htmlFor="minSalary">Minimum</Label>
                                            <Input
                                                id="minSalary"
                                                name="minSalary"
                                                type="number"
                                                value={formData.minSalary}
                                                onChange={handleInputChange}
                                                placeholder="e.g. 450000"
                                                className="w-1/3"
                                            />
                                        </div>
                                        <div className="w-1/3">
                                            <Label htmlFor="maxSalary">Maximum</Label>
                                            <Input
                                                id="maxSalary"
                                                name="maxSalary"
                                                type="number"
                                                value={formData.maxSalary}
                                                onChange={handleInputChange}
                                                placeholder="e.g. 600000"
                                                className="w-1/3"
                                            />
                                        </div>
                                        <div className="w-1/3">
                                            <Label htmlFor="currency">Currency</Label>
                                            <Select id='currency'>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Select currency" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Select currency</SelectLabel>
                                                        <SelectItem value="inr">Indian Rupees (INR)</SelectItem>
                                                        <SelectItem value="cad">US Dollor (USD)</SelectItem>
                                                        <SelectItem value="eur">Euro (EUR)</SelectItem>
                                                        <SelectItem value="sgd">Singapore Dollar (SGD)</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="w-1/3">
                                            <Label htmlFor="salaryRate">Rate</Label>
                                            <Select id='salaryRate'>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Select rate" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Select rate</SelectLabel>
                                                        <SelectItem value="apple">Per year</SelectItem>
                                                        <SelectItem value="banana">Per month</SelectItem>
                                                        <SelectItem value="blueberry">Per hour</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <SkillSelector />

                                <div className="space-y-2 flex items-end gap-2">
                                    <div>
                                        <Label htmlFor="addNewSkill">Add new skill</Label>
                                        <Input
                                            id="addNewSkill"
                                            name="addNewSkill"
                                            value={formData.addNewSkill}
                                            onChange={handleInputChange}
                                            className="flex-1"
                                            placeholder="Javascript"
                                        />
                                    </div>
                                    <div>
                                        <Button className="m-0">Add</Button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="experience">Overall professional experience in years</Label>
                                    <Input
                                        id="experience"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        placeholder="Professional experience"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="jobDescription">Role description</Label>
                                    <textarea
                                        id="jobDescription"
                                        name="jobDescription"
                                        value={formData.jobDescription}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, jobDescription: e.target.value }))}
                                        placeholder="Describe the role and responsibilities"
                                        className="flex h-32 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="managerEmail">Hiring manager email</Label>
                                    <Input
                                        id="managerEmail"
                                        name="managerEmail"
                                        value={formData.managerEmail}
                                        onChange={handleInputChange}
                                        placeholder="e.g. your@email.com"
                                    />
                                </div>
                                {/* <div className="space-y-2">
                                    <Label htmlFor="education">Education Requirements</Label>
                                    <Select onValueChange={(value) => handleSelectChange("education", value)} value={formData.education}>
                                        <SelectTrigger id="education">
                                            <SelectValue placeholder="Select education level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="high-school">High School Diploma</SelectItem>
                                            <SelectItem value="associate">Associate's Degree</SelectItem>
                                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                                            <SelectItem value="master">Master's Degree</SelectItem>
                                            <SelectItem value="phd">PhD or Doctorate</SelectItem>
                                            <SelectItem value="none">No Specific Requirement</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div> */}
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="teamDescription">Team description</Label>
                                    <textarea
                                        id="teamDescription"
                                        name="teamDescription"
                                        value={formData.teamDescription}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, teamDescription: e.target.value }))}
                                        placeholder="Describe the role and responsibilities"
                                        className="flex h-32 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="growth">Growth/Progression path</Label>
                                    <textarea
                                        id="growth"
                                        name="growth"
                                        value={formData.growth}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, growth: e.target.value }))}
                                        placeholder="Describe growth/Progression path"
                                        className="flex h-32 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="interviewProcess">Interview Process Overview</Label>
                                    <textarea
                                        id="interviewProcess"
                                        name="interviewProcess"
                                        value={formData.interviewProcess}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, interviewProcess: e.target.value }))}
                                        placeholder="Describe the role and responsibilities"
                                        className="flex h-32 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="qualification">Qualification</Label>
                                    <Input
                                        id="qualification"
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleInputChange}
                                        placeholder="e.g. BE"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Benefits</Label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="benefit-health" />
                                            <label
                                                htmlFor="benefit-health"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Health Insurance
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="maternityLeave" />
                                            <label
                                                htmlFor="maternityLeave"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Maternity leave
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="adoptionSupport" />
                                            <label
                                                htmlFor="adoptionSupport"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Adoption funding support
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="remoteWorkOnRequest" />
                                            <label
                                                htmlFor="remoteWorkOnRequest"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Remote work option upon request
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="shareOptions" />
                                            <label
                                                htmlFor="shareOptions"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Share options
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="additionalBenefit">Additional benefits</Label>
                                    <Input
                                        id="additionalBenefit"
                                        name="additionalBenefit"
                                        value={formData.additionalBenefit}
                                        onChange={handleInputChange}
                                        placeholder="Enter benefits separated by comma."
                                    />
                                </div>
                                {/* <div className="space-y-2">
                                    <Label htmlFor="applicationDeadline">Application Deadline</Label>
                                    <Input
                                        id="applicationDeadline"
                                        name="applicationDeadline"
                                        type="date"
                                        value={formData.applicationDeadline}
                                        onChange={handleInputChange}
                                    />
                                </div> */}
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between mt-6">
                        <Button variant={currentStep === 1 ? 'muted' : "outline"} onClick={prevStep} disabled={currentStep === 1}>
                            Previous
                        </Button>
                        <Button onClick={currentStep < 4 ? nextStep : () => console.log("Form submitted:", formData)}>
                            {currentStep < 4 ? "Next" : "Submit Job Posting"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobPostMain