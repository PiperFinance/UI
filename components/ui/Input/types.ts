import { ReactElement } from 'react';

export interface InputProps {
  isSuccess?: boolean;
  isWarning?: boolean;
}

export interface InputGroupProps {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  children: JSX.Element;
}
