
import { Checkbox } from "@/components/ui/checkbox"

import { Label } from "@/components/ui/label"

import { RadioGroupItem } from "@/components/ui/radio-group"

import { RadioGroup } from "@/components/ui/radio-group"

import { Input } from "@/components/ui/input"

import { PopoverContent } from "@/components/ui/popover"

import { PopoverTrigger } from "@/components/ui/popover"

import { Popover } from "@/components/ui/popover"

import { useState } from "react"

import { Button } from "@/components/ui/button"

export default function FilterBar({ onFilterChange, activeFilters = [] }) {
    // Filter options
    const dateOptions = [
        { id: "1", label: "Past 24 hours" },
        { id: "3", label: "Past 3 days" },
        { id: "7", label: "Past week" },
        { id: "30", label: "Past month" },
    ]

    const payOptions = [
        { id: "0-50000", label: "Under $50k" },
        { id: "50000-100000", label: "$50k - $100k" },
        { id: "100000-150000", label: "$100k - $150k" },
        { id: "150000-200000", label: "$150k - $200k" },
        { id: "200000-1000000", label: "Over $200k" },
    ]

    const jobTypeOptions = [
        { id: "Full Time", label: "Full Time" },
        { id: "Part Time", label: "Part Time" },
        { id: "Contract", label: "Contract" },
        { id: "Remote", label: "Remote" },
        { id: "Hybrid", label: "Hybrid" },
        { id: "On-Site", label: "On-Site" },
    ]

    const industryOptions = [
        { id: "Technology", label: "Technology" },
        { id: "Finance", label: "Finance" },
        { id: "Healthcare", label: "Healthcare" },
        { id: "Education", label: "Education" },
        { id: "Retail", label: "Retail" },
    ]

    const skillOptions = [
        { id: "JavaScript", label: "JavaScript" },
        { id: "React.js", label: "React.js" },
        { id: "Node.js", label: "Node.js" },
        { id: "Python", label: "Python" },
        { id: "Java", label: "Java" },
        { id: "AWS", label: "AWS" },
        { id: "Azure", label: "Azure" },
    ]

    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            <FilterPopover
                title="Date"
                options={dateOptions}
                type="radio"
                active={activeFilters.includes("datePosted")}
                onApply={(selected) => {
                    onFilterChange("datePosted", selected[0] || "")
                }}
            />

            <FilterPopover
                title="Pay"
                options={payOptions}
                type="radio"
                active={activeFilters.includes("payRange")}
                onApply={(selected) => {
                    onFilterChange("payRange", selected[0] || "")
                }}
            />

            <FilterPopover
                title="Job type"
                options={jobTypeOptions}
                type="checkbox"
                active={activeFilters.includes("jobTypes")}
                onApply={(selected) => {
                    onFilterChange("jobTypes", selected)
                }}
            />

            <FilterPopover
                title="Location"
                type="location"
                active={activeFilters.includes("location")}
                onApply={(_, locationInput) => {
                    onFilterChange("location", locationInput)
                }}
            />

            <FilterPopover
                title="Industry"
                options={industryOptions}
                type="checkbox"
                active={activeFilters.includes("industries")}
                onApply={(selected) => {
                    onFilterChange("industries", selected)
                }}
            />

            <FilterPopover
                title="Skills"
                options={skillOptions}
                type="checkbox"
                active={activeFilters.includes("skills")}
                onApply={(selected) => {
                    onFilterChange("skills", selected)
                }}
            />

            <Button
                variant={activeFilters.includes("remote") ? "default" : "outline"}
                onClick={() => {
                    onFilterChange("remote", !activeFilters.includes("remote"))
                }}
            >
                Remote
            </Button>
        </div>
    )
}

function FilterPopover({ title, options, type, active, onApply }) {
    const [selectedOptions, setSelectedOptions] = useState([])
    const [locationInput, setLocationInput] = useState("")
    const [open, setOpen] = useState(false)

    const handleApply = () => {
        onApply(selectedOptions, locationInput)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant={active ? "default" : "outline"}>{title}</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="space-y-4">
                    <h3 className="font-medium">{title}</h3>

                    {type === "location" ? (
                        <div className="space-y-2">
                            <Input
                                placeholder="Enter location"
                                value={locationInput}
                                onChange={(e) => setLocationInput(e.target.value)}
                            />
                        </div>
                    ) : type === "radio" ? (
                        <RadioGroup value={selectedOptions[0] || ""} onValueChange={(value) => setSelectedOptions([value])}>
                            <div className="space-y-2">
                                {options?.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-2">
                                        <RadioGroupItem value={option.id} id={option.id} />
                                        <Label htmlFor={option.id}>{option.label}</Label>
                                    </div>
                                ))}
                            </div>
                        </RadioGroup>
                    ) : (
                        <div className="space-y-2">
                            {options?.map((option) => (
                                <div key={option.id} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={option.id}
                                        checked={selectedOptions.includes(option.id)}
                                        onCheckedChange={(checked) => {
                                            if (checked) {
                                                setSelectedOptions([...selectedOptions, option.id])
                                            } else {
                                                setSelectedOptions(selectedOptions.filter((id) => id !== option.id))
                                            }
                                        }}
                                    />
                                    <Label htmlFor={option.id}>{option.label}</Label>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex justify-between">
                        <Button variant="outline" onClick={() => setSelectedOptions([])}>
                            Clear
                        </Button>
                        <Button onClick={handleApply}>Apply</Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
