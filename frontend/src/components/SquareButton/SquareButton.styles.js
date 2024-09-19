import styled from "styled-components";

export const Square = styled.div`
top: 95%;
/* left ta como gambiarra, arrumar dps */
/* GAGA */
left: 33%;
width: 100px;
height: 100px;
z-index: 10000;
position: absolute;
display: flex;
gap: 5rem;
cursor: pointer;
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
`