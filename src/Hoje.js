import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components";
import bob from "./assets/bob.png"
import Trackit from "./assets/TrackIt.png"




export default function Hoje(){

    return(

        <Fundo>

            <Topo>
                <Logo src={Trackit} />
                <Imgperfil src={bob} />
            </Topo>

            <Title>
            Quinta, 20/20
            <p>Nenhum hábito concluído ainda</p>
            </Title>

            <Habito>
                <Englobainfos>
                    <Nomehabito>Ler 1 capítulo de livro</Nomehabito>
                    <Infosequencia>Sequencia atual: 1 dia</Infosequencia>
                    <Infosequencia>Seu recorde: 3 dias</Infosequencia>
                </Englobainfos>

                <ion-icon name="checkbox"></ion-icon>
            </Habito>

            <Habito>
                <Englobainfos>
                    <Nomehabito>Ler 1 capítulo de livro</Nomehabito>
                    <Infosequencia>Sequencia atual: 1 dia</Infosequencia>
                    <Infosequencia>Seu recorde: 3 dias</Infosequencia>
                </Englobainfos>

                <ion-icon name="checkbox"></ion-icon>
            </Habito>

            <Habito>
                <Englobainfos>
                    <Nomehabito>Ler 1 capítulo de livro</Nomehabito>
                    <Infosequencia>Sequencia atual: 1 dia</Infosequencia>
                    <Infosequencia>Seu recorde: 3 dias</Infosequencia>
                </Englobainfos>

                <ion-icon name="checkbox"></ion-icon>
            </Habito>

            
            
            <Baixo>
                <p>Hábitos</p>
                <p>Histórico</p>
            </Baixo>

            <Progresso> <p>Hoje</p> </Progresso>

        </Fundo>

    )

}





const Fundo = styled.div`
    padding: 92px 0 100% 0;
    width: 100%;
    height: 100vw;
    
    position: relative;
    z-index: 0;
    background-color: #dbdbdb;
    border: none;
    display: flex;
    flex-direction: column;
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
    margin-left: 3%;
    margin-bottom: 5%;
    width: 90%;
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
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
const Habito = styled.div`
    width: 90%;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 3% 1.5% 3% 3%;
    margin-left: 3%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ion-icon{
        color: #8FC549;
        width: 80px;
        height: 80px;
        position: relative;
        z-index: 0;
    }

`
const Englobainfos = styled.div`
    display: flex;
    flex-direction: column;

`

const Nomehabito = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 29px;
    color: grey;
    margin-bottom: 4.5%;
`
const Infosequencia = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    color: grey;
    line-height: 20px;
`