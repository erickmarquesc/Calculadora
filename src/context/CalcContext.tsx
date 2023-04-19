import { createContext, ReactNode, useContext, useState } from "react";
import { FunctionsMath } from "../utils/functions_math";

export interface ICalcContextType {
  handleCalcAndSetResult: () => void;
  handleSetMathOperation: (mathOperation: string) => void;
  handleSetValueTerm: (value: number) => void;
  valueFirstTerm: number;
  valueSecondTerm: number;
  result: number;
  mathOperator: string;
};

export interface ICalcProviderProps {
  children: ReactNode;
};

export const CalcContext = createContext({} as ICalcContextType);

export function CalcContextProvider({ children }: ICalcProviderProps) {

  const [mathOperator, setMathOperator] = useState("#");

  const [valueFirstTerm, setValueFirstTerm] = useState(0);
  const [valueSecondTerm, setValueSecondTerm] = useState(0);

  const [result, setResult] = useState(0);

  const handleSetValueTerm = (term: number) => {
    /* Caso nenhum operador tenha sido escolhido
     * a condição será verdadeira: (mathOperator === '#') = TRUE
     * ---
     * Sendo assim podendo escolher o número para o primeiro termo,
     * assim que a condição for FALSE o segundo termo poderá ser escolhido.
     */
    if (mathOperator === '#') {
      return setValueFirstTerm(term);
    } else {
      return setValueSecondTerm(term);
    }
  };

  const handleSetMathOperation = (mathOperation: string) => {
    if (mathOperation === 'C') {
      setResult(0);
      setMathOperator('#');
      setValueFirstTerm(0);
      setValueSecondTerm(0);
      return;
    };

    if (mathOperation === 'CE') {
      setValueSecondTerm(0);
      return;
    };

    if (result !== 0 && mathOperation === '+/-') {
      setResult(result * -1);
      return;
    };

    return setMathOperator(mathOperation);
  };

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
      handleSetMathOperation,
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