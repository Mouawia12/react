// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

class MinimalResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(target, options) {
    if (typeof this.callback === "function") {
      this.callback([{ target, contentRect: target.getBoundingClientRect() }], this);
    }
  }

  unobserve() {}

  disconnect() {}
}

if (typeof window !== "undefined" && !window.ResizeObserver) {
  window.ResizeObserver = MinimalResizeObserver;
}

if (typeof global !== "undefined" && !global.ResizeObserver) {
  global.ResizeObserver = MinimalResizeObserver;
}
