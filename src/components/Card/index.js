import React, { useRef } from "react";

import * as Styles from "./styles";

export default function Card({ data }) {
  const ref = useRef();

  return (
    <Styles.Container ref={ref}>
      <header>
        {data.labels.map((label) => (
          <Styles.Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Styles.Container>
  );
}
