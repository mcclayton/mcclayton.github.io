import {
  globalFontFace,
  globalKeyframes,
  globalStyle,
} from '@vanilla-extract/css';
import { breakpoints, vars } from './theme.css';

type GlobalStyle = Parameters<typeof globalStyle>[1];
const style = (selector: string, rule: GlobalStyle) => globalStyle(selector, rule);

globalFontFace('Source Sans Pro', [
  {
    src: 'url("https://fonts.gstatic.com/s/sourcesanspro/v23/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZMkids18E.ttf") format("truetype")',
    fontStyle: 'italic',
    fontWeight: '300',
  },
  {
    src: 'url("https://fonts.gstatic.com/s/sourcesanspro/v23/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZY4lCds18E.ttf") format("truetype")',
    fontStyle: 'italic',
    fontWeight: '600',
  },
  {
    src: 'url("https://fonts.gstatic.com/s/sourcesanspro/v23/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdr.ttf") format("truetype")',
    fontStyle: 'normal',
    fontWeight: '300',
  },
  {
    src: 'url("https://fonts.gstatic.com/s/sourcesanspro/v23/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdr.ttf") format("truetype")',
    fontStyle: 'normal',
    fontWeight: '600',
  },
]);

const resetElements =
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video';

style(resetElements, {
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
});
style(
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section',
  { display: 'block' },
);
style('body', { lineHeight: 1 });
style('ol, ul', { listStyle: 'none' });
style('blockquote, q', { quotes: 'none' });
style('blockquote:before, blockquote:after, q:before, q:after', {
  content: 'none',
});
style('table', { borderCollapse: 'collapse', borderSpacing: 0 });
style('body', { WebkitTextSizeAdjust: 'none' });
style('*, *:before, *:after', { boxSizing: 'border-box' });

style('html, body', {
  '@media': {
    [breakpoints.xsmall]: { minWidth: 320 },
  },
});
style('body', { background: vars.color.background });
style(
  'body.is-loading *, body.is-loading *:before, body.is-loading *:after, body .body.is-loading *, body .body.is-loading *:before, body .body.is-loading *:after, body.is-switching *, body.is-switching *:before, body.is-switching *:after',
  {
    animation: 'none !important',
    transition: 'none !important',
    transitionDelay: 'none !important',
  },
);

style('html', {
  fontSize: '16pt',
  '@media': {
    [breakpoints.xlarge]: { fontSize: '12pt' },
    [breakpoints.small]: { fontSize: '11pt' },
    [breakpoints.xxsmall]: { fontSize: '10pt' },
  },
});
style('body, input, select, textarea', {
  color: vars.color.foreground,
  fontFamily: vars.font.family,
  fontWeight: vars.font.weight,
  fontSize: '1rem',
  lineHeight: 1.65,
});
style('a', {
  transition: `color ${vars.duration.transition} ease-in-out, background-color ${vars.duration.transition} ease-in-out, border-bottom-color ${vars.duration.transition} ease-in-out`,
  borderBottom: `dotted 1px ${vars.color.foregroundLight}`,
  textDecoration: 'none',
  color: 'inherit',
});
style('a:hover', { borderBottomColor: 'transparent' });
style('strong, b', {
  color: vars.color.foregroundBold,
  fontWeight: vars.font.weightBold,
});
style('em, i', { fontStyle: 'italic' });
style('p', { margin: `0 0 ${vars.size.elementMargin} 0` });
style('h1, h2, h3, h4, h5, h6', {
  color: vars.color.foregroundBold,
  fontWeight: vars.font.weightBold,
  lineHeight: 1.5,
  margin: '0 0 1rem 0',
  textTransform: 'uppercase',
  letterSpacing: vars.font.letterSpacing,
});
style('h1 a, h2 a, h3 a, h4 a, h5 a, h6 a', {
  color: 'inherit',
  textDecoration: 'none',
});
style('h1.major, h2.major, h3.major, h4.major, h5.major, h6.major', {
  borderBottom: `solid ${vars.size.borderWidth} ${vars.color.border}`,
  width: 'max-content',
  paddingBottom: '0.5rem',
  margin: `0 0 ${vars.size.elementMargin} 0`,
});
style('h1', {
  fontSize: '2rem',
  lineHeight: 1.3,
  letterSpacing: vars.font.headingLetterSpacing,
  '@media': {
    [breakpoints.small]: {
      fontSize: '1.75rem',
      lineHeight: 0.5,
      letterSpacing: '0.2rem',
    },
  },
});
style('h2', {
  fontSize: '1.5rem',
  lineHeight: 1.4,
  letterSpacing: vars.font.headingLetterSpacing,
  '@media': {
    [breakpoints.small]: { fontSize: '1.25em', lineHeight: 0.6 },
  },
});
style('h3', { fontSize: '1rem' });
style('h4', { fontSize: '0.8rem' });
style('h5', { fontSize: '0.7rem' });
style('h6', { fontSize: '0.6rem' });
style('sub', { fontSize: '0.8rem', position: 'relative', top: '0.5rem' });
style('sup', { fontSize: '0.8rem', position: 'relative', top: '-0.5rem' });
style('blockquote', {
  margin: `0 0 ${vars.size.elementMargin} 0`,
  paddingLeft: '1rem',
  borderLeft: '3px solid #ff9806',
});
style('code', {
  background: vars.color.borderBackground,
  borderRadius: vars.size.borderRadius,
  fontFamily: vars.font.familyFixed,
  fontSize: '0.9rem',
  margin: '0 0.25rem',
  padding: '0.25rem 0.65rem',
});
style('pre', {
  WebkitOverflowScrolling: 'touch',
  fontFamily: vars.font.familyFixed,
  fontSize: '0.9rem',
  margin: `0 0 ${vars.size.elementMargin} 0`,
});
style('pre code', {
  display: 'block',
  lineHeight: 1.75,
  padding: '1rem 1.5rem',
  overflowX: 'auto',
});
style('hr', {
  border: 0,
  borderBottom: `solid ${vars.size.borderWidth} ${vars.color.border}`,
  margin: '2.75rem 0',
});
style('.align-left', { textAlign: 'left' });
style('.align-center', { textAlign: 'center' });
style('.align-right', { textAlign: 'right' });

