import styled from 'styled-components';

export const StyledLanding = styled.div`
    background-image: url("https://cdn2.thedogapi.com/images/rVOHQ6r1R.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;    
    display: flex;
    align-items: center;    
    justify-content:center;

    .container{
        margin-right: 500px;
        font-size: 50px
    }
    a{
        color: black;
        font-size: 25px;
        text-decoration: none;
        border: 2px solid black;
        border-radius: 20px;
        padding: 3px 15px;
        transition: background-color 1s ease;

        &:hover{
            background-color: white;
        } 
    }
    h1{
        color: black;
        margin-bottom: 40px;
        text-align: center;
        font-size: 60px;
    }

`