import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";

type StatisticsWidgetProps = {
  helpText: string;
  icon: ReactElement;
  loading: boolean;
  title: string;
  value: number;
};

export function StatisticsWidget({
  helpText,
  icon,
  loading,
  title,
  value,
}: StatisticsWidgetProps) {
  return (
    <Card>
      <CardHeader>
        <Flex align={"center"} justify={"space-between"}>
          <Heading as={"h4"} size={"lg"}>
            {title}
          </Heading>
          {icon}
        </Flex>
      </CardHeader>
      <CardBody>
        <Stack textAlign={"end"}>
          {loading ? (
            <Skeleton borderRadius={"full"}>
              <Heading size={"xl"}>0</Heading>
            </Skeleton>
          ) : (
            <Heading size={"xl"}>{value}</Heading>
          )}
          <Text>{helpText}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
