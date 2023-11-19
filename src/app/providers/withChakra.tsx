import { ChakraProvider } from "@chakra-ui/react";
import { ComponentType } from "react";

export function withChakra(Component: ComponentType) {
  // eslint-disable-next-line react/display-name
  return function () {
    return (
      <ChakraProvider>
        <Component />
      </ChakraProvider>
    );
  };
}
