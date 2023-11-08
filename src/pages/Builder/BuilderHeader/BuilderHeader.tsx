import { ArrowUpIcon, CheckIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

export function BuilderHeader() {
  return (
    <Box mb={3} w={"full"}>
      <Flex align={"center"} justify={"space-between"} w={"full"}>
        <Text as={"p"}>
          From:
          <Text as={"span"} fontWeight={"bold"} ml={3}>
            Demo form
          </Text>
        </Text>

        <ButtonGroup gap={2}>
          <Button leftIcon={<ViewIcon />} size={"sm"} variant="outline">
            Preview
          </Button>
          <Button leftIcon={<CheckIcon />} size={"sm"} variant="outline">
            Save
          </Button>
          <Button colorScheme="linkedin" leftIcon={<ArrowUpIcon />} size={"sm"}>
            Publish
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
