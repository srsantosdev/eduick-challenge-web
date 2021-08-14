import React from 'react';

import { Container, Button } from './styles';

type MobileMenuProps = {
  isOpen: boolean;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, ...rest }) => {
  return (
    <Container isOpen={isOpen} {...rest}>
      <Button>
        Change to teacher mode
        <img src="/arrow-right.svg" alt="Go to" />
      </Button>
    </Container>
  );
};

export default MobileMenu;
