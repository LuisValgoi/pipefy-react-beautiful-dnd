import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import * as Styles from "./styles";
import * as Services from "../../services/api";

import Lane from "../Lane";
import Title from "../Title";

const onDragEnd = () => {};

const data = Services.loadLists();
export default function Board() {
  const [lists, setList] = useState(data);

  return (
    <Styles.Board>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, lists, setList)}>
        {lists.map((list, index) => (
          <Styles.Columns>
            <Title data={list} />
            <Lane key={list.title} listIndex={index} data={list} />
          </Styles.Columns>
        ))}
      </DragDropContext>
    </Styles.Board>
  );
}
