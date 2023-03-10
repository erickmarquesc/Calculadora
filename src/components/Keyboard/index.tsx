import { KeyboardContainer } from "./styles";
import percent from "../../assets/percent.svg";
import multiplication from "../../assets/x.svg";
import divide from "../../assets/divide.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import plusminus from "../../assets/plusminus.svg";
import result from "../../assets/result.svg";
import { Button } from "./Button/styles";
import { useCalcResult } from "../../context/CalcContext";

export function Keyboard() {

  
  const { handleSetOperator, ValueTerm, calcResult} = useCalcResult();

  return (
    <KeyboardContainer>
      <Button className="secondary"
        onClick={() => handleSetOperator('CE')}
      >CE</Button>
      <Button
        onClick={() => handleSetOperator('C')}
      >C</Button>
      <Button>
        <img src={percent} alt="Percent" />
      </Button>
      <Button className="tertiary"
        onClick={() => handleSetOperator('/')}
      >
        <img src={divide} alt="Divide" />
      </Button>
      <Button
        onClick={() => ValueTerm(7)}
      >7</Button>
      <Button
        onClick={() => ValueTerm(8)}
      >8</Button>
      <Button
        onClick={() => ValueTerm(9)}
      >9</Button>
      <Button className="tertiary"
        onClick={() => handleSetOperator('*')}
      >
        <img src={multiplication} alt="Multiplication" />
      </Button>
      <Button
        onClick={() => ValueTerm(4)}
      >4</Button>
      <Button
        onClick={() => ValueTerm(5)}
      >5</Button>
      <Button
        onClick={() => ValueTerm(6)}
      >6</Button>
      <Button className="tertiary"
        onClick={() => handleSetOperator('-')}
      >
        <img src={minus} alt="Minus" />
      </Button>
      <Button
        onClick={() => ValueTerm(1)}
      >1</Button>
      <Button
        onClick={() => ValueTerm(2)}
      >2</Button>
      <Button
        onClick={() => ValueTerm(3)}
      >3</Button>
      <Button className="tertiary"
        onClick={() => handleSetOperator('+')}
      >
        <img src={plus} alt="Plus" />
      </Button>
      <Button
        onClick={() => handleSetOperator('x/-')}
      >
        <img src={plusminus} alt="PlusMinus" />
      </Button>
      <Button
        onClick={() => ValueTerm(0)}
      >0</Button>
      <Button>,</Button>
      <Button className="quartiary"
        onClick={() => calcResult()}
      >
        <img src={result} alt="Equals" />
      </Button>
    </KeyboardContainer>
  );
};