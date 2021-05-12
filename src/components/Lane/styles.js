import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${(props) => (props.done ? 0.4 : 1)};
  background: ${(props) => (props.isDraggingOver ? "lightgrey" : "transparent")};
`;
