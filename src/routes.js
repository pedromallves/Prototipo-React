import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from './pages/Login/Login'
import Inicio from './pages/Inicio/Inicio'
import Repositorios from './pages/Repositorios/Repositorios'
import Seguidores from './pages/Seguidores/Seguidores'
import Seguindo from './pages/Seguindo/Seguindo'
import Visitando from './pages/Visitando/Visitando'

class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route component = {Login} path="/" exact  />
                    <Route component = {Inicio} path="/inicio" />
                    <Route component = {Repositorios} path="/repositorios" />
                    <Route component = {Seguidores} path="/seguidores" />
                    <Route component = {Seguindo} path="/seguindo" />
                    <Route component = {Visitando} path="/visitando" />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routes