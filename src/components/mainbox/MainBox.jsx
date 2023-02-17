
import TodosList from '../todoslist/TodosList';
import './style.css'
import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Input from '../input/Input';


const filters = ['all', 'active', 'completed']
function MainBox() {
    const [todos, setTodos] = useState(readTodosFromLocalStorage);

    const [filter, setFilter] = useState(filters[0])
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    return (
        <>
            <Header filters={filters} filter={filter} onFilterChange={setFilter} />
            <TodosList filter={filter} todos={todos} setTodos={setTodos} />
            <Input setTodos={setTodos}/>
        </>
    );
}

export default MainBox;

function readTodosFromLocalStorage() {
    console.log('readTodosFromLocalStorage')
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}