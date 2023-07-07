import { styled } from "styled-components";

export const LoginStyled = styled.div`
  background-color: var(--color-grey-3);
  width: 100vw;
  height: 100vh;
  main {    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    gap: 2rem;
    background-color: var(--color-white);
    padding: 40px;
    width: 600px;
    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
      .div-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        div {
          display: flex;
          flex-direction: column;
          gap: 0.5625rem;
            p {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 500;
              font-size: 0.875rem;
              line-height: 1.5rem;
              color: var(--color-grey-2);
              text-align: left;
              width: 100%;
              cursor: pointer;
            }
        }
      }
    }
    button {
      height: 3rem;
      padding: 0.75rem 1.75rem;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 0rem;
      border-radius: 0.25rem;
      width: 100%;
    }
    .button-brand {
      background-color: var(--color-brand);
      color: var(--color-white);
      border: 1.5px solid var(--color-brand);
    }
    .button-white {
      background-color: var(--color-white);
      color: var(--color-grey-0);
      border: 1.5px solid var(--color-grey-0);
    }
    a {
      width: 100%;
    }
    @media (max-width: 938px) {
      width: 70%;
      max-width: 600px;
    }
  }
`