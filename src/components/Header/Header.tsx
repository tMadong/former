import { Logo } from "./components/Logo";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import * as S from "./styled";

export function Header() {
  return (
    <header>
      <S.Container>
        <Logo />
        <ThemeSwitcher />
      </S.Container>
    </header>
  );
}
