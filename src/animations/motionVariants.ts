import type { Variants } from 'framer-motion';

// Header animations
export const headerVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const navItemVariants: Variants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Hero section animations
export const heroHeadlineVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const heroImageVariants: Variants = {
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const heroBgBrushVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      delay: delay || 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

// Services section animations
export const serviceCardVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Experience section animations
export const timelineItemVariants: Variants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

// Works section animations
export const workCardVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

// Testimonials animations
export const testimonialCardVariants: Variants = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Footer CTA animations
export const ctaTextVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};