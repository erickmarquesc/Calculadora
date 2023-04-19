export function FunctionsMath(firstTerm: number, secondTerm: number) {

  const getSum = () => {
    return firstTerm + secondTerm;
  };

  const getSubtraction = () => {
    return firstTerm - secondTerm;
  };

  const getMultiplication = () => {
    return firstTerm * secondTerm;
  };

  const getModulus = () => {
    return firstTerm % secondTerm;
  };

  const getPercentage = () => {
    return (firstTerm / 100) * secondTerm;
  };

  const getDivision = () => {
    return firstTerm / secondTerm;
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