style('form', { margin: '0 0 2.5rem 0' });
style('form .field', {
  margin: '0 0 1.5rem 0',
  '@media': {
    [breakpoints.small]: { margin: '0 0 1.125rem 0' },
  },
});
style('form .field.half', {
  width: '50%',
  float: 'left',
  padding: '0 0 0 0.75rem',
  '@media': {
    [breakpoints.small]: { padding: '0 0 0 0.5625rem' },
    [breakpoints.xsmall]: { width: '100%', float: 'none', padding: 0 },
  },
});
style('form .field.half.first', {
  padding: '0 0.75rem 0 0',
  '@media': {
    [breakpoints.small]: { padding: '0 0.5625rem 0 0' },
    [breakpoints.xsmall]: { padding: 0 },
  },
});
style('form > .actions', {
  margin: '1.875rem 0 0 0 !important',
  '@media': {
    [breakpoints.small]: { margin: '1.5rem 0 0 0 !important' },
  },
});
style('label', {
  color: vars.color.foregroundBold,
  display: 'block',
  fontSize: '0.8rem',
  fontWeight: vars.font.weight,
  letterSpacing: vars.font.letterSpacing,
  lineHeight: 1.5,
  margin: '0 0 1rem 0',
  textTransform: 'uppercase',
});
const textControls =
  'input[type="text"], input[type="password"], input[type="email"], input[type="tel"], select, textarea';
style(textControls, {
  appearance: 'none',
  transition: `border-color ${vars.duration.transition} ease-in-out, box-shadow ${vars.duration.transition} ease-in-out, background-color ${vars.duration.transition} ease-in-out`,
  background: 'transparent',
  borderRadius: vars.size.borderRadius,
  border: `solid ${vars.size.borderWidth} ${vars.color.border}`,
  color: 'inherit',
  display: 'block',
  outline: 0,
  padding: '0 1rem',
  textDecoration: 'none',
  width: '100%',
});
style(
  'input[type="text"]:invalid, input[type="password"]:invalid, input[type="email"]:invalid, input[type="tel"]:invalid, select:invalid, textarea:invalid',
  { boxShadow: 'none' },
);
style(
  'input[type="text"]:focus, input[type="password"]:focus, input[type="email"]:focus, input[type="tel"]:focus, select:focus, textarea:focus',
  {
    background: vars.color.borderBackground,
    borderColor: vars.color.foregroundBold,
    boxShadow: `0 0 0 ${vars.size.borderWidth} ${vars.color.foregroundBold}`,
  },
);
style('select option', {
  background: vars.color.background,
  color: vars.color.foreground,
});
style('.select-wrapper', { textDecoration: 'none', display: 'block', position: 'relative' });
style('.select-wrapper:before', {
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
  fontFamily: 'FontAwesome',
  fontStyle: 'normal',
  fontWeight: 'normal',
  textTransform: 'none !important',
  color: vars.color.border,
  content: '"\\f107"',
  display: 'block',
  height: vars.size.elementHeight,
  lineHeight: `calc(${vars.size.elementHeight} + 0em)`,
  pointerEvents: 'none',
  position: 'absolute',
  right: 0,
  textAlign: 'center',
  top: 0,
  width: vars.size.elementHeight,
});
style('.select-wrapper select::-ms-expand', { display: 'none' });
style('input[type="text"], input[type="password"], input[type="email"], select', {
  height: vars.size.elementHeight,
});
style('textarea', { padding: '0.75rem 1rem' });
const checks = 'input[type="checkbox"], input[type="radio"]';
style(checks, {
  appearance: 'none',
  display: 'block',
  float: 'left',
  marginRight: '-2rem',
  opacity: 0,
  width: '1rem',
  zIndex: -1,
});
style('input[type="checkbox"] + label, input[type="radio"] + label', {
  textDecoration: 'none',
  userSelect: 'none',
  color: vars.color.foreground,
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '0.8rem',
  fontWeight: vars.font.weight,
  margin: '0 0 0.5rem 0',
  paddingLeft: '2.65rem',
  paddingRight: '0.75rem',
  position: 'relative',
});
style(
  'input[type="checkbox"] + label:before, input[type="radio"] + label:before',
  {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontFamily: 'FontAwesome',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textTransform: 'none !important',
    transition: `border-color ${vars.duration.transition} ease-in-out, box-shadow ${vars.duration.transition} ease-in-out, background-color ${vars.duration.transition} ease-in-out`,
    borderRadius: vars.size.borderRadius,
    border: `solid ${vars.size.borderWidth} ${vars.color.border}`,
    content: '""',
    display: 'inline-block',
    height: '1.65rem',
    left: 0,
    lineHeight: 'calc(1.58125rem + 0em)',
    position: 'absolute',
    textAlign: 'center',
    top: '-0.125rem',
    width: '1.65rem',
  },
);
style(
  'input[type="checkbox"]:checked + label:before, input[type="radio"]:checked + label:before',
  {
    background: `${vars.color.foregroundBold} !important`,
    borderColor: `${vars.color.foregroundBold} !important`,
    color: vars.color.background,
    content: '"\\f00c"',
  },
);
style(
  'input[type="checkbox"]:focus + label:before, input[type="radio"]:focus + label:before',
  {
    background: vars.color.borderBackground,
    borderColor: vars.color.foregroundBold,
    boxShadow: `0 0 0 ${vars.size.borderWidth} ${vars.color.foregroundBold}`,
  },
);
style('input[type="checkbox"] + label:before', {
  borderRadius: vars.size.borderRadius,
});
style('input[type="radio"] + label:before', { borderRadius: '100%' });
style('::-webkit-input-placeholder', {
  color: `${vars.color.foregroundLight} !important`,
  opacity: 1,
});
style('::-moz-placeholder', {
  color: `${vars.color.foregroundLight} !important`,
  opacity: 1,
});
style(':-moz-placeholder', {
  color: `${vars.color.foregroundLight} !important`,
  opacity: 1,
});
style(':-ms-input-placeholder', {
  color: `${vars.color.foregroundLight} !important`,
  opacity: 1,
});
style('.formerize-placeholder', {
  color: `${vars.color.foregroundLight} !important`,
  opacity: 1,
});

