'use client'
import { JobContext } from '@/Contexts/JobContext';
import { getApiCall, postApiCall } from '@/api/fatchData';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { toast } from "react-toastify";

export default function UseJobContext() {
    const jobContext = useContext(JobContext);
    const {dispatch} = useContext(JobContext);
    const [status,setStatus] = useState(false)
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    if (!jobContext) {
        throw new Error("Application Error");
      }
    

    const getAllJobs = async () => {
        setLoading(true);
        try {
          const response = await getApiCall(`jobs`);
          if (response?.statusCode === 200){
            dispatch({ type: "ADD_ALL_JOB", payload: response?.data || [] });
            toast.success(`Jobs recieve successful!`);
          }
        } catch (error) {
          toast.error(error.response?.data?.message || "Jobs patching failed. Please try again by refresh the page.");
        } finally {
          setLoading(false);
        }
    }


    // for add new job 
    const addNewJob = async (data) => {
      setLoading(true);
      try {
        const response = await postApiCall(`jobs/create`, data);
        if (response?.statusCode === 200){
          dispatch({ type: "ADD_NEW_JOB", payload: response?.data });
          toast.success(`Jobs created successful!`);
          setStatus(true)
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Jobs creating failed. Please try again.");
      } finally {
        setLoading(false);
      }
      
    }

  return {
    getAllJobs,
    loading,
    addNewJob,
    status
  }
}
