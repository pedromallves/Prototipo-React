import React, {useContext} from "react";
import { Link } from "react-router-dom";
import NavMenu from "../../component/navMenu/navMenu";
import { GitUserContext } from "../../gitHContext";
import {Home} from './styled'
import logout from '../../img/logout.png'

export default function Inicio(){
    const {configs } = useContext(GitUserContext)
    return(
        <>
        <Home>
            <div className="userImg"><img src={configs.avatar_url} alt="gitHub avatar" /></div>
            <div className="topDiv">
                <div className="topBar">
                    <h1>#{configs.login}</h1>
                    <Link to='/'>Sair<img className="logout" src={logout} alt="logout" /></Link>
                </div>
            </div>
            <div className="userInfo">
                <span className="yellowMark"></span>
                <h1>{configs.name}</h1>
                <div className="break"></div>
                <p className="userEmail">{configs.email}</p>
                <div className="break"></div>
                <p className="userLocation">{configs.location}</p>
            </div>
            <div className="userConfigs">
                <Link className="ConfigInfo" to='/seguidores'>
                    <h1>{configs.followers}</h1>
                    <p>Seguidores</p>
                </Link>
                <Link className="ConfigInfo" to='/seguindo'>
                    <h1>{configs.following}</h1>
                    <p>Seguindo</p>
                </Link>
                <Link className="ConfigInfo" to='/repositorios'>
                    <h1>{configs.public_repos}</h1>
                    <p>Repos</p>
                </Link>
            </div>
            <div className="bio">
                <span className="yellowMark"></span>
                <h1>BIO</h1>
                <div className="break"></div>
                <p>{configs.bio? configs.bio : "Não possui biografia."}</p>
            </div>
        </Home>
        <NavMenu />
        </>
    )
}