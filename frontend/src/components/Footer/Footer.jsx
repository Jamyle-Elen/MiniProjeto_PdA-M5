import Images from "../../assets/images";
import { SocialMedia, SocialMediaImg, MainFooter, BottomFooter, Copyright } from "./Footer.styles";

const Footer = () => {
  return (
    <>
    <MainFooter>
        <SocialMedia>
            <div>
                <a href="https://www.facebook.com/jamyle.elen" target="_blank"><SocialMediaImg src={Images.facebook} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/in/jamyle-elen/" target="_blank"><SocialMediaImg src={Images.linkedin} alt="Linkedin" /></a>
                <a href="https://github.com/Jamyle-Elen" target="_blank"><SocialMediaImg src={Images.github} alt="Github" /></a>
                <a href="https://www.instagram.com/yunna.chae/" target="_blank"><SocialMediaImg src={Images.instagram} alt="Instagram" /></a>
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