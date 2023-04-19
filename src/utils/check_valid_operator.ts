export function CheckValidOperator(mathOperator: string) {

  if (mathOperator === '*') {
    return 'x';
  };

  if (mathOperator === '#') {
    return '+';
  };

  return mathOperator;
};