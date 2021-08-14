import React, { ButtonHTMLAttributes } from 'react';

import { Container, Check } from './styles';

type CheckboxProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  checked?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  text,
  checked = false,
  ...rest
}) => {
  return (
    <Container checked={checked} {...rest} type="button">
      <Check checked={checked}>
        {checked && (
          <img data-testid="checkbox-checked" src="/check.svg" alt="Checked" />
        )}
      </Check>

      <span>{text}</span>
    </Container>
  );
};

export default Checkbox;
