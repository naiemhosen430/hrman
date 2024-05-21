"use client";
import axios from "axios";
import { useState } from "react";
import UseAuthContext from "./UseAuthContext";
import { getCookie } from "cookies-next";

export default function UseAllUsers() {
  const { dispatch } = UseAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const token = getCookie("accesstoken");
  
  const getAllUsers = async (name, email, password) => {
    if (token){
      setError(null);
      setLoading(true);
  
      await axios.get(`/api/user/all`).then((response)=>{
          if (response?.data.statusCode === 200) {
            dispatch({ type: "GET_ALL_USER", payload: response?.data?.data });    
            setLoading(false);
          }
    
        })
        .catch((error)=>{
          if (error) {
            setError(error?.response?.data?.message || error?.message);
            setLoading(false);
          }
        });
  
  
      setLoading(false);
    }

  };


  return { getAllUsers, loading, error };
}
