import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)

    const handleLoginAuth = () => {
        setAuth(true) 
        console.log("Usuario autenticado")
 
    }
    const handleLogout = () => {
        setAuth(false) 
        console.log("Usuario autenticado")
 
    }

    return(
        <AuthContext.Provider value={{auth, handleLoginAuth, handleLogout}}>
            {children}
        </AuthContext.Provider>
        )
}
