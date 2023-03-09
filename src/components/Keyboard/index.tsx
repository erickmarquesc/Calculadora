import { KeyboardContainer } from "./styles";
import percent from "../../assets/percent.svg";
import multiplication from "../../assets/x.svg";
import divide from "../../assets/divide.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import plusminus from "../../assets/plusminus.svg";
import result from "../../assets/result.svg";
import { Button } from "./Button/styles";

export function Keyboard() {
  return (
    <KeyboardContainer>
      <Button className="secondary">CE</Button>
      <Button>C</Button>
      <Button>
        <img src={percent} alt="Percent" />
      </Button>
      <Button className="tertiary">
        <img src={divide} alt="Divide" />
      </Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button className="tertiary">
        <img src={multiplication} alt="Multiplication" />
      </Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button className="tertiary">
        <img src={minus} alt="Minus" />
      </Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button className="tertiary">
        <img src={plus} alt="Plus" />
      </Button>
      <Button>
        <img src={plusminus} alt="PlusMinus" />
      </Button>
      <Button>0</Button>
      <Button>,</Button>
      <Button className="quartiary">
        <img src={result} alt="Equals" />
      </Button>
    </KeyboardContainer>
  );
};