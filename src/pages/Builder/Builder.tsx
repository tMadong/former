import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { DndContext } from "@dnd-kit/core";

import { ContentContainer } from "#components/ContentContainer";
import { PageContentLoader } from "#components/PageContentLoader";

import { BuilderBody } from "./components/BuilderBody";
import { BuilderHeader } from "./components/BuilderHeader";
import { DragOverlayWrapper } from "./components/DragOverlayWrapper";

const FORM_ID = 1;

export function Builder() {
  const isLoading = false;

  if (isLoading) {
    return <PageContentLoader />;
  }

  if (!FORM_ID) {
    return (
      <Box>
        <Heading>Form don t found</Heading>
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

      <DragOverlayWrapper />
    </DndContext>
  );
}
