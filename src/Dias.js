import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components";
import bob from "./assets/bob.png"
import Trackit from "./assets/TrackIt.png"
import trash from "./assets/trash.svg"

// setLetras([...letras, letras[props.index].selected = false])

export default function Dias(props){

    const [letras, setLetras] = useState([
        {dia: "D", id: 0, selected: false},
        {dia: "S", id: 1, selected: false},
        {dia: "T", id: 2, selected: false},
        {dia: "Q", id: 3, selected: false},
        {dia: "Q", id: 4, selected: false},
        {dia: "S", id: 5, selected: false},
        {dia: "S", id: 6, selected: false},
        
    ])
    

    const [arrDias, setArrDias] = useState([])
    const [nomeHabito, setNomeHabito] = useState("")

    function Gerabotao(props){
        

        function handleId(){
            

            if (arrDias.includes(props.fator.id) === true) {
                const filteredSeats = arrDias.filter((s) => !(s === props.fator.id));
                setArrDias([...filteredSeats]);
                setLetras([...letras, letras[props.index].selected = false])
                
                
                
            }
            else{
                setArrDias([...arrDias, props.fator.id])
                setLetras([...letras, letras[props.index].selected = true])
                
            }
           
            
        }

        
        
        return(
            <Botao  selecionado = {props.fator.selected} onClick={handleId}>{props.fator.dia}</Botao>
        )
    }

    function post(){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        console.log(props.tokenlogin)
        const config = {
            headers: {
                Authorization: `Bearer ${props.tokenlogin}`
            }
        }

        const body = {name: nomeHabito, days: arrDias} 
        console.log(URL, config, body)
        const promise = axios.post(URL, body, config)
    
        promise.then((res) => {
            console.log("É nois!")
            console.log(res)
            props.setbooladdhabito(false)

            const link = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

            const configuracao = {
                headers: {
                    Authorization: `Bearer ${props.tokenlogin}`
                }
            }
            const requisicao = axios.get(link, configuracao);


            requisicao.then((resposta) => {

                props.sethabits(resposta.data)
                console.log("resposta", resposta.data)
                console.log("Get feito!")

            });

            requisicao.catch((erro) => {
                console.log("deu erro!")
                console.log(erro)
            })

        })
    
        promise.catch((err) => {
          alert(err.response.data.message)
          console.log(err.response.data.message)
        })
    }
    
    if(letras.length > 7){
        letras.pop();
    }
    console.log(arrDias)
    return(
        <Add>
            <input required value={nomeHabito} onChange={e => setNomeHabito(e.target.value)} placeholder="nome do hábito"></input>
            <Espaçodias>
                {letras.map((fator, index) => <Gerabotao selected={fator.selected} fator={fator} index={index} />)}
            </Espaçodias>
            <Espaçobotoes>
                <p onClick={() => props.setbooladdhabito(false)} >Cancelar</p> <button onClick={post}>Salvar</button>
            </Espaçobotoes>
        </Add>
    )

}



const Espaçodias = styled.div`
    
    width: 234px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    img{
        position: fixed;
        width: 10px;
        height: 10px;
        top: 100px;
        left: 50px;
    }
`
const Botao = styled.button`
    width: 31px;
    height: 31px;
    font-family: 'Lexend Deca';
    border-radius: 5px;
    border: 1px solid #DBDBDB;
    background-color: ${props => props.selecionado===true ? `#DBDBDB` : `#FFFFFF`};
    color: ${props => props.selecionado===true ? `#FFFFFF` : `#DBDBDB`};
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






















