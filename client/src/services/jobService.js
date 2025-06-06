import axiosInstance from "@/api/axiosInstance";
import { SAVE_JOB, SAVED_IDS, UNSAVE_JOB } from "@/api/authApi";

export const saveJob = async (userId, jobId) => {

    try {
        let data = {
            userId: userId,
            jobId: jobId
        }
        const response = await axiosInstance.post(SAVE_JOB, data)
        return response.data
    } catch (error) {
        throw error || "Failed to save job.";
    }

}

export const unsaveJob = async (userId, jobId) => {

    try {
        let data = {
            userId: userId,
            jobId: jobId
        }
        const response = await axiosInstance.post(UNSAVE_JOB, data)
        return response.data
    } catch (error) {
        throw error || "Failed to save job.";
    }

}
export const savedJobs = async (userId) => {

    try {
        const response = await axiosInstance.get(`${SAVED_IDS}/${userId}`)
        return response.data
    } catch (error) {
        throw error || "Failed to fetch saved job ids.";
    }

}