import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components";
import bob from "./assets/bob.png"
import Trackit from "./assets/TrackIt.png"

export default function Habitos(){

    return (
        <Fundo>

            <Topo>
                <Logo src={Trackit} />
                <Imgperfil src={bob} />
            </Topo>
            
            <Title>
                <p> Meus Hábitos </p>
                <button> + </button>
            </Title>

            <Add>
                <input placeholder="nome do hábito"></input>
                <Espaçodias>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </Espaçodias>

                <Espaçobotoes>
                    <p>Cancelar</p>
                    <button>Salvar</button>
                </Espaçobotoes>
            </Add>

            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

            <Baixo>
                <p>Hábitos</p>
                <p>Histórico</p>
            </Baixo>

            <Progresso> <p>Hoje</p> </Progresso>

        </Fundo>
    )

}

const Fundo = styled.div`
    padding: 92px 0 70px 0;
    width: 100%;
    height: 667px;
    position: relative;
    z-index: 0;
    background-color: #dbdbdb;
    border: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    p{
        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: grey;
        margin-left: 18px;
    }
    `
const Topo = styled.div`
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 70px;
        position: fixed;
        top: 0;
        background-color: #126BA5; 
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    `
const Baixo = styled.div`
        
        width: 100%;
        height: 70px;
        position: fixed;
        bottom: 0;
        background-color: #FFFFFF; 
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        p{
            color: #52B6FF;
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
           
        }
    `
const Logo = styled.img`
    width: 110px;
    height: 35px;
    margin-left: 10px;
`
const Imgperfil = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    margin-right: 10px;
`
const Progresso = styled.div`
    width: 91px;
    height: 91px; 
    position: fixed;
    z-index: 10;
    bottom: 10px;
    left: 39.5%;
    background-color: #52B6FF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    p{
        margin-left: 24px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 500;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
    }
`
const Title = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-left: 20px;
    }

    button{
        width: 40px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Lexend Deca';
        font-size: 25px;
        color: #FFFFFF;
        margin-right: 20px;
        border: none;
        background-color: #52B6FF;
        border-radius: 4.63636px;
    }
`
const Add = styled.div`
    margin-bottom: 7%;
    border-radius: 5px;
    width: 90%;
    background-color: #FFFFFF;
    display: flex;
    padding: 15px 0 15px 19px;
    flex-direction: column;
    input{
        margin-bottom: 5px;
        margin-top: 18px;
        padding-left: 3%;
        width: 90%;
        height: 50px;
        font-size: 150%;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        ::placeholder,
        ::-webkit-input-placeholder {
        color: #D4D4D4;
        font-family: 'Lexend Deca';
        }
    }
`
const Espaçodias = styled.div`
    width: 234px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    button{
        width: 31px;
        height: 31px;
        font-family: 'Lexend Deca';
        border-radius: 5px;
        border: 1px solid #DBDBDB;
        background-color: #FFFFFF;
        color: #DBDBDB; 
    }
`
const Espaçobotoes = styled.div`
    margin-top: 10%;
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-start: right; 
    align-items: center;
    justify-content: flex-end;
    button{
        width: 89px;
        height: 40px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-family: 'Lexend Deca';
        border: none;
        border-radius: 5px;
        margin-left: 7%;
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
    
    }
`




const Teste = styled.div`
    width: 100%;
    height: 200px;
    background-color: yellow;
    margin-bottom: 25px;
`