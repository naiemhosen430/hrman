import { toast } from "react-toastify";
import axiosInstance from "./axiosConfig";
import { handleError } from "@/Utils/hundleError";

// For calling any get api
export const getApiCall = async (url) => {
    try {
        const response = await axiosInstance.get(`/api/v1/${url}`);
        return response.data;
    } catch (error) {
        handleError(error);
        return { success: false, message: 'An error occurred while processing your request.' };
    }
};

// For calling any post api
export const postApiCall = async (url, data) => {
    try {
        const response = await axiosInstance.post(`/api/v1/${url}`, data);
        return response.data;
    } catch (error) {
        handleError(error);
        return { success: false, message: 'An error occurred while processing your request.' };
    }
};