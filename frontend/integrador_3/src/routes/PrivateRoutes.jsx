import { Navigate, Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const PrivateRoutes = () => {

  
  return true ? (<> //ya vuelvo aca(?)
    <Navbar/>
    <Outlet/> 
    <Footer/>
    </>
    ) //si esta logeado redirigue al home
  : (<Navigate to="/login"/>) //si no, al login
}
