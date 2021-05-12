import React from "react";

import * as Styles from "./styles";
import { MdAdd } from "react-icons/md";

export default function Title({ title, creatable }) {
  return (
    <Styles.Container>
      <h2>{title}</h2>
      {creatable && (
        <button type="button">
          <MdAdd size={24} color="#FFF" />
        </button>
      )}
    </Styles.Container>
  );
}
