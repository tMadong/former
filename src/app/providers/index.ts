import { ComponentType } from "react";

import { withBuilderContext } from "./withBuilderContext";
import { withChakra } from "./withChakra";
import { withRouter } from "./withRouter";
import { withStrictMode } from "./withStrictMode";

export function WithProviders(Component: ComponentType) {
  return [
    withStrictMode,
    withRouter,
    withChakra,
    withBuilderContext,
  ].reduceRight((Target, wrap) => wrap(Target), Component);
}
