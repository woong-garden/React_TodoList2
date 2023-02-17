import React from 'react';
import  styles from './Header.module.css';

function Header({ filters, filter, onFilterChange }) {
    return (
        <header className={styles.header}>
            <ul className={styles.filters}>
                {filters.map((value, index) => <li key={index}>
                    <button className={`${styles.filter} ${filter === value && styles.selected}`} onClick={(e) => (onFilterChange(value),console.log(index))}>{value}</button>
                </li>)}
            </ul>
        </header>
    );
}

export default Header;