import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, DropdownContainer, mediumGroupBorderRadius, typography } from '@admiral-ds/react-ui';
import type { DropdownContainerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const StyledText = styled.div`
  ${typography['Body/Body 1 Short']}
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  padding: 8px;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
  overflow: auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SimpleContainerTemplate = ({
  themeBorderKind,
  ...props
}: DropdownContainerProps & { themeBorderKind?: BorderRadiusType }) => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const { targetElement, ...other } = props;

  const clickOutside = (e: Event) => {
    if (e.target && buttonRef.current?.contains(e.target as Node)) {
      return;
    }
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <Wrapper>
        <Button ref={buttonRef} onClick={() => setOpen(!open)}>
          Текст
        </Button>
        {open && (
          <DropdownContainer
            alignSelf="flex-end"
            targetElement={targetElement || buttonRef.current}
            onClickOutside={clickOutside}
            className="dropContainerClass"
            {...other}
          >
            <StyledText>
              Это просто контейнер, в который можно поместить все что угодно. Он просто умеет позиционироваться
            </StyledText>
          </DropdownContainer>
        )}
      </Wrapper>
    </ThemeProvider>
  );
};
