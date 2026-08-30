import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

const mobile = '(max-width: 680px)';

export const container = style({
  padding: '1rem',
  marginBottom: vars.size.elementMargin,
  border: `1px solid rgba(255, 255, 255, 0.2)`,
  borderRadius: vars.size.borderRadius,
  backgroundColor: 'rgba(27, 31, 34, 0.5)',
});

export const details = style({
  border: `1px solid ${vars.color.border}`,
  padding: '0.7rem',
  borderRadius: vars.size.borderRadius,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
});

export const image = style({
  borderRadius: '5px',
  width: '30px',
  height: '30px',
});

globalStyle(`${header} ${image}`, {
  marginRight: '0.5rem',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 'bold',
});

export const divider = style({
  margin: '1rem 0',
  opacity: 0.2,
});

export const close = style({
  fontWeight: 'bold',
  color: '#e17264',
  cursor: 'pointer',
  textAlign: 'center',
});

export const timeline = style({
  listStyle: 'none',
  '@media': {
    [mobile]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
});

globalStyle(`${timeline} li`, {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateAreas: '"left right"',
  MozTransition: `opacity ${vars.duration.transition} ease-in-out`,
  WebkitTransition: `opacity ${vars.duration.transition} ease-in-out`,
  msTransition: `opacity ${vars.duration.transition} ease-in-out`,
  transition: `opacity ${vars.duration.transition} ease-in-out`,
  opacity: 0.5,
});

globalStyle(`${timeline} li:hover`, {
  cursor: 'pointer',
  opacity: 1,
});

export const marker = style({
  content: '""',
  height: '10px',
  width: '10px',
  backgroundColor: '#222',
  borderRadius: '50%',
  border: `2px solid ${vars.color.border}`,
  marginRight: '-6px',
  zIndex: 999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const content = style({
  padding: '0.5rem',
});

export const line = style({
  gridArea: 'line',
  content: '""',
  height: '2px',
  width: '60px',
  backgroundColor: vars.color.foreground,
});

export const text = style({});
export const blank = style({});

globalStyle(`${content} h3`, {
  margin: 0,
});

globalStyle(`${content} p`, {
  margin: 0,
  fontSize: '0.9em',
});

globalStyle(`${timeline} li:nth-child(odd)`, {
  '@media': {
    [mobile]: {
      gridTemplateColumns: '1em 1fr',
    },
  },
});

globalStyle(`${timeline} li:nth-child(odd) ${blank}`, {
  gridArea: 'left',
  borderRight: `1px solid ${vars.color.border}`,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

globalStyle(`${timeline} li:nth-child(odd) ${marker}`, {
  marginRight: '-6px',
});

globalStyle(`${timeline} li:nth-child(odd) ${content}`, {
  gridArea: 'right',
  borderLeft: `1px solid ${vars.color.border}`,
  paddingLeft: 0,
  display: 'grid',
  gridTemplateAreas: '"line text"',
  gridTemplateColumns: '70px 1fr',
  alignItems: 'center',
});

globalStyle(`${timeline} li:nth-child(odd) ${text}`, {
  gridArea: 'text',
  textAlign: 'left',
});

globalStyle(`${timeline} li:nth-child(even)`, {
  gridTemplateAreas: '"left right"',
  '@media': {
    [mobile]: {
      gridTemplateColumns: '1em 1fr',
    },
  },
});

globalStyle(`${timeline} li:nth-child(even) ${blank}`, {
  gridArea: 'right',
  borderLeft: `1px solid ${vars.color.border}`,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  '@media': {
    [mobile]: {
      gridArea: 'left',
      borderLeft: 'none',
      borderRight: `1px solid ${vars.color.border}`,
      justifyContent: 'flex-end',
    },
  },
});

globalStyle(`${timeline} li:nth-child(even) ${marker}`, {
  marginLeft: '-6px',
  '@media': {
    [mobile]: {
      marginLeft: 0,
      marginRight: '-6px',
    },
  },
});

globalStyle(`${timeline} li:nth-child(even) ${content}`, {
  gridArea: 'left',
  borderRight: `1px solid ${vars.color.border}`,
  paddingRight: 0,
  display: 'grid',
  gridTemplateAreas: '"text line"',
  gridTemplateColumns: '1fr 70px',
  alignItems: 'center',
  justifyItems: 'end',
  '@media': {
    [mobile]: {
      gridArea: 'right',
      borderRight: 'none',
      borderLeft: `1px solid ${vars.color.border}`,
      paddingRight: '1em',
      paddingLeft: 0,
      gridTemplateAreas: '"line text"',
      gridTemplateColumns: '70px 1fr',
      justifyItems: 'start',
    },
  },
});

globalStyle(`${timeline} li:nth-child(even) ${text}`, {
  gridArea: 'text',
  textAlign: 'right',
  '@media': {
    [mobile]: {
      textAlign: 'left',
    },
  },
});
