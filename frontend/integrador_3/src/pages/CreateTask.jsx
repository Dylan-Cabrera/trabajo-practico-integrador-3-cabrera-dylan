import { useEffect } from "react"
import { useForm } from "../hooks/useForm"
import { Navigate, useNavigate } from "react-router";

export const CreateTask = () => {

    const navigate = useNavigate();

    const {form, handleChange} = useForm({
        title: "",
        description: "",
        is_completed: false
    })
    const handleCreate = async (event) => {
        event.preventDefault()
        const peticion = await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(form),
            headers: {
                "Content-type": "application/json"
            }
        })

        const data = peticion.json()

        if(!peticion.ok) {return alert(data.message)}
        
        navigate("/tasks")
        alert(data.message)
    };


  return (
    <form onSubmit={handleCreate}>
        <label htmlFor="title"> Title </label>
        <input type="text" name="title" onChange={handleChange} />
        <label htmlFor="description"> Description </label>
        <input type="text" name="description" onChange={handleChange} />
        <label htmlFor="is_completed"> Is complete? </label>
        <input type="checkbox" name="is_complete" onChange={handleChange} />
        <button> Crear </button>
    </form>
  )
}
