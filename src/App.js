import GlobalStyle from "./globalstyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Login from "./Login"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"





export default function App(){

    return(
        <div>
            <GlobalStyle/>
            <Habitos/>
        </div>
    )

}