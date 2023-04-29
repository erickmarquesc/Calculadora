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

  const { handleValidatedAndSetMathOperator, handleSetValueTerm, handleCalcAndSetResult } = useCalcResult();

  const MathOperations = [
    { operation: 'CE', color: 'secundary', img: '', type: 'clearing' },
    { operation: 'C', color: 'secundary', img: '', type: 'clearing' },
    { operation: '%', color: 'secundary', img: percent, type: 'clearing' },
    { operation: '/', color: 'tertiary', img: divide, type: 'clearing' },
    { operation: '*', color: 'secundary', img: multiplication, type: 'operator' },
    { operation: '-', color: 'secundary', img: minus, type: 'operator' },
    { operation: '+', color: 'secundary', img: plus, type: 'operator' }];

  const MathTerms = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

  return (
    <KeyboardContainer>

      <div className="operatorrow">
        {MathOperations.map(({ color, operation, img, type }) => {
          if (type === 'clearing') {
            return (

              <Button className={color} key={operation}
                onClick={() => handleValidatedAndSetMathOperator(operation)}
              >
                {operation !== 'CE' && operation !== 'C'
                  ? <img src={img} alt="Percent" />
                  : operation
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
              <Button key={term}
                onClick={() => handleSetValueTerm(term)}
              >{term}</Button>
            )
          })}
        </KeyboardContainerTerms>

        <div className="operatorcolumn">
          {MathOperations.map(({ operation, img, type }) => {
            if (type === 'operator') {

              return (
                <Button className="tertiary" key={operation}
                  onClick={() => handleValidatedAndSetMathOperator(operation)}
                >
                  <img src={img} alt={img} />
                </Button>
              )
            }
          })}
        </div>
      </KeyboardContent>

      <div className="operatorrow">
        <Button
          onClick={() => handleValidatedAndSetMathOperator('+/-')}
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