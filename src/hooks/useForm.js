import { useState } from "react"

const useForm = (initialData, onValidate)=>{

    const [form, setForm] = useState(initialData)
    const [loading, setLoading] = useState(null)
    const [errors, setErrors] = useState({})


    const handleChange = (e)=>{

        setForm({
            ...form,
            [e.target.name]:e.target.value
        })

    }


    const handleSubmit=(e)=>{
        e.preventDefault()

        const err = onValidate(form)

        console.log(Object.keys(err).length)
        console.log("enviando")

        if (Object.keys(err).length === 0){
            setLoading(true)
            fetch("https://formsubmit.co/ajax/wryryxzlriaqnprvne@ytnhy.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(form)
            })
                .then(response => {
                    
                    response.json()
                    console.log(response)
                })
                .then(data => {
                    console.log(data)
                    setLoading(false)
                    setForm(initialData)
                })
                .catch(error => {
                    setLoading(false)
                    console.log(error)});
                    

        }

        else{
            setLoading(false)
            setErrors(err)
            console.log("No se logro la peticion por errores en campos de texto")
            console.log(form)
        }
    }



    return {form, errors, loading, handleChange, handleSubmit}

}

export default useForm