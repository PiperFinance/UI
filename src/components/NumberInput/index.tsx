import Input from '@ui/Input/Input';
import React from 'react';

interface INumberInput {
  value: number;
  setValue: () => void;
  disabled: boolean;
}

const NumberInput = (props: INumberInput) => {
  return (
    <Input
      type="text"
      pattern="^[0-9]*[.,]?[0-9]*$"
      autoCorrect="off"
      autoComplete="off"
      spellCheck="false"
      inputMode="decimal"
      placeholder="0"
      disabled={props.disabled}
      onChange={props.setValue}
      fontSize="xl"
      value={props.value}
    />
  );
};

export default NumberInput;
