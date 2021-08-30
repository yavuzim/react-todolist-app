import { useState, useEffect } from 'react'

function Form({ setApp, app }) {
    const [form, setForm] = useState({ todo: "" })

    const onChaneInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setForm({ todo: "" })
    }, [app])
    const todoAdd = (e) => {
        e.preventDefault()
        if (form.todo === "") alert("Boş Geçilmez")
        else {
            setApp([...app, form.todo])
        }
    }

    return (
        <div className="form-filed" >
            <div className="form-title-field" >
                <h2 > To do List </h2> </div >
            <div className="form-input" >
                <input placeholder="Add todo..." onChange={onChaneInput} name="todo" value={form.todo} />
            </div>
            <div className="form-btn">
                <button type="submit" onClick={todoAdd}>Add new todo</button>
            </div>
        </div >
    )
}

export default Form