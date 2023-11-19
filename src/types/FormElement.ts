import { FC } from "react";

export type Element = "TextField";

export type FormElementInstance = {
  id: string;
  type: Element;
  extra?: Record<string, unknown>;
};

export type FormElement = {
  type: Element;

  construct(id: string): FormElementInstance;

  designerButton: {
    // icon: React.ElementType;
    label: string;
  };
  designerComponent: FC;

  formComponent: FC;

  propertiesComponent: FC;
};

export type FormElementsType = {
  [key in Element]: FormElement;
};
