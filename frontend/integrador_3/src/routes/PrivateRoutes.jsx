import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../context/authContext";

export const PrivateRoutes = () => {
    const {auth} = useContext(AuthContext)
    console.log(auth + " desde private")
    console.log(typeof auth)

  return auth === true ? ( <Outlet/> ) //si esta logeado redirigue al home
  : (<Navigate to="/login"/>) //si no, al login
}
