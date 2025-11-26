import { useNavigate } from "react-router"
import { useForm } from "../hooks/useForm"
import { useEffect } from "react"

export const Login = () => {
    const {form, handleChange} = useForm({
        "username": "",
        "password": ""
    })
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch("http://localhost:3000/api/login",{
            method: "POST",
            credentials: "include",
            body: JSON.stringify(form),
            headers: {
            "Content-type": "application/json"
            }
        });

            const data =  await response.json()

            if(!data) {
                return alert(data.message)
            }

            alert(data.message)
            
        } catch (error) {
            console.log(error)
        }
        navigate("/home")
    }


  return (
    <div className=" flex  justify-center h-110 p-20">
        <form className="bg-gray-200 rounded-md p-5" onSubmit={handleLogin}>
            <label className="font-medium " htmlFor="username"> Username </label>
            <br />
            <input className="border h-8 m-5 rounded" type="text" name="username" value={form.username} onChange={handleChange}/>
            <br />
            <label className="font-medium" htmlFor="password"> Password </label>
            <br />
            <input className="border h-8 m-5 rounded" type="text" name="password" value={form.password} onChange={handleChange} />
            <br />
            <button className="flex hover:bg-blue-700 text-white  place-self-center m-5 border border-black rounded-lg p-1 bg-blue-600 "> Envíar </button>
        </form>
    </div>
  )
}
