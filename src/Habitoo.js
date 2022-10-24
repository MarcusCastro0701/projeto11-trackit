import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components";


export default function Habitoo(props){
    

    function marcarOuDesmarcar(){

        if (props.fator.done === false) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.fator.id}/check`
            const config = {
                headers: {
                    Authorization: `Bearer ${props.tokenlogin}`
                }
            }

            const promise = axios.post(URL, {}, config)

            promise.then((resposta) => {

                
                
                console.log("Post check feito!")

                const link = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

                const configuracao = {
                    headers: {
                        Authorization: `Bearer ${props.tokenlogin}`
                    }
                }
                const requisicao = axios.get(link, configuracao);


                requisicao.then((resposta) => {

                    props.setboolcount(true)
                    const filteredArr = resposta.data.filter((s) => (s.done === true));
                    console.log(filteredArr, "array de dones filtrada")
                    props.setarrdone(filteredArr);

                    console.log(resposta)
                    props.sethabitshoje(resposta.data)
                    console.log("Get hoje feito!")

                });

                requisicao.catch((erro) => {
                    console.log("deu erro no get pós check!")
                })

            });

            promise.catch((erro) => {
                console.log("deu erro no post do check!")
                console.log(erro)
            })

        } else {

            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.fator.id}/uncheck`
            const config = {
                headers: {
                    Authorization: `Bearer ${props.tokenlogin}`
                }
            }

            const promise = axios.post(URL, {}, config)

            promise.then((resposta) => {
                
                
                const c = props.count -1 
                props.setcount(c)
                
                console.log("Post uncheck feito!")

                const link = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

                const configuracao = {
                    headers: {
                        Authorization: `Bearer ${props.tokenlogin}`
                    }
                }
                const requisicao = axios.get(link, configuracao);


                requisicao.then((resposta) => {
                    props.setboolcount(true)
                    const filteredArr = resposta.data.filter((s) => (s.done === true));
                    console.log(filteredArr, "array de dones filtrada")
                    props.setarrdone(filteredArr);

                    console.log(resposta)
                    props.sethabitshoje(resposta.data)
                    console.log("Get hoje feito!")

                });

                requisicao.catch((erro) => {
                    console.log("deu erro no get pós uncheck!")
                })

            });

            promise.catch((erro) => {
                console.log("deu erro no post do check!")
                console.log(erro)
            })

        }

    }
    
    return(
        <Habito1 feito={props.fator.done}>
                <Englobainfos>
                    <Nomehabito>{props.fator.name}</Nomehabito>
                    <Infosequenciaatual feito={props.fator.done} >Sequencia atual: {props.fator.currentSequence} dias</Infosequenciaatual>
                    <Infosequenciarecorde feito={props.fator.done} >Seu recorde: {props.fator.highestSequence} dias</Infosequenciarecorde>
                </Englobainfos>

                <ion-icon onClick={marcarOuDesmarcar} name="checkbox"></ion-icon>
            </Habito1>
    )

}


const Habito1 = styled.div`
    z-index: 0;
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
        color: ${props => props.feito===true ? (`#8FC549`) : (`#E7E7E7`)};
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
const Infosequenciaatual = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    color: ${props => props.feito===true ? `#8FC549` : `grey`};
    line-height: 20px;
`
const Infosequenciarecorde= styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    color: ${props => props.feito===true ? `#8FC549` : `grey`};
    line-height: 20px;
`