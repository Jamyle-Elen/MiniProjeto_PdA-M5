import styled from "styled-components";

export const CarouselTitle = styled.h4`
    font-size: 1.5rem;
    color: var(--dark-text);
    text-align: center;
    margin-bottom: 1.5rem;
`

export const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    height: auto;
    gap: 1rem;
    padding: 0 3rem;
    margin-bottom: 4rem;
`

export const ImageContainerII = styled.div`
    object-fit: cover;
    border: none;
    max-width: 15rem;
    max-height: 20rem;
`

export const ImageContainerIII = styled.div`
    object-fit: cover;
    border: none;
    max-width: 20rem;
    max-height: auto;
`

export const CarouselImg = styled.img`
    object-fit: cover;
    border: none;
    filter: ${({theme}) => theme.filter};
    width: 100%;
    height: 100%;
    transition: .4s;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        transform: scale(1.02);
    }
`
