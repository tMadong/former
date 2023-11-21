import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { DragEndEvent, useDraggable } from "@dnd-kit/core";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import { MdAddBox, MdDelete } from "react-icons/md";

import PaperImage from "#assets/graphPaper.svg";
import { FormElements } from "#components/Fields";
import { useBuilder } from "#hooks/UseBuilder";
import { Element, FormElementInstance } from "#types/FormElement";

import { BuilderSidebar } from "../BuilderSidebar";

export function BuilderBody() {
  const { elements, setSelectedElement, handleAddElement } = useBuilder();

  const droppable = useDroppable({
    id: "area",
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;
      const type = active.data?.current?.type as Element;

      if (!active || !over) {
        return null;
      }

      const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;
      const isDroppingOverDesignerDropArea =
        over.data?.current?.isDesignerDropArea;

      if (isDesignerBtnElement && isDroppingOverDesignerDropArea) {
        const newElement = FormElements[type].construct(
          Math.floor(Math.random() * 10001).toString()
        );

        handleAddElement(elements.length, newElement);

        return;
      }

      const isDroppingOverDesignerElementTopHalf =
        over.data?.current?.isTopHalf;

      const isDroppingOverDesignerElementBottomHalf =
        over.data?.current?.isBottomHalf;

      if (
        isDesignerBtnElement &&
        (isDroppingOverDesignerElementBottomHalf ||
          isDroppingOverDesignerElementTopHalf)
      ) {
        const newElement = FormElements[type].construct(
          Math.floor(Math.random() * 10001).toString()
        );

        const overElementIndex = elements.findIndex(
          (el) => el.id === over.data?.current?.elementId
        );

        if (overElementIndex > -1 && isDroppingOverDesignerElementTopHalf) {
          handleAddElement(overElementIndex, newElement);
          return;
        }

        if (overElementIndex > -1 && isDroppingOverDesignerElementBottomHalf) {
          handleAddElement(overElementIndex + 1, newElement);
          return;
        }
      }
    },
  });

  return (
    <Flex h={"full"}>
      <Box
        backgroundImage={PaperImage}
        bgColor={"gray.700"}
        h={"full"}
        p={5}
        w={"full"}
        onClick={() => setSelectedElement(null)}
      >
        <Box
          ref={droppable.setNodeRef}
          bg={"gray.900"}
          h={"full"}
          maxW={920}
          mx={"auto"}
          p={5}
          rounded={"md"}
        >
          <Flex align={"center"} direction={"column"} gap={2} h={"full"}>
            {elements.length > 0 &&
              elements.map((element) => (
                <DesignerElement key={element.id} element={element} />
              ))}

            {droppable.isOver && (
              <Flex
                align={"center"}
                bg={"gray.700"}
                border={"1px dashed"}
                h={120}
                justify={"center"}
                rounded={"base"}
                w={"full"}
              >
                <MdAddBox size={35} />
              </Flex>
            )}

            {!droppable.isOver && !elements.length && (
              <Flex align={"center"} h={"full"}>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  Drop here
                </Text>
              </Flex>
            )}
          </Flex>
        </Box>
      </Box>

      <BuilderSidebar />
    </Flex>
  );
}

function DesignerElement({ element }: { element: FormElementInstance }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);

  const { selectedElement, setSelectedElement, handleRemoveElement } =
    useBuilder();

  const Designer = FormElements[element.type].designerComponent;

  const { id, type } = element;

  const topHalf = useDroppable({
    id: id + "-top",
    data: {
      type,
      elementId: id,
      isTopHalf: true,
    },
  });

  const bottomHalf = useDroppable({
    id: id + "-bottom",
    data: {
      type,
      elementId: id,
      isBottomHalf: true,
    },
  });

  const draggable = useDraggable({
    id: id + "-drag-handler",
    data: {
      type,
      elementId: id,
      isBuilderElement: true,
    },
  });

  if (draggable.isDragging) {
    return null;
  }

  const handleMouseEnter = () => {
    setMouseIsOver(true);
  };

  const handleMouseLeave = () => {
    setMouseIsOver(false);
  };

  const handleRemoveFormElement = (event: React.MouseEvent) => {
    event.stopPropagation();

    handleRemoveElement(element.id);
    setSelectedElement(null);
  };

  const handleSelectElement = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (selectedElement?.id === element.id) {
      setSelectedElement(null);
      return;
    }

    setSelectedElement(element);
  };

  return (
    <Box
      ref={draggable.setNodeRef}
      bg={"gray.800"}
      border={"1px solid"}
      borderColor={"gray.600"}
      cursor={"pointer"}
      overflow={"hidden"}
      position={"relative"}
      ring={selectedElement?.id === element.id ? "3px" : "0"}
      ringColor={"white"}
      rounded={"base"}
      w={"full"}
      onClick={handleSelectElement}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Box
        ref={topHalf.setNodeRef}
        borderTop={topHalf.isOver ? "10px solid" : undefined}
        h={"50%"}
        position={"absolute"}
        w={"full"}
      />

      <Box
        ref={bottomHalf.setNodeRef}
        borderBottom={bottomHalf.isOver ? "10px solid" : undefined}
        bottom={0}
        h={"50%"}
        position={"absolute"}
        w={"full"}
      />

      {mouseIsOver && (
        <>
          <Center
            bg={"blackAlpha.500"}
            h={"full"}
            position={"absolute"}
            w={"full"}
          >
            <Text color={"white"}>Click for properties or drag to move</Text>
          </Center>

          <Button
            _hover={{ bg: "red.700" }}
            bg="red.500"
            h={"full"}
            position={"absolute"}
            right={0}
            rounded={"none"}
            onClick={handleRemoveFormElement}
          >
            <MdDelete size={35} />
          </Button>
        </>
      )}

      <Box h={"full"} p={4} pointerEvents={"none"}>
        <Designer elementInstance={element} />
      </Box>
    </Box>
  );
}
