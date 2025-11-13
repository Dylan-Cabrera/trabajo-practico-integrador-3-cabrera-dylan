import { Link } from "react-router"
import { useAuth } from "../hooks/useAuth"


export const Navbar = () => {

  return (
    <nav className="flex justify-between h-10 max-h-screen bg-gray-600 items-center">
            <button> <Link to="/home"> Home </Link> </button>            
            <button> <Link to="/profile"> Profile </Link> </button>            
            <button> <Link to="/login"> Login </Link> </button>            
            <button> <Link to="/register"> Register </Link> </button>            
            <button > Logout </button>
            
    </nav>
  )
}
