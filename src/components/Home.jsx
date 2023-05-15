import React from "react";
import { styled } from "styled-components";
import ImageCarousel from "./ImageCarousel";
import Viewers from "./Viewers";
// import Container from "./Home.style";

function Home() {
  return (
    <Container>
      <ImageCarousel />
      <Viewers />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background: url("/images/home-background.png") center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
