import * as React from 'react';
import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { CustomOptionWrapper } from '#src/components/input/Select/styled';
import { OPTIONS } from '#src/components/input/Select/Stories/data';
import { Icon, TextWrapper } from '#src/components/input/Select/Stories/styled';

interface MyIncredibleOptionProps extends RenderOptionProps {
  shouldAnimate?: boolean;
  text: string;
}

const MyIncredibleOption = ({ text, shouldAnimate, ...props }: MyIncredibleOptionProps) => (
  <CustomOptionWrapper {...props}>
    <Icon shouldAnimate={shouldAnimate} />
    <TextWrapper>{text}</TextWrapper>
  </CustomOptionWrapper>
);

export const RenderPropsTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <Select {...props} value={selectValue} mode="searchSelect" onChange={onChange}>
      {OPTIONS.map(({ text, value }) => (
        <Option
          key={value}
          value={value}
          renderOption={(options) => (
            <MyIncredibleOption
              text={text}
              shouldAnimate={options.hovered && value !== selectValue}
              {...options}
              key={value}
            />
          )}
        />
      ))}
    </Select>
  );
};
