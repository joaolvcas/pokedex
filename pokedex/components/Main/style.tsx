import styled from "styled-components";

export const DashboardMain = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 75%;
  height: 100vh;
  padding: 2%;
  background-color: var(--color-brand-2);

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 90%;
    gap: 20px;

    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-grey-3);
      height: 40px;
      margin-bottom: 20px;
      border-radius: 5px;
      font-weight: 600;
    }
  }

  div .img-conteiner {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 500px;
    min-height: 170px;
    border-radius: 20px;
    background-color: var(--color-grey-3);
    gap: 30px;

    img {
      width: 300px;
      height: 300px;
    }
  }

  article {
    display: flex;
    width: 478px;
    justify-content: space-around;
    align-items: center;
    height: 45px;
    border-radius: 10px;
    padding: 0px 10px;
    background-color: var(--color-grey-3);
  }
`;

export const DashboardMainSelect = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 75%;
  height: 100vh;
  padding: 2%;
  padding-top: 10%;
  background-color: var(--color-brand-2);
`;
