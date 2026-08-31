import { keyframes, style } from '@vanilla-extract/css';

const imageSize = 200;
const codeSize = 600;
const borderSize = 8;

const slide = keyframes({
  '0%': {
    transform: `translateY(${codeSize}px)`,
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

const unblur = keyframes({
  '0%': {
    filter: 'blur(3px)',
  },
  '100%': {
    filter: 'blur(0)',
  },
});

export const container = style({
  position: 'relative',
  width: imageSize,
  height: imageSize,
  margin: borderSize,
  border: `${borderSize}px solid rgba(255, 255, 255, 0.2)`,
  borderRadius: '50%',
  clipPath: `circle(${imageSize}px at center)`,
  overflow: 'hidden',
});

export const portrait = style({
  position: 'absolute',
  bottom: -(borderSize * 2),
  left: -borderSize,
  width: imageSize,
  height: imageSize,
  transform: `translateX(-${borderSize}px)`,
});

export const scrollWrapper = style({
  position: 'absolute',
  bottom: 0,
  left: -borderSize,
  height: codeSize * 3,
  width: imageSize,
  animation: `${slide} 5s linear infinite reverse`,
  animationPlayState: 'paused',
  selectors: {
    [`${container}:hover &`]: {
      filter: 'blur(1.5px)',
      animationPlayState: 'running',
    },
  },
});

export const scrollingBackground = style({
  position: 'absolute',
  bottom: 0,
  left: -borderSize,
  backgroundColor: '#23272e',
  backgroundImage: "url('../../images/code.png')",
  backgroundRepeat: 'repeat-y',
  height: codeSize * 3,
  width: imageSize,
  animation: `${slide} 100s linear infinite, ${unblur} 2.5s ease-in`,
  selectors: {
    [`${container}:hover &`]: {
      animationPlayState: 'paused',
    },
  },
});
