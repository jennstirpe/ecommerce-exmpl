import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        color: ${({theme}) => theme.colors.textMain};
    }

    footer {
    }

    button {
        &:hover {
            cursor: pointer;
        }
    }
`;

export default GlobalStyles;