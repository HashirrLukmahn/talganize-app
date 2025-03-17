import { useState } from "react"
import Button from "../ui-components/Button"
import Input from "../ui-components/Input"
import Label from "../ui-components/Label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Briefcase, Building, FileText, User } from "lucide-react"

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
        salary: "",
        benefits: [],
        applicationDeadline: "",
    })

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
        <div className="min-h-screen bg-lightbg py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl bg-lightbg  text-left  mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-heading font-heading text-gray-900">Post a New Job</h1>
                    <p className="text-small font-small text-secondary">Complete all steps to publish your job posting</p>
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
                                    <div className="mt-2 text-sm font-medium text-gray-900">{step.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

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
                                    <Label htmlFor="companyName">Company Name</Label>
                                    <Input
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your company name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="companyWebsite">Company Website</Label>
                                    <Input
                                        id="companyWebsite"
                                        name="companyWebsite"
                                        value={formData.companyWebsite}
                                        onChange={handleInputChange}
                                        placeholder="https://yourcompany.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="companyLinkedIn">Company LinkedIn URL</Label>
                                    <Input
                                        id="companyLinkedIn"
                                        name="companyLinkedIn"
                                        value={formData.companyLinkedIn}
                                        onChange={handleInputChange}
                                        placeholder="https://linkedin.com/company/yourcompany"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="companyIndustry">Company Industry</Label>
                                    {/* <select
                                        onValueChange={(value) => handleSelectChange("companyIndustry", value)}
                                        value={formData.companyIndustry}
                                    >
                                        <SelectTrigger id="companyIndustry">
                                            <SelectValue placeholder="Select an industry" />
                                        </SelectTrigger> */}
                                    <select className="border p-2 bg-lightbg round-xl">
                                        <option value="technology">Technology</option >
                                        <option value="healthcare">Healthcare</option >
                                        <option value="finance">Finance</option >
                                        <option value="education">Education</option >
                                        <option value="retail">Retail</option >
                                        <option value="manufacturing">Manufacturing</option >
                                        <option value="other">Other</option >
                                    </select>
                                    {/* </select> */}
                                </div>

                                <div className="space-y-2">
                                    <Label>Company Office Locations</Label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <select className="border p-2 bg-lightbg">
                                            <option value="Remote">Remote</option >
                                            <option value="Onsite">Onsite</option >
                                            {/* <option value="finance">Finance</option >
                                            <option value="education">Education</option >
                                            <option value="retail">Retail</option >
                                            <option value="manufacturing">Manufacturing</option >
                                            <option value="other">Other</option > */}
                                        </select>
                                        {/* <div className="flex items-center space-x-2">
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
                                        </div> */}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Sign in Email Address</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="jobTitle">Job Title</Label>
                                    <Input
                                        id="jobTitle"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Senior Software Engineer"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="jobTitle">Job Location</Label>
                                    <Input
                                        id="jobTitle"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Senior Software Engineer"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="jobDescription">Job Description</Label>
                                    <textarea
                                        id="jobDescription"
                                        name="jobDescription"
                                        value={formData.jobDescription}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, jobDescription: e.target.value }))}
                                        placeholder="Describe the role and responsibilities"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none  focus:border-secondary disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Job Location Type</Label>

                                    <div>

                                    </div>
                                    {/* <RadioGroup
                                        defaultValue="onsite"
                                        onValueChange={(value) => handleSelectChange("jobLocationType", value)}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="onsite" id="onsite" />
                                                <Label htmlFor="onsite">Onsite</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="hybrid" id="hybrid" />
                                                <Label htmlFor="hybrid">Hybrid</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="remote" id="remote" />
                                                <Label htmlFor="remote">Remote</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="travel" id="travel" />
                                                <Label htmlFor="travel">Travel required more than 50%</Label>
                                            </div>
                                        </div>
                                    </RadioGroup> */}
                                </div>

                                {formData.jobLocationType === "onsite" || formData.jobLocationType === "hybrid" ? (
                                    <div className="space-y-2">
                                        <Label htmlFor="jobLocation">Job Location for on-site/hybrid roles</Label>
                                        <Input
                                            id="jobLocation"
                                            name="jobLocation"
                                            value={formData.jobLocation}
                                            onChange={handleInputChange}
                                            placeholder="e.g. New York, NY"
                                        />
                                    </div>
                                ) : null}

                                {formData.jobLocationType === "hybrid" && (
                                    <div className="space-y-2">
                                        <Label htmlFor="hybridDetails">Hybrid Details</Label>
                                        <Input
                                            id="hybridDetails"
                                            name="hybridDetails"
                                            value={formData.hybridDetails}
                                            onChange={handleInputChange}
                                            placeholder="e.g. 3 days in office, 2 days remote"
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="experience">Technical skills Required</Label>
                                    {/* <Select
                                        onValueChange={(value) => handleSelectChange("experience", value)}
                                        value={formData.experience}
                                    >
                                        <SelectTrigger id="experience">
                                            <SelectValue placeholder="Select experience level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                                            <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                                            <SelectItem value="senior">Senior Level (5-8 years)</SelectItem>
                                            <SelectItem value="expert">Expert Level (8+ years)</SelectItem>
                                        </SelectContent>
                                    </Select> */}
                                </div>

                                <div className="space-y-2">
                                    <Label>Add Skills</Label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        {/* <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-javascript" />
                                            <label
                                                htmlFor="skill-javascript"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                JavaScript
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-react" />
                                            <label
                                                htmlFor="skill-react"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                React
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-node" />
                                            <label
                                                htmlFor="skill-node"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Node.js
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-typescript" />
                                            <label
                                                htmlFor="skill-typescript"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                TypeScript
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-python" />
                                            <label
                                                htmlFor="skill-python"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Python
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-java" />
                                            <label
                                                htmlFor="skill-java"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Java
                                            </label>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="education">Education Requirements</Label>
                                    {/* <Select onValueChange={(value) => handleSelectChange("education", value)} value={formData.education}>
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
                                    </Select> */}
                                </div>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="salary">Team description</Label>
                                    <Input
                                        id="salary"
                                        name="salary"
                                        value={formData.salary}
                                        onChange={handleInputChange}
                                        placeholder=""
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Benefits</Label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <div className="flex items-center space-x-2">
                                            {/* <Checkbox id="benefit-health" /> */}
                                            <label
                                                htmlFor="benefit-health"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Health Insurance
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {/* <Checkbox id="benefit-dental" /> */}
                                            <label
                                                htmlFor="benefit-dental"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Dental Insurance
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {/* <Checkbox id="benefit-vision" /> */}
                                            <label
                                                htmlFor="benefit-vision"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Vision Insurance
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {/* <Checkbox id="benefit-401k" /> */}
                                            <label
                                                htmlFor="benefit-401k"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                401(k) Plan
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {/* <Checkbox id="benefit-pto" /> */}
                                            <label
                                                htmlFor="benefit-pto"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Paid Time Off
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {/* <Checkbox id="benefit-remote" /> */}
                                            <label
                                                htmlFor="benefit-remote"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Remote Work Options
                                            </label>
                                        </div>
                                    </div>
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