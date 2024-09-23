import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { lightTheme, darkTheme } from '../../utils/themes';
import Images from '../../assets/images';
import { CarouselContainer, CarouselImg, ImageContainerII, ImageContainerIII, CarouselTitle } from './Carousel.styles';

const Carousel = () => {
  const theme = useContext(ThemeContext)
  return (
    <>
        <CarouselTitle>
        {theme === lightTheme ? 'ANIMAIS DA AMAZÔNIA' : 'ANIMAIS EM RISCO DE EXTINÇÃO'}
        </CarouselTitle>
      <CarouselContainer>
        <ImageContainerII>
            <CarouselImg src={theme === lightTheme ? Images.panda : Images.ariranha} alt="Animais da amazonia" /></ImageContainerII>
        <ImageContainerIII>
            <CarouselImg src={theme === lightTheme ? Images.gatoMaracaja : Images.peixeboi} alt="Animais da amazonia" /></ImageContainerIII>
        <ImageContainerIII>
            <CarouselImg src={theme === lightTheme ? Images.once : Images.panda} alt="Animais da amazonia" /></ImageContainerIII>
        <ImageContainerII>
            <CarouselImg src={theme === lightTheme ? Images.gaviaoReal : Images.ave} alt="Animais da amazonia" /></ImageContainerII>

      </CarouselContainer>
    </>
  );
};

export default Carousel;
