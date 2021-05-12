import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
