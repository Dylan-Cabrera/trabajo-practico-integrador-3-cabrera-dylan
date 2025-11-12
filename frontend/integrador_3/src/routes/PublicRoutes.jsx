import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthContext } from "../context/authContext"


export const PublicRoutes = () => {
    const {auth} = useContext(AuthContext)
    console.log(auth + " desde public")
    console.log(typeof auth)

  return auth === false ? ( <Outlet/> )
  : ( <Navigate to="/home"/>)
}
