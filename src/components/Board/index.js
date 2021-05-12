import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import * as Styles from "./styles";
import * as Services from "../../services/api";

import List from "../List";

const onDragEnd = () => {};

const data = Services.loadLists();
export default function Board() {
  const [lists, setList] = useState(data);

  return (
    <Styles.Container>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, lists, setList)}>
        {lists.map((list, index) => (
          <List key={list.title} listIndex={index} data={list} />
        ))}
      </DragDropContext>
    </Styles.Container>
  );
}