style('.box', {
  borderRadius: vars.size.borderRadius,
  border: `solid ${vars.size.borderWidth} ${vars.color.border}`,
  marginBottom: vars.size.elementMargin,
  padding: '1.5em',
});
style(
  '.box > :last-child, .box > :last-child > :last-child, .box > :last-child > :last-child > :last-child',
  { marginBottom: 0 },
);
style('.box.alt', { border: 0, borderRadius: 0, padding: 0 });
style('.icon', {
  textDecoration: 'none',
  borderBottom: 'none',
  position: 'relative',
});
style('.icon:before', {
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
  fontFamily: 'FontAwesome',
  fontStyle: 'normal',
  fontWeight: 'normal',
  textTransform: 'none !important',
});
style('.icon > .label', { display: 'none' });
style('.image', {
  borderRadius: vars.size.borderRadius,
  border: 0,
  display: 'inline-block',
  position: 'relative',
});
style('.image:before', {
  pointerEvents: 'none',
  backgroundImage: 'url("../images/overlay.png")',
  backgroundColor: vars.color.backgroundOverlay,
  borderRadius: vars.size.borderRadius,
  content: '""',
  display: 'block',
  height: '100%',
  left: 0,
  opacity: 0.4,
  position: 'absolute',
  top: 0,
  width: '100%',
});
style('.image img', { borderRadius: vars.size.borderRadius, display: 'block' });
style('.image.main', {
  display: 'block',
  margin: '0 0 2.5rem 0',
  width: '100%',
  '@media': {
    [breakpoints.small]: { margin: '0 0 2rem 0' },
    [breakpoints.xsmall]: { margin: '0 0 1.5rem 0' },
  },
});

style('ol', {
  listStyle: 'decimal',
  margin: `0 0 ${vars.size.elementMargin} 0`,
  paddingLeft: '1.25em',
});
style('ol li', { paddingLeft: '0.25em' });
style('ul', { listStyle: 'disc', margin: '0 0 1rem 0', paddingLeft: '1em' });
style('ul li', { paddingLeft: '0.5em' });
style('ul.alt', { listStyle: 'none', paddingLeft: 0 });
style('ul.alt li', {
  borderTop: `solid ${vars.size.borderWidth} ${vars.color.border}`,
  padding: '0.5em 0',
});
style('ul.alt li:first-child', { borderTop: 0, paddingTop: 0 });
style('ul.icons', { cursor: 'default', listStyle: 'none' });
style('ul.icons li', { display: 'inline-block' });
style('ul.icons li a', {
  borderRadius: '100%',
  boxShadow: `inset 0 0 0 ${vars.size.borderWidth} ${vars.color.border}`,
  display: 'inline-block',
  height: '2.25rem',
  lineHeight: '2.25rem',
  textAlign: 'center',
  width: '2.25rem',
});
style('ul.icons li a:hover', { backgroundColor: vars.color.borderBackground });
style('ul.icons li a:active', { backgroundColor: vars.color.borderBackgroundAlt });
style('ul.actions', {
  cursor: 'default',
  listStyle: 'none',
  paddingLeft: 0,
  '@media': { [breakpoints.xsmall]: { margin: `0 0 ${vars.size.elementMargin} 0` } },
});
style('ul.actions li', {
  display: 'inline-block',
  padding: '0 1rem 0 0',
  verticalAlign: 'middle',
  '@media': {
    [breakpoints.xsmall]: {
      padding: '1rem 0 0 0',
      display: 'block',
      textAlign: 'center',
      width: '100%',
    },
  },
});
style('ul.actions li:first-child', {
  '@media': { [breakpoints.xsmall]: { paddingTop: 0 } },
});
style('ul.actions li:last-child', { paddingRight: 0 });
style('ul.actions.small li', {
  padding: '0 0.5rem 0 0',
  '@media': { [breakpoints.xsmall]: { padding: '0.5rem 0 0 0' } },
});
style('ul.actions.small li:first-child', {
  '@media': { [breakpoints.xsmall]: { paddingTop: 0 } },
});
style('ul.actions.vertical li', { display: 'block', padding: '1rem 0 0 0' });
style('ul.actions.vertical li:first-child', { paddingTop: 0 });
style('ul.actions.vertical li > *', { marginBottom: 0 });
style('ul.actions.vertical.small li', { padding: '0.5rem 0 0 0' });
style('ul.actions.vertical.small li:first-child', { paddingTop: 0 });
style('ul.actions.fit', {
  display: 'table',
  marginLeft: '-1rem',
  padding: 0,
  tableLayout: 'fixed',
  width: 'calc(100% + 1rem)',
});
style('ul.actions.fit li', { display: 'table-cell', padding: '0 0 0 1rem' });
style('ul.actions.fit li > *', { marginBottom: 0 });
style('ul.actions.fit.small', {
  marginLeft: '-0.5rem',
  width: 'calc(100% + 0.5rem)',
});
style('ul.actions.fit.small li', { padding: '0 0 0 0.5rem' });
style('ul.actions li > *', {
  '@media': { [breakpoints.xsmall]: { width: '100%', margin: '0 !important' } },
});
style('ul.actions li > *.icon:before', {
  '@media': { [breakpoints.xsmall]: { marginLeft: '-2em' } },
});
style('dl', { margin: `0 0 ${vars.size.elementMargin} 0` });
style('dl dt', {
  display: 'block',
  fontWeight: vars.font.weightBold,
  margin: '0 0 1rem 0',
});
style('dl dd', { marginLeft: vars.size.elementMargin });

