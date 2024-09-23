import styled from "styled-components";

export const SessionSquare = styled.div`
display: flex;
width: 100vw;
position: relative;
justify-content: center;
gap: 5rem;
height: 10vh;

    @media (max-width: 725px) {
        gap: 3rem;
    }

    @media (max-width: 575px) {
        gap: 2rem;
    }
`

export const Square = styled.div`
bottom: 50%;
width: 100px;
height: 100px;
z-index: 10000;
position: relative;

cursor: pointer;

    @media (max-width: 575px) {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 450px) {
        width: 60px;
        height: 60px;
    }
`

export const SquareImg = styled.img`
width: 100%;
height: 100%;
padding: 1.5rem;
border-radius: 5px;
background-color: var(--footer-bg);
transition: .4s ease;
    &:hover {
        transform: scale(1.1);
        background-color: var(--squareButton-hover);
        box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
        border-radius: none;
    }

    @media (max-width: 575px) {
        padding: 1.2rem;
    }

    @media (max-width: 450px) {
        padding: .8rem;
    }
`