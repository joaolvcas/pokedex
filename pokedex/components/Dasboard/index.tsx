import styled from "styled-components";

export const DashboardBodyDark = styled.body`
  display: flex;
  width: 100vw;
  height: 100vh;

  --color-brand-1: #000;
  --color-brand-2: #212121;
  --color-scroll-1: #16103a;
  --color-button-1: #2f55cc;
  --color-grey-0: #000;
  --color-grey-1: #33363a;
  --color-grey-2: #aeb1b6;
  --color-grey-3: #aeb1b6;
  --color-letter: #ffffff;

  overflow-x: hidden;
  overflow-y: hidden;

  @media (max-width: 850px) {
    flex-direction: column;
    overflow-x: auto;
    overflow-y: auto;
  }
`;

export const DashboardBodyLight = styled.body`
  display: flex;
  width: 100vw;
  height: 100vh;

  --color-brand-1: #ae4744;
  --color-brand-2: #36b2e6;
  --color-scroll-1: #ae4744;
  --color-button-1: #2f55cc;
  --color-grey-0: #000;
  --color-grey-1: #33363a;
  --color-grey-2: #aeb1b6;
  --color-grey-3: #ffffff;
  --color-letter: #ffffff;

  overflow-x: hidden;
  overflow-y: hidden;
`;
