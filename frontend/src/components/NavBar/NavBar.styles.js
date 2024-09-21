import styled from "styled-components";

const NavBarContainer = styled.nav`
width: 100%;
height: 60px;
/* border: green solid 1px; */
position: absolute;
z-index: 1000;
display: flex;
justify-content: end;
align-items: center;

`
const ImgTheme = styled.img`
    width: 40px;
    padding: .1rem;
    border: #fff solid 1px;
    border-radius: 20px;
    cursor: pointer;
`

export {NavBarContainer, ImgTheme};