import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, #807ece 0%, #8e7ece 100%);

    display: grid;
    place-content: center;
  }

  body * {
    font-family: "Rubik";
    letter-spacing: -0.02em;
  }



`