import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import * as Styles from "./styles";
import * as Services from "../../services/api";

import Lane from "../Lane";
import Title from "../Title";
import Card from "../Card";
import Column from "../Column";

const isDraggingToOutside = (result) => !result.destination;

const isDraggingToTheSameList = (source, destination) => source.droppableId === destination.droppableId;

const isDraggingToOtherList = (source, destination) => source.droppableId !== destination.droppableId;

const onDragEnd = (result, columns, setColumns) => {
  if (isDraggingToOutside(result)) return;

  const { source, destination } = result;
  const sourceColumn = columns[source.droppableId];
  const destColumn = columns[destination.droppableId];
  const sourceItems = [...sourceColumn.cards];
  const destItems = [...destColumn.cards];

  const [removed] = sourceItems.splice(source.index, 1);
  if (isDraggingToTheSameList(source, destination)) {
    sourceItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        cards: sourceItems,
      },
    });
  }

  if (isDraggingToOtherList(source, destination)) {
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        cards: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        cards: destItems,
      },
    });
  }
};

const onDragStart = () => {
  if (window.navigator.vibrate) {
    window.navigator.vibrate(100);
  }
};

export default function Board() {
  const [lists, setList] = useState(Services.list_data);

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={(result) => onDragEnd(result, lists, setList)}>
      <Styles.Board>
        {Object.entries(lists).map(([listId, list]) => (
          <Column key={listId}>
            <Title title={list.title} creatable={list.creatable} />
            <Lane key={listId} droppableId={listId} data={list}>
              {list.cards.map((item, index) => (
                <Card key={item.id} index={index} data={item} />
              ))}
            </Lane>
          </Column>
        ))}
      </Styles.Board>
    </DragDropContext>
  );
}
