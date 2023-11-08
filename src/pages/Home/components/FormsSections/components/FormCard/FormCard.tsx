import { RoutePath } from "@/constants/routes";
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

type FormCardProps = {
  createdAt?: string;
  description?: string;
  name?: string;
  show?: boolean;
  status?: string;
};

export function FormCard({
  status = "draft",
  show = true,
  name = "form name",
  description = "description text",
  createdAt = "about 1h ago",
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
          <Heading as={"p"} isTruncated size={"md"} title={name}>
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
          <Button onClick={handleEditForm} rightIcon={<EditIcon />}>
            Edit
          </Button>
        ) : (
          <Button rightIcon={<ArrowForwardIcon />}>View</Button>
        )}
      </Stack>
    </Box>
  );
}
