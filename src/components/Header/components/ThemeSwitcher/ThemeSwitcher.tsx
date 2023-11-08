import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Switch, useColorMode } from "@chakra-ui/react";

import * as S from "./styled";

export function ThemeSwitcher() {
  const { toggleColorMode } = useColorMode();

  return (
    <S.Container>
      <MoonIcon />
      <Switch onChange={toggleColorMode} />
      <SunIcon />
    </S.Container>
  );
}
