'use client'
const { createContext, useReducer } = require("react");

export const JobContext = createContext()

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