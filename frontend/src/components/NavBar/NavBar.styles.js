import styled from "styled-components";

export const NavBarContainer = styled.nav`
width: 100vw;
padding: 0 10rem;
height: 70px;
position: absolute;
z-index: 1000;
display: flex;
justify-content: space-between;
align-items: center;

    @media (max-width: 1024px) {
        padding: 0 5rem;
        gap: 3rem;
    }
`

export const LastUpdate = styled.h2`
    border-radius: 5px;
    text-align: center;
    border: var(--dark-text) solid 1px;
    padding: .2rem 1rem;
    color: var(--dark-text);
    text-shadow: 1px 1px 1px #000;
    font-weight: 100;

    @media (max-width: 570px) {
        font-size: 1.2rem;
    }
`

export const ImgTheme = styled.img`
    width: 40px;
    padding: .1rem;
    border: ${({theme}) => theme.border};
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.70) 0px 5px 15px;
    cursor: pointer;
`
