// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Suppress noisy React Router future-flag warnings during tests
// These warnings are informational about upcoming v7 changes and can
// clutter CI/test output; filter them out while keeping other warnings.
const _origWarn = console.warn; // preserve original
console.warn = (...args) => {
  try {
    const text = args.join(' ');
    if (typeof text === 'string' && (
      text.includes('React Router Future Flag Warning') ||
      text.includes('v7_startTransition') ||
      text.includes('v7_relativeSplatPath')
    )) {
      return;
    }
  } catch (e) {
    // fall through to original warn
  }
  return _origWarn.apply(console, args);
};
