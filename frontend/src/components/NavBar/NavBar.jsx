import Images from "../../assets/images";
import { NavBarContainer, ImgTheme } from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <header>
        <NavBarContainer>
            <ImgTheme src={Images.sun_icon_dark} alt="Icon dark mode" />
        </NavBarContainer>
    </header>
    </>
  );
};

export default NavBar;