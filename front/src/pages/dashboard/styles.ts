import { styled } from "styled-components";

export const StyledDashboard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--color-grey-1);
    gap: 15px;
    padding: 20px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
`