import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  position: relative;
  top: 0px;
  background-color: var(--color-white);
  border-bottom: 1px solid black;
  .container {
    display: flex;
    gap: 30px;
  }
  .button{
    border: 1.5px solid var(--color-grey-2);
    border-radius: 4px;
    padding: 12px 28px;
    background-color: var(--color-white);
    color: var(--color-grey-0);
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    color: var(--color-grey-0);
  }
  a {
    width: fit-content;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
  }
`;