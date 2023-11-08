import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export function ContentContainer({ children }: { children: ReactNode }) {
  return (
    <Box maxW={1024} mx={"auto"} px={"24px"} w={"full"}>
      {children}
    </Box>
  );
}
