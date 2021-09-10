import React from 'react'
import { Link } from 'react-router-dom'
import {NavStyle} from './styled'
import home from '../../img/home.png'
import repo from '../../img/gitIcon.png'
import follow from '../../img/follow.png'

export default function NavMenu(){
    return(
        <NavStyle>
            <div className="linkInicio">
                <Link to='/inicio' className="link"><img src={home} className="icon" alt="" /> <div className="break"></div> Home</Link>
            </div>
            <div className="linkRepos">
                <Link to='/repositorios' className="link"><img src={repo} className="icon" alt="" /> <div className="break"></div>Repos</Link>
            </div>
            <div className="linkSeguidores">
                <Link to='/seguidores' className="link"> <img src={follow} className="icon" alt="" /> <div className="break"></div>Seguidores</Link>
            </div>
            <div className="linkSeguindo">
                <Link to='/seguindo' className="link"> <img src={follow} className="icon" alt="" /> <div className="break"></div>Seguindo</Link>
            </div>
        </NavStyle>
    )
}