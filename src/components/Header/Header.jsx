import React from 'react';

function Header({ filters, filter, onFilterChange }) {
    return (
        <header>
            <ul>
                {filters.map((value, index) => <li key={index}>
                    <button onClick={(e) => (onFilterChange(value),console.log(value))}>{value}</button>
                </li>)}
            </ul>
        </header>
    );
}

export default Header;