import { Link } from "react-router"


export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/home"> Home </Link>
            </li>
        </ul>
    </nav>
  )
}
