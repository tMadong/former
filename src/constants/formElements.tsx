import { FormElement, FormElementsType } from "#types/FormElement";

function A() {
  return (
    <div>
      <span>text Field</span>
      <input />
    </div>
  );
}

export const TextFieldFormElement: FormElement = {
  type: "TextField",
  construct: (id: string) => ({
    id,
    type: "TextField",

    extra: {
      helperText: "Helper text",
      label: "Text field",
      placeholder: "Placeholder",
      required: false,
    },
  }),

  designerButton: {
    label: "Text Field",
    // icon: <EditIcon />,
  },
  designerComponent: () => <A />,

  formComponent: () => <div>formComponent</div>,

  propertiesComponent: () => <div>propertiesComponent</div>,
};

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};
