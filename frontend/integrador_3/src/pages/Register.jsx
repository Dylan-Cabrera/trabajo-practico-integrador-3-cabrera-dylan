import { useForm } from "../hooks/useForm"

export const Register = () => {
  const {form, handleChange} = useForm({
    username: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
  })


  const handleRegister = async (event) => {
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
  }


  return (
    <form onSubmit={handleRegister}>
        <label htmlFor="username"> Username </label>
        <input type="text" name="username" value={form.username} onChange={handleChange} />
        <label htmlFor="email"> Email </label>
        <input type="text" name="email" value={form.email} onChange={handleChange} />
        <label htmlFor="password"> Password </label>
        <input type="text" name="password" value={form.password} onChange={handleChange} />
        <label htmlFor="name"> Firstname </label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        <label htmlFor="lastname"> Lastname </label>
        <input type="text" name="lastname" value={form.lastname} onChange={handleChange} />
    <button type="submit"> Envíar </button>
    </form>
  )
}
