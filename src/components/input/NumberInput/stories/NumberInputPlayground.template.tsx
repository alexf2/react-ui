import { NumberInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, NumberInputProps } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const NumberInputPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: NumberInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <NumberInput
        prefix="От"
        defaultValue="2.00"
        onChange={(event) => {
          console.log(event.target.value);
        }}
        {...props}
      />
    </ThemeProvider>
  );
};
