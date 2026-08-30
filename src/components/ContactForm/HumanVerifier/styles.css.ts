import { style } from '@vanilla-extract/css';

export const userOption = style({
  cursor: 'pointer',
  opacity: 0.5,
  padding: '0.2rem 1rem',
  selectors: {
    '&:hover': { opacity: 1 },
    '&.active': {
      border: '1px solid white',
      borderRadius: 3,
      opacity: 1,
    },
  },
});

export const honeypotField = style({
  display: 'none',
});
