import { Active } from "@dnd-kit/core";
import { DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";

import { FormElements } from "#constants/formElements";
import { Element } from "#types/FormElement";

import { SidebarBtnElementDragOverlay } from "../BuilderSidebar/components/SidebarBtnElement/SidebarBtnElement";

export function DragOverlayWrapper() {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

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

  return <DragOverlay>{node}</DragOverlay>;
}
