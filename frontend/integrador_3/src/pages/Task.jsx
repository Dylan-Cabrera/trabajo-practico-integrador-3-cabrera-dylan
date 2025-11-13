import { useEffect, useEffectEvent } from "react"
import { useState } from "react"

export const Task = () => {
    const [tasks, setTasks] = useState([])
    
    const getTask = async () => {
        try {
            const peticion = await fetch("http://localhost:3000/api/tasks-by-user",
            {
               credentials: "include",
            }
            )
        const data = await peticion.json()
        console.log(data)
        setTasks(data)
        } catch (error) {
            console.log(error)
        }

    }
    
    useEffect(()=>{
        getTask()
    }, [])
    
  return (
    <>
    {tasks.map((task, i) => (
        <div key={i}>
            <h3> Title: {task.title} </h3>
            <h3> Description: {task.description} </h3>
            <h3> Estado: {task.is_completed ? "Completada" : "Pendiente"} </h3>
            <h3> Date: {task.createdAt} </h3>
        </div>
    ))}
    </>
  )
}
