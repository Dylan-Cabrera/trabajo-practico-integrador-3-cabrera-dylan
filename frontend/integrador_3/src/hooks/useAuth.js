import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";


export const useAuth = () => {
      const [auth, setAuth] = useState(false);
      const navigate = useNavigate()

      const fetchProfile = async () => {
        const peticion = await fetch("http://localhost:3000/api/profile",
                {
                    credentials: "include",
                }
            )
      const data = await peticion.json()

      const onLogin = () => {
        setAuth(true)
        console.log(auth)
      }
      const onLogout = () => {
        setAuth(false)
        console.log("no")
        alert("Logout exitoso")
      }

      }
      
      const checkAuth = () => {
        console.log("chequeado")
        if(data.ok) return true
        if(!data.ok) return false
        
      }
    return {auth, onLogin, onLogout, checkAuth}
}

