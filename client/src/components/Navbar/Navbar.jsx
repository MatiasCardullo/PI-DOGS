import React from 'react';
import { StyledNav } from './StyledNav.jsx';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <StyledNav>
            <div className='container'>
                <div>
                    <ul className="list">
                        <li className="list-item">
                            <NavLink exact to="/home" >Home</NavLink>
                            <NavLink exact to="/createBreed" >Crear</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='title'>
                    <h1>Proyecto Dogs 🐶 Matias Cardullo</h1>
                </div>
            </div>
        </StyledNav>
    )
}