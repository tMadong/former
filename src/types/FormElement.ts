export type Element = "TextField";

export type FormElement = {
  designerComponent: React.FC;
  formComponent: React.FC;
  propertiesComponent: React.FC;

  type: Element;
};

export type FormElementsType = {
  [key in Element]: FormElement;
};
