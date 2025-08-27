const DATA_ATTRIBUTE = 'data-animation-sheet';

const createAnimation = (animationName: string, keyframes: string) => {
  if (typeof window === 'undefined' || !window.document) {
    return animationName;
  }

  if (document.querySelector(`[${DATA_ATTRIBUTE}="${animationName}"]`)) {
    return animationName;
  }

  const styleElement = document.createElement('style');
  styleElement.setAttribute(DATA_ATTRIBUTE, animationName);
  document.head.appendChild(styleElement);

  const styleSheet = styleElement.sheet;

  const cssText = `@keyframes ${animationName} { ${keyframes} }`;

  if (styleSheet) {
    styleSheet.insertRule(cssText, 0);
  }

  return animationName;
};

export default createAnimation;
