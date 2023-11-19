import { ReactNode } from "react";
import { createContext, useState } from "react";

import { FormElementInstance } from "#types/FormElement";

export type BuilderContextType = {
  addElement(index: number, element: FormElementInstance): void;
  elements: FormElementInstance[];
};

type BuilderContextProviderProps = { children: ReactNode };

export const BuilderContext = createContext<BuilderContextType | null>(null);

export function BuilderContextProvider({
  children,
}: BuilderContextProviderProps) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);

  const handleAddElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);

      return newElements;
    });
  };

  const value = { addElement: handleAddElement, elements };

  return (
    <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>
  );
}
