import React, {useContext} from "react";
import { Link } from "react-router-dom"
import NavMenu from "../../component/navMenu/navMenu";
import { GitUserContext } from "../../gitHContext";
import { Repos } from './styled'
import star from '../../img/star.png'
import archived from '../../img/lock.png'
import unArchived from '../../img/unlock.png'
import arrow from '../../img/Warrow.png'

export default function Repositorios() {
    const {repos, configs} = useContext(GitUserContext)
    function isArchived(e){
        if(e.archived){
            return <img src={archived} alt="Repo arquivado" />
        }
        return <img src={unArchived} alt="Repo não arquivado" />
    }
    function Repositories(){
        return repos.map(e=>{
            return (
                <div className="reposContainer">
                    <span className="yellowMark"></span>
                    <p className="reposName">{e.name}</p>
                    <p className="reposDes">{e.description? e.description : "Sem Descrição"}</p>
                    <p className="repoStars"><img src={star} alt="star" />{e.stargazers_count}</p>
                    <p className="repoArchived">{isArchived(e)}</p>
                </div>
            )
        })
    }
    return(
        <>
            <Repos>
                <div className="topBar">
                    <Link className="lInicio" to='/inicio'><img src={arrow} alt="voltar" /></Link>
                    <h1 className="tInicio">{configs.public_repos<=30? configs.public_repos : 30}{configs.public_repos<=30? " Repositorios": " Repo Carregados"}</h1>
                </div>
                <Repositories></Repositories>
            </Repos>
            <NavMenu />
        </>
    )
}