import { toast } from "react-toastify";

export const handleError = (error) => {
    if (error.response) {
        toast.error(`Server Error: ${error.response.data.message || 'An error occurred'}`);
    } else if (error.request) {
        toast.error('Error: No response received from the server');
    } else if (error.message === 'Network Error') {
        toast.error('Network Error: Please check your internet connection.');
    } else {
        toast.error(`Error: ${error.message}`);
    }
};