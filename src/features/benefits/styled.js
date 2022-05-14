import styled from "styled-components";
import Background from "./background.jpg";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Column = styled.div`
  padding-bottom: 58.33%;
  background-image: url(${Background});
  height: 100%;
`;

export const Content= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;