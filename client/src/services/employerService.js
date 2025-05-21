import axiosInstance from "@/api/axiosInstance";
import { ADD_NEW_SKILL, GET_SKILLS } from "@/api/authApi";

export const getAllSkills = async () => {

    try {
        const response = await axiosInstance.get(GET_SKILLS, data)
        return response.data
    } catch (error) {
        throw error || "Failed to fetch skills.";
    }

}

export const addNewSkill = async (data) => {

    try {
        const response = await axiosInstance.post(ADD_NEW_SKILL, data)
        return response.data
    } catch (error) {
        throw error || "Failed to add skill.";
    }

}