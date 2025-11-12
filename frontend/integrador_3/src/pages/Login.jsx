import { useNavigate } from "react-router"
import { useForm } from "../hooks/useForm"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"

export const Login = () => {
    const {form, handleChange} = useForm({
        username: "",
        password: ""
    })
    const navigate = useNavigate()
    const {handleLoginAuth} = useContext(AuthContext);

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
                return alert(data.message)
            }

            handleLoginAuth()// <----------------
            alert(data.message)
            
        } catch (error) {
            console.log(error)
            handleAuth(false)
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
