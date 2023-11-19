import { Box, Flex, Text } from "@chakra-ui/react";
import { DragEndEvent } from "@dnd-kit/core";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { MdAddBox } from "react-icons/md";

import PaperImage from "#assets/graphPaper.svg";
import { FormElements } from "#constants/formElements";
import { useBuilder } from "#hooks/UseBuilder";
import { Element, FormElementInstance } from "#types/FormElement";

import { BuilderSidebar } from "../BuilderSidebar";

export function BuilderBody() {
  const { addElement, elements } = useBuilder();

  const droppable = useDroppable({
    id: "area",
    data: {
      isArea: "true",
    },
  });

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;

      if (!active || !over) {
        return null;
      }

      const type = active.data?.current?.type as Element;
      const newElement = FormElements[type].construct(
        Math.floor(Math.random() * 10001).toString()
      );

      addElement(0, newElement);
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
      >
        <Box
          bg={"gray.900"}
          h={"full"}
          maxW={920}
          mx={"auto"}
          p={5}
          ref={droppable.setNodeRef}
          rounded={"md"}
        >
          <Flex align={"center"} direction={"column"} h={"full"}>
            {elements.length > 0 &&
              elements.map((element) => (
                <DesignerElement key={element.id} element={element} />
              ))}

            {droppable.isOver && (
              <Flex
                align={"center"}
                bg={"gray.700"}
                color={"gray.400"}
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
  const Designer = FormElements[element.type].designerComponent;

  return <Designer />;
}
