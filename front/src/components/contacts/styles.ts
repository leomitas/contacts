import styled from "styled-components"

export const DivContactsStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    margin-top: 1.875rem;
    button {
      width: 30%;
      background-color: var(--color-white);
      color: var(--color-grey-0);
      padding: 0 1.25rem;
      width: max-content;
      height: 2.5rem;
      border-radius: 0.5rem;
    }
    ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4.5%;
        margin: 0 auto;
        @media (max-width: 700px) {
            flex-direction: row;
            overflow-x: scroll;
            flex-wrap: nowrap;
            justify-content: flex-start;
            padding: 0 20px;
        }
    }
    li {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--color-grey-0);
        border-radius: 0.3125rem;
        width: 18.75rem;
        margin-bottom: 3.125rem;
        gap: 1.25rem;
        padding: 1.5rem;
        min-width: 300px;
        p {
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            width: max-content;
            color: var(--color-grey-300);
        }
        button {
            background-color: var(--color-white);
            color: var(--color-grey-0);
            padding: 0 20px;
            width: max-content;
            height: 40px;
            border-radius: 8px;
        }
    }
`