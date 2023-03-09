import { CalculatoerContainer } from "./styles";

import { Display } from "../Display";
import { Keyboard } from "../Keyboard";

export function Calculator() {
  return (
    <CalculatoerContainer>
      <Display/>
      <Keyboard/>
    </CalculatoerContainer>  
  );
};