import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints, vars } from '../../styles/theme.css';

export const active = style({});
export const timeout = style({});

export const article = style({
  position: 'relative',
  width: '40rem',
  maxWidth: '100%',
  padding: '1rem',
  backgroundColor: 'rgba(27, 31, 34, 0.85)',
  borderRadius: vars.size.borderRadius,
  opacity: 0,
  transform: 'translateY(0.25rem)',
  transition: `opacity ${vars.duration.article} ease-in-out, transform ${vars.duration.article} ease-in-out`,
  selectors: {
    [`&${timeout}`]: {
      display: 'none',
    },
    [`&${active}${timeout}`]: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    [`&${active}`]: {
      display: 'block !important',
    },
  },
  '@media': {
    [breakpoints.small]: {
      padding: '1rem 1rem 0.5rem',
    },
    [breakpoints.xsmall]: {
      padding: '1rem 1rem 0.1rem',
    },
  },
});

export const content = style({
  padding: '1rem 1rem 0.1rem',
});

export const titleBar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  paddingBottom: '0.5rem',
  marginBottom: '1rem',
});

export const buttons = style({});

globalStyle(`${buttons} span`, {
  width: '12px',
  height: '12px',
  marginRight: '0.5rem',
  borderRadius: '50%',
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 'bold',
  lineHeight: 0,
  transition: `opacity ${vars.duration.transition} ease-in-out`,
});

export const close = style({
  position: 'relative',
  padding: '4px 0',
  textAlign: 'center',
  cursor: 'pointer',
  color: '#6a1814',
  background: '#ef6a5e',
  border: '1px solid #e15f53',
  selectors: {
    '&::after': {
      position: 'absolute',
      top: '4px',
      left: '2px',
      zIndex: 5,
      content: '"x"',
      opacity: 0,
      transition: `opacity ${vars.duration.transition} ease-in-out`,
    },
    [`${buttons}:hover &::after`]: {
      opacity: 1,
    },
  },
});

export const mini = style({
  background: 'rgba(253, 188, 64, 1)',
  border: '1px solid #e8b24a',
  selectors: {
    [`${buttons}:hover &`]: {
      opacity: 0.3,
    },
  },
});

export const max = style({
  background: 'rgba(52, 204, 74, 1)',
  border: '1px solid #5bb94c',
  selectors: {
    [`${buttons}:hover &`]: {
      opacity: 0.3,
    },
  },
});

export const title = style({
  opacity: 0.2,
  textAlign: 'center',
  color: vars.color.foreground,
  textTransform: 'uppercase',
  fontSize: '1.5rem',
  lineHeight: 1.4,
  letterSpacing: vars.font.headingLetterSpacing,
  fontWeight: 'bold',
});

export const imgContainer = style({
  height: '170px',
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: vars.size.borderRadius,
});
