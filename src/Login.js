import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components";
import foto from "./assets/foto.png"



export default function Login(){

    return(
        <Fundo>
            <img src={foto}/>
            <Form>
                <input required type="email" placeholder="email"></input>
                <input required type="password" placeholder="password"></input>
                <button>Entrar</button>
            </Form>
            <p>Ainda não tem uma conta? Cadastre-se!</p>
        </Fundo>
    )

}


const Fundo= styled.div`
    margin-top: 125px;;
    width: 100%;
    height: 667px;
    position: relative;
    z-index: 0;
    background-color: white;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 180px;
        height: 178.38px;
    }
    p{
        text-decoration: underline;
        font-family: 'Roboto';
        color: #52B6FF
        
    }
`
const Navbar = styled.div`
    position: absolute;
    z-index: 1;
    height: 70px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: lightgreen;
    border: none;
    p{
        font-size: 180%;
    }
`
const Form = styled.form`
    
    width: 90%;
    margin-right: 1%;
    display: flex;
    flex-direction: column;
    input{
        margin-bottom: 5px;
        padding-left: 3%;
        width: 96%;
        height: 50px;
        font-size: 150%;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder,
        ::-webkit-input-placeholder {
        color: #DBDBDB;
        font-family: 'Roboto';
        }
    }
    button{
        width: 100%;
        height: 50px;
        font-size: 150%;
        background: #52B6FF;
        border: none;
        border-radius: 5px;
        color: #ffffff;
        margin-bottom: 25px;
    }
`
