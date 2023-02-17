import React, { useContext } from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import  styles from './Header.module.css';
import {HiMoon, HiSun} from 'react-icons/hi';

function Header({ filters, filter, onFilterChange }) {
    const {darkMode, toggleDarkMode} = useDarkMode();
    return (
        <header className={styles.header}>
            {/* 다크모드 버튼 */}
            <button onClick={toggleDarkMode} className={styles.toggle}>
                {!darkMode && <HiMoon/>}
                {darkMode && <HiSun/>}
            </button>
            <ul className={styles.filters}>
                {filters.map((value, index) => <li key={index}>
                    <button className={`${styles.filter} ${filter === value && styles.selected}`} onClick={(e) => (onFilterChange(value),console.log(index))}>{value}</button>
                </li>)}
            </ul>
        </header>
    );
}

export default Header;