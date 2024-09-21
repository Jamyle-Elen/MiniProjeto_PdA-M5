import { ThemeContext, ThemeProvider } from 'styled-components';
import { useContext, useState } from 'react';
import { lightTheme, darkTheme } from '../../utils/themes';
import Images from '../../assets/images';
import { CarouselContainer, CarouselImg, ImageContainerII, ImageContainerIII, CarouselTitle } from './Carousel.styles';

const Carousel = () => {
  const theme = useContext(ThemeContext)
  return (
    <>
        <CarouselTitle>
        {theme === lightTheme ? 'ANIMAIS DA AMAZONIA' : 'ANIMAIS EM EXTINÇÃO'}
        </CarouselTitle>
      <CarouselContainer>
        {/* <h4>ANIMAIS EM EXTINÇÃO</h4> */}
        <ImageContainerII>
        <CarouselImg src={theme === lightTheme ? Images.once : Images.panda} alt="" /></ImageContainerII>
        <ImageContainerIII>
            <CarouselImg src={theme === lightTheme ? Images.once : Images.panda} alt="" /></ImageContainerIII>
        <ImageContainerIII>
            <CarouselImg src={theme === lightTheme ? Images.once : Images.panda} alt="" /></ImageContainerIII>
        <ImageContainerII>
            <CarouselImg src={theme === lightTheme ? Images.once : Images.panda} alt="" /></ImageContainerII>

      </CarouselContainer>
    </>
  );
};

export default Carousel;