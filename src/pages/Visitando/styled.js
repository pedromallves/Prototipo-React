import styled from "styled-components";

export const Home = styled.div`
    width: 100vw;
    max-width: 100%;
    background-color: #292929;
    color: white;
    padding-bottom: 1.2rem;
    min-height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    overflow-x: hidden;
    *{ //retirando espaco em branco na parte superior
    margin: 0;
    }
    a{
        text-decoration: none;
        color: white;
    }
    .userImg img {
        width: 113px;
        height: auto;
        border-radius: 50%;
        border: 3px solid white;
    }
    
    .topDiv{
        background-color: #1F1F1F;
        padding: 1rem 1rem 0 1rem;
        height: 110px;
    }
    .topBar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 2rem;
    }
    .aImg {
        width: 30%;
    }
    .topBar h1 {
        font-size: medium;
        width: 40%;
        text-align: center;
    }
    .topBar a{
        padding-right: 1rem;
        font-weight: 200;
        width: 30%;
    }
    .saving {
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .divUserImg{
        display: flex;
        flex-grow: 1;
    }
    .userImg{
        position: absolute;
        top: 8.5%;
        text-align: center;
        width: 100vw;
    }
    .return{
        width: 1rem;
        height: auto;
        transform: scaleX(-1);
    }
    .save {
        width: 1rem;
        height: auto;
        padding-left: 10px;
    }
    .userInfo{
        padding-top: 5rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding-bottom: 3rem;
    }
    .yellowMark{
        height: 2.8rem;
        width: 0.5rem;
        background-color: #FFCE00;
        margin-right: 1rem;
        border-radius: 0 10px 10px 0;
        display: inline;
    }
    .break {
        flex-basis: 100%;
        height: 0;
    }
    .userEmail{
        padding-left: 1.5rem;
    }
    .userLocation{
        padding-left: 1.5rem;
        font-weight: 200;
    }
    .userConfigs{
        background-color: #383838;
        padding: 1rem 0;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
    .ConfigInfo{
        text-align: center;
        width: 30%;
    }
    .bio{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .bio p{
        padding-top: 0.4rem;
        padding-left: 1.5rem;
    }
`;