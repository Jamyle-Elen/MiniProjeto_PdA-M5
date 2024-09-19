import Images from "../../assets/images";
import NavBar from "../../components/NavBar/NavBar";
import { MainContainer, MainTitle, MainDescription } from "./LadingPage.styles";
import Footer from "../../components/Footer/Footer.jsx";
import SquareButton from "../../components/SquareButton/SquareButton.jsx";
import SecondContainer from "../../components/SecondContainer/SecondContainer.jsx";

const LadingPage = () => {
  return (
    <>
    <NavBar/>
    <MainContainer>
        <MainTitle>Floresta Amazônica</MainTitle>
        <MainDescription>Conheça seus encantos</MainDescription>
    </MainContainer>
    <SquareButton/>
    <section>
        <SecondContainer/>
    </section>
      <Footer/>
    </>
  );
};

export default LadingPage;
