import styled from "styled-components";

export const Repos = styled.div`
    width: 100vw;
    max-width: 100%;
    background-color: #292929;
    padding-bottom: 2rem;
    min-height: 100vh;
    
    .reposContainer{
        text-decoration: none;
        flex-wrap: wrap;
        color: white;
        display: flex;
        padding: 1.5rem 0 1.5rem 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #353535;
    }
    .yellowMark{
        height: 2.8rem;
        width: 0.5rem;
        background-color: #FFCE00;
        margin-right: 1rem;
        border-radius: 0 10px 10px 0;
        display: inline;
        margin-bottom: 0;
    }
    .reposName{
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0;
    }
    .reposDes{
        padding: 0rem 3rem 0rem 1.5rem;
        margin: 0;
        font-weight: 100;
        font-size: 0.88rem;
        width: 100vw;
    }
    .topBar{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            background-color: #1F1F1F;
    }
    .lInicio{
        display: inline-block;
        text-decoration: none;
        color: white;
        padding-left: 0.8rem;
    }
    .lInicio img {
        width: 1rem;
        height: auto;
        transform: scaleX(-1);
    }
    .repoStars{
        display: inline-block;
        padding-left: 1.5rem;
        display: flex;
        align-items: center;
    }
    .repoStars img {
        width: 1rem;
        height: auto;
        padding-right: 8px;
    }
    .repoArchived{
        display: inline-block;
        flex-grow: 1;
        text-align: end;
        padding-right: 2rem;
    }
    .repoArchived img {
        width: 1rem;
        height: auto;
    }
    .tInicio{
        flex-grow: 2;
        color: white;
        padding-left: 20vw;
        float: right;
        font-size: 1.3rem;
        font-weight: 400;
    }
    @media(min-width:1200px){
        .tInicio{
            padding-left: calc(42.5% - (1cm + 0.8rem));
        }
    }
`;