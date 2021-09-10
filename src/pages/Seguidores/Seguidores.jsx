import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { GitUserContext } from "../../gitHContext";
import axios from "axios";
import NavMenu from "../../component/navMenu/navMenu";
import { Seg } from './styled'
import arrow from '../../img/Warrow.png'

export default function Seguidores(){
    const {seguidores, configs, atualizarVisitante} = useContext(GitUserContext)
    function reqNovoUsuario(nome){
        axios.get('https://api.github.com/users/'+nome)
            .then((res)=>{
                atualizarVisitante(res.data)
                })
    }
    function Seguidores(){
        return (
            seguidores.map(e=>{
                return(
                    <Link className="linkUser" to='/visitando' onClick={evento=>reqNovoUsuario(e.login)}>
                        <span className="yellowMark"></span>
                        <img className="avatar" src={e.avatar_url} alt="Usuario"/>
                        <p className="loginame">#{e.login}</p>
                        <img className="visit" src={arrow} alt="visitar" />
                    </Link>
            )}))
    }
    return(
        <>
        <Seg>
            <div className="topBar">
                <Link className="lInicio" to='/inicio'><img src={arrow} alt="voltar" /></Link>
                <h1 className="tInicio">{configs.followers<=30? configs.followers : 30} {configs.followers<=30? "Seguidores" : "Seguidores Carregados"}</h1>
            </div>
            <Seguidores></Seguidores>
        </Seg>
        <NavMenu />
        </>
)
}