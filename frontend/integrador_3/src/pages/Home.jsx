import { useEffect, useState } from "react"

export const Home = () => {
  const [profile, setProfile] = useState({
          id: "",
          name: "",
          lastname: ""
      })
      const [tasks, setTasks] = useState([]);
  
  
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

  const getTask = async () => {
    try {
        const peticion = await fetch("http://localhost:3000/api/tasks-by-user",
        {
           credentials: "include",
        }
        )
      const data = await peticion.json()
      setTasks(data)
      } catch (error) {
          console.log(error)
      }
    }

    useEffect(() => {
        getTask()
      }, []) 


   const totalTasks = tasks.length;
   const completedTasks = tasks.filter((t) => t.is_completed).length;
   const pendingTasks = totalTasks - completedTasks;

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-medium text-gray-800">
          ¡Bienvenido {profile.name}!
        </h2>
      </div>

      <h3 className="text-lg font-medium text-gray-900 px-4 mb-3">
        Estadísticas de tareas:
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 m-2">
        
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
          <p className="text-gray-700 font-medium">Total</p>
          <p className="text-2xl font-semibold text-gray-900">{totalTasks}</p>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
          <p className="text-gray-700 font-medium">Completadas</p>
          <p className="text-2xl font-semibold text-gray-900">{completedTasks}</p>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
          <p className="text-gray-700 font-medium">Pendientes</p>
          <p className="text-2xl font-semibold text-gray-900">{pendingTasks}</p>
        </div>
      </div>
    </>
  )
}
