
import TodosList from '../todoslist/TodosList';
import './style.css'
import { useState } from 'react';

import Input from '../input/Input';
import Header from '../Header/Header';

const filters = ['all', 'active', 'completed']
function MainBox() {
    const [todos, setTodos] = useState([
        {id: '123',text:'장보기',status:'active'},
        {id: '124',text:'공부',status:'active'},
        {id: '125',text:'놀기',status:'active'}
    ])

    const [filter, setFilter] = useState(filters[0])
    

    return (
        <div className='main-box'>
            <Header filters={filters} filter={filter} onFilterChange={setFilter} />
            <TodosList filter={filter} todos={todos} setTodos={setTodos} />
            <Input setTodos={setTodos}/>
            
        </div>
    );
}

export default MainBox;