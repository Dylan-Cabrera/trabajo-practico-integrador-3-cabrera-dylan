import { useEffect, useEffectEvent } from "react"
import { useState } from "react"
import { Link, Outlet } from "react-router"
import { UpdateTask } from "../components/updateTask"
import { useForm } from "../hooks/useForm"

export const Task = () => {
    const [tasks, setTasks] = useState([])
    const [updateState, setUpdateState] = useState(false)
    const {form, handleChange, handleReset} = useForm({
        title: "",
        description: "",
        is_completed: false
    });
    
    
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

    const handleUpdate = async (event,id) => {
        event.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
                method: "PUT",
                credentials: "include",
                body: JSON.stringify(form),
                headers: {
                    "Content-type": "application/json"
                }
            });
          

            if(response.ok) {
                setUpdateState(false)
                alert("Tarea actualizada")
            }

        } catch (error) {
            console.log(error)
        }
    }   


    
    useEffect(()=>{
        getTask()
    }, [])
    
  return (
    <>
    {tasks.map((task) => (
        <div className="flex justify-around" key={task.id}>
            <h3> Title: {task.title} </h3>
            <h3> Description: {task.description} </h3>
            <h3> Estado: {task.is_completed ? "Completada" : "Pendiente"} </h3>
            <h3> Date: {task.createdAt} </h3>
            <button disabled={updateState} onClick={() => setUpdateState(true)}> Actualizar </button>
            {updateState ? (<>
            <form  className="bg-amber-200" onSubmit={(event)=>handleUpdate(event,task.id)}>
                <label htmlFor="title" > Title </label>
                <input type="text" name="title" value={task.title} onChange={handleChange} />
                <label htmlFor="description"> Description </label>
                <input type="text" name="description" value={task.description} onChange={handleChange} />
                <label htmlFor="is_completed"> Is complete? </label>
                <input type="checkbox" name="is_completed" value={task.is_completed} onChange={handleChange} />
                <button type="submit"> Actualizar </button>
                </form>
            </>) : (<p></p>)}
                
            <button> Eliminar </button>
        </div>
    ))}
    <button> <Link to="/createtasks"> Crear nueva tarea </Link> </button>
    </>
  )
}
