import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        color: ${({theme}) => theme.colors.textMain};
        background: ${({theme}) => theme.colors.bgMain}75;
        letter-spacing: 1px;
        font-family: ${({theme}) => theme.fonts.body};

        h1, h2, h3, h4, h5, h6 {
            font-family: ${({theme}) => theme.fonts.headers};
        }
    }

    button {
        &:hover {
            cursor: pointer;
        }
    }
`;

export default GlobalStyles;