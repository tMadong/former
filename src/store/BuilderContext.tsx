import { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useState } from "react";

import { FormElementInstance } from "#types/FormElement";

export type BuilderContextType = {
  elements: FormElementInstance[];

  selectedElement: FormElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;

  handleAddElement(index: number, element: FormElementInstance): void;
  handleRemoveElement(id: string): void;
  handleUpdateElement(id: string, element: FormElementInstance): void;
};

type BuilderContextProviderProps = { children: ReactNode };

export const BuilderContext = createContext<BuilderContextType | null>(null);

export function BuilderContextProvider({
  children,
}: BuilderContextProviderProps) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const [selectedElement, setSelectedElement] =
    useState<FormElementInstance | null>(null);

  const handleAddElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);

      return newElements;
    });
  };

  const handleRemoveElement = (id: string) => {
    setElements((prev) => prev.filter((element) => element.id !== id));
  };

  const handleUpdateElement = (id: string, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      const elementIndex = newElements.findIndex((el) => el.id === id);
      newElements[elementIndex] = element;

      return newElements;
    });
  };

  const value = {
    elements,
    selectedElement,
    setSelectedElement,
    handleAddElement,
    handleRemoveElement,
    handleUpdateElement,
  };

  return (
    <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>
  );
}
