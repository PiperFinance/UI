import BigNumber from "bignumber.js";

export const BIG_ZERO = new BigNumber(0);
export const BIG_ONE = new BigNumber(1);
export const BIG_NINE = new BigNumber(9);
export const BIG_TEN = new BigNumber(10);
export const BIG_EIGHTEEN = new BigNumber(18);

export const convertToBigNumber = (
  _number: number | string | BigNumber
): BigNumber => new BigNumber(_number.toString());

export const convertToString = (_Number: BigNumber): string => {
  return _Number.toFixed();
};

export const formatNumber = (
  _number: number | string | BigNumber,
  _decimal: number,
  _roundingMode: BigNumber.RoundingMode = 1
): string => {
  const bigAmount = convertToBigNumber(_number);
  return bigAmount.toFormat(_decimal, _roundingMode);
};

export const roundNumber = (
  _number: number | string | BigNumber,
  _decimal: number,
  _roundingMode: BigNumber.RoundingMode = 1
): BigNumber => {
  const bigAmount = convertToBigNumber(_number);
  return bigAmount.decimalPlaces(_decimal, _roundingMode);
};

// calculation
export const calculateNumberDecimal = (
  _number: number | string | BigNumber,
  _decimal: number
): string => {
  const bigNumber = convertToBigNumber(_number);
  const bigDecimal = convertToBigNumber(10 ** -_decimal);
  return convertToString(
    roundNumber(bigNumber.multipliedBy(bigDecimal), _decimal)
  );
};

export const calculateNumberDecimalContract = (
  _number: number | string,
  _decimal: number
): string => {
  const bigNumber = convertToBigNumber(_number);
  const bigDecimal = convertToBigNumber(10 ** _decimal);
  return convertToString(roundNumber(bigNumber.multipliedBy(bigDecimal), 0));
};

export const calculateMultiplyNumbers = (
  _firstNumber: number | string,
  _secNumber: number | string
): BigNumber => {
  const bigAmount = convertToBigNumber(_firstNumber);
  const bigDecimal = convertToBigNumber(_secNumber);
  return bigAmount.multipliedBy(bigDecimal);
};

export const calculateDivideNumbers = (
  _firstNumber: number | string,
  _secNumber: number | string
): BigNumber => {
  const bigAmount = convertToBigNumber(_firstNumber);
  const bigDecimal = convertToBigNumber(_secNumber);
  return bigAmount.div(bigDecimal);
};

export const calculateAddNumbers = (
  _firstNumber: number | string,
  _secNumber: number | string
): BigNumber => {
  const bigAmount = convertToBigNumber(_firstNumber);
  const bigDecimal = convertToBigNumber(_secNumber);
  return bigAmount.plus(bigDecimal);
};

export const calculateMinusNumbers = (
  _firstNumber: number | string,
  _secNumber: number | string
): BigNumber => {
  const bigAmount = convertToBigNumber(_firstNumber);
  const bigDecimal = convertToBigNumber(_secNumber);
  return bigAmount.minus(bigDecimal);
};

// compare

export const isEqual = (
  _firstNumber: BigNumber,
  _secNumber: BigNumber
): boolean => {
  const bigAmount = _firstNumber;
  const bigDecimal = _secNumber;
  return bigAmount.eq(bigDecimal);
};

export const isGreaterThan = (
  _firstNumber: BigNumber | string,
  _secNumber: BigNumber | string
): boolean => {
  const bigAmount = convertToBigNumber(_firstNumber);
  const bigDecimal = convertToBigNumber(_secNumber);
  return bigAmount.gt(bigDecimal);
};

export const isGreaterThanOrEqualTo = (
  _firstNumber: BigNumber,
  _secNumber: BigNumber
): boolean => {
  const bigAmount = _firstNumber;
  const bigDecimal = _secNumber;
  return bigAmount.gte(bigDecimal);
};
