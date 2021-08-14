import React, { useCallback, useMemo, useState } from 'react';
import Checkbox from '../Checkbox';

import { Container } from './styles';

const CheckboxGroup: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectOption = useCallback((option: string) => {
    setSelectedOption(option);
  }, []);

  const options = useMemo(() => {
    return [
      { value: 'teacher', text: 'I’m a teacher' },
      { value: 'student', text: 'I’m a student' },
    ];
  }, []);

  return (
    <Container>
      {options.map(option => (
        <Checkbox
          data-testid={`checkbox-${option.value}`}
          onClick={() => handleSelectOption(option.value)}
          key={option.value}
          text={option.text}
          checked={option.value === selectedOption}
        />
      ))}
    </Container>
  );
};

export default CheckboxGroup;
