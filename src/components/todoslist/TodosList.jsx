import React, { useState } from 'react';
import Todo from '../todo/Todo';

function TodosList({ todos, setTodos, filter }) {


    const filtered = getFilteredItems(todos, filter);

    return (
        <section>
            {
                filtered.map(item => {
                return (
                    <Todo key={item.id} setTodos={setTodos} item={item}/>
                )
            })
            }
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