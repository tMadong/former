import { useContext } from "react";

import { BuilderContext, BuilderContextType } from "#store/BuilderContext";

export function useBuilder(): BuilderContextType {
  const builder = useContext(BuilderContext);

  if (!builder) {
    throw new Error("error");
  }

  return builder;
}
