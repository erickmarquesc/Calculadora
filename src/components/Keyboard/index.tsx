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


export function Keyboard() {

  const { handleSetMathOperation, handleSetValueTerm, handleCalcAndSetResult } = useCalcResult();

  const MathOperations = [
    { operation: 'CE', color: 'secundary', img: '' },
    { operation: 'C', color: 'secundary', img: '' },
    { operation: '%', color: 'secundary', img: percent },
    { operation: '/', color: 'tertiary', img: divide }];

  const MathOperationsBase = [
    { operation: '*', img: multiplication },
    { operation: '-', img: minus },
    { operation: '+', img: plus }];

  const MathTerms = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  return (
    <KeyboardContainer>

      <div className="operatorrow">
        {MathOperations.map(({ color, operation, img }) => {
          return (
            <Button className={color} key={operation}
              onClick={() => handleSetMathOperation(operation)}
            >
              {operation !== 'CE' && operation !== 'C'
                ? <img src={img} alt="Percent" />
                : operation
              }
            </Button>
          )
        })}
      </div>

      <KeyboardContent>
        <KeyboardContainerTerms>
          {MathTerms.map((term) => {
            return (
              <Button key={term}
                onClick={() => handleSetValueTerm(term)}
              >{term}</Button>
            )
          })}
        </KeyboardContainerTerms>

        <div className="operatorcolumn">
          {MathOperationsBase.map(({ operation, img }) => {
            return (
              <Button className="tertiary" key={operation}
                onClick={() => handleSetMathOperation(operation)}
              >
                <img src={img} alt={img} />
              </Button>
            )
          })}
        </div>
      </KeyboardContent>

      <div className="operatorrow">
        <Button
          onClick={() => handleSetMathOperation('+/-')}
        >
          <img src={plusminus} alt="PlusMinus" />
        </Button>

        <Button
          onClick={() => handleSetValueTerm(0)}
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