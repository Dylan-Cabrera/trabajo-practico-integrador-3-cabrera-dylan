import {Routes, Route, Navigate} from "react-router"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Home } from "../pages/Home"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { Profile } from "../pages/Profile"


export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes/>}>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>} />
      </Route>
      <Route element={<PrivateRoutes/>} >
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
      </Route>
          <Route path="*" element={<Navigate to="/home"/>}/>
    </Routes>
  )
}
