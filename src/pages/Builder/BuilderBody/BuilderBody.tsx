// import { useDroppable } from "@dnd-kit/core";
import PaperImage from "@/assets/graphPaper.svg";
import { Box, Flex, Text } from "@chakra-ui/react";

export function BuilderBody() {
  //   const droppable = useDroppable({
  //     data: {
  //       isArea: "true",
  //     },
  //     id: "area",
  //   });

  return (
    <>
      <Flex h={"full"}>
        <Box
          backgroundImage={PaperImage}
          bgColor={"gray.700"}
          h={"full"}
          p={5}
          w={"full"}
        >
          <Box bg={"gray.900"} h={"full"} maxW={920} mx={"auto"} rounded={"md"}>
            <Flex direction={"column"}>
              <Text flexGrow={1}>Drop here</Text>
            </Flex>
          </Box>
        </Box>

        <BuilderSidebar />
      </Flex>
    </>
  );
}

export function BuilderSidebar() {
  return (
    <Box bg={"gray.900"} p={4} w={400}>
      <Flex>Elements</Flex>
    </Box>
  );
}
