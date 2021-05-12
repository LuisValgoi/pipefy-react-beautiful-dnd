import styled from "styled-components";

export const Board = styled.div`
  display: flex;

  padding: 30px 0 5px 0;
  height: calc(100% - 80px);
`;

export const Columns = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
