import React, { useState } from 'react'
import './login.css'
import { MdEmail, MdLock } from "react-icons/md";

const login = () => {

    return(
        <div className="login">
            <div className="login-logo">
            <img src="https://img.icons8.com/plasticine/2x/login-rounded-right.png"
            alt="login app" />
            </div>
            
            <div className="tela">
                <h1>Acessar App</h1>
                <div className="email">
                    <MdEmail/>
                    <input
                     type="text"
                     placeholder="Digite seu email"
                    />
                </div>
                <div className="password">
                    <MdLock/>
                    <input
                     type="text"
                     placeholder="Digite sua senha"
                    />
                </div>

                <button type="submit">
                    Entrar
                </button>
                <h4>Não Tenho Conta</h4>
                <button type="submit">
                    Cadastrar
                </button>
            </div>

        </div>


    )
       
    
}

export default login ;