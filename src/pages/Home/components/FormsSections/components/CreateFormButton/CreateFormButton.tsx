import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

type CreateFormButtonProps = {
  onClick(): void;
};

export function CreateFormButton({ onClick }: CreateFormButtonProps) {
  return (
    <Button
      border={"1px dashed"}
      borderColor={"whiteAlpha.300"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      h={"full"}
      onClick={onClick}
      variant={"ghost"}
      w={"full"}
    >
      <AddIcon h={6} w={6} />
      Create new form
    </Button>
  );
}
