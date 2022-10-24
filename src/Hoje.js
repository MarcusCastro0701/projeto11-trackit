import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components";
import bob from "./assets/bob.png"
import Trackit from "./assets/TrackIt.png"
import dayjs from 'dayjs'
import locale from "../node_modules/dayjs/locale/pt-br"
import Habitoo from "./Habitoo"
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)



export default function Hoje(props){
    
    require('dayjs/locale/pt-br')
    let today = dayjs().locale('pt-br').format('dddd, DD/MM')

    const [boolCount, setBoolCount] = useState(false)

    const c = (100 / props.habitshoje.length)
    const porcentagem = c * props.arrdone.length
    const arredondado = Math.round(porcentagem)
    console.log(props.arrdone.length, c, arredondado, "tela /hoje")


    const navigate = useNavigate();

    function mudaTela(){
        navigate("/habitos")
    }

    useEffect(() => {

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        
        const config = {
            headers: {
                Authorization: `Bearer ${props.tokenlogin}`
            }
        }
		const requisicao = axios.get(URL, config);
        

		requisicao.then((resposta) => {

            if(props.arrdone.length > 0){
                setBoolCount(true)
            }
            const filteredArr = resposta.data.filter((s) => (s.done === true));
            console.log(filteredArr, "array de dones filtrada")
            props.setarrdone(filteredArr);

			console.log(resposta, "resposta get /hoje")
            props.sethabitshoje(resposta.data)
            console.log("Get hoje feito!")
            
		});

        requisicao.catch((erro) => {
            console.log("deu erro no get hoje!")
        })

	}, []);

    

    return(

        <Fundo>

            <Topo>
                <Logo src={Trackit} />
                <Imgperfil src={props.img} />
            </Topo>

            <Title tamanhoarrdone={props.arrdone.length}>
            {today}
            {(props.arrdone.length > 0) ? <p>{arredondado}% dos hábidos concluídos</p> : <p>Nenhum hábito concluído ainda</p>} 
            </Title>

            {props.habitshoje.map((fator) => <Habitoo setboolcount={setBoolCount} setarrdone={props.setarrdone} sethabitshoje={props.sethabitshoje} tokenlogin={props.tokenlogin} fator={fator}/>)}
            
            <Baixo>
                <p onClick={mudaTela} >Hábitos</p>
                <p>Histórico</p>
            </Baixo>

            <Progresso> <p>Hoje</p> </Progresso>

            <Bar>
                <CircularProgressbar value={arredondado} 
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
    padding: 92px 0 100% 0;
    width: 100%;
    
    
    position: relative;
    z-index: 0;
    
    border: none;
    display: flex;
    flex-direction: column;
    `
const Topo = styled.div`
        z-index: 10000;
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
        color: ${props => props.tamanhoarrdone > 0 ? (`#8FC549`) : (`#BABABA`)};
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