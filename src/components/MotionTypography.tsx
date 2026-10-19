import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface StaggeredHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  className?: string;
  delay?: number;
  viewportTrigger?: boolean;
}

/**
 * StaggeredHeading:
 * Editorial word-by-word mask reveal inspired by BD Emerson and Superlogica.
 * Words emerge smoothly from behind an overflow-hidden mask with luxury easing.
 */
export const StaggeredHeading: React.FC<StaggeredHeadingProps> = ({
  text,
  as = 'h2',
  className = '',
  delay = 0,
  viewportTrigger = false
}) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : delay
      }
    }
  };

  const wordVariants = {
    hidden: {
      y: shouldReduceMotion ? 0 : '110%',
      opacity: shouldReduceMotion ? 1 : 0
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.16, 1, 0.3, 1] as const // Fixed: 4-tuple cubic-bezier
      }
    }
  };

  const MotionComponent = motion[as] as any;

  if (viewportTrigger) {
    return (
      <MotionComponent
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className={className}
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden align-top mr-[0.24em] last:mr-0 py-0.5"
          >
            <motion.span
              variants={wordVariants}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden align-top mr-[0.24em] last:mr-0 py-0.5"
        >
          <motion.span
            variants={wordVariants}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionComponent>
  );
};

interface MotionFadeProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
  viewportTrigger?: boolean;
}

/**
 * MotionFade:
 * Subtle upward drift and opacity fade for kickers, subheadings, and action buttons.
 */
export const MotionFade: React.FC<MotionFadeProps> = ({
  children,
  delay = 0,
  yOffset = 14,
  className = '',
  viewportTrigger = false
}) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : yOffset
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1] as const // Fixed: 4-tuple cubic-bezier
      }
    }
  };

  if (viewportTrigger) {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
};
