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
export function FunctionsMath(firstTerm: string, secondTerm: string) {

  const firstTermInNumber = Number(firstTerm);
  const secondTermInNumber = Number(secondTerm);

  const getSum = () => {
    return firstTermInNumber + secondTermInNumber;
  };

  const getSubtraction = () => {
    return firstTermInNumber - secondTermInNumber;
  };

  const getMultiplication = () => {
    return firstTermInNumber * secondTermInNumber;
  };

  const getModulus = () => {
    return firstTermInNumber % secondTermInNumber;
  };

  const getPercentage = () => {
    return (firstTermInNumber / 100) * secondTermInNumber;
  };

  const getDivision = () => {
    return firstTermInNumber / secondTermInNumber;
  };

  return {
    getSum,
    getSubtraction,
    getMultiplication,
    getModulus,
    getPercentage,
    getDivision
  };
};