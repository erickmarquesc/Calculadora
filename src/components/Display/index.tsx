import { DisplayContainer, ResultSection } from "./styles";
import { useCalcResult } from "../../context/CalcContext";
import equals from "../../assets/equals.svg";

export function Display() {

  const { valueFirstTerm, valueSecondTerm, result, mathOperator } = useCalcResult();

  const RefactorMathOperator = mathOperator === 'notSetMathOperator' ? '+' : mathOperator;

  return (
    <DisplayContainer>
      <div id="last-calc">
        {valueFirstTerm}
        <label>
          {RefactorMathOperator}
        </label>
        {valueSecondTerm}</div>
      <ResultSection>
        <img src={equals} alt="Image of the mathematical operator equal" />
        <span>{result}</span>
      </ResultSection>
    </DisplayContainer>
  );
};