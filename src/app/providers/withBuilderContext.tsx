import { ComponentType } from "react";

import { BuilderContextProvider } from "#store/BuilderContext";

export function withBuilderContext(Component: ComponentType) {
  // eslint-disable-next-line react/display-name
  return function () {
    return (
      <BuilderContextProvider>
        <Component />
      </BuilderContextProvider>
    );
  };
}
