import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header";
import * as S from "./styled";

export function Layout() {
  return (
    <Flex direction={"column"} h={"full"} minH={"100vh"} w={"full"}>
      <Header />
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </Flex>
  );
}
