import { createContext, ReactNode, useContext, useState } from "react"

export interface ICalcContextType {

  calcResult: () => void;
  handleSetOperator: (operação: string) => void;
  ValueTerm: (value: number) => void;
  valueFirstTerm: number;
  valueSecondTerm: number;
  result: number;
  operator: string;
};

export interface ICalcProviderProps {
  children: ReactNode;
};

export const CalcContext = createContext({} as ICalcContextType);
export function CalcContextProvider({ children }: ICalcProviderProps) {
  
  const [valueFirstTerm, setValueFirstTerm] = useState(0);
  const [valueSecondTerm, setValueSecondTerm] = useState(0);
  const [operator, setOperator] = useState("#");
  const [result, setResult] = useState(0);

  function ValueTerm(value: number) {
    if (operator === '#') {
      return setValueFirstTerm(value);
    } else {
      return setValueSecondTerm(value);
    }
  };

  function handleSetOperator(operação: string) {

    if (operação === 'CE') {
      setResult(0);
      setOperator('#');
      setValueFirstTerm(0);
      setValueSecondTerm(0);
    } else {
      setOperator(operação);
    }
  };

  function calcResult() {

    switch (operator) {
      case '+':
        setResult(valueFirstTerm + valueSecondTerm)
        break;
      case '-':
        setResult(valueFirstTerm - valueSecondTerm)
        break;
      case '*':
        setResult(valueFirstTerm * valueSecondTerm)
        break;
      case '/':
        setResult(valueFirstTerm / valueSecondTerm)
        break;
      case '%':
        setResult((valueFirstTerm / 100) * valueSecondTerm)
        break;
    }
  };

  return (
    <CalcContext.Provider value={{
      calcResult,
      ValueTerm,
      handleSetOperator,
      valueFirstTerm,
      valueSecondTerm,
      operator,
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