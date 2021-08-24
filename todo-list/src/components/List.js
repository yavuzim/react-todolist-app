import React from 'react'


function List() {
    return (
        <div className="list-field">
            <ul className="list">
                <li className="todo">
                    <span>Kod Yaz</span>
                    <span>
                    <i class="far fa-trash-alt"></i>
                    </span>
                </li>
                <li className="todo">
                    <span>Kitap Oku</span>
                    <span>
                    <i class="far fa-trash-alt"></i>
                    </span>
                </li>
                <li className="todo">
                    <span>Film İzle</span>
                    <span>
                    <i class="far fa-trash-alt"></i>
                    </span>
                </li>
                <li className="todo">
                    <span>Spor Yap</span>
                    <span>
                    <i class="far fa-trash-alt"></i>
                    </span>
                </li>
                <li className="todo">
                    <span>Matematik Çalış</span>
                    <span>
                    <i class="far fa-trash-alt"></i>
                    </span>
                </li>
                <li className="todo">
                    <span>Kendine iyi bak</span>
                    <span>
                    <i class="far fa-trash-alt"></i>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default List