const buttons =
  'input[type="submit"], input[type="reset"], input[type="button"], button, .button';
style(buttons, {
  appearance: 'none',
  transition: `background-color ${vars.duration.transition} ease-in-out, color ${vars.duration.transition} ease-in-out`,
  backgroundColor: 'transparent',
  borderRadius: vars.size.borderRadius,
  border: 0,
  boxShadow: `inset 0 0 0 ${vars.size.borderWidth} ${vars.color.border}`,
  color: `${vars.color.foregroundBold} !important`,
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '0.8rem',
  fontWeight: vars.font.weightBold,
  height: vars.size.elementHeight,
  letterSpacing: vars.font.letterSpacing,
  lineHeight: vars.size.elementHeight,
  outline: 0,
  padding: '0 1.25rem 0 1.35rem',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
});
style(
  'input[type="submit"]:hover, input[type="reset"]:hover, input[type="button"]:hover, button:hover, .button:hover',
  { backgroundColor: vars.color.borderBackground },
);
style(
  'input[type="submit"]:active, input[type="reset"]:active, input[type="button"]:active, button:active, .button:active',
  { backgroundColor: vars.color.borderBackgroundAlt },
);
style(
  'input[type="submit"].icon:before, input[type="reset"].icon:before, input[type="button"].icon:before, button.icon:before, .button.icon:before',
  { marginRight: '0.5em' },
);
style(
  'input[type="submit"].fit, input[type="reset"].fit, input[type="button"].fit, button.fit, .button.fit',
  { display: 'block', margin: '0 0 1rem 0', width: '100%' },
);
style(
  'input[type="submit"].special, input[type="reset"].special, input[type="button"].special, button.special, .button.special',
  {
    backgroundColor: vars.color.foregroundBold,
    color: `${vars.color.background} !important`,
    fontWeight: vars.font.weightBold,
  },
);
style(
  'input[type="submit"].disabled, input[type="submit"]:disabled, input[type="reset"].disabled, input[type="reset"]:disabled, input[type="button"].disabled, input[type="button"]:disabled, button.disabled, button:disabled, .button.disabled, .button:disabled',
  { pointerEvents: 'none', cursor: 'default', opacity: 0.25 },
);
style('input[type="submit"], input[type="reset"], input[type="button"], button', {
  lineHeight: `calc(${vars.size.elementHeight} - 2px)`,
});

style('#bg', {
  transform: 'scale(1.0)',
  backfaceVisibility: 'hidden',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  zIndex: 1,
});
style('#bg:before, #bg:after', {
  content: '""',
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});
style('#bg.tropical:after', { backgroundImage: 'url("../images/tropical.gif")' });
style('#bg:after', {
  transform: 'scale(1.125)',
  transition: `transform ${vars.duration.article} ease-in-out, filter ${vars.duration.article} ease-in-out`,
  backgroundImage: 'url("../images/bg.jpg")',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: 1,
});
style('.body.is-article-visible #bg:after', {
  transform: 'scale(1.0825)',
  filter: 'blur(0.2rem)',
});
style('.body.is-loading #bg:before', { backgroundColor: vars.color.backgroundAlt });
style('#wrapper', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  minHeight: '100vh',
  width: '100%',
  padding: '4rem 2rem',
  zIndex: 3,
  '@media': {
    [breakpoints.xlarge]: { padding: '1.5rem 2rem' },
    [breakpoints.small]: { padding: '2rem 1rem' },
    [breakpoints.xsmall]: { padding: '1rem' },
  },
});
style('#wrapper:before', { content: '""', display: 'block' });
style('#wrapper.page', { justifyContent: 'flex-start' });
style('#header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: `transform ${vars.duration.article} ease-in-out, filter ${vars.duration.article} ease-in-out, opacity ${vars.duration.article} ease-in-out`,
  maxWidth: '100%',
  textAlign: 'center',
  '@media': { [breakpoints.xsmall]: { padding: '1.5rem 0' } },
});
style('#header > *', {
  transition: `opacity ${vars.duration.article} ease-in-out`,
  position: 'relative',
});
style('#header > :first-child:before', { display: 'none' });
style('#header .content', {
  maxWidth: '100%',
  backgroundImage:
    'radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%)',
});
style('#header .content .inner', {
  transition: `max-height ${vars.duration.intro} ease, padding ${vars.duration.intro} ease, opacity ${vars.duration.article} ease-in-out`,
  transitionDelay: '0.25s',
  padding: '3rem 2rem 0.5rem 2rem',
  maxHeight: '40rem',
  overflow: 'hidden',
  '@media': {
    [breakpoints.small]: { padding: '2.5rem 1rem' },
    [breakpoints.xsmall]: { padding: '2.5rem 0.5' },
  },
});
style('#header .content .inner > :last-child', { marginBottom: 0 });
style('#header .content p', {
  textTransform: 'uppercase',
  letterSpacing: vars.font.letterSpacing,
  fontSize: '0.8rem',
  lineHeight: 2,
  '@media': { [breakpoints.small]: { lineHeight: 1.875 } },
});
style('#header nav ul', {
  display: 'flex',
  backgroundImage:
    'radial-gradient(rgba(0, 0, 0, 0.30) 25%, rgba(0, 0, 0, 0) 80%)',
  marginBottom: 0,
  listStyle: 'none',
  borderRadius: vars.size.borderRadius,
  '@media': {
    [breakpoints.xsmall]: {
      flexDirection: 'column',
      minWidth: '10rem',
      maxWidth: '100%',
    },
  },
});
style('#header nav ul li button', {
  display: 'block',
  minWidth: '7.5rem',
  height: '2.75rem',
  lineHeight: '2.75rem',
  padding: '0 1.25rem 0 1.45rem',
  letterSpacing: vars.font.letterSpacing,
  fontSize: '0.8rem',
  fontFamily: vars.font.family,
  border: 'none',
  boxShadow: 'none',
});
style('.body.is-article-visible #header', { transform: 'scale(0.95)', opacity: 0 });
style('.body.is-loading #header > *', { opacity: 0 });
style('.body.is-loading #header .content .inner', {
  maxHeight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  opacity: 0,
});
style('#header .content p br', {
  '@media': { [breakpoints.medium]: { display: 'none' } },
});
style('#header > *:before', {
  '@media': {
    [breakpoints.small]: {
      top: 'calc(-2rem - 1px)',
      height: 'calc(2rem + 1px)',
    },
  },
});
style('#header nav ul li', {
  '@media': { [breakpoints.xsmall]: { borderLeft: 0 } },
});
style('#header nav ul li:first-child', {
  '@media': { [breakpoints.xsmall]: { borderTop: 0 } },
});
style('#header nav ul li a', {
  '@media': {
    [breakpoints.xsmall]: {
      height: '3rem',
      lineHeight: '3rem',
      minWidth: 0,
      width: '100%',
    },
  },
});
style('#main', {
  flexGrow: 1,
  flexShrink: 1,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
  maxWidth: '100%',
  zIndex: 3,
  display: 'none',
});
style('#footer', {
  transition: `transform ${vars.duration.article} ease-in-out, filter ${vars.duration.article} ease-in-out, opacity ${vars.duration.article} ease-in-out`,
  width: '100%',
  maxWidth: '100%',
  marginTop: '2rem',
  textAlign: 'center',
});
style('#footer .copyright', {
  letterSpacing: vars.font.letterSpacing,
  fontSize: '0.6rem',
  opacity: 0.75,
  marginBottom: 0,
  textTransform: 'uppercase',
});
style('.body.is-article-visible #footer', {
  transform: 'scale(0.95)',
  filter: 'blur(0.1rem)',
  opacity: 0,
});
style('.body.is-loading #footer', { opacity: 0 });

