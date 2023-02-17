import React, { useState } from 'react';
import Todo from '../todo/Todo';
import styles from './TodoList.module.css'

function TodosList({ todos, setTodos, filter }) {


    const filtered = getFilteredItems(todos, filter);

    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {
                filtered.map(item => 
                (
                    <Todo key={item.id} setTodos={setTodos} item={item}/>
                    )
                )
                }
            </ul>
        </section>
        
    ); 
}

function getFilteredItems(todos, filter) {
    if(filter === 'all'){
        return todos;
    }
    return todos.filter(todo => todo.status === filter)
}

export default TodosList;