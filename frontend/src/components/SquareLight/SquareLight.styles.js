import styled from "styled-components";

export const SessionSquare = styled.div`
display: flex;
justify-content: center;
`

export const Square = styled.div`
top: 95%;
max-width: 600px;
height: auto;
z-index: 10000;
position: absolute;
display: flex;
align-items: center;
gap: .5rem;
cursor: pointer;
transition: .4s;
padding: 1.5rem 4rem;
border-radius: 5px;
background-color: var(--lightTheme-square);
color: var(--dark-text);
/* transition: .4s ease; */
    &:hover {
        transform: scale(1.01);
        background-color: var(--lightTheme-square-hover);
        box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px;
    }
    
    @media (max-width: 1024px) {
        max-width: 500px;
    }

    @media (max-width: 725px) {
        max-width: 350px;
        padding: 1.5rem 2rem;
    }
`

export const Message = styled.h2`
font-size: 3.5rem;
font-weight: 100;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
/* color: var(--dark-text); */

    @media (max-width: 1024px) {
        font-size: 3rem;
    }

    @media (max-width: 725px) {
        font-size: 2rem;
    }
`

export const Info = styled.p`
font-size: 1.5rem;
/* color: var(--dark-text); */

    @media (max-width: 1024px) {
        font-size: 1rem;
    }

    @media (max-width: 725px) {
        font-size: 1rem;
    }
`