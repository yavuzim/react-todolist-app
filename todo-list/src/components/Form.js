import React from 'react'

function Form() {
    return (
        <div className="form-filed" >
            <div className="form-title-field" >
                <h2 > Todos </h2> </div >
            <div className="form-input" >
                <input placeholder="Add todo..." />
            </div>
            <div className="form-btn">
                <button>Add new todo</button>
            </div>
        </div >
    )
}

export default Form