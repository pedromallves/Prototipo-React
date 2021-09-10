import styled from "styled-components";

export const Seg = styled.div`
    width: 100vw;
    max-width: 100%;
    background-color: #292929;
    padding-bottom: 3rem;
    min-height: 100vh;

    .topBar{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: #1F1F1F;
    }
    .inline{
        display: inline;
    }
    .yellowMark{
        height: 2.8rem;
        width: 0.5rem;
        background-color: #FFCE00;
        margin-right: 1rem;
        border-radius: 0 10px 10px 0;
        display: inline;
    }
    .loginame{
        padding-left: 1.4rem;
        font-size: large;
        display: inline;
    }
    .avatar{
        width: 4.2rem;
        height: auto;
        border-radius: 50px;
        padding: 0;
        border: 4px solid white;
    }
    .avatar {
        width: 4.2rem;
        height: auto;
        border-radius: 50px;
        padding: 0;
        border: 4px solid white;
    }
    .visit{
        width: 1rem;
        height: auto;
        margin-right: 1rem;
        margin-left: auto;
    }
    .follow{
        width: 1rem;
        flex-grow: 1;
        text-align: end;
        padding-right: 1rem;
    }
    .linkUser {
        text-decoration: none;
        color: white;
        display: flex;
        padding: 1rem 0 1rem 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #353535;
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
        .follow{
            padding-right: 2rem;
        }
        .visit {
            padding-right: 2rem;
        }
    }
`;