globalFontFace('FontAwesome', {
  src: 'url("../assets/fonts/fontawesome-webfont.eot?v=4.7.0")',
  fontWeight: 'normal',
  fontStyle: 'normal',
});
globalFontFace('FontAwesome', {
  src: 'url("../assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0") format("embedded-opentype"), url("../assets/fonts/fontawesome-webfont.woff2?v=4.7.0") format("woff2"), url("../assets/fonts/fontawesome-webfont.woff?v=4.7.0") format("woff"), url("../assets/fonts/fontawesome-webfont.ttf?v=4.7.0") format("truetype"), url("../assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular") format("svg")',
  fontWeight: 'normal',
  fontStyle: 'normal',
});
style('.fa', {
  display: 'inline-block',
  font: 'normal normal normal 14px/1 FontAwesome',
  fontSize: 'inherit',
  textRendering: 'auto',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});
style('.fa-lg', { fontSize: '1.33333333em', lineHeight: '0.75em', verticalAlign: '-15%' });
style('.fa-2x', { fontSize: '2em' });
style('.fa-3x', { fontSize: '3em' });
style('.fa-4x', { fontSize: '4em' });
style('.fa-5x', { fontSize: '5em' });
style('.fa-fw', { width: '1.28571429em', textAlign: 'center' });
style('.fa-ul', { paddingLeft: 0, marginLeft: '2.14285714em', listStyleType: 'none' });
style('.fa-ul > li', { position: 'relative' });
style('.fa-li', {
  position: 'absolute',
  left: '-2.14285714em',
  width: '2.14285714em',
  top: '0.14285714em',
  textAlign: 'center',
});
style('.fa-li.fa-lg', { left: '-1.85714286em' });
style('.fa-border', {
  padding: '0.2em 0.25em 0.15em',
  border: 'solid 0.08em #eee',
  borderRadius: '0.1em',
});
style('.fa-pull-left, .pull-left', { float: 'left' });
style('.fa-pull-right, .pull-right', { float: 'right' });
style('.fa.fa-pull-left, .fa.pull-left', { marginRight: '0.3em' });
style('.fa.fa-pull-right, .fa.pull-right', { marginLeft: '0.3em' });
globalKeyframes('fa-spin', {
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(359deg)' },
});
style('.fa-spin', { animation: 'fa-spin 2s infinite linear' });
style('.fa-pulse', { animation: 'fa-spin 1s infinite steps(8)' });
style('.fa-rotate-90', { transform: 'rotate(90deg)' });
style('.fa-rotate-180', { transform: 'rotate(180deg)' });
style('.fa-rotate-270', { transform: 'rotate(270deg)' });
style('.fa-flip-horizontal', { transform: 'scale(-1, 1)' });
style('.fa-flip-vertical', { transform: 'scale(1, -1)' });
style(
  ':root .fa-rotate-90, :root .fa-rotate-180, :root .fa-rotate-270, :root .fa-flip-horizontal, :root .fa-flip-vertical',
  { filter: 'none' },
);
style('.fa-stack', {
  position: 'relative',
  display: 'inline-block',
  width: '2em',
  height: '2em',
  lineHeight: '2em',
  verticalAlign: 'middle',
});
style('.fa-stack-1x, .fa-stack-2x', {
  position: 'absolute',
  left: 0,
  width: '100%',
  textAlign: 'center',
});
style('.fa-stack-1x', { lineHeight: 'inherit' });
style('.fa-stack-2x', { fontSize: '2em' });
style('.fa-inverse', { color: '#fff' });

