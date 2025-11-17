import { useForm } from "../hooks/useForm"


export const UpdateTask = ({key, task, setUpdateState}) => {
    const {form, handleChange, handleReset} = useForm({
        title: "",
        description: "",
        is_complete: false
    });

    const id = key
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
            const data = await response.json()
            console.log(data)

            if(response.ok) {
                alert("Tarea actualizada")
            }

        } catch (error) {
            console.log(error)
        }
    }   
    const Task = task

  return (
    <form  className="bg-amber-200" onSubmit={(event, id)=>handleUpdate(event,id)}>
        <label htmlFor="title" > Title </label>
        <input type="text" name="title" onChange={handleChange} />
        <label htmlFor="description"> Description </label>
        <input type="text" name="description" onChange={handleChange} />
        <label htmlFor="is_completed"> Is complete? </label>
        <input type="checkbox" name="is_complete"  onChange={handleChange} />
        <button> Actualizar </button>
    </form>
  )
}
