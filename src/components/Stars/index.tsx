import React from 'react';
import { v1 as uuid } from 'uuid';

import Star from './Star';

import { Container } from './styles';

type StarsProps = {
  stars: 1 | 2 | 3 | 4 | 5;
};

const Stars: React.FC<StarsProps> = ({ stars: starsNumber }) => {
  const stars = Array.from({ length: 5 }).map((_, index) => {
    const starIndex = index + 1;

    const isFilled = starIndex <= starsNumber;

    return {
      id: uuid(),
      isFilled,
    };
  });

  return (
    <Container>
      {stars.map(star => (
        <Star key={star.id} isFilled={star.isFilled} />
      ))}
    </Container>
  );
};

export default Stars;
