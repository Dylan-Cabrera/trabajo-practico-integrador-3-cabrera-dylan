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
    <div className=" flex justify-center p-10 bg-blue-200">
        <section className="bg-blue-500 rounded-lg p-5 w-100 text-center">
            <h1 className="font-medium"> Perfil </h1>
            <h3 className="font-medium "> Id: {profile?.id}  </h3>
            <h3 className="font-medium "> Nombre: {profile?.name} </h3>
            <h3 className="font-medium "> Apellido: {profile?.lastname}  </h3>
        </section>
    </div>
    </>
  )
}
