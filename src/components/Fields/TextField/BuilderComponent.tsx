import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

import { FormElementInstance } from "#types/FormElement";

import { TextFieldElementInstance } from "./TextFieldFormElement";

export function BuilderComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as unknown as TextFieldElementInstance;
  
  const { helperText, label, placeholder, required } = element.extra;

  return (
    <FormControl>
      <FormLabel>
        {label}

        {required && (
          <Text as={"span"} color={"red.500"}>
            &nbsp;*
          </Text>
        )}
      </FormLabel>

      <Input
        placeholder={placeholder}
        pointerEvents={"none"}
        disabled
        readOnly
      />

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
