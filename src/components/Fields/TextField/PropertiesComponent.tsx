import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Switch,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useBuilder } from "#hooks/UseBuilder";
import { FormElementInstance } from "#types/FormElement";

import { TextFieldElementInstance } from "./TextFieldFormElement";

type PropertiesComponentProps = { elementInstance: FormElementInstance };

export function PropertiesComponent({
  elementInstance,
}: PropertiesComponentProps) {
  const { handleUpdateElement } = useBuilder();

  const element = elementInstance as unknown as TextFieldElementInstance;

  const [label, setLabel] = useState(element.extra.label);
  const [placeholder, setPlaceholder] = useState(element.extra.placeholder);
  const [helperText, setHelperText] = useState(element.extra.helperText);
  const [required, setRequired] = useState(element.extra.required);

  useEffect(() => {
    setLabel(element.extra.label);
    setPlaceholder(element.extra.placeholder);
    setHelperText(element.extra.helperText);
    setRequired(element.extra.required);
  }, [element]);

  const handleApplyChanges = () => {
    handleUpdateElement(element.id, {
      ...element,
      extra: { helperText, label, placeholder, required },
    });
  };

  return (
    <form onBlur={handleApplyChanges}>
      <VStack gap={5}>
        <FormControl>
          <FormLabel>Label</FormLabel>
          <Input value={label} onChange={(e) => setLabel(e.target.value)} />
          <FormHelperText>
            The label of the field <br /> It will be displayed above the field
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Placeholder</FormLabel>
          <Input
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
          />
          <FormHelperText>The placeholder of the field</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Helper text</FormLabel>
          <Input
            value={helperText}
            onChange={(e) => setHelperText(e.target.value)}
          />
          <FormHelperText>
            The helper text of the field <br /> It will be displayed above the
            field
          </FormHelperText>
        </FormControl>

        <FormControl
          border={"1px solid"}
          borderColor={"gray.700"}
          p={4}
          rounded={"md"}
        >
          <FormLabel>Required</FormLabel>
          <Flex align={"center"} justify={"space-between"}>
            <FormHelperText>
              The label of the field. <br /> It will be displayed above the
              field
            </FormHelperText>
            <Switch
              isChecked={required}
              onChange={() => setRequired((prev) => !prev)}
            />
          </Flex>
        </FormControl>
      </VStack>
    </form>
  );
}
