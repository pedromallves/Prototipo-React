import styled from 'styled-components'

export const Page = styled.div`
    *{ //retirando espaco em branco na parte superior
    margin: 0;
    }
    background-color: #292929;
    width: 100vw;
    height: 100vh;
    
    .menu{
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        height: 80%;
    }
    .break {
        flex-basis: 100%;
        height: 0;
    }
    .logoGitHub{
        width: 113px;
        height: auto;
        border-radius: 50%;
        padding-bottom: 3rem;
    }
    .userInput{
        position: relative;
        text-align: center;
    }
    .userName{
        width: 90%;
        font-size: 1.4rem;
        padding: 0.5rem 0 0.5rem 0.5rem;
        border-radius: 10px;
        border: 0;
    }
    .userName:focus {
        outline: none;
    }
    .userVal{
        color: red;
        font-size: 0.9rem;
        position: absolute;
        top: 10%;
        left: 54%;
    }
    .btn{
        background-color: #FFCE00;
        border-radius: 10px;
        width: 92%;
        padding: 0.6rem 0;
        margin-top: 1rem;
        border: 0;
    }
`;