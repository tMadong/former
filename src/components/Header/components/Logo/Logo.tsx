import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to={"/"}>
      <Heading
        bgClip="text"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        fontSize="4xl"
        fontWeight="extrabold"
      >
        Former
      </Heading>
    </Link>
  );
}
