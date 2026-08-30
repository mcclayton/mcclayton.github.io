import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    background: '#1b1f22',
    backgroundAlt: '#000000',
    backgroundOverlay: 'rgba(19, 21, 25, 0.5)',
    foreground: '#ffffff',
    foregroundBold: '#ffffff',
    foregroundLight: 'rgba(255, 255, 255, 0.5)',
    border: '#ffffff',
    borderBackground: 'rgba(255, 255, 255, 0.075)',
    borderBackgroundAlt: 'rgba(255, 255, 255, 0.175)',
  },
  duration: {
    transition: '0.2s',
    background: '2.5s',
    intro: '0.75s',
    article: '0.325s',
  },
  size: {
    borderRadius: '4px',
    borderWidth: '1px',
    elementHeight: '2.75rem',
    elementMargin: '2rem',
  },
  font: {
    family: '"Source Sans Pro", sans-serif',
    familyFixed: '"Courier New", monospace',
    weight: '300',
    weightBold: '600',
    letterSpacing: '0.2rem',
    headingLetterSpacing: '0.5rem',
  },
  zIndex: {
    base: '10000',
  },
});

export const breakpoints = {
  xlarge: 'screen and (max-width: 1680px)',
  large: 'screen and (max-width: 1280px)',
  medium: 'screen and (max-width: 980px)',
  small: 'screen and (max-width: 736px)',
  xsmall: 'screen and (max-width: 480px)',
  xxsmall: 'screen and (max-width: 360px)',
} as const;
