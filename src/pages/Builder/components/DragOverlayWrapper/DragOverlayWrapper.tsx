import { Box } from "@chakra-ui/react";
import { Active } from "@dnd-kit/core";
import { DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";

import { FormElements } from "#components/Fields";
import { useBuilder } from "#hooks/UseBuilder";
import { Element } from "#types/FormElement";

import { SidebarBtnElementDragOverlay } from "../BuilderSidebar/components/SidebarBtnElement/SidebarBtnElement";

export function DragOverlayWrapper() {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  const { elements } = useBuilder();

  useDndMonitor({
    onDragCancel: () => {
      setDraggedItem(null);
    },

    onDragEnd: () => {
      setDraggedItem(null);
    },

    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
  });

  if (!draggedItem) return null;

  let node = <div>NO DRAGGABLE</div>;

  const isDes = draggedItem.data?.current?.isDesignerBtnElement;

  if (isDes) {
    const type = draggedItem.data?.current?.type as Element;

    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }

  const isBuilderElement = draggedItem.data?.current?.isBuilderElement;

  if (isBuilderElement) {
    const elementId = draggedItem.data?.current?.elementId;
    const element = elements.find(({ id }) => elementId === id);

    if (!element) {
      node = <div>Element not found</div>;
    } else {
      const DesignerElementComponent =
        FormElements[element.type].designerComponent;

      node = (
        <Box
          bg={"gray.800"}
          border={"1px solid"}
          borderColor={"gray.600"}
          cursor={"pointer"}
          opacity={0.6}
          overflow={"hidden"}
          p={4}
          position={"relative"}
          rounded={"base"}
          w={"full"}
        >
          <DesignerElementComponent elementInstance={element} />
        </Box>
      );
    }
  }

  return <DragOverlay>{node}</DragOverlay>;
}
