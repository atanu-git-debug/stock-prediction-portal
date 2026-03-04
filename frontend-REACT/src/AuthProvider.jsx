import { useState,useContext, createContext } from "react"

// create the context
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isloggedin,setLoggedin] = useState(
        !!localStorage.getItem('accessToken')
    )
  return (
    <>
        <AuthContext.Provider value={{isloggedin,setLoggedin}} >
            {children}
        </AuthContext.Provider>
    </>
  )
}

export default AuthProvider
export {AuthContext}