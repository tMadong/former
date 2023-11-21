import { FormElement, FormElementInstance } from "#types/FormElement";

import { BuilderComponent } from "./BuilderComponent";
import { FormComponent } from "./FormComponent";
import { PropertiesComponent } from "./PropertiesComponent";

export type TextFieldElementInstance = FormElementInstance & {
  extra: typeof extra;
};

const extra = {
  helperText: "Helper text",
  label: "Text field",
  placeholder: "Placeholder",
  required: true,
};

export const TextFieldFormElement: FormElement = {
  type: "TextField",

  construct: (id: string) => ({
    id,
    type: "TextField",

    extra,
  }),

  designerButton: {
    label: "Text Field",
    // icon: <EditIcon />,
  },

  designerComponent: BuilderComponent,

  formComponent: FormComponent,

  propertiesComponent: PropertiesComponent,
};
