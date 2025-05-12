import { defineRecipe } from '@pandacss/dev';

export const cardFlipRecipe = defineRecipe({
  className: 'cardFlip',
  description:
    'A card that flips horizontally on hover (using CSS transitions)',
  base: {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s ease-in-out',
  },
  variants: {
    flipped: {
      true: {
        transform: 'rotateY(180deg)',
      },
    },
  },
  defaultVariants: {
    flipped: true,
  },
  jsx: ['CardFlip'],
  props: {
    frontBgImage: {
      type: 'string',
      description: 'Background image for the front face',
    },
    backBgImage: {
      type: 'string',
      description: 'Background image for the back face',
    },
  },
});

export const cardFaceStyles = defineRecipe({
  className: 'cardFace',
  base: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 'lg',
    backfaceVisibility: 'hidden',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  variants: {
    face: {
      front: {},
      back: {
        transform: 'rotateY(180deg)',
      },
    },
  },
  defaultVariants: {
    face: 'front',
  },
});
