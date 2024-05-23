'use client'
const { createContext, useReducer } = require("react");
export const JobContext = createContext()

const jobReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ALL_JOB":
          return { ...state, alljob: action.payload };
        case "ADD_NEW_JOB":
        return { ...state, alljob: [...state.alljob, action.payload] };
        default:
          return state;
      }
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