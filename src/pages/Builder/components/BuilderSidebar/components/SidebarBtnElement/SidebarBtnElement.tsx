import { Button, Flex } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { MdOutlineTextFields } from "react-icons/md";

import { FormElement } from "#types/FormElement";

type SidebarBtnElementProps = {
  formElement: FormElement;
};

export function SidebarBtnElement({ formElement }: SidebarBtnElementProps) {
  const { label } = formElement.designerButton;

  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });

  return (
    <Button
      h={100}
      p={5}
      ref={draggable.setNodeRef}
      ring={draggable.active ? 3 : 0}
      ringColor={"white"}
      variant={"solid"}
      w={100}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Flex
        align={"center"}
        direction={"column"}
        h={"full"}
        justify={"space-between"}
      >
        <MdOutlineTextFields size={35} />

        {label}
      </Flex>
    </Button>
  );
}

export function SidebarBtnElementDragOverlay({
  formElement,
}: SidebarBtnElementProps) {
  const { label } = formElement.designerButton;

  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });

  return (
    <Button
      h={100}
      opacity={100}
      ref={draggable.setNodeRef}
      variant={"solid"}
      w={100}
    >
      <Flex
        align={"center"}
        direction={"column"}
        h={"full"}
        justify={"space-between"}
        opacity={100}
        p={5}
      >
        <MdOutlineTextFields size={35} />

        {label}
      </Flex>
    </Button>
  );
}
