import React, {useContext} from "react";
import { Link } from "react-router-dom";
import NavMenu from "../../component/navMenu/navMenu";
import { GitUserContext } from "../../gitHContext";
import {Home} from './styled'
import axios from "axios";
import arrow from '../../img/Warrow.png'
import save from '../../img/save.png'

export default function Visitando(){
    const { visitante, atualizarConfig, atualizarRepos, atualizarSeguindo, atualizarSeguidores } = useContext(GitUserContext)
    function reqNovoUsuario(nome){
        axios.get('https://api.github.com/users/'+nome)
            .then((res)=>{
                atualizarConfig(res.data)
                axios.get('https://api.github.com/users/'+nome+'/repos').then((res)=>{
                    atualizarRepos(res.data)
                })
                axios.get('https://api.github.com/users/'+nome+'/following').then((res)=>{
                    atualizarSeguindo(res.data)
                })
                axios.get('https://api.github.com/users/'+nome+'/followers').then((res)=>{
                    atualizarSeguidores(res.data)
                })
            })
    }
    return(
        <>
        <Home>
            <div className="userImg"><img src={visitante.avatar_url} alt="avatar" /></div>
            <div className="topDiv">
                <div className="topBar">
                    <Link to='inicio' className="aImg"><img className="return" src={arrow} alt="voltar" /></Link>
                    <h1>#{visitante.login}</h1>
                    <Link to='/inicio' className="saving" onClick={e=>reqNovoUsuario(visitante.login)}>Salvar <img className="save" src={save} alt="salvar" /></Link>
                </div>
            </div>
            <div className="userInfo">
                <span className="yellowMark"></span>
                <h1>{visitante.name}</h1>
                <div className="break"></div>
                <p className="userEmail">{visitante.email}</p>
                <div className="break"></div>
                <p className="userLocation">{visitante.location}</p>
            </div>
            <div className="userConfigs">
                <div className="ConfigInfo">
                    <h1>{visitante.followers}</h1>
                    <p>Seguidores</p>
                </div>
                <div className="ConfigInfo">
                    <h1>{visitante.following}</h1>
                    <p>Seguindo</p>
                </div>
                <div className="ConfigInfo">
                    <h1>{visitante.public_repos}</h1>
                    <p>Repos</p>
                </div>
            </div>
            <div className="bio">
                <span className="yellowMark"></span>
                <h1>BIO</h1>
                <div className="break"></div>
                <p>{visitante.bio? visitante.bio : "Não possui biografia."}</p>
            </div>
        </Home>
        <NavMenu />
        </>
    )
}