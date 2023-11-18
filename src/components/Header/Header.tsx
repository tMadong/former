import { Flex } from "@chakra-ui/react";

import { Logo } from "./components/Logo";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export function Header() {
  return (
    <header>
      <Flex
        align={"center"}
        justify={"space-between"}
        maxW={"1024px"}
        mb={"20px"}
        mx={"auto"}
        px={"24px"}
        py={"12px"}
        w={"full"}
      >
        <Logo />
        <ThemeSwitcher />
      </Flex>
    </header>
  );
}
