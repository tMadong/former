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
  designerComponent: FC<{ elementInstance: FormElementInstance }>;

  formComponent: FC<{ elementInstance: FormElementInstance }>;

  propertiesComponent: FC<{ elementInstance: FormElementInstance }>;
};

export type FormElementsType = {
  [key in Element]: FormElement;
};
