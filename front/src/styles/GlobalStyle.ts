import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-brand: #4529E6;

        --color-grey-0: #0B0D0D;
        --color-grey-1: #212529;
        --color-grey-2: #495057;
        --color-grey-3: #F8F9FA;
        --color-white: #ffffff;
        
        --color-alert: #CD2B31;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }
    button {
        cursor: pointer;
    }
`