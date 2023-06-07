import { type MouseEvent, forwardRef } from 'react';
import { ReactComponent as ChevronLeftOutline } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

import { IconPlacement, TooltipHoc } from '@admiral-ds/react-ui';

type ButtonProps = {
  onMouseDown: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  type: 'left' | 'right';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ onMouseDown, disabled, type }, ref) => (
  <IconPlacement
    dimension="lSmall"
    ref={ref}
    onMouseDown={(event) => {
      event?.preventDefault();
      onMouseDown(event);
    }}
    disabled={disabled}
    highlightFocus={false}
  >
    {type === 'left' && <ChevronLeftOutline />}
    {type === 'right' && <ChevronRightOutline />}
  </IconPlacement>
));

export const ButtonWithTooltip = TooltipHoc(Button);
