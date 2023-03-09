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

#last-calc {
  text-align: right;
  font-size: 20px;
  line-height: 140%;
  color: #6b6b6b;
}

.secondary {
  color: #975dfa;
}

.tertiary {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0.01%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    #462878;
  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1);
}

.quartiary {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%), #7F45E2;
box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1);
}

`