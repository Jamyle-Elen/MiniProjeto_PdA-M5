import styled from "styled-components";

export const Square = styled.div`
top: 95%;
/* left ta como gambiarra, arrumar dps */
/* GAGA */
left: 33%;
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
`

export const Message = styled.h2`
font-size: 3.5rem;
font-weight: 100;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
/* color: var(--dark-text); */
`

export const Info = styled.p`
font-size: 1.5rem;
/* color: var(--dark-text); */

`