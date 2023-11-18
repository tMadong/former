import { Flex, Spinner } from "@chakra-ui/react";

import { ContentContainer } from "../ContentContainer";

export function PageContentLoader() {
  return (
    <ContentContainer>
      <Flex align={"center"} h={"full"} justify={"center"}>
        <Spinner size={"xl"} speed="0.7s" thickness="4px" />
      </Flex>
    </ContentContainer>
  );
}
