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

    .link, .global-btn {
        border: none;
        text-decoration: none;
        transition: ${({theme}) => theme.transition};
        font-size: 1rem;
        text-transform: uppercase;
        font-family: ${({theme}) => theme.fonts.body};

        &:hover {
            cursor: pointer;
        }
    }

    .link {
        background: none;
        margin: .25rem;
        color: ${({theme}) => theme.colors.accent};
        
        svg {
            transition: ${({theme}) => theme.transition};
        }

        &:hover {
            color: ${({theme}) => theme.colors.textMain};

            svg {
                stroke ${({theme}) => theme.colors.textMain};
            }
        }
    }

    .global-btn {
        background: ${({theme}) => theme.colors.accent};
        color: ${({theme}) => theme.colors.textMain};
        padding: .75rem;
        border-radius: 1.5rem;
        margin: .5rem;
        border: 2px solid ${({theme}) => theme.colors.accent};
        box-shadow: 0 0 1rem #00000025;

        &:hover {
            background: ${({theme}) => theme.colors.textMain};
            color: ${({theme}) => theme.colors.accent};
        }
    }
`;

export default GlobalStyles;