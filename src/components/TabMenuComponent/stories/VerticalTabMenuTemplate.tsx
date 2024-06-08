import { createRef, forwardRef, useLayoutEffect, useState } from 'react';
import type { MouseEventHandler, RefObject } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

import type { TabProps, VerticalTabProps } from '#src/components/TabMenuComponent/types';
import { VerticalTab } from '../tabs/VerticalTab';
import { TabIcon } from '#src/components/TabMenuComponent/tabs/TabIcon';
import { VerticalTabBadge } from '#src/components/TabMenuComponent/tabs/TabBadge';
import { VerticalTabMenuContainer } from '#src/components/TabMenuComponent/containers/VerticalTabMenuContainer';

const TAB_MENU_WIDTH = '260px';

interface TabContentProps extends TabProps {
  text: string;
  id?: string;
}

type TabWithRefProps = TabContentProps & { ref: RefObject<HTMLButtonElement> };

interface CustomVerticalTabProps extends TabContentProps, VerticalTabProps {}
const CustomVerticalTab = forwardRef<HTMLButtonElement, CustomVerticalTabProps>(
  ({ dimension = 'l', disabled, selected, text, id, ...props }: CustomVerticalTabProps, ref) => {
    return (
      <VerticalTab {...props} id={id} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
        <TabIcon $dimension={dimension} $disabled={disabled}>
          <MinusCircleOutline />
        </TabIcon>
        {text}
        <VerticalTabBadge disabled={disabled} selected={selected}>
          5
        </VerticalTabBadge>
      </VerticalTab>
    );
  },
);

const tabs = [
  { text: 'Text1', id: '1' },
  { text: 'Text22', id: '2' },
  { text: 'Text333', id: '3' },
  { text: 'Text4444', id: '4' },
  { text: 'Text55555', id: '5', disabled: true },
  { text: 'Text66666', id: '6' },
  { text: 'Text7777', id: '7' },
  { text: 'Text888', id: '8' },
  { text: 'Text99', id: '9' },
];

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const getUnderlinePosition = (element?: HTMLButtonElement | null | undefined) => {
  if (!element) return { left: 0, width: 0 };
  const rect = element.getBoundingClientRect();
  const parentRect = element.parentElement?.getBoundingClientRect();
  return { left: rect.left - (parentRect ? parentRect.left : 0), width: rect.width };
};

export const VerticalTabMenuTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  //<editor-fold desc="Создание табов для отрисовки">
  const [activeTabL, setActiveTabL] = useState<string | undefined>('3');
  const handleTabLClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setActiveTabL(e.currentTarget.id);
  };
  const [activeTabM, setActiveTabM] = useState<string | undefined>('3');
  const handleTabMClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setActiveTabM(e.currentTarget.id);
  };

  const tabsWithRefL: Array<TabWithRefProps> = tabs.map((tab) => ({ ...tab, ref: createRef<HTMLButtonElement>() }));
  const verticalTabsL = tabs.map((tab, index) => {
    return (
      <CustomVerticalTab
        text={tab.text}
        id={tab.id}
        key={tab.id}
        selected={tab.id === activeTabL}
        disabled={tab.disabled}
        width={TAB_MENU_WIDTH}
        onClick={handleTabLClick}
        ref={tabsWithRefL[index].ref}
      />
    );
  });
  const tabsWithRefM: Array<TabWithRefProps> = tabs.map((tab) => ({ ...tab, ref: createRef<HTMLButtonElement>() }));
  const verticalTabsM = tabs.map((tab, index) => {
    return (
      <CustomVerticalTab
        dimension="m"
        text={tab.text}
        id={tab.id}
        key={tab.id}
        selected={tab.id === activeTabM}
        disabled={tab.disabled}
        width={TAB_MENU_WIDTH}
        onClick={handleTabMClick}
        ref={tabsWithRefM[index].ref}
      />
    );
  });
  //</editor-fold>

  //<editor-fold desc="Параметры для корректной отрисовки TabActiveUnderline">
  const [underlineLeftL, setUnderlineLeftL] = useState(0);
  const [underlineWidthL, setUnderlineWidthL] = useState(0);
  const [underlineTransitionL, setUnderlineTransitionL] = useState(false);
  const styleUnderlineL = (enableTransition: boolean) => {
    const { left, width } = getUnderlinePosition(tabsWithRefL.find((tab) => tab.id === activeTabL)?.ref.current);
    setUnderlineTransitionL(enableTransition);
    setUnderlineWidthL(width);
    setUnderlineLeftL(left);
  };
  useLayoutEffect(() => {
    if (underlineWidthL === 0) {
      setTimeout(() => {
        styleUnderlineL(false);
      }, 300);
    } else {
      styleUnderlineL(true);
    }
  }, [activeTabL]);
  const [underlineLeftM, setUnderlineLeftM] = useState(0);
  const [underlineWidthM, setUnderlineWidthM] = useState(0);
  const [underlineTransitionM, setUnderlineTransitionM] = useState(false);
  const styleUnderlineM = (enableTransition: boolean) => {
    const { left, width } = getUnderlinePosition(tabsWithRefM.find((tab) => tab.id === activeTabM)?.ref.current);
    setUnderlineTransitionM(enableTransition);
    setUnderlineWidthM(width);
    setUnderlineLeftM(left);
  };
  useLayoutEffect(() => {
    if (underlineWidthM === 0) {
      setTimeout(() => {
        styleUnderlineM(false);
      }, 300);
    } else {
      styleUnderlineM(true);
    }
  }, [activeTabM]);
  //</editor-fold>

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <VerticalTabMenuContainer $underlinePosition="right">
          {verticalTabsL}
          {/*<ActiveTabUnderline
            $left={`${underlineLeftL}px`}
            $width={`${underlineWidthL}px`}
            $transition={underlineTransitionL}
          />*/}
        </VerticalTabMenuContainer>
        <VerticalTabMenuContainer $underlinePosition="left">
          {verticalTabsM}
          {/*<ActiveTabUnderline
            $left={`${underlineLeftM}px`}
            $width={`${underlineWidthM}px`}
            $transition={underlineTransitionM}
          />*/}
        </VerticalTabMenuContainer>
      </Wrapper>
    </ThemeProvider>
  );
};
