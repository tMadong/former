import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Header } from "#components/Header";

export function Layout() {
  return (
    <Flex direction={"column"} h={"full"} minH={"100vh"} w={"full"}>
      <Header />
      <Flex flex={1} h={"full"} mx={"auto"} w={"full"}>
        <Outlet />
      </Flex>
    </Flex>
  );
}
