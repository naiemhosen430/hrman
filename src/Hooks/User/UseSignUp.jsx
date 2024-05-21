"use client";
import axios from "axios";
import { setCookie } from "cookies-next";
import React, { useState } from "react";
import UseAuthContext from "./UseAuthContext";
import { useRouter } from "next/navigation";

export default function UseSignUp() {
  const router = useRouter();
  const {dispatch}= UseAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const signUp = async (name, email, password) => {
    setError(null);
    setLoading(true);

   await axios.post(`/api/user/signup`, {
      name,
      email,
      password,
    }).then((response)=>{
      if (response?.data.statusCode === 200) {
        setCookie("accesstoken", JSON.stringify(response?.data?.token));
  
        dispatch({ type: "SIGNUP", payload: response?.data?.data });
        router.push("/dashboard", { scroll: true });
  
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

  return { signUp, loading, error };
}
