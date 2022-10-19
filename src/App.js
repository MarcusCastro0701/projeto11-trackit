import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Login from "./Login"
import Cadastro from "./Cadastro"
import GlobalStyle from "./globalstyle"



export default function App(){

    return(
        <div>
            <GlobalStyle/>
            <Login/>
        </div>
    )

}