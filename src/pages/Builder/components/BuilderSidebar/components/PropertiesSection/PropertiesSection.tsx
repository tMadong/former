import { Box, CloseButton, Flex, Heading } from "@chakra-ui/react";

import { FormElements } from "#components/Fields";
import { useBuilder } from "#hooks/UseBuilder";

export function PropertiesSection() {
  const { selectedElement, setSelectedElement } = useBuilder();

  if (!selectedElement) {
    return;
  }

  const PropertiesComponent =
    FormElements[selectedElement?.type].propertiesComponent;

  const handleResetSelectedElement = () => {
    setSelectedElement(null);
  };
  return (
    <Box>
      <Heading as={"h4"} mb={5} size={"md"}>
        <Flex align={"center"} justify={"space-between"}>
          Properties
          <CloseButton onClick={handleResetSelectedElement} />
        </Flex>
      </Heading>

      <PropertiesComponent elementInstance={selectedElement} />
    </Box>
  );
}
