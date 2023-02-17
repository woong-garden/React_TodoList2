import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './Input.module.css'

function Input({ setTodos }) {

    const [content, setContent] = useState('');

    const handleAdd = (e) => {
        //새로고침방지
        e.preventDefault();

        const newTodo ={
            id: uuidv4(),
            text: content,
            status: 'active'
        }

        //공백 오류처리
        if(content.trim().length === 0){
            return alert('내용을 입력해주세요!')
        }

        setTodos((prev) => {
            return [...prev, newTodo]
        })

        //공백없애기
        setContent('')
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <form className={styles.form} onSubmit={handleAdd}>
            <input placeholder='내용을 입력하세요...' className={styles.input} value={content} onChange={handleContent}/>
            <button className={styles.button}>추가</button>
        </form>
    );
}

export default Input;