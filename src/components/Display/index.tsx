import { CheckValidOperator } from "../../utils/check_valid_operator";
import { DisplayContainer, ResultSection } from "./styles";
import { useCalcResult } from "../../context/CalcContext";
import equals from "../../assets/equals.svg";

export function Display() {

  const { valueFirstTerm, valueSecondTerm, result, mathOperator } = useCalcResult();

  return (
    <DisplayContainer>
      <div id="last-calc">
        {valueFirstTerm}
        <label>
          {CheckValidOperator(mathOperator)}
        </label>
        {valueSecondTerm}</div>
      <ResultSection>
        <img src={equals} alt="Image of the mathematical operator equal" />
        <span>{result}</span>
      </ResultSection>
    </DisplayContainer>
  );
};