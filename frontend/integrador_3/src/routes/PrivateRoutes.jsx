import { Navigate, Outlet } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {Loading} from "../components/Loading"
import { useEffect, useState } from "react";

export const PrivateRoutes = () => {

  const [auth, setAuth] = useState(null);
  const getProfile = async () => {


    try {
      const response = await  fetch("http://localhost:3000/api/profile",
        {
          credentials: "include",
        }
      )
      if(response.ok) {
        setAuth(true)
      } else {
        setAuth(false)
      }


    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    getProfile()
  }, [])

  if(auth ==null) {
    return (
      <Loading/>
    )
  }

  return  auth? (<>
    <Navbar/>
    <Outlet/> 
    <Footer/>
    </>
    ) //si esta logeado redirigue al home
  : (<Navigate to="/login"/>) //si no, al login
}
