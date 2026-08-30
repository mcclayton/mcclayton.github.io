import { keyframes, style } from '@vanilla-extract/css';

const animationDuration = 4;

const darken = keyframes({
  '0%': {
    backgroundImage:
      'radial-gradient(rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 80%)',
  },
  '15%': {
    backgroundImage:
      'radial-gradient(rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0) 80%)',
  },
  '30%': {
    backgroundImage:
      'radial-gradient(rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0) 80%)',
  },
  '45%': {
    backgroundImage:
      'radial-gradient(rgba(0, 0, 0, 0.15) 25%, rgba(0, 0, 0, 0) 80%)',
  },
  '60%': {
    backgroundImage:
      'radial-gradient(rgba(0, 0, 0, 0.2) 25%, rgba(0, 0, 0, 0) 80%)',
  },
  '75%': {
    backgroundImage:
      'radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 80%)',
  },
  '90%': {
    backgroundImage:
      'radial-gradient(rgba(0, 0, 0, 0.3) 25%, rgba(0, 0, 0, 0) 80%)',
  },
  '100%': {
    backgroundImage:
      'radial-gradient(rgba(0, 0, 0, 0.35) 25%, rgba(0, 0, 0, 0) 80%)',
  },
});

const draw = keyframes({
  to: {
    strokeDashoffset: 0,
  },
});

export const loader = style({});

export const svgContainer = style({
  selectors: {
    [`&:not(${loader})`]: {
      animation: `${darken} 0.5s ease-in forwards ${animationDuration - 1.2}s`,
    },
  },
});

export const drawSVGPath = style({
  strokeDasharray: 800,
  strokeDashoffset: 800,
  animation: `${draw} ${animationDuration}s ease-in-out forwards`,
  selectors: {
    [`&${loader}`]: {
      strokeDasharray: 300,
      strokeDashoffset: 660,
      animation: `${draw} ${animationDuration}s linear alternate infinite`,
    },
  },
});
