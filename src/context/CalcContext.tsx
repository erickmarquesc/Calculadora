import { createContext, ReactNode, useContext, useState } from "react";
import { FunctionsMath } from "../utils/functions_math";

export interface ICalcContextType {
  handleCalcAndSetResult: () => void;
  handleValidatedAndSetMathOperator: (mathOperation: string) => void;
  handleSetValueTerm: (value: string) => void;
  valueFirstTerm: string;
  valueSecondTerm: string;
  result: number;
  mathOperator: string;
};

export interface ICalcProviderProps {
  children: ReactNode;
};

export const CalcContext = createContext({} as ICalcContextType);

export function CalcContextProvider({ children }: ICalcProviderProps) {

  const [mathOperator, setMathOperator] = useState("#");

  const [valueFirstTerm, setValueFirstTerm] = useState('0');
  const [valueSecondTerm, setValueSecondTerm] = useState('0');

  const [result, setResult] = useState(0);

  /**
   * @description
   * A função monitora e valida o estado inicial da calculadora.
   * 
   * Para essa função caso nenhum operador matemático tenha sido escolhido
   * teremos (mathOperator === '#') = TRUE assim o segundo termo não será alterado.
   * 
   * Sendo assim, o secundo termo só receberá um valor depois que a operação
   * matemática for definida, quando, (mathOperator === '#') = FALSE.
   * 
   * @param term String
   */
  const handleSetValueTerm = (term: string) => {
    if (mathOperator === '#') {
      return setValueFirstTerm(valueFirstTerm === '0' ? term : valueFirstTerm + term);
    } else {
      return setValueSecondTerm(valueSecondTerm === '0' ? term : valueSecondTerm + term);
    }
  };

  /**
   * @description
   * Essa função valida se os operadores escolhido não são matemáticos,
   * tendo a função de limpar os termos da operação.
   * Caso o operador seja matemático ele muda o valor da variável mathOperator
   * para q a função de calculo matemático tenha o operador para o calculo do reusltado.
   * @param mathOperation string
   * @returns setMathOperator(mathOperation)
   */
  const handleValidatedAndSetMathOperator = (mathOperation: string) => {
    if (mathOperation === 'C') {
      setResult(0);
      setMathOperator('#');
      setValueFirstTerm('0');
      setValueSecondTerm('0');
      return;
    };

    if (mathOperation === 'CE') {
      setValueSecondTerm('0');
      return;
    };

    /**
     * Considerei a operação '+/-' nessa função pois ela se resume
     * em trocar o sinal do resultado
     */
    if (mathOperation === '+/-') {
      setResult(result * -1);
      return;
    };

    return setMathOperator(mathOperation);
  };

  /**
   * Essa função calcula o resultado depois que o operador foi validado como
   * um operador matemático.
   */
  const handleCalcAndSetResult = () => {

    switch (mathOperator) {
      case '+':
        setResult(FunctionsMath(valueFirstTerm, valueSecondTerm).getSum)
        break;
      case '-':
        setResult(FunctionsMath(valueFirstTerm, valueSecondTerm).getSubtraction)
        break;
      case '*':
        setResult(FunctionsMath(valueFirstTerm, valueSecondTerm).getMultiplication)
        break;
      case '/':
        setResult(FunctionsMath(valueFirstTerm, valueSecondTerm).getDivision)
        break;
      case '%':
        setResult(FunctionsMath(valueFirstTerm, valueSecondTerm).getPercentage)
        break;
    }
  };

  return (
    <CalcContext.Provider value={{
      handleCalcAndSetResult,
      handleValidatedAndSetMathOperator,
      handleSetValueTerm,
      valueSecondTerm,
      valueFirstTerm,
      mathOperator,
      result,
    }}>
      {children}
    </CalcContext.Provider>
  )
}

// HOOK
export function useCalcResult() {
  return useContext(CalcContext);
};