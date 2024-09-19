import styled from "styled-components";

export const MainFooter = styled.footer`
  width: 100%;
  background-color: var(--footer-bg);
`;

export const SocialMedia = styled.div`
  width: 100%;
  padding-top: 3rem;
  height: 30vh;
  /* border: red solid 1px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
`;

export const SocialMediaImg = styled.img`
  padding: 0 0.5rem;
  margin-bottom: 1rem;
  width: 40px;
`;

export const Copyright = styled.p`
  color: var(--dark-text);
  font-weight: 100;
`;

export const BottomFooter = styled.div`
  width: 100%;
  height: 3vh;
  background-color: var(--bottom-footer-bg);
`;
