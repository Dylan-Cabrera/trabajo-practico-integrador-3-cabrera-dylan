import { useEffect, useState } from "react"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const Profile = () => {
    const [profile, setProfile] = useState({
        id: "",
        name: "",
        lastname: "",
        loading: true
    })


    const handleProfile = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/profile",
                {
                    credentials: "include",
                }
            )
            const data = await response.json()
            
            setProfile({
                ...profile,
                id: data.user.id,
                name: data.user.name,
                lastname: data.user.lastname,
                isLoading: false
            })
            
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
      handleProfile()
    }, [])

  return (
    <>
    <div>
    <h1> Perfil </h1>
    <h3> Id: {profile?.id}  </h3>
    <h3> Nombre: {profile?.name} </h3>
    <h3> Apellido: {profile?.lastname}  </h3>
    </div>
    </>
  )
}
