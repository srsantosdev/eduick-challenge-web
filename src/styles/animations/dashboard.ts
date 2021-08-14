import { Variant } from 'framer-motion';

type ObjectVariants = {
  [key: string]: Variant;
};

export const variantsBanner: ObjectVariants = {
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

export const variantsGridCards: ObjectVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  },
};
