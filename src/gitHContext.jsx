import { createContext, useState } from "react";

const GitUserContext = createContext({})

function GUContextProvider({children}){
    const [configs, setConfigs] = useState({})
    const [visitante, setVisitante] = useState({})
    const [repos, setRepos] = useState([])
    const [seguidores, setSeguidores] = useState([])
    const [seguindo, setSeguindo] =  useState([{}])

    function atualizarConfig(config){
        setConfigs(config)
    }

    function atualizarVisitante(config){
        setVisitante(config)
    }

    function atualizarRepos(repos){
        setRepos(repos)
    }

    function atualizarSeguidores(seguidores){
        setSeguidores(seguidores)
    }

    function atualizarSeguindo(seguindo){
        setSeguindo(seguindo)
    }

    return(
        <GitUserContext.Provider value={{configs, atualizarConfig, repos, atualizarRepos, seguidores, atualizarSeguidores, seguindo, atualizarSeguindo, visitante, atualizarVisitante}}>
            {children}
        </GitUserContext.Provider>
    )
}

export {GitUserContext, GUContextProvider}