import { DisplayContainer, ResultSection } from "./styles";
import { useCalcResult } from "../../context/CalcContext";
import equals from "../../assets/equals.svg";

export function Display() {

  const { valueFirstTerm, valueSecondTerm, result, operator } = useCalcResult();

  return (
    <DisplayContainer>
      <div id="last-calc">
        {valueFirstTerm}
        <label>
          {operator !== "#" ? operator : '+'}
        </label>
        {valueSecondTerm}</div>
      <ResultSection>
        <img src={equals} alt="sinal de igual" />
        <span>{result}</span>
      </ResultSection>
    </DisplayContainer>
  );
};