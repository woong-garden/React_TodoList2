
import TodosList from '../todoslist/TodosList';
import './style.css'
import { useState } from 'react';

import Input from '../input/Input';

function MainBox() {
    const [todos, setTodos] = useState([
        {id: '123',text:'장보기',status:'active'},
        {id: '124',text:'공부',status:'active'},
        {id: '125',text:'놀기',status:'active'}
    ])

    

    return (
        <div className='main-box'>
            <TodosList todos={todos} setTodos={setTodos} />
            <Input setTodos={setTodos}/>
            
        </div>
    );
}

export default MainBox;