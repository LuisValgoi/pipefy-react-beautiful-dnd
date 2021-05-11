import React from "react";
import { MdAdd } from "react-icons/md";
import * as Styles from "./styles";

import Card from "../Card";

export default function List({ data, listIndex }) {
  return (
    <Styles.Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Styles.Container>
  );
}
