"use client";
import { useContext, useState } from "react";
import { AuthContex } from "@/Contexts/AuthContex";
import { postApiCall } from "@/api/fatchData";
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function UseAuthContext() {
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContex);
  const {dispatch} = useContext(AuthContex);
  const router = useRouter();

  if (!authContext) {
    throw new Error("Application Error");
  }



  // for loging 
  const handleAuth = async (data, action) => {
    setLoading(true);
    try {
      const response = await postApiCall(`auth/${action}`, data);
      if (response?.statusCode === 200){
        setCookie("accesstoken", response?.token);
        dispatch({ type: "ADD_AUTHDATA", payload: response?.data || null });
        toast.success(`${action.charAt(0).toUpperCase() + action.slice(1)} successful!`);
        router.push("/dashboard", { scroll: true });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    handleAuth,
  };
}
