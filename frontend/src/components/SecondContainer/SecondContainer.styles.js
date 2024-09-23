import styled from "styled-components";

export const ForestSession = styled.div`
    width: 100%;
    height: 100%;
    margin: 8rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 725px) {
        display: flex;
        flex-direction: column;
    }
`

export const Forest = styled.div`
    padding: 3.5rem 3.5rem;
    border-radius: 8px;
    max-width: 500px;
    height: 100%;
    background-color: ${({ theme }) => theme.forestSession};
    @media (max-width: 1024px) {
        max-width: 350px;
    }

    @media (max-width: 725px) {
        max-width: 330px;
    }

`

export const ForestInfo = styled.div`
    max-width: 450px;
    height: 100%;
    padding: 4rem 3.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.forestSession};

    @media (max-width: 1024px) {
        max-width: 350px;
    }

    @media (max-width: 725px) {
        max-width: 330px;
    }
`

export const ForestImg = styled.img`
    width: 3rem;
    
    @media (max-width: 1024px) {
        width: 2.5rem;
    }
`
export const Session = styled.div`
    width: 100%;
    height: 100%;
    margin: 1rem 0;
    font-size: 1.2rem;
    color: var(--dark-text);

    @media (max-width: 1024px) {
        font-size: 1rem;
    }
`

export const Span = styled.span`
    display: flex;
    align-items: center;
    font-weight: 100;
    gap: .5rem;
`

export const P = styled.p`
    font-size: 2rem;

    @media (max-width: 1024px) {
        font-size: 1.4rem;
    }
`

export const ForestHutImg = styled.img`
    width: 5rem;
    height: 100%;
    border-radius: 8px;

    @media (max-width: 1024px) {
        width: 4rem;
    }
`

export const Description = styled.p`
    font-size: 1.3rem;
    color: var(--dark-text);
    text-align: center;
    padding: 2rem 0;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }
`