import { Box, Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import { GrUpdate } from "react-icons/gr";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { RoutePath } from "#constants/routePath";

export function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(RoutePath.Root);
  };

  const handleRefreshPage = () => {
    navigate(0);
  };

  return (
    <Box mx={"auto"}>
      <Flex
        align={"center"}
        direction={"column"}
        gap={10}
        h={"full"}
        justify={"center"}
        w={"full"}
      >
        <Heading as={"h2"}>Something went wrong</Heading>

        <ButtonGroup gap={2}>
          <Button leftIcon={<GrUpdate />} onClick={handleRefreshPage}>
            Refresh page
          </Button>

          <Button
            colorScheme="green"
            leftIcon={<IoIosHome />}
            onClick={handleGoHome}
          >
            Home
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
