import { useEffect, useState } from "react"
import { Link } from "react-router"
import { useForm } from "../hooks/useForm"

export const Task = () => {
    const [tasks, setTasks] = useState([])
    const {form, handleChange, handleReset} = useForm({
        title: "",
        description: "",
        is_completed: false
    });
    const [task, setTask] = useState({
        title: "",
        description: "",
        is_completed: false,
        hide: true
    })
    
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
                    "Content-Type": "application/json"
                }
            });

            if(response.ok) {
                setTask({
                    ...task,
                    hide: true
                })
                alert("Tarea actualizada correctamente")
            }

        } catch (error) {
            console.log(error)
        }
    }   

    const handleDelete = async (event, id) => {
        event.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
                method: "DELETE",
                credentials: "include",
            });
            if(response.ok) alert('Tarea borrada correctamente')
        } catch (error) {
            
        }
    }

    const actualTask = (task) => {
        setTask({...task,
            hide: false}
        )
    };

    
    useEffect(()=>{
        getTask()
    }, [task])
    
  return (
    <>
    <div className="p-10 min-h-screen bg-blue-200">
    {tasks.map((task) => (
        <div className="flex justify-between items-center w-100 bg-white p-4 rounded-md m-2 border border-gray-200" key={task.id}>
            <div className="flex flex-col">
                <h3> Title: {task.title} </h3>
                <h3> Description: {task.description} </h3>
                <h3> Estado: {task.is_completed ? "Completada" : "Pendiente"} </h3>
                <h3> Date: {task.createdAt} </h3>
            </div>
            <button className="bg-blue-700 text-white px-3 py-1 w-24 h-10 rounded hover:bg-blue-800 transition" onClick={() => actualTask(task)}> Actualizar </button>
            <button className="bg-blue-700 text-white px-3 py-1 w-24 h-10 ml-5 rounded hover:bg-blue-800 transition" onClick={(event) => handleDelete(event, task.id)}> Eliminar </button>
        </div>
    ))}


    {task.hide  ?(<div></div>) :(<>
            <form  className="bg-gray-100 rounded-md p-4 flex flex-wrap gap-3  items-center m-3 border border-gray-300" onSubmit={(event)=>handleUpdate(event,task.id)}>
                <label htmlFor="title" > Title </label>
                <input type="text" name="title" defaultValue={task.title} onChange={handleChange} />
                <label htmlFor="description"> Description </label>
                <input type="text" name="description" defaultValue={task.description} onChange={handleChange} />
                <label htmlFor="is_completed"> Is complete? </label>
                <input type="checkbox" name="is_completed" defaultValue={task.is_completed} onChange={handleChange} />
                <button type="submit"> Envíar </button>
                </form>
            </>)}

    <button className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700"> <Link to="/createtasks"> Crear nueva tarea </Link> </button>
    </>
  )
}
