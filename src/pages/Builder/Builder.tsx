import { ContentContainer } from "@/components/ContentContainer";
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { DndContext } from "@dnd-kit/core";

import { BuilderBody } from "./BuilderBody";
import { BuilderHeader } from "./BuilderHeader";

const FORM_ID = 1;

export function Builder() {
  if (!FORM_ID) {
    return (
      <Box>
        <Heading>Form dont found</Heading>
      </Box>
    );
  }
  return (
    <DndContext>
      <Flex direction={"column"} w={"full"}>
        <ContentContainer>
          <BuilderHeader />
        </ContentContainer>
        <Divider />

        <BuilderBody />
      </Flex>
    </DndContext>
  );
}
