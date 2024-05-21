"use client";
import axios from "axios";
import { setCookie } from "cookies-next";
import React, { useState } from "react";
import UseAuthContext from "./UseAuthContext";
import { useRouter } from "next/navigation";

export default function UseAddUser() {
  const router = useRouter();
  const {dispatch}= UseAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addUser = async (data) => {
    setError(null);
    setLoading(true);

   await axios.post(`/api/user/adduser`, {
    data
    }).then((response)=>{
      if (response?.data.statusCode === 200) {
        setCookie("accesstoken", JSON.stringify(response?.data?.token));
  
        dispatch({ type: "ADD_USER", payload: response?.data?.data });
  
        setLoading(false);
      }

    })
    .catch((error)=>{
      if (error) {
        setError(error?.response?.data?.message || error?.message);
        setLoading(false);
      }
    });




  };

  return { addUser, loading, error };
}
