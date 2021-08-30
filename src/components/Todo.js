import { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'

function Todo() {
    const [app, setApp] = useState([])

    useEffect(() => {
        const localData = localStorage.getItem("todolist")
        setApp(JSON.parse(localData))
    }, [])
    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(app))
    }, [app])
    console.log(app);
    return (
        <div className="todo-field">

            {app.length === 0 ? <div className="todo-field-top"><span></span> </div>
                : <div className="todo-field-top"><span>{`${app.length} todos`} </span> </div>}

            <Form setApp={setApp} app={app} />
            <List appList={app} removeApp={setApp} />
        </div>
    )
}

export default Todo
