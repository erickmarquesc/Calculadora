import { KeyboardContainer, KeyboardContainerTerms, KeyboardContent } from "./styles";
import { useCalcResult } from "../../context/CalcContext";
import { Button } from "./Button/styles";

import plusminus from "../../assets/plusminus.svg";
import multiplication from "../../assets/x.svg";
import percent from "../../assets/percent.svg";
import result from "../../assets/result.svg";
import divide from "../../assets/divide.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

interface IMathOperatorsProps {
  operator: string,
  color: 'quartiary' | 'tertiary' | 'secondary' | 'primary',
  img: string | null,
  isTopPosition: boolean
}[];

export function Keyboard() {

  const { handleSetMathOperator, handleSetValueTerm, handleCalcAndSetResult } = useCalcResult();

  const MathOperators: IMathOperatorsProps[] = [
    { operator: 'CE', color: "tertiary", img: null, isTopPosition: true },
    { operator: 'C', color: "tertiary", img: null, isTopPosition: true },
    { operator: '%', color: "tertiary", img: percent, isTopPosition: true },
    { operator: '/', color: "tertiary", img: divide, isTopPosition: true },
    { operator: 'x', color: "tertiary", img: multiplication, isTopPosition: false },
    { operator: '-', color: "tertiary", img: minus, isTopPosition: false },
    { operator: '+', color: "tertiary", img: plus, isTopPosition: false }];

  const MathTerms: string[] = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

  return (
    <KeyboardContainer>

      <div className="operatorrow">
        {MathOperators.map(({ color, operator, img, isTopPosition }) => {
          if (isTopPosition) {
            return (
              <Button
                className={color}
                key={operator}
                onClick={() => handleSetMathOperator(operator)}
              >
                {img === null
                  ? operator
                  : <img src={img} alt="Percent" />
                }
              </Button>
            )
          }
        })}
      </div>

      <KeyboardContent>
        <KeyboardContainerTerms>
          {MathTerms.map((term) => {
            return (
              <Button
                key={term}
                onClick={() => handleSetValueTerm(term)}
              >{term}</Button>
            )
          })}
        </KeyboardContainerTerms>

        <div className="operatorcolumn">
          {MathOperators.map(({ operator, img, isTopPosition }) => {
            if (!isTopPosition) {
              return (
                <Button
                  className="tertiary"
                  key={operator}
                  onClick={() => handleSetMathOperator(operator)}
                >
                  {img === null
                    ? operator
                    : <img src={img} alt={img} />
                  }
                </Button>
              )
            }
          })}
        </div>
      </KeyboardContent>

      <div className="operatorrow">
        <Button
          onClick={() => handleSetMathOperator('+/-')}
        >
          <img src={plusminus} alt="PlusMinus" />
        </Button>

        <Button
          onClick={() => handleSetValueTerm('0')}
        >
          0
        </Button>

        <Button>,</Button>

        <Button className="quartiary"
          onClick={() => handleCalcAndSetResult()}
        >
          <img src={result} alt="Equals" />
        </Button>
      </div>
    </KeyboardContainer >
  );
};