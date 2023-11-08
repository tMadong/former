import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";

import * as S from "./styled";

type StatisticsWidgetProps = {
  helpText: string;
  icon: ReactElement;
  loading: boolean;
  title: string;
  value: number;
};

export function StatisticsWidget({
  value,
  title,
  loading,
  icon,
  helpText,
}: StatisticsWidgetProps) {
  return (
    <Card>
      <CardHeader>
        <S.HeaderContent>
          <Heading as={"h4"} size={"lg"}>
            {title}
          </Heading>
          {icon}
        </S.HeaderContent>
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
