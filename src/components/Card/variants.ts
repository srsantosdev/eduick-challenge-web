import { Variant } from 'framer-motion';

type ObjectVariants = {
  [key: string]: Variant;
};

export const variantCard: ObjectVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.01,
    },
  },
};
