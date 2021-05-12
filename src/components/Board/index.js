import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import * as Styles from "./styles";
import * as Services from "../../services/api";

import Lane from "../Lane";
import Title from "../Title";
import Card from "../Card";
import Column from "../Column";

const onDragEnd = () => {};

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
