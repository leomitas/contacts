import { styled } from "styled-components";

export const StyledModalEdit = styled.div`
  background-color: var(--color-white);
  border-radius: 0.25rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.875rem;
    button {
      width: 1.875rem;
      height: 1.875rem;
      background-color: var(--color-white);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.25rem;
      border: 1px solid var(--color-grey-3);
    }
  }
  button {
    background-color: var(--color-white);
    border-radius: 8px;
    color: var(--color-grey-0);
    padding: 0 20px;
    width: max-content;
    height: 40px;
  }
`