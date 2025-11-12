import { useContext } from "react"
import { Link } from "react-router"
import { AuthContext } from "../context/authContext"


export const Navbar = () => {
  const {handleLogout} = useContext(AuthContext)

  return (
    <nav className="h-5 max-h-screen bg-gray-600 items-center">
        <ul>
            <li>
                <Link to="/home"> Home </Link>
            </li>
            <li>
              <button onClick={handleLogout}> Logout </button>
            </li>
            <li>
              <Link to="/login"> login </Link>
              <Link to="/register"> register </Link>
            </li>
        </ul>
    </nav>
  )
}
