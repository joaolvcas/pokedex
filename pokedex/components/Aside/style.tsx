import styled from "styled-components";

export const AsideDashboard = styled.ul`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100vh;
  padding: 20px;
  background-color: var(--color-brand-1);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 180px;
    gap: 10px;
    border-bottom: 2px solid var(--color-grey-2);
  }

  p {
    display: flex;
    justify-content: center;
    color: var(--color-letter);
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    max-height: 400px;
    margin-top: 25px;
    overflow-x: auto;
    gap: 10px;
    color: var(--color-letter);
  }

  ul::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ul::-webkit-scrollbar {
    width: 6px;
    background: var(--color-grey-2);
    border-radius: 10px;
  }
  ul::-webkit-scrollbar-thumb {
    background: var(--color-scroll-1);
    border-radius: 10px;
  }

  li {
    cursor: pointer;
  }

  li:hover {
    font-weight: 600;
  }
  @media (max-width: 850px) {
    width: 100vw;

    ul {
      flex-direction: row;
    }

    ul::-webkit-scrollbar-track {
      background-color: #f4f4f4;
    }
    ul::-webkit-scrollbar {
      background: var(--color-grey-2);
      border-radius: 10px;
    }
    ul::-webkit-scrollbar-thumb {
      background: var(--color-scroll-1);
      border-radius: 4px;
    }
  }
`;
