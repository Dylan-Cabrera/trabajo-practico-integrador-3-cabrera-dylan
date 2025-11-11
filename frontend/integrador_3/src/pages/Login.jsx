import { useNavigate } from "react-router"
import { useForm } from "../hooks/useForm"

export const Login = () => {
    const {form, handleChange} = useForm({
        username: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const peticion = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(form),
                headers: {
                    "Content-type": "application/json"
                }
            })

            const data =  await peticion.json()

            if(!data) {
                localStorage.setItem("isLogged", "False")
                return alert(data.message)
            }

            localStorage.setItem("isLogged", "True")
            alert(data.message)
            
        } catch (error) {
            console.log(error)
            localStorage.setItem("isLogged", "False")
        }
        navigate("/home")
    }

  return (
    <form onSubmit={handleLogin}>
        <label htmlFor="username"> Username </label>
        <input type="text" name="username" value={form.username} onChange={handleChange}/>
        <label htmlFor="password"> Password </label>
        <input type="text" name="password" value={form.password} onChange={handleChange} />
        <button> Envíar </button>
    </form>
  )
}
