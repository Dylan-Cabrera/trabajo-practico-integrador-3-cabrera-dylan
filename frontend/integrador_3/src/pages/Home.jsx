import { useEffect, useState } from "react"

export const Home = () => {
  const [profile, setProfile] = useState({
          id: "",
          name: "",
          lastname: ""
      })
  
  
      const handleProfile = async () => {
          try {
              const response = await fetch("http://localhost:3000/api/profile",
                  {
                      credentials: "include",
                  }
              )
              const data = await response.json();

              if(response.ok) {
                  setProfile({
                      ...profile,
                      id: data.user.id,
                      name: data.user.name,
                      lastname: data.user.lastname,
                    })
                }
              
              
          } catch (error) {
              console.log(error)
          }
      }
      useEffect(() => {
        handleProfile()
      }, []) 

  return (
    <>
    <div className='h-100'>
    <h2> ¡Bienvenido {profile.name}! </h2>
    </div>
    </>
  )
}
