'use client'
import { getApiCall } from "@/api/fatchData";
import { getCookie } from "cookies-next";
import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";

export const AuthContex = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_AUTHDATA":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default function AuthContexProvider({ children }) {
  const token = getCookie('accesstoken');

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await getApiCall("auth/me");

        if (response?.statusCode === 200) {
          dispatch({ type: "ADD_AUTHDATA", payload: response?.data || null });
        }
      } catch (error) {
        console.error("Error fetching data:", error); // Log any error that occurs
        toast.error(error.response?.data?.message || "Something went wrong.");
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <AuthContex.Provider value={{ state, dispatch }}>
      {children}
    </AuthContex.Provider>
  );
}
