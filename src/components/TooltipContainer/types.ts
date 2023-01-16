import { ReactNode } from 'react';

export interface ITooltip {
  position: 'top' | 'bottom' | 'right' | 'left';
  tooltip: string | ReactNode;
  children: ReactNode;
}
