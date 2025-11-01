import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

jest.mock("framer-motion", () => {
  const React = require("react");
  const buildMotionComponent = (element) =>
    React.forwardRef(
      (
        {
          children,
          animate,
          initial,
          transition,
          whileHover,
          whileTap,
          whileInView,
          variants,
          viewport,
          exit,
          layout,
          layoutId,
          drag,
          dragConstraints,
          dragMomentum,
          dragElastic,
          ...rest
        },
        ref
      ) =>
        React.createElement(element, { ref, ...rest }, children)
    );

  return {
    motion: new Proxy(
      {},
      {
        get: (_, element) => {
          const Component = buildMotionComponent(element);
          Component.displayName = `motion.${String(element)}`;
          return Component;
        },
      }
    ),
  };
});

test("renders Mouawia Youmbai profile title", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /mouawia youmbai/i });
  expect(heading).toBeInTheDocument();
});
