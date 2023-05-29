import * as React from 'react';
import styled, { css } from 'styled-components';
import { Option, Select, SelectValueWrapper } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import { ReactComponent as Cuba } from '@admiral-ds/icons/build/flags/Cuba.svg';
import { ReactComponent as Belarus } from '@admiral-ds/icons/build/flags/Belarus.svg';
import { ReactComponent as RussianFederation } from '@admiral-ds/icons/build/flags/RussianFederation.svg';

const MultipleMixin = css`
  & ${SelectValueWrapper} {
    padding-left: 0;
    column-gap: 16px;
    max-height: none;
  }
`;

const getFlag = (value: string) => {
  return value === 'Фидель' ? Cuba : value === 'Константин Колешонок' ? Belarus : RussianFederation;
};

const RenderingValue = styled.div`
  color: ${(p) => p.theme.color['Magenta/Magenta 50']};
  display: flex;
  column-gap: 8px;
  margin: 0;
  padding: 0 3px;
  border-width: 1px;
  border-style: dotted;
  border-radius: 4px;
  border-color: ${(p) => p.theme.color['Magenta/Magenta 50']};
`;

const CustomSelect = styled(Select)<{ multiple?: boolean }>`
  ${(p) => p.multiple && MultipleMixin}
`;
export const CustomRenderMultipleValuesTemplate = (props: SelectProps) => {
  const renderValue = (value: string | string[] | undefined) => {
    if (Array.isArray(value)) {
      return value.map((item) => {
        const Flag = getFlag(item);
        return (
          <RenderingValue>
            <Flag height={24} />
            {item}
          </RenderingValue>
        );
      });
    }
  };

  return (
    <>
      <CustomSelect {...props} multiple placeholder="Placeholder" renderSelectValue={renderValue}>
        <Option value="Саша Даль">Саша Даль</Option>
        <Option value="Алексей Елесин">Алексей Елесин</Option>
        <Option value="Константин Ионочкин">Константин Ионочкин</Option>
        <Option value="Анна Корженко">Анна Корженко</Option>
        <Option value="Фидель">Фидель</Option>
        <Option value="Константин Колешонок">Константин Колешонок</Option>
        <Option value="Алексей Орлов">Алексей Орлов</Option>
      </CustomSelect>
    </>
  );
};
