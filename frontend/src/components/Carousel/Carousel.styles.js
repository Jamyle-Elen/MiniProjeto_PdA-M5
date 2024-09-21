import styled from "styled-components";

export const CarouselTitle = styled.h4`
    font-size: 1.5rem;
    color: var(--dark-text);
    text-align: center;
    margin-bottom: 1.5rem;
`

export const CarouselContainer = styled.div`
    /* border: red solid 1px; */
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    height: auto;
    gap: 1rem;
    padding: 0 3rem;
    margin-bottom: 4rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr); /* 3 imagens por linha em telas médias */
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); /* 2 imagens por linha em telas pequenas */
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr); /* 1 imagem por linha em telas muito pequenas */
    }
`

// export const ImageContainerII = styled.div`
//     object-fit: cover;
//     border: none;
//     max-width: 15rem;
//     max-height: 15rem;
//     border: blue solid 1px;
// `

export const ImageContainerII = styled.div`
    object-fit: cover;
    border: none;
    max-width: 15rem;
    max-height: 20rem;
    /* border: pink solid 1px; */
`

export const ImageContainerIII = styled.div`
    object-fit: cover;
    border: none;
    max-width: 20rem;
    max-height: auto;
    /* border: yellow solid 1px; */
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
