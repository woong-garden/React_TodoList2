import React, { useState } from 'react';
import Todo from '../todo/Todo';

function TodosList({ todos, setTodos }) {


    return (
        <section>
            {
                todos.map(item => {
                return (
                    <Todo key={item.id} setTodos={setTodos} item={item}/>
                )
            })
            }
        </section>
    );
}

export default TodosList;