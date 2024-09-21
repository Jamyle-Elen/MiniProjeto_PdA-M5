import Images from "../../assets/images";
import { NavBarContainer, ImgTheme } from "./NavBar.styles";

const NavBar = ({theme, setTheme}) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <>
      <header>
        <NavBarContainer>
            <ImgTheme onClick={()=>{toggle_mode()}} src={theme === 'light' ? Images.sun_icon_dark : Images.moon_icon_light} alt="Icon dark mode" />
        </NavBarContainer>
    </header>
    </>
  );
};

export default NavBar;