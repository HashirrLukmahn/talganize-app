import React, { useState } from "react";
// import { Button } from "react-scroll";
import Button from "./Button";
import Combobox from "./Combobox";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import Label from "./Label";


const SkillSelector = ({ addSkill }) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [newSkill, setNewSkill] = useState("");

    const skillsOptions = ["React.js", "Node.js", "JavaScript", "AWS", "Python"];
    const mandatoryOptions = ["Mandatory", "Optional"];
    const expertiseOptions = ["Junior", "Mid Level", "Senior"];

    const [skill, setSkill] = useState("");
    const [required, setRequired] = useState("");
    const [expertise, setExpertise] = useState("");

    const handleAddSkill = () => {
        if (skill && required && expertise) {
            setSelectedSkills([
                ...selectedSkills,
                { skill, required, expertise },
            ]);
            setSkill("");
            setRequired("");
            setExpertise("");
            addSkill(selectedSkills)
        }
    };

    const handleDeleteSkill = (index) => {
        setSelectedSkills(selectedSkills.filter((_, i) => i !== index));
    };

    const handleAddNewSkill = () => {
        if (newSkill.trim() !== "") {
            setSelectedSkills([
                ...selectedSkills,
                { skill: newSkill, required: "Mandatory", expertise: "Junior" },
            ]);
            setNewSkill("");
        }
    };


    return (
        <div className="w-full">
            <Label>Select skills</Label>
            {/* {JSON.stringify(selectedSkills, null, 2)} */}
            <div className=" justify-between items-center gap-2 mt-2">
                {/* Skill Selection Dropdowns */}
                <div className="flex gap-2 mb-4 w-full flex-wrap ">

                    <Combobox onSelect={(value) => setSkill(value)} />

                    <Select id='requiredSkill' onValueChange={(value) => setRequired(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Requirement" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select</SelectLabel>
                                <SelectItem value="mandatory">Mandatory</SelectItem>
                                <SelectItem value="preferred">Preferred</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select id='expertiseLevel' onValueChange={(value) => setExpertise(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Level of expertise" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Level of expertise</SelectLabel>
                                <SelectItem value="entrylevel">Entry level</SelectItem>
                                <SelectItem value="Junior">Junior level</SelectItem>
                                <SelectItem value="Mid level">Mid level</SelectItem>
                                <SelectItem value="Senior level">Senior level</SelectItem>
                                <SelectItem value="Expert/Managerial">Expert/Managerial</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Button
                        onClick={handleAddSkill}
                    >
                        Add skill
                    </Button>
                </div>

                {/* Add Skill Button */}

            </div>


            {/* Selected Skills List */}
            <div className="mt-4">
                {selectedSkills.map((item, index) => (
                    <div
                        key={index}
                        className="w-full flex justify-between items-center bg-gray-100 p-3 rounded-md mb-2"
                    >
                        <span>{item.skill}</span>
                        <span>{item.required}</span>
                        <span>{item.expertise}</span>
                        <button
                            onClick={() => handleDeleteSkill(index)}
                            className="text-red-500"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SkillSelector;
