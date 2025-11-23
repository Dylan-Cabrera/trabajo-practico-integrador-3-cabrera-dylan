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
    <nav className="flex justify-between items-center bg-blue-950 px-4 py-2">
      {
        navStatus == "authenticated" ? (
          <>
          <div className="flex gap-4">
            <button> <Link className="text-white hover:underline " to="/home"> Home </Link> </button>            
            <button> <Link className="text-white hover:underline" to="/profile"> Profile </Link> </button>            
            <button> <Link className="text-white hover:underline"  to="/tasks"> Tasks </Link> </button>            
            <button className="text-white hover:underline" onClick={handleLogout} > Logout </button>
          </div>
          </>) : (<>
          <div className="flex gap-4">
            <button> <Link className="text-white hover:underline" to="/login"> Login </Link> </button>            
            <button> <Link className="text-white hover:underline" to="/register"> Register </Link> </button>            
          </div>
          </>)
      }
            
    </nav>
  )
}
