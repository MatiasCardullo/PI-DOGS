import styled from 'styled-components';

export const StyledCreateBreed = styled.div`
    margin: 125px auto 30px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    max-width: 750px;
    min-height: 500px;
    width: 90%;
    border-radius: 20px;
    border: 2px solid var(--color);
    background-color: #afcbf3;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 1);

    .form{
        width: 50%;
        margin-right: 10px;

        .form-top{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 20px 0 0;

            input {
                font-size: 15px;
                margin-bottom: 10px; 
                padding: 8px 10px;
                border: 1px solid black;
                outline: none;
                width: 70%;
                }

            select{
                font-size: 15px;
                margin-bottom: 10px; 
                padding: 8px 10px;
                border: 1px solid black;
                outline: none;
                width: 70%;
            }

            .submit{
                color:white;
                background-color: #333;
                border: none;
                padding: 10px 10px;
                border-radius: 20px;
                transition: background-color 300ms ease, font-weight 300ms ease;;
                outline: none;
                cursor: pointer;
                
                &:hover{
                    font-weight: bold;
                    background-color: black;
                }
            }
            .submit:active{
                transform: scale(0.8);
            }
        }

        .form-bottom{
            margin-bottom: 20px;
            select{
            margin-right: 10px;
            }
        }

        .temp-container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 15px;
            p {
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
    

    .img-container{
        background-image: url('https://cdn2.thedogapi.com/images/NiCOjrJTY.jpg');
        background-size: cover;
        width: 50%;
        border-radius: 20px;
    }

    
`