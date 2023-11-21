import { Flex, Switch, useColorMode } from "@chakra-ui/react";
import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";

export function ThemeSwitcher() {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex align={"center"} gap={"10px"} px={"10px"} py={"5px"} rounded={"30px"}>
      <RiMoonFill size={20} />
      <Switch onChange={toggleColorMode} />
      <MdSunny size={20} />
    </Flex>
  );
}
