import { useState } from "react"

export const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm)

    const handleChange = (event) => {
        const {name, value} = event.target
        setForm({
            ...form,
            [name]: value
        })
    } 

    const handleReset = () => {
        setForm(initialForm)
    }

    const handleSubmit = (event) => {
        event.preventDefault() //faltan cosas aca
    }

  return {form, handleChange, handleReset}
}
