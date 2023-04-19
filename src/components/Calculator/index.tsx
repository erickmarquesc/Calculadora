import { CalculatoerContainer } from "./styles";
import { Keyboard } from "../Keyboard";
import { Display } from "../Display";

export function Calculator() {
  return (
    <CalculatoerContainer>
      <Display/>
      <Keyboard/>
    </CalculatoerContainer>  
  );
};