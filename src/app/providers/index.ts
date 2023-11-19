import { ComponentType } from "react";

import { withBuilderContext } from "./withBuilderContext";
import { withChakra } from "./withChakra";
import { withRouter } from "./withRouter";

export function WithProviders(Component: ComponentType) {
  return [withRouter, withChakra, withBuilderContext].reduceRight(
    (Target, wrap) => wrap(Target),
    Component
  );
}
