import { useState, useEffect } from 'react'


function List({ appList,removeApp }) {
    const [list, setList] = useState([])
    useEffect(() => {
        setList(appList)
    }, [appList])   
    
    function tikla(e) {
        console.log("id",e.target.id);
        appList.splice(e.target.id, 1)
        removeApp([...appList])
    }
    return (
        <div className="list-field">
            <ul className="list">
                {list.map((items, i) =>
                    <li className="todos" key={i}>
                        <span>                           
                            <span className="todo">{items}</span>
                        </span>
                        <span>
                            <i onClick={tikla} id={i} className="far fa-trash-alt"></i>
                        </span>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default List
