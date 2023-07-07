import { styled } from "styled-components";

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 0;
  label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
  }
  input {
    width: 100%;
    border: 1.5px solid var(--color-grey-3);
    border-radius: 0.25rem;
    padding: 1rem 1.5rem;
  }
  small {
    color: var(--color-alert);
  }
`;