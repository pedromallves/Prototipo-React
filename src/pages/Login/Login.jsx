import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { GitUserContext } from "../../gitHContext";
import {Page} from './styled'
import axios from "axios"
import gitHub from '../../img/gitHub.png'

export default function Login(){
    const [usuario, setUsuario] = useState('')
    const {atualizarConfig, atualizarRepos, atualizarSeguidores, atualizarSeguindo} = useContext(GitUserContext)
    const [erro, setErro] = useState(0)
    let history=useHistory()
    function definirUsuario(e){
        setUsuario(e.target.value)
    }
    function enviarUsuario(){
        if(usuario !=='' && usuario !== undefined){
            axios.get('https://api.github.com/users/'+usuario)
            .then((res)=>{
                atualizarConfig(res.data)
                axios.get('https://api.github.com/users/'+usuario+'/repos' ).then((res)=>{
                    atualizarRepos(res.data)
                })
                axios.get('https://api.github.com/users/'+usuario+'/following').then((res)=>{
                    atualizarSeguindo(res.data)
                })
                axios.get('https://api.github.com/users/'+usuario+'/followers').then((res)=>{
                    atualizarSeguidores(res.data)
                })
                history.push('/Inicio'); setErro(0)
            })
            .catch(err=>{setErro(1); console.log(err)})
        }
        else{
            setErro(2)
        }
    }
    function Validar(){
        if(erro === 2){
            return (<p className="userVal">Campo obrigatorio</p>)
        }else if(erro === 1){
            return (<p className="userVal">Login invalido</p>)
        }
        else{
            return ''
        }
    }
    return(
        <Page>
            <div className="menu">
                <img className="logoGitHub" src={ gitHub } alt="" />
                <div className="break"></div>
                <div className="userInput">
                    <input className="userName" type="text" placeholder='Usuário' onChange={e=>definirUsuario(e)} />
                    <Validar/>
                    <button className="btn" onClick={e=>enviarUsuario()} >Entrar</button>
                </div>
            </div>
        </Page>
    )
}