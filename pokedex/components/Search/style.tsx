import styled from "styled-components";

export const InputSearch = styled.div`
  display: flex;

  width: 80%;
  max-height: 25px;

  border: 1px solid var(--color-grey-1);
  background-color: var(--color-grey-3);

  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;

  input {
    background-color: transparent;
    width: 80%;
  }

  input:focus {
    border: 0 none;
    outline: none;
  }
`;
