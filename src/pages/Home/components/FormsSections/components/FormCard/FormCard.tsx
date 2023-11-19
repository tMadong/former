import {
  ArrowForwardIcon,
  CalendarIcon,
  EditIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { RoutePath } from "#constants/routePath";

type FormCardProps = {
  name?: string;
  createdAt?: string;
  description?: string;
  show?: boolean;
  status?: string;
};

export function FormCard({
  name = "form name",
  createdAt = "about 1h ago",
  description = "description text",
  show = true,
  status = "draft",
}: FormCardProps) {
  const navigate = useNavigate();

  const handleEditForm = () => {
    navigate(RoutePath.Builder);
  };

  return (
    <Box
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      h={"full"}
      p={4}
      rounded={"md"}
    >
      <Stack mb={4}>
        <Flex align={"center"} justify={"space-between"}>
          <Heading as={"p"} size={"md"} title={name} isTruncated>
            {name}
          </Heading>
          <Badge colorScheme="red" variant={"solid"}>
            {status}
          </Badge>
        </Flex>

        <Flex align={"center"} justify={"space-between"}>
          <Text as={"span"} color={"gray.400"}>
            {createdAt}
          </Text>

          <Flex gap={4}>
            <Flex align={"center"} gap={2}>
              <ViewIcon />
              <Text>0</Text>
            </Flex>

            <Flex align={"center"} gap={2}>
              <CalendarIcon />
              <Text>0</Text>
            </Flex>
          </Flex>
        </Flex>
      </Stack>

      <Stack direction={"column"} gap={4}>
        <Text noOfLines={2}>{description}</Text>

        {show ? (
          <Button rightIcon={<EditIcon />} onClick={handleEditForm}>
            Edit
          </Button>
        ) : (
          <Button rightIcon={<ArrowForwardIcon />}>View</Button>
        )}
      </Stack>
    </Box>
  );
}
