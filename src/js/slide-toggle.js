/* eslint-disable */

/**
 * @param {string} target
 * @param {number} duration
 *
 * Usage
 * slideUp('.node', 700)
 */

const slideUp = (target, duration = 500) => {
  const currentTarget = target;

  currentTarget.style.transitionProperty = 'height, margin, padding';
  currentTarget.style.transitionDuration = `${duration}ms`;
  currentTarget.style.height = `${currentTarget.offsetHeight}px`;
  currentTarget.offsetHeight;
  currentTarget.style.overflow = 'hidden';
  currentTarget.style.height = 0;
  currentTarget.style.paddingTop = 0;
  currentTarget.style.paddingBottom = 0;
  currentTarget.style.marginTop = 0;
  currentTarget.style.marginBottom = 0;
  window.setTimeout(() => {
    currentTarget.style.display = 'none';
    currentTarget.style.removeProperty('height');
    currentTarget.style.removeProperty('padding-top');
    currentTarget.style.removeProperty('padding-bottom');
    currentTarget.style.removeProperty('margin-top');
    currentTarget.style.removeProperty('margin-bottom');
    currentTarget.style.removeProperty('overflow');
    currentTarget.style.removeProperty('transition-duration');
    currentTarget.style.removeProperty('transition-property');
  }, duration);
};

const slideDown = (target, duration = 500) => {
  const currentTarget = target;

  currentTarget.style.removeProperty('display');

  let { display } = window.getComputedStyle(currentTarget);

  if (display === 'none') display = 'block';

  currentTarget.style.display = display;

  const height = currentTarget.offsetHeight;

  currentTarget.style.overflow = 'hidden';
  currentTarget.style.height = 0;
  currentTarget.style.paddingTop = 0;
  currentTarget.style.paddingBottom = 0;
  currentTarget.style.marginTop = 0;
  currentTarget.style.marginBottom = 0;
  currentTarget.offsetHeight;
  currentTarget.style.transitionProperty = 'height, margin, padding';
  currentTarget.style.transitionDuration = `${duration}ms`;
  currentTarget.style.height = `${height}px`;
  currentTarget.style.removeProperty('padding-top');
  currentTarget.style.removeProperty('padding-bottom');
  currentTarget.style.removeProperty('margin-top');
  currentTarget.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    currentTarget.style.removeProperty('height');
    currentTarget.style.removeProperty('overflow');
    currentTarget.style.removeProperty('transition-duration');
    currentTarget.style.removeProperty('transition-property');
  }, duration);
};

const slideToggle = (target, duration = 500) => {
  const currentTarget = target;

  if (window.getComputedStyle(currentTarget).display === 'none') {
    return slideDown(currentTarget, duration);
  }
  return slideUp(currentTarget, duration);
};

export { slideUp, slideDown, slideToggle };
