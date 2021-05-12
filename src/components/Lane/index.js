import React from "react";

import * as Styles from "./styles";

import Card from "../Card";

export default function Lane({ data, listIndex }) {
  return (
    <Styles.Container done={data.done}>
      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Styles.Container>
  );
}
