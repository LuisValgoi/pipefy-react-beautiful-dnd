import React from "react";
import { Draggable } from "react-beautiful-dnd";

import * as Styles from "./styles";

export default function Card({ data, index }) {
  return (
    <Draggable key={data.id} draggableId={data.id} index={index}>
      {(provided, snapshot) => <CardContent data={data} provided={provided} snapshot={snapshot} />}
    </Draggable>
  );
}

const CardContent = ({ data, provided, snapshot }) => {
  return (
    <Styles.Container ref={provided.innerRef} isDragging={snapshot.isDragging} {...provided.draggableProps} {...provided.dragHandleProps}>
      <header>
        {data.labels.map((label) => (
          <Styles.Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Styles.Container>
  );
};
