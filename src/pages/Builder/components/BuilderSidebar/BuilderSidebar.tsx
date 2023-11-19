import { Box, Flex } from "@chakra-ui/react";

import { FormElements } from "#constants/formElements";

import { SidebarBtnElement } from "./components/SidebarBtnElement/SidebarBtnElement";

export function BuilderSidebar() {
  return (
    <Box bg={"gray.900"} p={4} w={400}>
      <Flex>Elements</Flex>
      <SidebarBtnElement formElement={FormElements.TextField} />
    </Box>
  );
}
