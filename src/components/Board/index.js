import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import * as Styles from "./styles";
import * as Services from "../../services/api";

import Lane from "../Lane";
import Title from "../Title";
import Card from "../Card";

const onDragEnd = () => {};

const data = Services.loadLists();
export default function Board() {
  const [lists, setList] = useState(data);

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, lists, setList)}>
      <Styles.Board>
        {lists.map((list) => (
          <Styles.Columns>
            <Title data={list} />
            <Lane key={list.title} droppableId={list.title} data={list}>
              {list.cards.map((item, index) => (
                <Card key={item.id} index={index} data={item} />
              ))}
            </Lane>
          </Styles.Columns>
        ))}
      </Styles.Board>
    </DragDropContext>
  );
}
