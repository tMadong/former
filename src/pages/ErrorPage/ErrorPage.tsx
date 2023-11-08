import { RoutePath } from "@/constants/routes";
import { ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(RoutePath.Root);
  };

  const handleRefreshPage = () => {
    navigate(0);
  };
  return (
    <Box style={{ flex: "1" }}>
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
          <Button onClick={handleRefreshPage} rightIcon={<RepeatIcon />}>
            Refresh page
          </Button>
          <Button
            colorScheme="green"
            onClick={handleGoHome}
            rightIcon={<ArrowForwardIcon />}
          >
            Home
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
