import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router"


export const Navbar = () => {
  const [navStatus, setNavStatus] = useState("loading");
  const navigate = useNavigate()

  const getProfile = async () => {

    try {
      const response = await  fetch("http://localhost:3000/api/profile",
        {
          credentials: "include",
        }
      )
      if(response.ok) {
        setNavStatus("authenticated")
      } else {
        setNavStatus("unauthenticated")
      }


    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    getProfile()
  }, [])


  const handleLogout = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("http://localhost:3000/api/logout",
        {
          method: "POST",
          credentials: "include",
        }
      )
    if(response.ok) {
      navigate("/login")
      alert("Logout exitoso")
    }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="flex justify-between h-10 max-h-screen bg-gray-600 items-center">
      {
        navStatus == "authenticated" ? (
          <>
            <button> <Link to="/home"> Home </Link> </button>            
            <button> <Link to="/profile"> Profile </Link> </button>            
            <button> <Link to="/tasks"> Tasks </Link> </button>            
            <button onClick={handleLogout} > Logout </button>
          </>) : (<>
            <button> <Link to="/login"> Login </Link> </button>            
            <button> <Link to="/register"> Register </Link> </button>            
          </>)
      }
            
    </nav>
  )
}
