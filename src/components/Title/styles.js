import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 52px;
  width: 100%;
  padding: 0 15px;

  h2 {
    font-weight: 500;
    font-size: 16px;
    padding: 0 10px;
  }

  button {
    height: 32px;
    width: 32px;
    border-radius: 40px;
    background: #3b5dfd;
    border: 0;
    cursor: pointer;
  }
`;
