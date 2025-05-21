"use client"

import { createContext, useContext, useState } from "react"
import { jobsData } from "@/data/jobs"

const defaultFilters = {
    datePosted: "",
    payRange: "",
    jobTypes: [],
    location: "",
    industries: [],
    skills: [],
    remote: false,
}

const JobFilterContext = createContext()

export function JobFilterProvider({ children }) {
    const [filters, setFilters] = useState(defaultFilters)
    const [jobs, setJobs] = useState(jobsData)
    const [isLoading, setIsLoading] = useState(false)

    const updateFilter = (type, value) => {
        setFilters((prev) => ({
            ...prev,
            [type]: value,
        }))

        // Apply filters
        applyFilters({
            ...filters,
            [type]: value,
        })
    }

    const resetFilters = () => {
        setFilters(defaultFilters)
        setJobs(jobsData)
    }

    const applyFilters = async (currentFilters) => {
        setIsLoading(true)

        try {
            // In a real app, you would fetch from the API with these filters
            // For demo purposes, we'll filter the local data
            let filteredJobs = [...jobsData]

            if (currentFilters.datePosted) {
                const daysAgo = Number.parseInt(currentFilters.datePosted)
                filteredJobs = filteredJobs.filter((job) => job.company.updatedDaysAgo <= daysAgo)
            }

            if (currentFilters.jobTypes.length > 0) {
                filteredJobs = filteredJobs.filter((job) => currentFilters.jobTypes.some((type) => job.job.tags.includes(type)))
            }

            if (currentFilters.location) {
                filteredJobs = filteredJobs.filter((job) =>
                    job.job.location.toLowerCase().includes(currentFilters.location.toLowerCase()),
                )
            }

            if (currentFilters.skills.length > 0) {
                filteredJobs = filteredJobs.filter((job) =>
                    currentFilters.skills.some((skill) =>
                        job.job.skills.some((jobSkill) => jobSkill.skill.toLowerCase() === skill.toLowerCase()),
                    ),
                )
            }

            if (currentFilters.remote) {
                filteredJobs = filteredJobs.filter((job) => job.job.tags.includes("Remote"))
            }

            setJobs(filteredJobs)
        } catch (error) {
            console.error("Error applying filters:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <JobFilterContext.Provider value={{ jobs, filters, updateFilter, resetFilters, isLoading }}>
            {children}
        </JobFilterContext.Provider>
    )
}

export function useJobFilters() {
    const context = useContext(JobFilterContext)
    if (context === undefined) {
        throw new Error("useJobFilters must be used within a JobFilterProvider")
    }
    return context
}
