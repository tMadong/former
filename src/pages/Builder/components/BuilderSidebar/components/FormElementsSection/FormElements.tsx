import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

import { FormElements } from "#components/Fields";

import { SidebarBtnElement } from "../SidebarBtnElement/SidebarBtnElement";

export function FormElementsSection() {
  return (
    <Box>
      <Heading as={"h4"} mb={5} size={"md"}>
        Elements
      </Heading>

      <Grid
        columnGap={5}
        flexWrap={"wrap"}
        gap={5}
        templateColumns={"repeat(2, 1fr)"}
      >
        <GridItem>
          <SidebarBtnElement formElement={FormElements.TextField} />
        </GridItem>
      </Grid>
    </Box>
  );
}
