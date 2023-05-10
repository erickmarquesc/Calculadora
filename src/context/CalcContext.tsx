import { createContext, ReactNode, useContext, useState } from "react";

export interface ICalcContextType {
  handleCalcAndSetResult: () => void;
  handleSetMathOperator: (mathOperation: string) => void;
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

  const [mathOperator, setMathOperator] = useState<string>('notSetMathOperator');

  const [valueFirstTerm, setValueFirstTerm] = useState<string>('0');
  const [valueSecondTerm, setValueSecondTerm] = useState<string>('0');

  const [result, setResult] = useState<number>(0);

  const handleSetMathOperator = (mathOperation: string) => { 

    if (mathOperation === 'C') {
      setResult(0);
      setMathOperator('notSetMathOperator');
      setValueFirstTerm('0');
      setValueSecondTerm('0');
      return;
    };

    if (mathOperation === 'CE') {
      setValueSecondTerm('0');
      return;
    };

    if (mathOperation === '+/-') {
      setResult(result * -1)
      return
    }

    setMathOperator(mathOperation);
  };

  /**
   * @description
   * A função monitora e valida o estado inicial da calculadora.
   * 
   * Para essa função caso nenhum operador matemático tenha sido escolhido
   * teremos (mathOperator === 'notSetMathOperator') = TRUE assim o segundo termo não será alterado.
   * 
   * Sendo assim, o secundo termo só receberá um valor depois que a operação
   * matemática for definida, quando, (mathOperator === 'notSetMathOperator') = FALSE.
   * 
   */
  const handleSetValueTerm = (term: string) => {
    if (mathOperator === 'notSetMathOperator') {
      return setValueFirstTerm(valueFirstTerm === '0' ? term : valueFirstTerm + term);
    } else {
      return setValueSecondTerm(valueSecondTerm === '0' ? term : valueSecondTerm + term);
    }
  };

  const handleCalcAndSetResult = () => {

    const firstTermInNumber =  Number(valueFirstTerm);
    const secondTermInNumber = Number(valueSecondTerm);

    switch (mathOperator) {
      case '+':
        return setResult(firstTermInNumber + secondTermInNumber);
      case '-':
        return setResult(firstTermInNumber - secondTermInNumber);
      case 'x':
        return setResult(firstTermInNumber * secondTermInNumber);
      case '/':
        return setResult(firstTermInNumber / secondTermInNumber);
      case '%':
        return setResult(firstTermInNumber % secondTermInNumber);
    }
  };

  return (
    <CalcContext.Provider value={{
      handleCalcAndSetResult,
      handleSetValueTerm,
      handleSetMathOperator,
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