import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components";
import bob from "./assets/bob.png"
import Trackit from "./assets/TrackIt.png"
import trash from "./assets/trash.svg"
import Dias from "./Dias"
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Habitos(props){

    const [letras, setLetras] = useState([
        {dia: "D", id: 0, selected: false},
        {dia: "S", id: 1, selected: false},
        {dia: "T", id: 2, selected: false},
        {dia: "Q", id: 3, selected: false},
        {dia: "Q", id: 4, selected: false},
        {dia: "S", id: 5, selected: false},
        {dia: "S", id: 6, selected: false},
        
    ])

    const [boolAddHabito, setBoolAddHabito] = useState(false)
    const [idHabito, setIdHabito] = useState('')
    const navigate = useNavigate();

    function mudaTela(){
        navigate("/hoje")
    }
    
    useEffect(() => {

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        
        const config = {
            headers: {
                Authorization: `Bearer ${props.tokenlogin}`
            }
        }
		const requisicao = axios.get(URL, config);
        

		requisicao.then((resposta) => {
			
            props.sethabits(resposta.data)
            console.log("Get feito!")
            
		});

        requisicao.catch((erro) => {
            console.log("deu erro!")
        })

	}, []);

    function deleta(id) {


        console.log(id)
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        const config = {
            headers: {
                Authorization: `Bearer ${props.tokenlogin}`
            }
        }
        const requisicao = axios.delete(URL, config);

        requisicao.then((resposta) => {

            console.log("Hábito deletado!")

            const link = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

            const configuracao = {
                headers: {
                    Authorization: `Bearer ${props.tokenlogin}`
                }
            }
            const requisicao = axios.get(link, configuracao);


            requisicao.then((resposta) => {

                props.sethabits(resposta.data)
                console.log("Get feito após deleção!")

            });

            requisicao.catch((erro) => {
                console.log("deu erro ao fazer o get pós deleção!")
            })


        });

        requisicao.catch((erro) => {
            console.log("Erro ao deletar hábito!")
            alert(erro.response.data.message)
            console.log(erro.response.data.message)
        })

    }

    function testeDeleta(fator){
        const confirma = window.confirm("deseja mesmo deletar o hábito?")
        if(confirma === true){
            deleta(fator)
        }
    }


    console.log(props.habits)
    return (
        <Fundo>

            <Topo>
                <Logo src={Trackit} />
                <Imgperfil src={props.img} />
            </Topo>
            
            <Title>
                <p> Meus Hábitos </p>
                <button onClick={() => setBoolAddHabito(true)}> + </button>
            </Title>
            {(boolAddHabito === false) ? "" : <Dias sethabits={props.sethabits} tokenlogin={props.tokenlogin} setbooladdhabito={setBoolAddHabito}/>}

            {(props.habits[0] === undefined ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> :
                props.habits.map((fator) =>

                    <Habitoadicionado>
                        <Topohabitos>
                            {fator.name}
                            <ion-icon onClick={() => testeDeleta(fator.id)} name="trash-outline"></ion-icon>
                        </Topohabitos>
                        <Espaçodias2>
                            {letras.map((factor) => <Botao marcado={fator.days.includes(factor.id)}>{factor.dia}</Botao>)}
                        </Espaçodias2>
                    </Habitoadicionado>
                )
            )}
            

            <Baixo>
                
                <p>Hábitos</p>
                <p>Histórico</p>
            </Baixo>
            
            <Progresso >
                <p>Hoje</p>
            </Progresso>

            <Bar onClick={mudaTela}>
                <CircularProgressbar  value={0} 
                styles={buildStyles({
                    pathColor: `#FFFFFF`,
                    trailColor: '#52B6FF',
                    backgroundColor: '#3e98c7',
                  })}
                />
            </Bar>

        </Fundo>
    )
    

}

const Bar = styled.div`
    position: fixed;
    z-index: 500;
    bottom: 13px;
    left: 40.2%;
    width: 85px;
    height: 85px;
`

const Fundo = styled.div`
    box-sizing: border-box;
    padding: 92px 0 70px 0;
    width: 100%;
    
    z-index: 1000000000000;
    
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
        z-index: 5000000;
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
const Espaçodias2 = styled.div`
    
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
    background-color: ${props => props.marcado ? `#DBDBDB` : `#FFFFFF`};
    color: ${props => props.marcado ? `#FFFFFF` : `#DBDBDB`}; 
    
`

const Habitoadicionado = styled.div`
    margin-bottom: 8px;
    padding: 17px 3%; 17px 5%;
    border-radius: 5px;
    width: 90%;
    height:70px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
const Topohabitos = styled.div`
    z-index: 0;
    width: 100%;
    display: flex;
    flex direction: row;
    justify-content: space-between;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    color: grey;
`


const Teste = styled.div`
    width: 100%;
    height: 200px;
    background-color: yellow;
    margin-bottom: 25px;
`