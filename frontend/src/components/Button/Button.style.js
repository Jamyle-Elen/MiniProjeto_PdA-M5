import styled from "styled-components";

const ReportButton = styled.button`
  background-color: var(--report-button);
  border: none;
  color: #353535;
  font-family: "Jersey 20", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1rem;
  padding: 10px 30px;
  cursor: pointer;
  position: relative;
  letter-spacing: 1px;
  transition: .4s;
  margin: 10px;
  box-shadow: 0 0 0 4px transparent;
  width: 13rem;
  height: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    border: 2px solid #d9d9d9;
    pointer-events: none;
  }

  &:hover {
    background-color: var(--lightTheme-btn-hover);
  }
`

const Info = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem;
`

export { ReportButton, Info };
