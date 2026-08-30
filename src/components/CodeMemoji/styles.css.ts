import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': {
    opacity: 0.3,
    filter: 'contrast(50%)',
  },
  '100%': {
    opacity: 1,
    filter: 'contrast(120%)',
  },
});

export const container = style({});

const image = {
  position: 'absolute',
  left: 0,
  right: 0,
  margin: 'auto',
  bottom: -2,
  height: 150,
  width: 125,
  borderRadius: '50%',
} as const;

export const memoji = style(image);

export const stickers = style({
  ...image,
  transition: 'filter 0.2s ease-in-out',
  animation: `${fadeIn} 1.5s ease-in`,
  filter: 'contrast(120%)',
  selectors: {
    [`${container}:hover &`]: {
      filter: 'contrast(150%)',
    },
  },
});
