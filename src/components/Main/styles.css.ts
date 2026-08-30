import { keyframes, style } from '@vanilla-extract/css';

const waveAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '10%': { transform: 'rotate(14deg)' },
  '20%': { transform: 'rotate(-8deg)' },
  '30%': { transform: 'rotate(14deg)' },
  '40%': { transform: 'rotate(-4deg)' },
  '50%': { transform: 'rotate(10deg)' },
  '60%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(0deg)' },
});

export const attention = style({
  marginBottom: 2,
  borderBottom: '2px solid #ff9806',
});

export const waveEmoji = style({
  width: '1rem',
  height: '1rem',
  marginLeft: '0.2rem',
  animationName: waveAnimation,
  animationDuration: '2.5s',
  animationIterationCount: 'infinite',
  transformOrigin: '70% 70%',
  display: 'inline-block',
});
