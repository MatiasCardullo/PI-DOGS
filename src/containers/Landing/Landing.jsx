import React from 'react';
import { StyledLanding } from './StyledLanding';
import {NavLink} from 'react-router-dom';


export default function Landing() {

    return (
        <StyledLanding>
            <div className='container'>
                <h1>Proyecto Dogs 🐶</h1>
                <NavLink exact to="/home">Ingresar 🐾</NavLink>
            </div>
            
        </StyledLanding>
    )
}