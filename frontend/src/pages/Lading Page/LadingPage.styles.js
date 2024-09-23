import styled from "styled-components";
import Images from "../../assets/images";
import { createGlobalStyle } from "styled-components";

export const MainContainer = styled.main`
    width: 100%;
    height: 100vh;
    background-image: url(${({ theme }) => theme.background});
    transition: .4s;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.45) 0px -250px 36px -28px inset;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: var(--dark-text);
`
export const MainTitle = styled.h1`
    text-align: center;
    font-size: 6rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: 400;
    color: var(--dark-text);

    @media (max-width: 775px) {
        font-size: 5rem;
    }
`

export const MainDescription = styled.p`
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: 100;
    font-size: 1.5rem;
`
