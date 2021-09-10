import styled from 'styled-components'

export const NavStyle = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    max-width: 100%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background-color: white;
    border-radius: 15px 15px 0 0;
    font-size: 0.8rem;
    a{
        text-decoration: none;
        color: black ;
        font-weight: 700;
    }
    .link {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .icon {
        width: 1.6rem;
        height: auto;
    }
    .break {
        flex-basis: 100%;
        height: 0;
    }
`;