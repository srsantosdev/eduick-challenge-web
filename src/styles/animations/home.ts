import { Variant } from 'framer-motion';

type ObjectVariants = {
  [key: string]: Variant;
};

export const variantsLeft: ObjectVariants = {
  unMounted: { opacity: 0, x: -50 },
  mounted: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 2.5,
    },
  },
};

export const variantsRight: ObjectVariants = {
  unMounted: { opacity: 0, x: 50 },
  mounted: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 2.5,
    },
  },
};

export const variantsHeader: ObjectVariants = {
  unMounted: { opacity: 0, y: -50 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
    },
  },
};
