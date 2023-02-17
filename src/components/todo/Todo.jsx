import React from 'react';
import {BsTrash} from 'react-icons/bs'
import styles from './Todo.module.css'

function Todo({ item, setTodos }) {

    const handleDelete = () => {
        setTodos((prev) => prev.filter(t => t.id !== item.id ))
    }

    const handleSwitch = (updated) => {
        setTodos((prev) => prev.map(t => t.id === updated.id ? updated : t))
        console.log(item.id)
    }

    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        handleSwitch({...item, status})
    }
        

    return (
        <li className={styles.todo} key={item.id}>
            <input className={styles.checkbox} checked={item.status === 'completed'} onClick={handleSwitch} type="checkbox" onChange={handleChange} id={item.id}/>
            <label className={styles.text} htmlFor={item.id}>{item.text}</label>
            <span className={styles.icon}>
                <button className={styles.button} onClick={handleDelete}><BsTrash/></button>
            </span>
            
        </li>
    );
}

export default Todo;