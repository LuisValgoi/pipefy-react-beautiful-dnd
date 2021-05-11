import React, { useState } from "react";

import * as Styles from "./styles";
import * as Services from "../../services/api";

import List from "../List";

const data = Services.loadLists();
export default function Board() {
  const [lists, setList] = useState(data);

  return (
    <Styles.Container>
      {lists.map((list, index) => (
        <List key={list.title} listIndex={index} data={list} />
      ))}
    </Styles.Container>
  );
}
