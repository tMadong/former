import { Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { MdPublic, MdRemoveRedEye, MdSave } from "react-icons/md";

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
          <Button
            rightIcon={<MdRemoveRedEye size={20} />}
            size={"sm"}
            variant="outline"
          >
            Preview
          </Button>

          <Button
            rightIcon={<MdSave size={20} />}
            size={"sm"}
            variant="outline"
          >
            Save
          </Button>

          <Button
            colorScheme="linkedin"
            rightIcon={<MdPublic size={20} />}
            size={"sm"}
          >
            Publish
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
