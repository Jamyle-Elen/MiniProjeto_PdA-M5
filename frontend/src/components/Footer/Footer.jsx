import Images from "../../assets/images";
import { SocialMedia, SocialMediaImg, MainFooter, BottomFooter, Copyright } from "./Footer.styles";
import '../../utils/variables.css'

const Footer = () => {
  return (
    <>
    <MainFooter>
        <SocialMedia>
            <div>
                <SocialMediaImg src={Images.facebook} alt="Facebook" />
                <SocialMediaImg src={Images.linkedin} alt="Linkedin" />
                <SocialMediaImg src={Images.github} alt="Github" />
                <SocialMediaImg src={Images.instagram} alt="Instagram" />
            </div>
        <Copyright>
            &copy; 2024 Floresta Amazonica | Todos os direitos reservados
        </Copyright>
        </SocialMedia>
        <BottomFooter>
        </BottomFooter>
    </MainFooter>
    </>
  );
};

export default Footer;