const fontAwesomeGlyphs =
  'glass:f000;music:f001;search:f002;envelope-o:f003;heart:f004;star:f005;star-o:f006;user:f007;film:f008;th-large:f009;th:f00a;th-list:f00b;check:f00c;remove,close,times:f00d;search-plus:f00e;search-minus:f010;power-off:f011;signal:f012;gear,cog:f013;trash-o:f014;home:f015;file-o:f016;clock-o:f017;road:f018;download:f019;arrow-circle-o-down:f01a;arrow-circle-o-up:f01b;inbox:f01c;play-circle-o:f01d;rotate-right,repeat:f01e;refresh:f021;list-alt:f022;lock:f023;flag:f024;headphones:f025;volume-off:f026;volume-down:f027;volume-up:f028;qrcode:f029;barcode:f02a;tag:f02b;tags:f02c;book:f02d;bookmark:f02e;print:f02f;camera:f030;font:f031;bold:f032;italic:f033;text-height:f034;text-width:f035;align-left:f036;align-center:f037;align-right:f038;align-justify:f039;list:f03a;dedent,outdent:f03b;indent:f03c;video-camera:f03d;photo,image,picture-o:f03e;pencil:f040;map-marker:f041;adjust:f042;tint:f043;edit,pencil-square-o:f044;share-square-o:f045;check-square-o:f046;arrows:f047;step-backward:f048;fast-backward:f049;backward:f04a;play:f04b;pause:f04c;stop:f04d;forward:f04e;fast-forward:f050;step-forward:f051;eject:f052;chevron-left:f053;chevron-right:f054;plus-circle:f055;minus-circle:f056;times-circle:f057;check-circle:f058;question-circle:f059;info-circle:f05a;crosshairs:f05b;times-circle-o:f05c;check-circle-o:f05d;ban:f05e;arrow-left:f060;arrow-right:f061;arrow-up:f062;arrow-down:f063;mail-forward,share:f064;expand:f065;compress:f066;plus:f067;minus:f068;asterisk:f069;exclamation-circle:f06a;gift:f06b;leaf:f06c;fire:f06d;eye:f06e;eye-slash:f070;warning,exclamation-triangle:f071;plane:f072;calendar:f073;random:f074;comment:f075;magnet:f076;chevron-up:f077;chevron-down:f078;retweet:f079;shopping-cart:f07a;folder:f07b;folder-open:f07c;arrows-v:f07d;arrows-h:f07e;bar-chart-o,bar-chart:f080;twitter-square:f081;facebook-square:f082;camera-retro:f083;key:f084;gears,cogs:f085;comments:f086;thumbs-o-up:f087;thumbs-o-down:f088;star-half:f089;heart-o:f08a;sign-out:f08b;linkedin-square:f08c;thumb-tack:f08d;external-link:f08e;sign-in:f090;trophy:f091;github-square:f092;upload:f093;lemon-o:f094;phone:f095;square-o:f096;bookmark-o:f097;phone-square:f098;twitter:f099;facebook-f,facebook:f09a;github:f09b;unlock:f09c;credit-card:f09d;feed,rss:f09e;hdd-o:f0a0;bullhorn:f0a1;bell:f0f3;certificate:f0a3;hand-o-right:f0a4;hand-o-left:f0a5;hand-o-up:f0a6;hand-o-down:f0a7;arrow-circle-left:f0a8;arrow-circle-right:f0a9;arrow-circle-up:f0aa;arrow-circle-down:f0ab;globe:f0ac;wrench:f0ad;tasks:f0ae;filter:f0b0;briefcase:f0b1;arrows-alt:f0b2;group,users:f0c0;chain,link:f0c1;cloud:f0c2;flask:f0c3;cut,scissors:f0c4;copy,files-o:f0c5;paperclip:f0c6;save,floppy-o:f0c7;square:f0c8;navicon,reorder,bars:f0c9;list-ul:f0ca;list-ol:f0cb;strikethrough:f0cc;underline:f0cd;table:f0ce;magic:f0d0;truck:f0d1;pinterest:f0d2;pinterest-square:f0d3;google-plus-square:f0d4;google-plus:f0d5;money:f0d6;caret-down:f0d7;caret-up:f0d8;caret-left:f0d9;caret-right:f0da;columns:f0db;unsorted,sort:f0dc;sort-down,sort-desc:f0dd;sort-up,sort-asc:f0de;envelope:f0e0;linkedin:f0e1;rotate-left,undo:f0e2;legal,gavel:f0e3;dashboard,tachometer:f0e4;comment-o:f0e5;comments-o:f0e6;flash,bolt:f0e7;sitemap:f0e8;umbrella:f0e9;paste,clipboard:f0ea;lightbulb-o:f0eb;exchange:f0ec;cloud-download:f0ed;cloud-upload:f0ee;user-md:f0f0;stethoscope:f0f1;suitcase:f0f2;bell-o:f0a2;coffee:f0f4;cutlery:f0f5;file-text-o:f0f6;building-o:f0f7;hospital-o:f0f8;ambulance:f0f9;medkit:f0fa;fighter-jet:f0fb;beer:f0fc;h-square:f0fd;plus-square:f0fe;angle-double-left:f100;angle-double-right:f101;angle-double-up:f102;angle-double-down:f103;angle-left:f104;angle-right:f105;angle-up:f106;angle-down:f107;desktop:f108;laptop:f109;tablet:f10a;mobile-phone,mobile:f10b;circle-o:f10c;quote-left:f10d;quote-right:f10e;spinner:f110;circle:f111;mail-reply,reply:f112;github-alt:f113;folder-o:f114;folder-open-o:f115;smile-o:f118;frown-o:f119;meh-o:f11a;gamepad:f11b;keyboard-o:f11c;flag-o:f11d;flag-checkered:f11e;terminal:f120;code:f121;mail-reply-all,reply-all:f122;star-half-empty,star-half-full,star-half-o:f123;location-arrow:f124;crop:f125;code-fork:f126;unlink,chain-broken:f127;question:f128;info:f129;exclamation:f12a;superscript:f12b;subscript:f12c;eraser:f12d;puzzle-piece:f12e;microphone:f130;microphone-slash:f131;shield:f132;calendar-o:f133;fire-extinguisher:f134;rocket:f135;maxcdn:f136;chevron-circle-left:f137;chevron-circle-right:f138;chevron-circle-up:f139;chevron-circle-down:f13a;html5:f13b;css3:f13c;anchor:f13d;unlock-alt:f13e;bullseye:f140;ellipsis-h:f141;ellipsis-v:f142;rss-square:f143;play-circle:f144;ticket:f145;minus-square:f146;minus-square-o:f147;level-up:f148;level-down:f149;check-square:f14a;pencil-square:f14b;external-link-square:f14c;share-square:f14d;compass:f14e;toggle-down,caret-square-o-down:f150;toggle-up,caret-square-o-up:f151;toggle-right,caret-square-o-right:f152;euro,eur:f153;gbp:f154;dollar,usd:f155;rupee,inr:f156;cny,rmb,yen,jpy:f157;ruble,rouble,rub:f158;won,krw:f159;bitcoin,btc:f15a;file:f15b;file-text:f15c;sort-alpha-asc:f15d;sort-alpha-desc:f15e;sort-amount-asc:f160;sort-amount-desc:f161;sort-numeric-asc:f162;sort-numeric-desc:f163;thumbs-up:f164;thumbs-down:f165;youtube-square:f166;youtube:f167;xing:f168;xing-square:f169;youtube-play:f16a;dropbox:f16b;stack-overflow:f16c;instagram:f16d;flickr:f16e;adn:f170;bitbucket:f171;bitbucket-square:f172;tumblr:f173;tumblr-square:f174;long-arrow-down:f175;long-arrow-up:f176;long-arrow-left:f177;long-arrow-right:f178;apple:f179;windows:f17a;android:f17b;linux:f17c;dribbble:f17d;skype:f17e;foursquare:f180;trello:f181;female:f182;male:f183;gittip,gratipay:f184;sun-o:f185;moon-o:f186;archive:f187;bug:f188;vk:f189;weibo:f18a;renren:f18b;pagelines:f18c;stack-exchange:f18d;arrow-circle-o-right:f18e;arrow-circle-o-left:f190;toggle-left,caret-square-o-left:f191;dot-circle-o:f192;wheelchair:f193;vimeo-square:f194;turkish-lira,try:f195;plus-square-o:f196;space-shuttle:f197;slack:f198;envelope-square:f199;wordpress:f19a;openid:f19b;institution,bank,university:f19c;mortar-board,graduation-cap:f19d;yahoo:f19e;google:f1a0;reddit:f1a1;reddit-square:f1a2;stumbleupon-circle:f1a3;stumbleupon:f1a4;delicious:f1a5;digg:f1a6;pied-piper-pp:f1a7;pied-piper-alt:f1a8;drupal:f1a9;joomla:f1aa;language:f1ab;fax:f1ac;building:f1ad;child:f1ae;paw:f1b0;spoon:f1b1;cube:f1b2;cubes:f1b3;behance:f1b4;behance-square:f1b5;steam:f1b6;steam-square:f1b7;recycle:f1b8;automobile,car:f1b9;cab,taxi:f1ba;tree:f1bb;spotify:f1bc;deviantart:f1bd;soundcloud:f1be;database:f1c0;file-pdf-o:f1c1;file-word-o:f1c2;file-excel-o:f1c3;file-powerpoint-o:f1c4;file-photo-o,file-picture-o,file-image-o:f1c5;file-zip-o,file-archive-o:f1c6;file-sound-o,file-audio-o:f1c7;file-movie-o,file-video-o:f1c8;file-code-o:f1c9;vine:f1ca;codepen:f1cb;jsfiddle:f1cc;life-bouy,life-buoy,life-saver,support,life-ring:f1cd;circle-o-notch:f1ce;ra,resistance,rebel:f1d0;ge,empire:f1d1;git-square:f1d2;git:f1d3;y-combinator-square,yc-square,hacker-news:f1d4;tencent-weibo:f1d5;qq:f1d6;wechat,weixin:f1d7;send,paper-plane:f1d8;send-o,paper-plane-o:f1d9;history:f1da;circle-thin:f1db;header:f1dc;paragraph:f1dd;sliders:f1de;share-alt:f1e0;share-alt-square:f1e1;bomb:f1e2;soccer-ball-o,futbol-o:f1e3;tty:f1e4;binoculars:f1e5;plug:f1e6;slideshare:f1e7;twitch:f1e8;yelp:f1e9;newspaper-o:f1ea;wifi:f1eb;calculator:f1ec;paypal:f1ed;google-wallet:f1ee;cc-visa:f1f0;cc-mastercard:f1f1;cc-discover:f1f2;cc-amex:f1f3;cc-paypal:f1f4;cc-stripe:f1f5;bell-slash:f1f6;bell-slash-o:f1f7;trash:f1f8;copyright:f1f9;at:f1fa;eyedropper:f1fb;paint-brush:f1fc;birthday-cake:f1fd;area-chart:f1fe;pie-chart:f200;line-chart:f201;lastfm:f202;lastfm-square:f203;toggle-off:f204;toggle-on:f205;bicycle:f206;bus:f207;ioxhost:f208;angellist:f209;cc:f20a;shekel,sheqel,ils:f20b;meanpath:f20c;buysellads:f20d;connectdevelop:f20e;dashcube:f210;forumbee:f211;leanpub:f212;sellsy:f213;shirtsinbulk:f214;simplybuilt:f215;skyatlas:f216;cart-plus:f217;cart-arrow-down:f218;diamond:f219;ship:f21a;user-secret:f21b;motorcycle:f21c;street-view:f21d;heartbeat:f21e;venus:f221;mars:f222;mercury:f223;intersex,transgender:f224;transgender-alt:f225;venus-double:f226;mars-double:f227;venus-mars:f228;mars-stroke:f229;mars-stroke-v:f22a;mars-stroke-h:f22b;neuter:f22c;genderless:f22d;facebook-official:f230;pinterest-p:f231;whatsapp:f232;server:f233;user-plus:f234;user-times:f235;hotel,bed:f236;viacoin:f237;train:f238;subway:f239;medium:f23a;yc,y-combinator:f23b;optin-monster:f23c;opencart:f23d;expeditedssl:f23e;battery-4,battery,battery-full:f240;battery-3,battery-three-quarters:f241;battery-2,battery-half:f242;battery-1,battery-quarter:f243;battery-0,battery-empty:f244;mouse-pointer:f245;i-cursor:f246;object-group:f247;object-ungroup:f248;sticky-note:f249;sticky-note-o:f24a;cc-jcb:f24b;cc-diners-club:f24c;clone:f24d;balance-scale:f24e;hourglass-o:f250;hourglass-1,hourglass-start:f251;hourglass-2,hourglass-half:f252;hourglass-3,hourglass-end:f253;hourglass:f254;hand-grab-o,hand-rock-o:f255;hand-stop-o,hand-paper-o:f256;hand-scissors-o:f257;hand-lizard-o:f258;hand-spock-o:f259;hand-pointer-o:f25a;hand-peace-o:f25b;trademark:f25c;registered:f25d;creative-commons:f25e;gg:f260;gg-circle:f261;tripadvisor:f262;odnoklassniki:f263;odnoklassniki-square:f264;get-pocket:f265;wikipedia-w:f266;safari:f267;chrome:f268;firefox:f269;opera:f26a;internet-explorer:f26b;tv,television:f26c;contao:f26d;500px:f26e;amazon:f270;calendar-plus-o:f271;calendar-minus-o:f272;calendar-times-o:f273;calendar-check-o:f274;industry:f275;map-pin:f276;map-signs:f277;map-o:f278;map:f279;commenting:f27a;commenting-o:f27b;houzz:f27c;vimeo:f27d;black-tie:f27e;fonticons:f280;reddit-alien:f281;edge:f282;credit-card-alt:f283;codiepie:f284;modx:f285;fort-awesome:f286;usb:f287;product-hunt:f288;mixcloud:f289;scribd:f28a;pause-circle:f28b;pause-circle-o:f28c;stop-circle:f28d;stop-circle-o:f28e;shopping-bag:f290;shopping-basket:f291;hashtag:f292;bluetooth:f293;bluetooth-b:f294;percent:f295;gitlab:f296;wpbeginner:f297;wpforms:f298;envira:f299;universal-access:f29a;wheelchair-alt:f29b;question-circle-o:f29c;blind:f29d;audio-description:f29e;volume-control-phone:f2a0;braille:f2a1;assistive-listening-systems:f2a2;asl-interpreting,american-sign-language-interpreting:f2a3;deafness,hard-of-hearing,deaf:f2a4;glide:f2a5;glide-g:f2a6;signing,sign-language:f2a7;low-vision:f2a8;viadeo:f2a9;viadeo-square:f2aa;snapchat:f2ab;snapchat-ghost:f2ac;snapchat-square:f2ad;pied-piper:f2ae;first-order:f2b0;yoast:f2b1;themeisle:f2b2;google-plus-circle,google-plus-official:f2b3;fa,font-awesome:f2b4;handshake-o:f2b5;envelope-open:f2b6;envelope-open-o:f2b7;linode:f2b8;address-book:f2b9;address-book-o:f2ba;vcard,address-card:f2bb;vcard-o,address-card-o:f2bc;user-circle:f2bd;user-circle-o:f2be;user-o:f2c0;id-badge:f2c1;drivers-license,id-card:f2c2;drivers-license-o,id-card-o:f2c3;quora:f2c4;free-code-camp:f2c5;telegram:f2c6;thermometer-4,thermometer,thermometer-full:f2c7;thermometer-3,thermometer-three-quarters:f2c8;thermometer-2,thermometer-half:f2c9;thermometer-1,thermometer-quarter:f2ca;thermometer-0,thermometer-empty:f2cb;shower:f2cc;bathtub,s15,bath:f2cd;podcast:f2ce;window-maximize:f2d0;window-minimize:f2d1;window-restore:f2d2;times-rectangle,window-close:f2d3;times-rectangle-o,window-close-o:f2d4;bandcamp:f2d5;grav:f2d6;etsy:f2d7;imdb:f2d8;ravelry:f2d9;eercast:f2da;microchip:f2db;snowflake-o:f2dc;superpowers:f2dd;wpexplorer:f2de;meetup:f2e0';

for (const glyph of fontAwesomeGlyphs.split(';')) {
  const [names, code] = glyph.split(':');
  style(
    names
      .split(',')
      .map((name) => `.fa-${name}:before`)
      .join(', '),
    { content: `"\\${code}"` },
  );
}
style('.sr-only', {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  border: 0,
});
style('.sr-only-focusable:active, .sr-only-focusable:focus', {
  position: 'static',
  width: 'auto',
  height: 'auto',
  margin: 0,
  overflow: 'visible',
  clip: 'auto',
});
