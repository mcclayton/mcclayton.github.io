import { style } from '@vanilla-extract/css';

const borderColor = 'rgba(255, 255, 255, 0.4)';
const hoverColor = 'rgba(255, 255, 255, 0.8)';
const borderWidth = '2px';
const transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

export const animatedButton = style({
  position: 'relative',
  display: 'inline-block',
  padding: '0.5em 2em',
  cursor: 'pointer',
  overflow: 'hidden',
  selectors: {
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: borderWidth,
      backgroundColor: borderColor,
    },
    '&::before': {
      top: 0,
    },
    '&::after': {
      bottom: 0,
    },
  },
});

export const verticalBorder = style({
  selectors: {
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      width: borderWidth,
      height: '100%',
      backgroundColor: borderColor,
    },
    '&::before': {
      left: 0,
    },
    '&::after': {
      right: 0,
    },
  },
});

export const horizontalHoverBorder = style({
  selectors: {
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      zIndex: 9,
      width: '100%',
      height: borderWidth,
      backgroundColor: hoverColor,
    },
    '&::before': {
      top: 0,
      transform: 'translate3d(-105%, 0, 0)',
      transition,
    },
    '&::after': {
      bottom: 0,
      transform: 'translate3d(105%, 0, 0)',
      transition,
    },
    [`${animatedButton}:hover &::before, ${animatedButton}:hover &::after`]: {
      transform: 'translate3d(0, 0, 0)',
    },
  },
});

export const verticalHoverBorder = style({
  selectors: {
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      zIndex: 9,
      width: borderWidth,
      height: '100%',
      backgroundColor: hoverColor,
    },
    '&::before': {
      left: 0,
      transform: 'translate3d(0, 105%, 0)',
      transition,
    },
    '&::after': {
      right: 0,
      transform: 'translate3d(0, -105%, 0)',
      transition,
    },
    [`${animatedButton}:hover &::before, ${animatedButton}:hover &::after`]: {
      transform: 'translate3d(0, 0, 0)',
    },
  },
});
