import React from "react";

import * as Styles from "./styles";
import { MdAdd } from "react-icons/md";

export default function Title({ data }) {
  return (
    <Styles.Container>
      <h2>{data.title}</h2>
      {data.creatable && (
        <button type="button">
          <MdAdd size={24} color="#FFF" />
        </button>
      )}
    </Styles.Container>
  );
}
