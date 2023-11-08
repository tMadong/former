import { Box, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useState } from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { CreateFormButton } from "./components/CreateFormButton";
import { CreateFormModal } from "./components/CreateFormModal";
import { FormCard } from "./components/FormCard";

export function FormsSections() {
  const [showCreateFormModal, setShowCreateFormModal] = useState(false);

  const handleOpenCreateFormModal = () => {
    setShowCreateFormModal(true);
  };
  const handleCloseCreateFormModal = () => {
    setShowCreateFormModal(false);
  };

  return (
    <>
      <section>
        <Box my={8}>
          <Divider />
          <ContentContainer>
            <Heading py={4} size={"lg"}>
              Your forms
            </Heading>
          </ContentContainer>
          <Divider />
        </Box>
        <ContentContainer>
          <Grid gap={3} templateColumns={"repeat(3, minmax(0, 1fr))"}>
            <GridItem>
              <CreateFormButton onClick={handleOpenCreateFormModal} />
            </GridItem>

            <GridItem>
              <FormCard />
            </GridItem>
          </Grid>
        </ContentContainer>
      </section>

      <CreateFormModal
        isOpen={showCreateFormModal}
        onClose={handleCloseCreateFormModal}
      />
    </>
  );
}
