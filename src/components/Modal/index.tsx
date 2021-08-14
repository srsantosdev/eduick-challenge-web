import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { Overlay, Content } from './styles';
import { contentModalVariants, overlayVariants } from './variants';

type ModalProps = {
  isOpen?: boolean;
  setIsOpen?: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          open={isOpen}
          variants={overlayVariants}
          data-testid="modal-landing"
          initial="unMounted"
          animate="mounted"
          exit="exit"
        >
          <Content
            variants={contentModalVariants}
            initial="unMounted"
            animate="mounted"
            exit="exit"
          >
            <button
              type="button"
              className="close-button"
              onClick={() => setIsOpen && setIsOpen()}
              data-testid="close-modal"
            >
              <img src="/close.svg" alt="Close" />
            </button>

            {children}
          </Content>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
