import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  input {
    width: 280px;
    height: 30px;
    padding-left: 6px;
    border: 2px solid var(--color-grey-2);
    border-radius: 4px;
  }
`;
