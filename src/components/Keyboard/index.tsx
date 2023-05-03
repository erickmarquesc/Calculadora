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

  const { handleSetMathOperator, handleSetValueTerm, handleCalcAndSetResult } = useCalcResult();

  const MathOperators = [
    { operator: 'CE', color: 'secundary', img: '', type: 'clearing' },
    { operator: 'C', color: 'secundary', img: '', type: 'clearing' },
    { operator: '%', color: 'secundary', img: percent, type: 'clearing' },
    { operator: '/', color: 'tertiary', img: divide, type: 'clearing' },
    { operator: 'x', color: 'secundary', img: multiplication, type: 'operator' },
    { operator: '-', color: 'secundary', img: minus, type: 'operator' },
    { operator: '+', color: 'secundary', img: plus, type: 'operator' }];

  const MathTerms = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

  return (
    <KeyboardContainer>

      <div className="operatorrow">
        {MathOperators.map(({ color, operator, img, type }) => {
          if (type === 'clearing') {
            return (

              <Button className={color} key={operator}
                onClick={() => handleSetMathOperator(operator)}
              >
                {operator !== 'CE' && operator !== 'C'
                  ? <img src={img} alt="Percent" />
                  : operator
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
          {MathOperators.map(({ operator, img, type }) => {
            if (type === 'operator') {

              return (
                <Button className="tertiary" key={operator}
                  onClick={() => handleSetMathOperator(operator)}
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