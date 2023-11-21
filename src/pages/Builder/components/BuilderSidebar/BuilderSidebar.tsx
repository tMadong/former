import { Box } from "@chakra-ui/react";

import { useBuilder } from "#hooks/UseBuilder";

import { FormElementsSection } from "./components/FormElementsSection";
import { PropertiesSection } from "./components/PropertiesSection";

export function BuilderSidebar() {
  const { selectedElement } = useBuilder();

  return (
    <Box as="aside" bg={"gray.900"} px={6} py={4} w={400}>
      {selectedElement ? <PropertiesSection /> : <FormElementsSection />}
    </Box>
  );
}
