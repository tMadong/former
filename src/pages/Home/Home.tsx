import { EditIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem } from "@chakra-ui/react";

import { StatisticsWidget } from "#components/StatisticsWidget";

import { ContentContainer } from "../../components/ContentContainer";
import { FormsSections } from "./components/FormsSections";

export function Home() {
  return (
    <Box w="full">
      <ContentContainer>
        <Grid gap={"12px"} templateColumns="repeat(3, 1fr)">
          <GridItem>
            <StatisticsWidget
              helpText="Кол-во что-то там"
              icon={<EditIcon h={6} w={6} />}
              loading={false}
              title="Total questions"
              value={12}
            />
          </GridItem>
          <GridItem>
            <StatisticsWidget
              helpText="Кол-во что-то там"
              icon={<EditIcon h={6} w={6} />}
              loading={false}
              title="Total questions"
              value={12}
            />
          </GridItem>
          <GridItem>
            <StatisticsWidget
              helpText="Кол-во что-то там"
              icon={<EditIcon h={6} w={6} />}
              loading={false}
              title="Total questions"
              value={12}
            />
          </GridItem>
        </Grid>
      </ContentContainer>

      <FormsSections />
    </Box>
  );
}
