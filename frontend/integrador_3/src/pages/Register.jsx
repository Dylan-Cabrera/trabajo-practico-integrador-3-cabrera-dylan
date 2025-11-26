import { Link, useNavigate } from "react-router"
import { useForm } from "../hooks/useForm"

export const Register = () => {
  const {form, handleChange} = useForm({
    username: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
  })
  const navigate = useNavigate()

  const handleRegister = async (event) => {
   try {
     event.preventDefault()

    const peticion = await fetch("http://localhost:3000/api/register", {
      credentials: "include",
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json"
      }
    });

    const data = await peticion.json();

    if(!peticion.ok) {
      return alert(data.message)
    }
    alert(data.message)
   } catch (error) {
    console.log(error)
   }
   navigate("/login")
  }


  return (
    <> 
    <div className="flex justify-center items-center  flex-col min-h-screen p-20">
      <form className="bg-gray-200 rounded-md p-5 max-w-sm" onSubmit={handleRegister}>
          <label className="font-medium" htmlFor="username"> Username </label>
          <br />
          <input className="border h-8 m-5 rounded " type="text" name="username" value={form.username} onChange={handleChange} />
          <br />
          <label className="font-medium" htmlFor="email"> Email </label>
          <br />
          <input className="border h-8 m-5 rounded" type="text" name="email" value={form.email} onChange={handleChange} />
          <br />
          <label className="font-medium" htmlFor="password"> Password </label>
          <br />
          <input className="border h-8 m-5 rounded" type="text" name="password" value={form.password} onChange={handleChange} />
          <br />
          <label className="font-medium" htmlFor="name"> Firstname </label>
          <br />
          <input className="border h-8 m-5 rounded" type="text" name="name" value={form.name} onChange={handleChange} />
          <br />
          <label className="font-medium" htmlFor="lastname"> Lastname </label>
          <br />
          <input className="border h-8 m-5 rounded" type="text" name="lastname" value={form.lastname} onChange={handleChange} />
          <br />
          <button className="flex hover:bg-blue-700 text-white  place-self-center m-5 border border-black rounded-lg p-1 bg-blue-600 " type="submit"> Envíar </button>
      </form>
      <br />
      <span className="bg-gray-200 rounded-lg  p-3 w-full max-w-sm text-center">
        <p>¿Ya tienes una cuenta?</p>
          <Link className="hover:underline text-blue-950"  to="/login"> Inicia sesión </Link>
      </span>
    </div>
    </>
  )
}
