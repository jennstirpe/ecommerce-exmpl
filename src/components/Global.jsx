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
        padding: 1rem;
        border-radius: 1.75rem;
        margin: .5rem;
        font-size: clamp(0.75rem, 0.6471rem + 0.4706vw, 1rem);
        background: ${({theme}) => theme.colors.accent};
        color: ${({theme}) => theme.colors.textMain};

        &:hover {
            background: ${({theme}) => theme.colors.textMain}99;
            color: white;
        }
    }

`;

export default GlobalStyles;