import GlobalStyle from "./globalstyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Login from "./Login"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"
import Hoje from "./Hoje"





export default function App(){

    return(
        <BrowserRouter>

            <GlobalStyle/>

            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/habitos" element={<Habitos/>}/>
            </Routes>

        </BrowserRouter>
    )

}