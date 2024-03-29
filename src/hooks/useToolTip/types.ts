import { Placement, Padding } from '@popperjs/core';

export interface TooltipRefs {
  targetRef: React.Dispatch<React.SetStateAction<HTMLElement | null>> | any;
  tooltip: React.ReactNode;
  tooltipVisible: boolean;
}

export interface TooltipOptions {
  placement?: Placement;
  trigger?: TriggerType;
  arrowPadding?: Padding;
  tooltipPadding?: Padding;
  tooltipOffset?: [number, number];
  hideTimeout?: number;
}

export type TriggerType = 'click' | 'hover' | 'focus';
