import GlobalStyle from "./globalstyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Login from "./Login"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"
import Hoje from "./Hoje"





export default function App(){

    const [tokenLogin, setTokenLogin] = useState('')
    const [habits, setHabits] = useState([])
    const [habitsHoje, setHabitsHoje] = useState([])
    const [arrDone, setArrDone] = useState([])
    const [img, setImg] = useState()
    const [arredondado, setArredondado] = useState()

    return(
        <BrowserRouter>

            <GlobalStyle/>

            <Routes>
                <Route path="/" element={<Login  setimg={setImg} settokenlogin={setTokenLogin}/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/habitos" element={<Habitos img = {img} tokenlogin={tokenLogin} habits={habits} sethabits={setHabits}/>}/>
                <Route path="/hoje" element={<Hoje img = {img} arrdone={arrDone} setarrdone={setArrDone} habitshoje={habitsHoje} sethabitshoje={setHabitsHoje} tokenlogin={tokenLogin}/>}/>
            </Routes>

        </BrowserRouter>
    )

}