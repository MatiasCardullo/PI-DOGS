import styled from 'styled-components';
import { motion } from "framer-motion";

export const StyledModal = styled(motion.div)`
    background-color: #c0ddc6;
    max-width: 800px;
    min-height: 500px;
    border-radius: 20px;
    width: 90%;
    background-image: url(${(props) => props.image});
    background-size: cover; 
    display: flex;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.5);
    
    .overlay{
        width: 100%;background-color: #afcbf3
        color: white;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
        border-radius: 20px;

        h1{
            font-size: 60px;
            text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff;
        }

        .info{
            display: flex;
            justify-content: center;

            p{
                margin: 10px 35px;
                font-size: 30px;
                text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff;
                font-weight: bold;
                .fas{
                    margin-right: 15px;
                }
            }

            span{
                font-weight: normal;
                display: block;
            }
        }

        .temperaments{
            .far{
                margin-right: 15px;

            }
            .temp-title{
                font-size: 30px;
                font-weight: bold;
                text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff;
            }
            div{
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                p{
                    margin: 10px;
                    background-color: var(--color);
                    color: black;
                    padding: 5px 10px;
                    border-radius: 20px;
                    font-size: 20px;

                }
            }
        }

        button{
            i{
                font-size: 10px;
                color: black;
            }
            position: absolute;
            top: -10px;
            right: -10px;
            width: 30px;
            height: 30px;
            border: none;
            border-radius: 50%;
            border: 2px solid black;

            background-color: #ff4040;
            cursor: pointer;
        }
    }
    
`

export const StyledOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    backdrop-filter: blur(2px);
`