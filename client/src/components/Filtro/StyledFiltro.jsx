import styled from 'styled-components';

export const StyledFiltro = styled.div`
    background-color: #afcbf3;
    border-radius: 50px;
    margin-top: 20px;
    border: 2px solid var(--color);
    padding: 20px;
    .container{
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 90%;

        .filter-button{
            color: white;
            background-color: #333;
            border: none;
            padding: 10px;
            border-radius: 20px;
            transition: background-color 200ms ease;
            margin-top: 20px;
            font-size: 15px;
            &:hover{
                 font-weight: bold;
                 background-color: black;
                }
            &:active{
                transform: scale(0.95);
                }
        }

        select{
            padding: 5px 10px;
            margin: 5px;
            outline: none;
            font-size: 15px;
            border-radius: 10px;
            border: 1px solid var(--color);
        }

        .temp-container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            p{
                margin: 5px;
                background-color: var(--color);
                color: black;
                padding: 4px 12px;
                border-radius: 10px;
                font-size: 15px;
                button{
                    margin-left: 5px;
                    background-color: transparent;
                    border: 0;
                    padding: 0;
                    cursor: pointer;
                    transition: color 0.2s ease;
                    &:hover{
                        color: red;
                    }
                }   
            }
        }
    }
    h1{
        margin-bottom: 15px;        
    }
  
   
`