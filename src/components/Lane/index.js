import React from "react";
import { Droppable } from "react-beautiful-dnd";

import * as Styles from "./styles";

export default function Lane({ children, data, droppableId }) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <LaneContent data={data} provided={provided}>
          {children}
          {provided.placeholder}
        </LaneContent>
      )}
    </Droppable>
  );
}

const LaneContent = ({ children, data, provided }) => {
  return (
    <div {...provided.droppableProps} ref={provided.innerRef}>
      <Styles.Container done={data.done}>
        <ul>{children}</ul>
      </Styles.Container>
    </div>
  );
};
