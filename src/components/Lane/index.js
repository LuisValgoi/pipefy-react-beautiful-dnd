import React from "react";
import { Droppable } from "react-beautiful-dnd";

import * as Styles from "./styles";

export default function Lane({ children, data, droppableId }) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <LaneContent data={data} snapshot={snapshot} provided={provided}>
          {children}
          {provided.placeholder}
        </LaneContent>
      )}
    </Droppable>
  );
}

const LaneContent = ({ children, data, provided, snapshot }) => {
  return (
    <Styles.Container done={data.done} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver} ref={provided.innerRef}>
      <ul>{children}</ul>
    </Styles.Container>
  );
};
