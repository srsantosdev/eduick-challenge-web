import React, {
  InputHTMLAttributes,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { Container, Field, IconContainer } from './styles';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, type, ...rest }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const tooglePasswordVisible = useCallback(() => {
    setPasswordVisible(state => !state);
  }, []);

  const inputType = useMemo(() => {
    switch (type) {
      case 'password':
        return passwordVisible ? 'text' : 'password';

      default:
        return type;
    }
  }, [type, passwordVisible]);

  return (
    <Container>
      <label>{label}</label>

      <Field>
        <input type={inputType} {...rest} />

        {type === 'password' && (
          <IconContainer
            onClick={tooglePasswordVisible}
            type="button"
            data-testid="eye-button-password"
          >
            {passwordVisible ? (
              <img
                src="/icon-eye-show.svg"
                alt="Password Show"
                data-testid="password-visible"
              />
            ) : (
              <img src="/icon-eye.svg" alt="Password Hidden" />
            )}
          </IconContainer>
        )}
      </Field>
    </Container>
  );
};

export default InputField;
