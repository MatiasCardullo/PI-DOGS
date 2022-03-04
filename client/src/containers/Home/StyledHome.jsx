import styled from 'styled-components';

export const StyledHome = styled.div`
    padding-top: 100px;
    margin: 30px;

    .container{
        display: flex;
        margin-top: 20px;
    }

    .cards{
        width: 80%;
        padding-top: 20px;
        margin-right: 20%;
    }

    .filtro{
        width: 20%;
        position: left;
    }

    
    .cards-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 40px;
    }

    .paginationButtons{
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;

        a{
            padding: 10px;
            margin: 8px;
            border-radius: 10px;
            border: 1px solid black;
            color: black;
            cursor: pointer;
        }

        & a:hover{
            background-color: var(--color);
        }

    }

    .paginationActive{
        a{
        background-color: var(--color);
        }
    }
`