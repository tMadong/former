import { StatisticsWidget } from "@/components/StatisticsWidget";
import { EditIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

import { ContentContainer } from "../../components/ContentContainer";
import { FormsSections } from "./components/FormsSections";
import * as S from "./styled";

export function Home() {
  return (
    <Box w="full">
      <ContentContainer>
        <S.Test>
          <StatisticsWidget
            helpText="Rjkdj gjctnbntktq pf gjcktlybq vtczw"
            icon={<EditIcon h={6} w={6} />}
            loading={false}
            title="Total questions"
            value={12}
          />

          <StatisticsWidget
            helpText="12"
            icon={<EditIcon />}
            loading
            title="title"
            value={12}
          />
          <StatisticsWidget
            helpText="12"
            icon={<EditIcon />}
            loading
            title="title"
            value={12}
          />
        </S.Test>
      </ContentContainer>

      <FormsSections />
    </Box>
  );
}
