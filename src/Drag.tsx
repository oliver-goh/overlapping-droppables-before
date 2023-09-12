import React from "react";
import { Draggable } from "@hello-pangea/dnd";

const Drag = ({
  id,
  index,
  children,
}: {
  id: string;
  index: number;
  children?: React.ReactNode;
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={(node?: HTMLElement | null) => {
              provided.innerRef(node);
            }}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            <div
              style={{
                border: "2px solid blue",
                height: "20px",
                width: "50%",
              }}
            >
              Drag {id}
            </div>
            {children}
          </div>
        );
      }}
    </Draggable>
  );
};

export default Drag;
