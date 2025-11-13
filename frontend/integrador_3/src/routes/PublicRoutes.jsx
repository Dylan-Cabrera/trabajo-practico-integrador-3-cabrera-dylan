import { Navigate, Outlet } from "react-router"
import { Navbar } from "../components/Navbar"
import { useAuth } from "../hooks/useAuth"
import { Footer } from "../components/Footer"


export const PublicRoutes = () => {

  return !false ? (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
   )
  : ( <Navigate to="/home"/>)
}
