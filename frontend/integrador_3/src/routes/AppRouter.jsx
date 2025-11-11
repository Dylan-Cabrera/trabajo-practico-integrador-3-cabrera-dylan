import {Routes, Route} from "react-router"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Home } from "../pages/Home"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>}/>
        <Route/>
    </Routes>
  )
}
