import React from 'react';
import {BsTrash} from 'react-icons/bs'

function Todo({ item, setTodos }) {

    const handleDelete = () => {
        setTodos((prev) => prev.filter(t => t.id !== item.id ))
    }

    const handleSwitch = (updated) => {
        setTodos((prev) => prev.map(t => t.id === updated.id ? updated : t))
    }

    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        handleSwitch({...item, status})
    }
        

    return (
        <div key={item.id}>
            <input checked={item.status === 'completed'} onClick={handleSwitch} type="checkbox" onChange={handleChange} id="checkid"/>
            <label htmlFor='checkid'>{item.text}</label>
            <button onClick={handleDelete}><BsTrash/></button>
        </div>
    );
}

export default Todo;