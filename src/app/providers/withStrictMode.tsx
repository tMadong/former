import { ComponentType, StrictMode } from "react";

export function withStrictMode(Component: ComponentType) {
  // eslint-disable-next-line react/display-name
  return function () {
    return (
      <StrictMode>
        <Component />
      </StrictMode>
    );
  };
}
