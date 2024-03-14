import React from 'react';
import { FaTrashAlt } from "react-icons/fa";


const LineItem = ({list, handleChange, handleDelete }) => {

    return (
            <li className="item" key={list.id}> 
                <input
                    type="checkbox"
                    checked={list.checked}
                    onChange={() => handleChange(list.id)}
                />
                <label
                    style={(list.checked) ? {textDecoration: 'line-through'} : null}
                    onDoubleClick={() => handleChange(list.id)}
                >{list.item}</label>
                <FaTrashAlt 
                    onClick={() => handleDelete(list.id)}
                    role="button" 
                    tabIndex="0"
                    aria-label={`delete ${list.item}`}
                />
            </li>
    )
}

export default LineItem;