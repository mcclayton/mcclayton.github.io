import { style } from '@vanilla-extract/css';

export const container = style({});

export const spinner = style({
  width: '100%',
  height: '100%',
});

export const content = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#454b59',
});

export const label = style({
  fontStyle: 'italic',
  fontSize: 20,
  padding: 10,
});
