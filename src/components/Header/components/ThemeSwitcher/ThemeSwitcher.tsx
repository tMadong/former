import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Switch, useColorMode } from "@chakra-ui/react";

export function ThemeSwitcher() {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex align={"center"} gap={"10px"} px={"10px"} py={"5px"} rounded={"30px"}>
      <MoonIcon />
      <Switch onChange={toggleColorMode} />
      <SunIcon />
    </Flex>
  );
}
