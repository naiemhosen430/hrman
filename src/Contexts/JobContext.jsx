'use client'
const { createContext, useReducer } = require("react");

export const JobContext = createContext()

const jobReducer = () => {
    console.log("hello")
}

export const JobContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(jobReducer, {
        alljob: null,
      });

return (
    <JobContext.Provider value={{state, dispatch}}>
        {children}
    </JobContext.Provider>
)

}