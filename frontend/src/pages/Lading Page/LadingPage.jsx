import { useState } from "react";
import Images from "../../assets/images";
import NavBar from "../../components/NavBar/NavBar";
import { MainContainer, MainTitle, MainDescription } from "./LadingPage.styles";
import Footer from "../../components/Footer/Footer.jsx";
import SquareDark from "../../components/SquareDark/SquareDark.jsx";
import SquareLight from "../../components/SquareLight/SquareLight.jsx";
import SecondContainer from "../../components/SecondContainer/SecondContainer.jsx";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../utils/themes";
import Carousel from "../../components/Carousel/Carousel.jsx";

const LadingPage = () => {

  const [ theme, setTheme ] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <NavBar theme={theme} setTheme={setTheme}/>
    <MainContainer>
        <MainTitle>Floresta Amazônica</MainTitle>
        {theme === 'light' ?
        <MainDescription>Conheça seus encantos</MainDescription>
        : theme === 'dark' &&
        <MainDescription>Perdendo seus encantos</MainDescription>
        }
    </MainContainer>

    {theme === 'light' ? <SquareDark/> : <SquareLight/>}
    {/* <SquareDark/> */}
    <section>
        {theme === 'light' ? null : <SecondContainer/> }
    </section>
    <section>
    <Carousel/>
    </section>
      <Footer/>
    </>
    </ThemeProvider>
  );
};

export default LadingPage;
