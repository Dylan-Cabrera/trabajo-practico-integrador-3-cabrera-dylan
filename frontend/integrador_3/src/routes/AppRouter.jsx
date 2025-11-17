import { Navigate, Route, Routes } from "react-router"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Profile } from "../pages/Profile"
import { Register } from "../pages/Register"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { Task } from "../pages/Task"
import { CreateTask } from "../pages/createTask"


export const AppRouter = () => {
 
  return (
    <Routes>
      <Route element={<PublicRoutes  />}>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>} />
      </Route>
      <Route element={<PrivateRoutes />} >
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/tasks" element={<Task/>}/>
          <Route path="/createtasks" element={<CreateTask/>}/>
      </Route>
          <Route path="*" element={<Navigate to="/home"/>}/>
    </Routes>
  )
}
