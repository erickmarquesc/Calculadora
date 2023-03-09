import { DisplayContainer, ResultSection } from "./styles";
import equals from "../../assets/equals.svg";

export function Display() {
  return (
    <DisplayContainer>
      <div id="last-calc">1 + 1</div>
      <ResultSection>
        <img src={equals} alt="sinal de igual" />
        <span>2</span>
      </ResultSection>
    </DisplayContainer>
  );
};