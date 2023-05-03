/**
 * Essa função calcula o resultado.
 * 
 * Os parametros são String, mas no escopo da função são transformados em
 * Number.
 * @param firstTerm String
 * @param secondTerm String
 * @constant firstTermInNumber = firstTerm
 * @constant secondTermInNumber = secondTerm
 * @example getSum = ()=>{return (firstTermInNumber + secondTermInNumber)}
 */
export function FunctionsMath(firstTerm: string, secondTerm: string, mathOperator: string) {

  const firstTermInNumber = Number(firstTerm);
  const secondTermInNumber = Number(secondTerm);
  const defaultResult = 0;

  switch (mathOperator) {
    case '+':
      return firstTermInNumber + secondTermInNumber;
    case '-':
      return firstTermInNumber - secondTermInNumber;
    case 'x':
      return firstTermInNumber * secondTermInNumber;
    case '/':
      return firstTermInNumber / secondTermInNumber;
    case '%':
      return firstTermInNumber % secondTermInNumber;
  }

  return defaultResult;
};