import React from "react";
import { Droppable } from "@hello-pangea/dnd";

const Drop = ({
  id,
  type,
  isDropDisabled,
  children,
  height,
  zIndex,
}: {
  id: string;
  type: string;
  height: number;
  isDropDisabled?: boolean;
  children?: React.ReactNode;
  zIndex: number;
}) => {
  return (
    <Droppable droppableId={id} type={type} isDropDisabled={isDropDisabled}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            zIndex,
            border: snapshot.isDraggingOver
              ? "2px solid black"
              : "2px solid red",
            height: `${height}px`,
          }}
        >
          Droppable: id=[{id}], zIndex=[{zIndex}]{children}
          <div>{provided.placeholder}</div>
        </div>
      )}
    </Droppable>
  );
};

export default Drop;
