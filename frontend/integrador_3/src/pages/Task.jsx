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
        <div className="flex justify-around bg-" key={task.id}>
            <h3> Title: {task.title} </h3>
            <h3> Description: {task.description} </h3>
            <h3> Estado: {task.is_completed ? "Completada" : "Pendiente"} </h3>
            <h3> Date: {task.createdAt} </h3>
            <button onClick={() => actualTask(task)}> Actualizar </button>
            <button onClick={(event) => handleDelete(event, task.id)}> Eliminar </button>
        </div>
    ))}


    {task.hide  ?(<div></div>) :(<>
            <form  className="bg-amber-200 h-10 flex row justify-around" onSubmit={(event)=>handleUpdate(event,task.id)}>
                <label htmlFor="title" > Title </label>
                <input type="text" name="title" defaultValue={task.title} onChange={handleChange} />
                <label htmlFor="description"> Description </label>
                <input type="text" name="description" defaultValue={task.description} onChange={handleChange} />
                <label htmlFor="is_completed"> Is complete? </label>
                <input type="checkbox" name="is_completed" defaultValue={task.is_completed} onChange={handleChange} />
                <button type="submit"> Envíar </button>
                </form>
            </>)}

    <button> <Link to="/createtasks"> Crear nueva tarea </Link> </button>
    </div>
    </>
  )
}
