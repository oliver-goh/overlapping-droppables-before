import Drop from "./Drop";
import Drag from "./Drag";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";

export default function App() {
  const [lastDrop, setLastDrop] = useState("");
  const onDragEnd = (result: DropResult) => {
    setLastDrop(result.destination?.droppableId || "");
  };

  return (
    <div className="App">
      <h1>Test overlapping Droppables</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Drop id="drop1" type="A" height={400} zIndex={0}>
          <Drag id="1" index={0} />
          <Drop id="drop1-2" type="A" height={300} zIndex={1}>
            <Drop id="drop1-3" type="A" height={200} zIndex={2}></Drop>
          </Drop>
        </Drop>
      </DragDropContext>
      <div>Last dropped at droppableId: {lastDrop}</div>
    </div>
  );
}
