import React from 'react'
import Form from '../components/Form'
import List from './List'

function TodoField() {
    return (
        <div className="todo-field">
            <div className="todo-field-top">
                <span> 2 todo not completed</span>
            </div>
            <Form />
            <List />
        </div>
    )
}

export default TodoField
